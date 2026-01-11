import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FadeFactory | Premium Barbershop in Stoney Creek",
  description: "Experience premium haircuts and grooming at FadeFactory. Expert barbers specializing in fades, beard trims, and hot towel shaves. Book your appointment today.",
  keywords: ["barbershop", "haircuts", "fades", "beard trim", "Stoney Creek", "Hamilton", "mens grooming"],
  openGraph: {
    title: "FadeFactory | Premium Barbershop",
    description: "Where style meets precision. Premium cuts and styles in Stoney Creek.",
    url: "https://fadefactory.ca",
    siteName: "FadeFactory",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-blue-500/30 selection:text-blue-200`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
