import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
