'use client'

import Navbar from "@/components/Navbar";
import Tile from "@/components/Tile";
import getLocale from "@/config/data";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { AnchorBack, LoginButton, LoginContainer, LoginContent, LoginFooterContainer, LoginInnerContent, LoginTitle } from "./styles";
import { GhostAsset, GhostAssetContainer } from "../styles";
import TextBox from "@/components/TextBox";
import PasswordBox from "@/components/PasswordBox";
import { LoadingContext } from "@/contexts/LoadingContext";
import authorization, { verifyToken } from "@/service/authorization";
import { redirect } from "next/navigation";

export default function Login() {

  const { setLoading } = useContext(LoadingContext);
  const { locale } = useContext(ThemeContext);
  const localeData = getLocale(locale);
  const title = 'login';

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);

  useEffect(() => {
    if (verifyToken(localStorage.getItem('access-token') ?? '')) redirect('/');
  }, []);

  const authentication = useCallback(() => {
    setLoading(true);
    if (!email) setEmailError(true);
    else setEmailError(false);

    if (!password) setPasswordError(true);
    else setPasswordError(false);

    authorization(email, password).then(token => {
      if (token) {
        localStorage.setItem('access-token', token);
      }
      setLoading(false);
    });
  }, [email, password, setLoading]);

  return (
    <Tile maxWidth={1440} title={`krauzy • ${title}`}>
      <Navbar />
      <LoginContainer>
        <LoginContent onSubmit={(e) => {
          e.preventDefault();
          authentication();
        }}>
          <LoginTitle>LOGIN</LoginTitle>
          <LoginInnerContent>
            <TextBox 
              placeholder={localeData.login.emailPlaceholder}
              label={localeData.login.email}
              value={email}
              setValue={setEmail}
              error={emailError ? localeData.login.emailError : undefined}
            />
            <PasswordBox 
              placeholder={localeData.login.passwordPlaceholder}
              label={localeData.login.password}
              value={password}
              setValue={setPassword}
              error={passwordError ? localeData.login.passwordError : undefined}
            />
          </LoginInnerContent>
          <LoginFooterContainer>
            <LoginButton onClick={(e) => authentication()}>{localeData.login.loginButton}</LoginButton>
            <AnchorBack href={'/'}>{localeData.login.back}</AnchorBack>
          </LoginFooterContainer>
        </LoginContent>
        <GhostAssetContainer>
          <GhostAsset src={'/assets/ghost.svg'} />
        </GhostAssetContainer>
      </LoginContainer>
    </Tile>
  )
}
