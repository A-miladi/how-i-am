"use client";

import { ThemeProvider } from "next-themes";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type SupportedLang = "en" | "fa";

type I18nContextValue = {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within Providers");
  }
  return ctx;
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<SupportedLang>("en");
  const value = useMemo(() => ({ lang, setLang }), [lang]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      html.setAttribute("lang", lang);
      html.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
      document.body.classList.toggle("rtl", lang === "fa");
    }
  }, [lang]);

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
    </ThemeProvider>
  );
}
