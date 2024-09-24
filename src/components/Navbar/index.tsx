import { useContext } from "react";
import GhostMotion from "../GhostMotion";
import { LocaleSwitcher, LoginButton, Logo, LogoTitle, MenuItem, MenuList, NavContainer, ThemeSwitcher, WidgetSettings } from "./styles";
import { ThemeContext } from "@/contexts/ThemeContext";
import getLocale from "@/config/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

  const { locale, switchLocale, actualTheme, switchMode } = useContext(ThemeContext);
  const localeData = getLocale(locale);

  return (
    <NavContainer>
      <Logo>
        <GhostMotion color="secondary" />
        <LogoTitle>{localeData.title}</LogoTitle>
      </Logo>
      <MenuList>
        <MenuItem href={'/'}>{localeData.menu.home}</MenuItem>
        <MenuItem href={'/about'}>{localeData.menu.about}</MenuItem>
        <MenuItem href={'/appplication'}>{localeData.menu.applications}</MenuItem>
        <MenuItem href={'/tools'}>{localeData.menu.tools}</MenuItem>
        <MenuItem href={'/games'}>{localeData.menu.games}</MenuItem>
      </MenuList>
      <WidgetSettings>
        <ThemeSwitcher onClick={() => switchMode(actualTheme === 'light' ? 'dark' : 'light')}>
          <FontAwesomeIcon icon={actualTheme === 'light' ? faMoon : faSun} />
        </ThemeSwitcher>
        <LocaleSwitcher onClick={() => switchLocale(locale === 'pt' ? 'en' : 'pt')}>{locale}</LocaleSwitcher>
        <LoginButton>login</LoginButton>
      </WidgetSettings>
    </NavContainer>
  )
}
