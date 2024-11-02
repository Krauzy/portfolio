/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext, ReactNode, useState } from "react"

interface ThemeContextProperties {
  switchMode: (value: 'light' | 'dark') => void;
  actualTheme: string;
  switchLocale: (value: 'pt' | 'en') => void;
  locale: string;
}

export const ThemeContext = createContext<ThemeContextProperties>({
  switchMode: (value) => {},
  actualTheme: '',
  switchLocale: (value) => {},
  locale: ''
});

interface ThemeContextProviderProperties {
  children: ReactNode
}

export default function ThemeContextProvider({ children } : Readonly<ThemeContextProviderProperties>) {
  const themeStorage = localStorage.getItem('theme-context');
  const localeStorage = localStorage.getItem('locale-context');
  let selectedTheme = '';
  let selectedLocale = '';

  if (themeStorage) {
    selectedTheme = themeStorage;
  } else {
    selectedTheme = 'dark';
  }

  if (localeStorage) {
    selectedLocale = localeStorage;
  } else {
    selectedLocale = 'pt';
  }

  const [themeMode, setThemeMode] = useState<string>(selectedTheme);
  const [locale, setLocale] = useState<string>(selectedLocale);

  const switchLocale = (value: string) => {
    localStorage.setItem('locale-context', value);
    setLocale(value);
  }

  const switchMode = (value: string) => {
    localStorage.setItem('theme-context', value);
    setThemeMode(value);
  }

  return (
    <ThemeContext.Provider value={{ switchMode: switchMode, actualTheme: themeMode, switchLocale: switchLocale, locale: locale }}>
      {children}
    </ThemeContext.Provider>
  );
}
