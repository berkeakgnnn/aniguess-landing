// AniGuess landing page — all sections in one file, CSS animations only

// ---------- Inline SVG icons ----------

function IconApple(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function IconCalendar(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="28"
      height="28"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconGrid(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="28"
      height="28"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function IconSparkles(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="28"
      height="28"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

// ---------- Section components ----------

function HeroSection(): React.ReactElement {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.18) 0%, transparent 70%), linear-gradient(180deg, #0d0820 0%, #130e28 100%)",
      }}
    >
      {/* Decorative gradient orbs */}
      <div
        className="animate-float-slow pointer-events-none absolute left-[8%] top-[18%] h-64 w-64 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="animate-float-alt pointer-events-none absolute right-[10%] top-[22%] h-48 w-48 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(20,184,166,0.55) 0%, transparent 70%)",
          filter: "blur(36px)",
        }}
        aria-hidden="true"
      />
      <div
        className="animate-float-medium pointer-events-none absolute bottom-[20%] left-[15%] h-40 w-40 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.55) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
        aria-hidden="true"
      />
      <div
        className="animate-float-slow pointer-events-none absolute bottom-[25%] right-[12%] h-56 w-56 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)",
          filter: "blur(44px)",
          animationDelay: "3s",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="particles" aria-hidden="true">
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Japanese subtitle */}
        <p
          className="animate-fade-up text-sm font-bold tracking-[0.3em] uppercase"
          style={{ color: "#a78bfa" }}
        >
          アニゲス
        </p>

        {/* Logo */}
        <h1
          className="animate-fade-up delay-100 logo-glow select-none font-black leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 10vw, 5rem)", color: "#f1f5f9" }}
        >
          AniGuess
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-up delay-200 max-w-md text-lg font-normal leading-relaxed"
          style={{ color: "#64748b" }}
        >
          Guess the anime character. Collect them all.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-300 mt-4 flex flex-wrap items-center justify-center gap-4">
          {/* href="#" — placeholder until actual App Store URL is available */}
          <a
            href="#"
            className="btn-primary flex items-center gap-2 rounded-2xl px-7 py-3.5 text-base font-bold text-white"
            aria-label="Download AniGuess on the App Store"
          >
            <IconApple />
            Download on App Store
          </a>
          <a
            href="#features"
            className="btn-outline flex items-center gap-2 rounded-2xl px-7 py-3.5 text-base font-bold text-white"
          >
            Learn More
          </a>
        </div>

        {/* Decorative small badge */}
        <p className="animate-fade-up delay-400 mt-2 text-xs" style={{ color: "#64748b" }}>
          iOS — Free to play
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-float-medium absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div
          className="h-10 w-6 rounded-full border-2"
          style={{ borderColor: "#7c3aed" }}
        >
          <div
            className="mx-auto mt-2 h-2 w-1 rounded-full"
            style={{
              background: "#a78bfa",
              animation: "float-medium 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  delay?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  delay = "",
}: FeatureCardProps): React.ReactElement {
  return (
    <div
      className={`feature-card animate-fade-up ${delay} flex flex-col gap-4 rounded-2xl p-8`}
      style={{
        background: "#110c22",
        border: "1px solid #1e1b2e",
      }}
    >
      {/* Icon circle */}
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#f1f5f9]">{title}</h3>
      <p className="text-base leading-relaxed" style={{ color: "#64748b" }}>
        {description}
      </p>
    </div>
  );
}

function FeaturesSection(): React.ReactElement {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-widest"
            style={{ color: "#7c3aed" }}
          >
            What&apos;s inside
          </p>
          <h2
            className="heading-shimmer text-4xl font-black md:text-5xl"
          >
            Built for Anime Fans
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<IconCalendar />}
            title="Daily Challenge"
            description="A new anime pair every day. Can you identify them? Compete for streak records and earn bonus runes."
            delay="delay-100"
          />
          <FeatureCard
            icon={<IconGrid />}
            title="22 Anime Modes"
            description="From Naruto to Demon Slayer. Test your knowledge across 22 series — or go all-in with All mode."
            delay="delay-200"
          />
          <FeatureCard
            icon={<IconSparkles />}
            title="Card Collection"
            description="Open packs, collect 440 cards across 3 rarity tiers with cinematic pack-opening animations. Gotta catch &apos;em all."
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
}

interface StepProps {
  number: string;
  title: string;
  description: string;
  delay?: string;
}

