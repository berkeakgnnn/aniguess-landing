import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

// Exo 2 is not a variable font, so weights must be explicitly listed
const exo2 = Exo_2({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "AniMyst — Anime Character Guessing Game",
  description:
    "Guess anime characters from blurred images across 22 series. Collect 440 cards, open packs, and challenge yourself daily. Available on iOS.",
  keywords: [
    "anime",
    "guessing game",
    "iOS",
    "card collection",
    "daily challenge",
    "anime quiz",
  ],
  openGraph: {
    title: "AniMyst — Anime Character Guessing Game",
    description:
      "Guess anime characters from blurred images across 22 series. Collect 440 cards, open packs, and challenge yourself daily.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AniMyst — Anime Character Guessing Game",
    description:
      "Guess anime characters from blurred images across 22 series. Collect 440 cards and challenge yourself daily.",
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
      className={`${exo2.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0820] text-[#f1f5f9]">
        {children}
      </body>
    </html>
  );
}
