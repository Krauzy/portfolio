"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { content, defaultLocale, localeLabels, type Locale, type SiteContent } from "@/data/i18n";

type LanguageContextValue = {
  content: SiteContent;
  locale: Locale;
  nextLocale: Locale;
  nextLocaleLabel: string;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("portfolio-locale");

    if (storedLocale === "pt" || storedLocale === "en") {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => {
    const nextLocale: Locale = locale === "pt" ? "en" : "pt";

    return {
      content: content[locale],
      locale,
      nextLocale,
      nextLocaleLabel: localeLabels[nextLocale],
      toggleLocale: () => setLocale(nextLocale)
    };
  }, [locale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useI18n must be used inside LanguageProvider");
  }

  return context;
}
