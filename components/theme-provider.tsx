"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Adicione os nomes de classe de todos os seus temas aqui
type Theme = "default" | "theme-starry-night";

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

    // Limpa as classes de tema antigas antes de adicionar a nova
    root.classList.remove("default", "theme-starry-night");

    // Adiciona a classe do tema atual ao elemento <html>
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

// Hook para usar o tema em outros componentes (como o sidebar)
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
