import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Exo 2 is not a variable font, so weights must be explicitly listed
const exo2 = Exo_2({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://animyst.vexloft.com"),
  title: "AniMyst — Anime Character Guessing Game",
  description:
    "Guess anime characters from blurred images across 35 series, solve a new anime word puzzle every day, and collect 700 cards. Free on iOS.",
  keywords: [
    "anime",
    "guessing game",
    "iOS",
    "card collection",
    "daily challenge",
    "anime quiz",
    "anime character quiz",
    "guess the anime character",
    "anime word game",
  ],
  openGraph: {
    title: "AniMyst — Anime Character Guessing Game",
    description:
      "Guess anime characters from blurred images across 35 series, solve the daily anime word puzzle, and collect 700 cards.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "AniMyst",
    images: [{ url: "/hero/poster.jpg", width: 1600, height: 894, alt: "AniMyst" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AniMyst — Anime Character Guessing Game",
    description:
      "Guess anime characters from blurred images across 35 series and collect 700 cards.",
    images: ["/hero/poster.jpg"],
  },
};


// Yapılandırılmış veri: arama motorları ve yapay zekâ aramaları uygulamayı doğru tanısın.
// Puan alanı yok: App Store'da henüz gösterilecek kadar puan birikmedi.
const APP_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'AniMyst: Anime Character Quiz',
  operatingSystem: 'iOS',
  applicationCategory: 'GameApplication',
  description:
    'Free iOS anime character quiz: guess blurred anime characters from 35 series, solve a daily anime word puzzle and collect 700 cards.',
  url: 'https://animyst.vexloft.com',
  downloadUrl: 'https://apps.apple.com/app/id6786710063',
  inLanguage: ['en', 'tr', 'es', 'pt', 'de', 'ru'],
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${exo2.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0820] text-[#f1f5f9]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(APP_JSON_LD) }}
        />
        {children}
        {/* Cookieless visit counting on Vexloft's own Umami server. */}
        <Script
          src="https://analiz.vexloft.com/script.js"
          data-website-id="4769df00-5f1b-4ca1-9e42-ec9eba0293c8"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
