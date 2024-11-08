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
  const selectedTheme = 'dark';
  const selectedLocale = 'pt';

  const [themeMode, setThemeMode] = useState<string>(selectedTheme);
  const [locale, setLocale] = useState<string>(selectedLocale);

  return (
    <ThemeContext.Provider value={{ switchMode: setThemeMode, actualTheme: themeMode, switchLocale: setLocale, locale: locale }}>
      {children}
    </ThemeContext.Provider>
  );
}
