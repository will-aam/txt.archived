// components/ui/theme-sidebar.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroupLabel,
  SidebarInset,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import {
  Paintbrush,
  Sun,
  MoonStar,
  Zap,
  Leaf,
  Minus,
  Monitor,
  Palette,
  Laptop,
} from "lucide-react";

export function ThemeSidebar({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  const currentTheme = isMounted ? theme : "default";

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <SidebarGroupLabel>Temas</SidebarGroupLabel>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleThemeChange("default")}
                isActive={currentTheme === "default"}
                tooltip="Tema Padrão"
              >
                <Sun className="w-4 h-4" />
                <span>Padrão</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleThemeChange("theme-starry-night")}
                isActive={currentTheme === "theme-starry-night"}
                tooltip="Tema Noite Estrelada"
              >
                <MoonStar className="w-4 h-4" />
                <span>Noite Estrelada</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleThemeChange("theme-futurism")}
                isActive={currentTheme === "theme-futurism"}
                tooltip="Tema Futurismo"
              >
                <Zap className="w-4 h-4" />
                <span>Futurismo</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleThemeChange("theme-leaves-nature")}
                isActive={currentTheme === "theme-leaves-nature"}
                tooltip="Tema Folhas da Natureza"
              >
                <Leaf className="w-4 h-4" />
                <span>Folhas da Natureza</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleThemeChange("theme-minimal-mono")}
                isActive={currentTheme === "theme-minimal-mono"}
                tooltip="Tema Minimalista Mono"
              >
                <Minus className="w-4 h-4" />
                <span>Minimalista Mono</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleThemeChange("theme-retro")}
                isActive={currentTheme === "theme-retro"}
                tooltip="Tema Retrô"
              >
                <Monitor className="w-4 h-4" />
                <span>Retrô</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleThemeChange("theme-soft-watercolor")}
                isActive={currentTheme === "theme-soft-watercolor"}
                tooltip="Tema Aquarela Suave"
              >
                <Palette className="w-4 h-4" />
                <span>Aquarela Suave</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleThemeChange("system")}
                isActive={currentTheme === "system"}
                tooltip="Tema do Sistema"
              >
                <Laptop className="w-4 h-4" />
                <span>Sistema</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1">
            <Paintbrush className="w-4 h-4" />
          </SidebarTrigger>
          <div className="flex items-center gap-2">
            <Paintbrush className="w-4 h-4" />
            <span>Temas</span>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </>
  );
}
