import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Language } from "../i18n/translations";
import { getTranslation } from "../i18n/translations";

export type { Language };

interface LangContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LangContextProps | undefined>(undefined);

const getStoredLanguage = (): Language => {
  const stored = localStorage.getItem("language");
  return stored === "en" ? "en" : "tr";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getStoredLanguage);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.title = getTranslation(language).pageTitle;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

export const useTranslation = () => {
  const { language } = useLanguage();
  return getTranslation(language);
};
