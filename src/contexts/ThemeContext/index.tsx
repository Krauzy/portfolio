/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext, ReactNode, useCallback, useEffect, useState } from "react"

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
  const [themeMode, setThemeMode] = useState<string>('dark');
  const [locale, setLocale] = useState<string>('pt');

  useEffect(() => {
    if (localStorage) {
      setThemeMode(localStorage.getItem('theme-mode') ?? 'dark');
      setLocale(localStorage.getItem('locale') ?? 'pt')
    }
  }, []);

  const changeTheme = useCallback((theme: string) => {
    if (localStorage) {
      localStorage.setItem('theme-mode', theme);
      setThemeMode(theme);
    }
  }, []);

  const changeLocale = useCallback((lang: string) => {
    if (localStorage) {
      localStorage.setItem('locale', lang);
      setLocale(lang);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ switchMode: changeTheme, actualTheme: themeMode, switchLocale: changeLocale, locale: locale }}>
      {children}
    </ThemeContext.Provider>
  );
}
