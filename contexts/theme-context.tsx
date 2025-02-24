"use client";

import React, { createContext, useContext, useState } from "react";
import { useTheme } from "next-themes";

type ThemeContextType = {
  isCyberpunk: boolean;
  toggleCyberpunk: () => void;
  disableCyberpunk: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isCyberpunk: false,
  toggleCyberpunk: () => {},
  disableCyberpunk: () => {},
});

export function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCyberpunk, setIsCyberpunk] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleCyberpunk = () => {
    setIsCyberpunk(!isCyberpunk);
    document.documentElement.classList.toggle("cyberpunk-theme");
  };

  const disableCyberpunk = () => {
    if (isCyberpunk) {
      setIsCyberpunk(false);
      document.documentElement.classList.remove("cyberpunk-theme");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ isCyberpunk, toggleCyberpunk, disableCyberpunk }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useCustomTheme = () => useContext(ThemeContext);
