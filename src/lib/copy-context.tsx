"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { copyEng, copyIta } from "@/lib/data";

type Language = "ita" | "eng";

type CopyContextValue = {
  language: Language;
  copy: typeof copyIta;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const CopyContext = createContext<CopyContextValue | null>(null);

export function CopyProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ita");

  const copy = useMemo(() => (language === "ita" ? copyIta : copyEng), [language]);
  const toggleLanguage = () => setLanguage((prev) => (prev === "ita" ? "eng" : "ita"));

  const value = useMemo(
    () => ({ language, copy, setLanguage, toggleLanguage }),
    [language, copy]
  );

  return <CopyContext.Provider value={value}>{children}</CopyContext.Provider>;
}

export function useCopyContext() {
  const ctx = useContext(CopyContext);
  if (!ctx) {
    throw new Error("useCopyContext must be used within CopyProvider");
  }
  return ctx;
}

export function useCopy() {
  return useCopyContext().copy;
}
