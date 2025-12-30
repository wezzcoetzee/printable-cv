import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wezzcoetzee.com"),
  title: {
    default: "Wesley Coetzee | Engineering Manager | Tch Lead | Software Engineer",
    template: "%s | Wesley Coetzee"
  },
  description: "Engineering Manager and Technical Lead with over 10 years of experience in software development. Specializing in crafting mission-critical systems using Azure, AWS, C#, TypeScript, and more.",
  keywords: ["Wesley Coetzee", "Software Engineer", "Engineering Manager", "Technical Lead", "Azure", "AWS", "C#", "TypeScript", "Go", "Kafka", "Software Development", "Auckland", "New Zealand"],
  authors: [{ name: "Wesley Coetzee" }],
  creator: "Wesley Coetzee",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.wezzcoetzee.com",
    title: "Wesley Coetzee | Engineering Manager | Tch Lead | Software Engineer",
    description: "Engineering Manager and Technical Lead with over 10 years of experience in software development. Specializing in crafting mission-critical systems using Azure, AWS, C#, TypeScript, and more.",
    siteName: "Wesley Coetzee - Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/15249642?v=4",
        width: 460,
        height: 460,
        alt: "Wesley Coetzee",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Wesley Coetzee | Engineering Manager | Tch Lead | Software Engineer",
    description: "Engineering Manager and Technical Lead with over 10 years of experience in software development.",
    creator: "@wezzcoetzee",
    images: ["https://avatars.githubusercontent.com/u/15249642?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-NKFR382DBD"
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-NKFR382DBD');
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
