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
} from "@/components/ui/sidebar";
import { useTheme } from "@/components/theme-provider";
import { Paintbrush, Sun, MoonStar } from "lucide-react";

export function ThemeSidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Botão que aparece no mobile e no desktop quando a sidebar está fechada */}
      <div className="fixed top-4 left-4 z-50">
        <SidebarTrigger>
          <Paintbrush className="w-4 h-4" />
        </SidebarTrigger>
      </div>

      <Sidebar>
        <SidebarContent>
          <SidebarHeader>
            <SidebarGroupLabel>Temas</SidebarGroupLabel>
          </SidebarHeader>
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
    </>
  );
}
