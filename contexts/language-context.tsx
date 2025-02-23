"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

type LanguageContextType = {
  currentLang: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLang: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState("en");
  const router = useRouter();

  const setLanguage = (lang: string) => {
    setCurrentLang(lang);
    router.refresh();
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
