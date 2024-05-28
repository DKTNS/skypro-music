import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["cyrillic"] }); //заменили latin на cyrillic. заменили Inter на Montserrat

export const metadata: Metadata = {
  title: "Service music world",
  description: "Проект музыкального плей-листа",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