function Step({
  number,
  title,
  description,
  delay = "",
}: StepProps): React.ReactElement {
  return (
    <div
      className={`animate-fade-up ${delay} flex flex-col gap-5 rounded-2xl p-8`}
      style={{ background: "#110c22", border: "1px solid #1e1b2e" }}
    >
      {/* Numbered badge */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full text-xl font-black"
        style={{ background: "rgba(251,191,36,0.15)", color: "#fbbf24" }}
      >
        {number}
      </div>
      <h3 className="text-xl font-bold text-[#f1f5f9]">{title}</h3>
      <p className="leading-relaxed" style={{ color: "#64748b" }}>
        {description}
      </p>
    </div>
  );
}

function HowItWorksSection(): React.ReactElement {
  return (
    <section
      id="how-it-works"
      className="px-6 py-24"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.04) 50%, transparent 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-widest"
            style={{ color: "#fbbf24" }}
          >
            How to play
          </p>
          <h2 className="text-4xl font-black text-[#f1f5f9] md:text-5xl">
            How It Works
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Step
            number="1"
            title="Choose Your Mode"
            description="Pick from 22 anime series or try All mode for the ultimate challenge. Daily Challenge awaits every morning."
            delay="delay-100"
          />
          <Step
            number="2"
            title="Guess the Character"
            description="Study the blurred image carefully and select the right answer from the options. The less blurred you need it, the more runes you earn."
            delay="delay-200"
          />
          <Step
            number="3"
            title="Earn & Collect"
            description="Win runes, spend energy shards, open card packs, and build your collection. Level up your rank and unlock new content."
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
}

interface RarityCardProps {
  rarity: "COMMON" | "RARE" | "LEGENDARY";
  label: string;
  description: string;
  delay?: string;
}

function RarityCard({
  rarity,
  label,
  description,
  delay = "",
}: RarityCardProps): React.ReactElement {
  const rarityStyles: Record<
    RarityCardProps["rarity"],
    { className: string; labelColor: string; bgColor: string }
  > = {
    COMMON: {
      className: "card-common",
      labelColor: "#94a3b8",
      bgColor: "rgba(100, 116, 139, 0.08)",
    },
    RARE: {
      className: "card-rare",
      labelColor: "#a78bfa",
      bgColor: "rgba(139, 92, 246, 0.1)",
    },
    LEGENDARY: {
      className: "card-legendary animate-glow-pulse",
      labelColor: "#fbbf24",
      bgColor: "rgba(245, 158, 11, 0.08)",
    },
  };

  const style = rarityStyles[rarity];

  return (
    <div
      className={`animate-fade-up ${delay} ${style.className} flex flex-col items-center gap-4 rounded-2xl p-8`}
      style={{ background: style.bgColor }}
    >
      {/* Mock card face — character silhouette placeholder */}
      <div
        className="relative flex h-48 w-36 items-end justify-center overflow-hidden rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Decorative abstract character shape */}
        <div
          className="absolute left-1/2 top-6 h-16 w-16 -translate-x-1/2 rounded-full opacity-40"
          style={{ background: style.labelColor, filter: "blur(2px)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full opacity-20"
          style={{ background: style.labelColor, filter: "blur(4px)" }}
          aria-hidden="true"
        />
        {/* Rarity badge */}
        <span
          className="relative z-10 mb-3 rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest"
          style={{
            background: "rgba(0,0,0,0.5)",
            color: style.labelColor,
            border: `1px solid ${style.labelColor}`,
          }}
        >
          {rarity}
        </span>
      </div>

      <h3 className="text-lg font-bold" style={{ color: style.labelColor }}>
        {label}
      </h3>
      <p className="text-center text-sm leading-relaxed" style={{ color: "#64748b" }}>
        {description}
      </p>
    </div>
  );
}

function CardCollectionSection(): React.ReactElement {
  return (
    <section id="collection" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-widest"
            style={{ color: "#a78bfa" }}
          >
            Gacha system
          </p>
          <h2
            className="heading-shimmer text-4xl font-black md:text-5xl"
          >
            Collect Legendary Characters
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed"
            style={{ color: "#64748b" }}
          >
            Open packs with cinematic animations and discover characters across
            440 collectible cards. Every pull brings you closer to that elusive
            Legendary.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <RarityCard
            rarity="COMMON"
            label="Common"
            description="Fan favourites from every series. Build your base collection with 220+ common cards."
            delay="delay-100"
          />
          <RarityCard
            rarity="RARE"
            label="Rare"
            description="Iconic characters with unique artwork and special purple aura borders. 160+ rare cards await."
            delay="delay-200"
          />
          <RarityCard
            rarity="LEGENDARY"
            label="Legendary"
            description="The rarest pulls with pulsing golden frames and exclusive character art. Only 60 legendary cards exist."
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  value: string;
  label: string;
  delay?: string;
}

function StatItem({
  value,
  label,
  delay = "",
}: StatItemProps): React.ReactElement {
  return (
    <div className={`animate-pop-in ${delay} flex flex-col items-center gap-2`}>
      <span
        className="text-5xl font-black leading-none md:text-6xl"
        style={{ color: "#f1f5f9" }}
      >
        {value}
      </span>
      <span className="text-base font-medium" style={{ color: "#64748b" }}>
        {label}
      </span>
    </div>
  );
}

function StatsSection(): React.ReactElement {
  return (
    <section
      className="px-6 py-24"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.06) 50%, transparent 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black text-[#f1f5f9] md:text-5xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-base" style={{ color: "#64748b" }}>
            A complete anime guessing experience in your pocket.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center md:gap-16">
          <StatItem value="22" label="Anime Series" delay="delay-100" />
          <StatItem value="440+" label="Characters" delay="delay-200" />
          <StatItem value="3" label="Rarity Tiers" delay="delay-300" />
        </div>
      </div>
    </section>
  );
}

function Footer(): React.ReactElement {
  return (
    <footer
      className="px-6 py-12"
      style={{ background: "#0a0618", borderTop: "1px solid #1e1b2e" }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <p
          className="text-2xl font-black tracking-tight"
          style={{ color: "#a78bfa" }}
        >
          AniGuess
        </p>
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
          <a
            href="/privacy"
            className="text-sm transition-colors hover:text-[#a78bfa]"
            style={{ color: "#64748b" }}
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-sm transition-colors hover:text-[#a78bfa]"
            style={{ color: "#64748b" }}
          >
            Terms of Service
          </a>
          <a
            href="/support"
            className="text-sm transition-colors hover:text-[#a78bfa]"
            style={{ color: "#64748b" }}
          >
            Support
          </a>
          <a
            href="mailto:support@aniguess.app"
            className="text-sm transition-colors hover:text-[#a78bfa]"
            style={{ color: "#64748b" }}
          >
            Contact
          </a>
        </nav>
        <p className="text-xs" style={{ color: "#64748b" }}>
          &copy; 2026 AniGuess. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ---------- Page ----------

export default function Home(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CardCollectionSection />
      <StatsSection />
      <Footer />
    </main>
  );
}
