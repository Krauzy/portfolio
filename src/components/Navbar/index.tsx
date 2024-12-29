import { useContext } from "react";
import GhostMotion from "../GhostMotion";
import { LocaleSwitcher, Logo, LogoTitle, MenuItem, MenuList, NavContainer, ResponsiveMenu, ResponsiveMenuContent, ResponsiveTrigger, ThemeSwitcher, WidgetSettings } from "./styles";
import { ThemeContext } from "@/contexts/ThemeContext";
import getLocale from "@/config/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Sheet } from "../ui/sheet";

interface NavbarProperties {
  selected?: 'home' | 'about' | 'tools' | 'articles'
}

export default function Navbar({
  selected
}: Readonly<NavbarProperties>) {

  const { locale, switchLocale, actualTheme, switchMode } = useContext(ThemeContext);
  const localeData = getLocale(locale);

  return (
    <NavContainer>
      <Logo>
        <GhostMotion color="secondary" />
        <LogoTitle>{localeData.title}</LogoTitle>
      </Logo>
      <MenuList off>
        <MenuItem href={'/'} selected={selected === 'home'}>{localeData.menu.home}</MenuItem>
        <MenuItem href={'/about'} selected={selected === 'about'}>{localeData.menu.about}</MenuItem>
        <MenuItem href={'/articles'} selected={selected === 'articles'}>{localeData.menu.articles}</MenuItem>
        <MenuItem href={'/tools'} selected={selected === 'tools'}>{localeData.menu.tools}</MenuItem>
      </MenuList>
      <ResponsiveMenu>
        <Sheet>
          <ResponsiveTrigger>
            <FontAwesomeIcon icon={faBars} />
          </ResponsiveTrigger>
          <ResponsiveMenuContent side={'top'}>
            <WidgetSettings>
              <ThemeSwitcher onClick={() => switchMode(actualTheme === 'light' ? 'dark' : 'light')}>
                <FontAwesomeIcon icon={actualTheme === 'light' ? faMoon : faSun} />
              </ThemeSwitcher>
              <LocaleSwitcher onClick={() => switchLocale(locale === 'pt' ? 'en' : 'pt')}>{locale}</LocaleSwitcher>
            </WidgetSettings>
            <MenuList>
              <MenuItem href={'/'}>{localeData.menu.home}</MenuItem>
              <MenuItem href={'/about'}>{localeData.menu.about}</MenuItem>
              <MenuItem href={'/articles'}>{localeData.menu.articles}</MenuItem>
              <MenuItem href={'/tools'}>{localeData.menu.tools}</MenuItem>
            </MenuList>
          </ResponsiveMenuContent>
        </Sheet>
      </ResponsiveMenu>
      <WidgetSettings off>
        <ThemeSwitcher onClick={() => switchMode(actualTheme === 'light' ? 'dark' : 'light')}>
          <FontAwesomeIcon icon={actualTheme === 'light' ? faMoon : faSun} />
        </ThemeSwitcher>
        <LocaleSwitcher onClick={() => switchLocale(locale === 'pt' ? 'en' : 'pt')}>{locale}</LocaleSwitcher>
      </WidgetSettings>
    </NavContainer>
  )
}
