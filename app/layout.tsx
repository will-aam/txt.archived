// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Crimson_Text } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = GeistSans;
const geistMono = GeistMono;

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Blog de Poesia",
  description:
    "Um espaço dedicado às palavras que nascem do silêncio e se transformam em versos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${crimsonText.variable}`}
    >
      <body className={geistSans.className}>
        <ThemeProvider defaultTheme="default">
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
