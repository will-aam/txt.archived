import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Crimson_Text } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Blog de Poesia",
  description:
    "Um espaço dedicado às palavras que nascem do silêncio e se transformam em versos",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-serif: ${crimsonText.variable};
}
        `}</style>
      </head>
      <body className={`${crimsonText.variable} antialiased`}>{children}</body>
    </html>
  );
}
