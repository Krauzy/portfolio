'use client'

import { useContext, useEffect, useState } from "react";
import { AdminContainer, AdminContent, AdminSubtitle, AdminTitle, AdminValuedContainer, AdminValuedRow, LabelSide, ValueSide } from "./styles";
import { ThemeContext } from "@/contexts/ThemeContext";
import getLocale from "@/config/data";

interface NetworkInformation {
  effectiveType?: string;
}

export default function Admin() {
  const { locale } = useContext(ThemeContext);
  const localeData = getLocale(locale);

  const [ip, setIp] = useState<string | undefined>();
  const [browser, setBrowser] = useState<string | undefined>();
  const [browserVersion, setBrowserVersion] = useState<string | undefined>();
  const [os, setOs] = useState<string | undefined>();
  const [network, setNetwork] = useState<string | undefined>();
  const [timezone, setTimezone] = useState<string | undefined>();
  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [browserResolution, setBrowserResolution] = useState<string | undefined>();
  const [screenResolution, setScreenResolution] = useState<string | undefined>();
  const [language, setLanguage] = useState<string | undefined>();
  const [cookies, setCookies] = useState<string | undefined>();
  const [hardware, setHardware] = useState<string | undefined>();

  useEffect(() => {
    if (navigator) {
      if (ip === undefined) {
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          setIp(data.ip);
        })
        .catch(error => console.error('Erro ao pegar o IP:', error));
      }

      const userAgent = navigator.userAgent;
  
      if (browser === undefined || browserVersion === undefined) {
        if (userAgent.indexOf("Chrome") > -1) {
          setBrowser('Google Chrome');
          const match = userAgent.match(/Chrome\/(\d+)/);
          if (match) {
            setBrowserVersion(match[1]);
          }
        } else if (userAgent.indexOf("Firefox") > -1) {
          setBrowser('Mozilla Firefox');
          const match = userAgent.match(/Firefox\/(\d+)/);
          if (match) {
            setBrowserVersion(match[1]);
          }
        } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
          setBrowser('Safari');
          const match = userAgent.match(/Version\/(\d+)/);
          if (match) {
            setBrowserVersion(match[1]);
          }
        } else if (userAgent.indexOf("Edge") > -1) {
          setBrowser('Microsoft Edge');
          const match = userAgent.match(/Edge\/(\d+)/);
          if (match) {
            setBrowserVersion(match[1]);
          }
        } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
          setBrowser('Opera');
          const match = userAgent.match(/OPR\/(\d+)/);
          if (match) {
            setBrowserVersion(match[1]);
          }
        } else if (userAgent.indexOf("MSIE") > -1) {
          setBrowser('Internet Explorer');
          const match = userAgent.match(/MSIE (\d+)/);
          if (match) {
            setBrowserVersion(match[1]);
          }
        } else {
          setBrowser('-');
          setBrowserVersion('-');
        }
      }

      if (os === undefined) {    
        if (userAgent.indexOf('Windows NT 10.0') !== -1) setOs('Windows 10');
        if (userAgent.indexOf('Windows NT 6.3') !== -1) setOs('Windows 8.1');
        if (userAgent.indexOf('Windows NT 6.2') !== -1) setOs('Windows 8');
        if (userAgent.indexOf('Windows NT 6.1') !== -1) setOs('Windows 7');
        if (userAgent.indexOf('Windows NT 6.0') !== -1) setOs('Windows Vista');
        if (userAgent.indexOf('Windows NT 5.1') !== -1) setOs('Windows XP');
        if (userAgent.indexOf('Mac OS X') !== -1) setOs('macOS');
        if (userAgent.indexOf('Linux') !== -1) setOs('Linux');
        if (/Android/.test(userAgent)) setOs('Android');
        if (/iPhone|iPad|iPod/.test(userAgent)) setOs('iOS');
      }

      if (network === undefined) {
        const nav = navigator as any;
    
        if ('connection' in nav) {
          const connection: NetworkInformation = nav.connection || nav.mozConnection || nav.webkitConnection;
          if (connection && connection.effectiveType) {
            setNetwork(connection.effectiveType);
          }
        }
        setNetwork('-');
      }

      if (timezone === undefined) {
        setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            setLongitude(position.coords.longitude);
            setLatitude(position.coords.latitude);
          },
          (error: GeolocationPositionError) => {
            console.error(`Error getting location: ${error.message}`);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }

      if (browserResolution === undefined) {
        setBrowserResolution(`${window.innerWidth}px X ${window.innerHeight}px`)
      }

      if (screenResolution === undefined) {
        setScreenResolution(`${window.screen.width}px X ${window.screen.height}px`);
      }

      if (language ===  undefined) {
        setLanguage(navigator.language);
      }

      if (cookies === undefined) {
        setCookies(document.cookie === '' ? '-' : document.cookie.split(';').length.toString());
      }

      if (hardware === undefined) {
        setHardware(navigator.hardwareConcurrency.toString());
      }
    }
  }, [browser, browserResolution, browserVersion, cookies, hardware, ip, language, network, os, screenResolution, timezone]);

  return (
    <AdminContainer>
      <AdminContent>
        <AdminTitle>{localeData.admin.title}</AdminTitle>
        <AdminSubtitle>{localeData.admin.subtitle}</AdminSubtitle>
        <AdminValuedContainer>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.ip}</LabelSide>
            <ValueSide>{ip}</ValueSide>
          </AdminValuedRow>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.browser}</LabelSide>
            <ValueSide>{browser}</ValueSide>
          </AdminValuedRow>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.browserVersion}</LabelSide>
            <ValueSide>v{browserVersion}</ValueSide>
          </AdminValuedRow>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.os}</LabelSide>
            <ValueSide>{os}</ValueSide>
          </AdminValuedRow>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.networkProvider}</LabelSide>
            <ValueSide>{network}</ValueSide>
          </AdminValuedRow>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.timeZone}</LabelSide>
            <ValueSide>{timezone}</ValueSide>
          </AdminValuedRow>
          {latitude && longitude &&
          <AdminValuedRow>
            <LabelSide>{localeData.admin.location}</LabelSide>
            <ValueSide href={`https://www.google.com.br/maps/@${latitude},${longitude},16z`} target="_blank">{'Map'}</ValueSide>
          </AdminValuedRow>}
          <AdminValuedRow>
            <LabelSide>{localeData.admin.resolution}</LabelSide>
            <ValueSide>{browserResolution}</ValueSide>
          </AdminValuedRow>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.screen}</LabelSide>
            <ValueSide>{screenResolution}</ValueSide>
          </AdminValuedRow>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.language}</LabelSide>
            <ValueSide>{language}</ValueSide>
          </AdminValuedRow>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.cookies}</LabelSide>
            <ValueSide>{cookies}</ValueSide>
          </AdminValuedRow>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.processors}</LabelSide>
            <ValueSide>{hardware}</ValueSide>
          </AdminValuedRow>
          <AdminValuedRow>
            <LabelSide>{localeData.admin.javascript}</LabelSide>
            <ValueSide>{'✅'}</ValueSide>
          </AdminValuedRow>
        </AdminValuedContainer>

      </AdminContent>
    </AdminContainer>
  )
}
