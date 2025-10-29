"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
type Theme =
  | "default"
  | "theme-starry-night"
  | "theme-futurism"
  | "theme-leaves-nature"
  | "theme-minimal-mono"
  | "theme-retro"
  | "theme-soft-watercolor";

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  defaultTheme = "default",
  ...props
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("default", "theme-starry-night");

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
