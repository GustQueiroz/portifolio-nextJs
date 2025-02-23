"use client";

import { useLanguage } from "@/contexts/language-context";
import en from "@/messages/en.json";
import pt from "@/messages/pt.json";
import es from "@/messages/es.json";
import fr from "@/messages/fr.json";
import it from "@/messages/it.json";

const translations = {
  en,
  pt,
  es,
  fr,
  it,
};

export function useTranslations() {
  const { currentLang } = useLanguage();

  const t = (key: string) => {
    const keys = key.split(".");
    let value =
      translations[currentLang as keyof typeof translations] || translations.en; // Fallback para inglês

    for (const k of keys) {
      value = value?.[k as keyof typeof value];
    }

    return value as string;
  };

  return { t };
}
