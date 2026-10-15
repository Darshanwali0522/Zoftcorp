import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#01153B",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zoftcorp.com"),
  alternates: {
    canonical: "./",
  },
  title: "ZOFT Corp | Enterprise Technology & Database Advisory",
  description:
    "ZOFT Corp delivers enterprise-grade cloud architecture, high-availability database performance tuning, and technical advisory.",
  keywords: [
    "ZOFT Corp",
    "Cloud Advisory",
    "Database Tuning",
    "Enterprise Systems",
    "ZoftStudio",
  ],
  authors: [{ name: "ZOFT Corp" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zoftcorp.com",
    siteName: "ZOFT Corp",
    title: "ZOFT Corp | Enterprise Technology & Database Advisory",
    description:
      "ZOFT Corp delivers enterprise-grade cloud architecture, high-availability database performance tuning, and technical advisory.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZOFT Corp | Enterprise Technology & Database Advisory",
    description:
      "ZOFT Corp delivers enterprise-grade cloud architecture, high-availability database performance tuning, and technical advisory.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

