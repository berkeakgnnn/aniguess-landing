import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — AniMyst",
  description: "Get help with AniMyst — Anime Character Guessing Game",
};

const CONTACT_EMAIL = "support@animyst.app";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I play AniMyst?",
    answer:
      "Select an anime mode (or Daily Challenge) from the home screen. You will be shown a blurred image of an anime character. Choose the correct character name from the options provided. The faster you guess — and the less you unblur — the more runes you earn.",
  },
  {
    question: "What is the Daily Challenge?",
    answer:
      "The Daily Challenge presents a new anime character pair every day at midnight. All players around the world get the same challenge, so you can compare how you did with friends. Completing the daily challenge rewards bonus runes and maintains your streak.",
  },
  {
    question: "How do I open card packs?",
    answer:
      "Earn runes by guessing characters correctly. Once you have enough runes, head to the Pack Shop (the card icon in the navigation bar) and tap a pack to open it. Each pack contains 5 cards with a chance to pull Rare or Legendary rarity cards.",
  },
  {
    question: "I lost my progress after reinstalling. Can I get it back?",
    answer:
      "Unfortunately, game progress (cards, runes, XP) is stored locally on your device and is not backed up to any server. If you delete the app or restore your device without a local backup, progress cannot be recovered. We recommend keeping a device backup via iCloud or iTunes to preserve your save data.",
  },
  {
    question: "How do I turn off ads or personalised advertising?",
    answer:
      "You can opt out of personalised ads at any time by going to your iPhone Settings → Privacy & Security → Tracking and disabling tracking for AniMyst. You will continue to see ads, but they will not be personalised based on your behaviour. We do not currently offer an ad-free paid tier.",
  },
  {
    question: "Which anime series are included?",
    answer:
      "AniMyst currently features 30 anime series including Naruto, One Piece, Demon Slayer, Attack on Titan, Jujutsu Kaisen, My Hero Academia, Bleach, Death Note, Fullmetal Alchemist, Hunter x Hunter, Tokyo Ghoul, Sword Art Online, Re:Zero, Black Clover, Chainsaw Man, Solo Leveling, Pokémon, Blue Lock, Fairy Tail, Gintama, Kuroko's Basketball, One Punch Man, Haikyuu, Vinland Saga, Frieren, Mob Psycho 100, Code Geass, Spy x Family, Oshi no Ko, and Dandadan. More series will be added in future updates.",
  },
];

function FaqCard({ item, index }: { item: FaqItem; index: number }): React.ReactElement {
  const delay = `delay-${Math.min((index + 1) * 100, 700)}`;
  return (
    <div
      className={`animate-fade-up ${delay} rounded-2xl p-7`}
      style={{ background: "#110c22", border: "1px solid #1e1b2e" }}
    >
      <h3
        className="mb-3 text-lg font-bold leading-snug"
        style={{ color: "#f1f5f9" }}
      >
        {item.question}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
        {item.answer}
      </p>
    </div>
  );
}

export default function SupportPage(): React.ReactElement {
  return (
    <div className="min-h-screen" style={{ background: "#0d0820" }}>
      {/* Header */}
      <header
        className="border-b px-6 py-5"
        style={{ borderColor: "#1e1b2e", background: "#0a0618" }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <a
            href="/"
            className="text-xl font-black tracking-tight transition-colors hover:text-[#a78bfa]"
            style={{ color: "#f1f5f9" }}
          >
            AniMyst
          </a>
          <a
            href="/"
            className="text-sm font-medium transition-colors hover:text-[#a78bfa]"
            style={{ color: "#64748b" }}
          >
            &larr; Back to Home
          </a>
        </div>
      </header>

      {/* Hero */}
      <div
        className="px-6 py-20 text-center"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      >
        <div className="mx-auto max-w-2xl">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-widest"
            style={{ color: "#7c3aed" }}
          >
            Help Center
          </p>
          <h1
            className="mb-4 text-4xl font-black md:text-5xl"
            style={{ color: "#f1f5f9" }}
          >
            Support
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#64748b" }}>
            Find answers to common questions below, or reach out to us directly.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <main className="mx-auto max-w-4xl px-6 pb-24">
        <h2
          className="mb-8 text-2xl font-black"
          style={{ color: "#f1f5f9" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => (
            <FaqCard key={item.question} item={item} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="mt-16 rounded-2xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(139,92,246,0.08) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <h2
            className="mb-3 text-2xl font-black"
            style={{ color: "#f1f5f9" }}
          >
            Still need help?
          </h2>
          <p className="mb-6 text-base" style={{ color: "#64748b" }}>
            Our team is happy to assist. Send us an email and we will get back
            to you as soon as possible.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "#7c3aed",
              boxShadow: "0 0 24px rgba(124,58,237,0.4)",
            }}
          >
            {/* Mail icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {CONTACT_EMAIL}
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t px-6 py-8"
        style={{ borderColor: "#1e1b2e", background: "#0a0618" }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <nav className="flex gap-6">
            <a
              href="/privacy"
              className="text-sm transition-colors hover:text-[#a78bfa]"
              style={{ color: "#64748b" }}
            >
              Privacy Policy
            </a>
            <a
              href="/support"
              className="text-sm transition-colors hover:text-[#a78bfa]"
              style={{ color: "#a78bfa" }}
            >
              Support
            </a>
          </nav>
          <p className="text-xs" style={{ color: "#64748b" }}>
            &copy; 2026 AniMyst. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
