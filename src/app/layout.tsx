import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Fade Factory - Always Fresh | Premium Barber Shop in Stoney Creek",
  description: "Experience the freshest cuts and premium barber services at Fade Factory. Located in Stoney Creek, Ontario. Expert barbers, modern techniques, classic craftsmanship. Book your appointment today!",
  keywords: "barber, haircut, fade, stoney creek, ontario, premium cuts, fresh styles, barbershop",
  authors: [{ name: "Fade Factory" }],
  openGraph: {
    title: "Fade Factory - Always Fresh",
    description: "Premium barber shop in Stoney Creek, Ontario. Always Fresh cuts and styles.",
    type: "website",
    locale: "en_CA",
    siteName: "Fade Factory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fade Factory - Always Fresh",
    description: "Premium barber shop in Stoney Creek, Ontario.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
