// components/ui/theme-sidebar.tsx
"use client";

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
import { useTheme } from "@/components/theme-provider";
import { Paintbrush, Sun, MoonStar } from "lucide-react";

export function ThemeSidebar({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

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
                onClick={() => setTheme("default")}
                isActive={theme === "default"}
                tooltip="Tema Padrão"
              >
                <Sun className="w-4 h-4" />
                <span>Padrão</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setTheme("theme-starry-night")}
                isActive={theme === "theme-starry-night"}
                tooltip="Tema Noite Estrelada"
              >
                <MoonStar className="w-4 h-4" />
                <span>Noite Estrelada</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {/* Adicione novos temas aqui, seguindo o mesmo padrão */}
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
