import { FadeInSection, ScaleIn, TiltCard, StaggerContainer, StaggerItem } from "./scroll-animations";
import { AnimatedCounter } from "./animated-counter";
import { CrystalSceneWrapper } from "./scene-wrapper";

function IconApple() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.18) 0%, transparent 70%), linear-gradient(180deg, #0d0820 0%, #130e28 100%)" }}>
      <div className="hero-grid absolute inset-0 z-0" aria-hidden="true" />
      <CrystalSceneWrapper />
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => <span key={i} className="particle" />)}
      </div>
      <div className="relative z-10 flex flex-col items-center gap-5">
        <p className="animate-fade-up text-sm font-bold tracking-[0.35em] uppercase" style={{ color: "#a78bfa" }}>アニミスト</p>
        <h1 className="animate-fade-up delay-100 logo-shimmer select-none font-black leading-none tracking-tight" style={{ fontSize: "clamp(3.2rem, 11vw, 5.5rem)" }}>AniMyst</h1>
        <div className="animate-fade-up delay-200 flex items-center gap-1">
          <p className="typing-text text-lg font-semibold" style={{ color: "#94a3b8" }}>Guess. Collect. Master.</p>
          <span className="typing-cursor" />
        </div>
        <div className="animate-fade-up delay-300 mt-4 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="btn-primary flex items-center gap-2 rounded-2xl px-7 py-3.5 text-base font-bold text-white"><IconApple /> Download on App Store</a>
          <a href="#features" className="btn-outline flex items-center gap-2 rounded-2xl px-7 py-3.5 text-base font-bold text-white">Explore</a>
        </div>
        <p className="animate-fade-up delay-400 mt-1 text-xs" style={{ color: "#475569" }}>iOS &middot; Free to play &middot; 30 anime series</p>
      </div>
      <div className="animate-float-medium absolute bottom-8 left-1/2 z-10 -translate-x-1/2" aria-hidden="true">
        <div className="h-10 w-6 rounded-full border-2" style={{ borderColor: "#7c3aed40" }}>
          <div className="scroll-dot mx-auto mt-2 h-2 w-1 rounded-full" style={{ background: "#a78bfa" }} />
        </div>
      </div>
    </section>
  );
}

function AnimeMarquee() {
  const row1 = "NARUTO • ONE PIECE • DEMON SLAYER • ATTACK ON TITAN • JUJUTSU KAISEN • MY HERO ACADEMIA • BLEACH • DEATH NOTE • HUNTER×HUNTER • FRIEREN • SPY×FAMILY • DANDADAN • CODE GEASS • VINLAND SAGA • ONE PUNCH MAN";
  const row2 = "FULLMETAL ALCHEMIST • TOKYO GHOUL • SWORD ART ONLINE • RE:ZERO • BLACK CLOVER • CHAINSAW MAN • SOLO LEVELING • POKÉMON • BLUE LOCK • FAIRY TAIL • GINTAMA • KUROKO'S BASKETBALL • MOB PSYCHO 100 • HAIKYUU • OSHI NO KO";
  return (
    <section className="relative overflow-hidden py-8" style={{ background: "#0a0618" }}>
      <div className="glow-divider mb-6" />
      <div className="marquee-track"><div className="marquee-content animate-marquee"><span>{row1}</span><span>{row1}</span></div></div>
      <div className="marquee-track mt-3"><div className="marquee-content animate-marquee-rev"><span>{row2}</span><span>{row2}</span></div></div>
      <div className="glow-divider mt-6" />
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: "📅", title: "Daily Challenge", desc: "A new anime pair every day. Compete for streak records and earn bonus runes." },
    { icon: "🎮", title: "30 Anime Modes", desc: "From Naruto to Dandadan. Test your knowledge across 30 series — or go all-in." },
    { icon: "✨", title: "Card Collection", desc: "Open packs, collect 600 cards across 3 rarity tiers with cinematic animations." },
    { icon: "🎁", title: "Daily Rewards", desc: "Log in every day for increasing rewards. Day 7 brings a free Premium Pack!" },
  ];
  return (
    <section id="features" className="relative px-6 py-24" style={{ background: "linear-gradient(180deg, #0a0618 0%, #0d0820 30%, #0d0820 100%)" }}>
      <FadeInSection className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest" style={{ color: "#7c3aed" }}>Features</p>
        <h2 className="heading-shimmer text-4xl font-black md:text-5xl">Built for Anime Fans</h2>
      </FadeInSection>
      <StaggerContainer className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <TiltCard className="glass-card feature-card flex h-full flex-col gap-4 rounded-2xl p-7">
              <div className="glow-accent" />
              <span className="text-3xl">{f.icon}</span>
              <h3 className="text-lg font-bold text-[#f1f5f9]">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{f.desc}</p>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Choose Your Mode", desc: "Pick from 30 anime or try All mode.", icon: "🎯" },
    { num: "02", title: "Guess the Character", desc: "Study the blurred image, select the right answer.", icon: "🔍" },
    { num: "03", title: "Earn & Collect", desc: "Win runes, open packs, build your collection.", icon: "🏆" },
  ];
  return (
    <section id="how-it-works" className="relative px-6 py-24" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(251,191,36,0.04) 0%, transparent 70%), #0d0820" }}>
      <FadeInSection className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest" style={{ color: "#fbbf24" }}>How to play</p>
        <h2 className="text-4xl font-black text-[#f1f5f9] md:text-5xl">Three Simple Steps</h2>
      </FadeInSection>
      <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <FadeInSection key={s.num} delay={i * 0.15}>
            <div className="glass-card relative flex flex-col gap-5 rounded-2xl p-8">
              {i < 2 && <div className="step-connector" />}
              <div className="flex items-center gap-4">
                <span className="gold-shimmer text-4xl font-black">{s.num}</span>
                <span className="text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#f1f5f9]">{s.title}</h3>
              <p className="leading-relaxed" style={{ color: "#94a3b8" }}>{s.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

function CardCollectionSection() {
  const cards = [
    { rarity: "COMMON", pct: "60%", color: "#94a3b8", bg: "rgba(100,116,139,0.06)", glow: "" },
    { rarity: "RARE", pct: "30%", color: "#a78bfa", bg: "rgba(139,92,246,0.08)", glow: "card-rare" },
    { rarity: "LEGENDARY", pct: "10%", color: "#fbbf24", bg: "rgba(245,158,11,0.06)", glow: "card-legendary animate-glow-pulse" },
  ];
  return (
    <section id="collection" className="relative px-6 py-24" style={{ background: "linear-gradient(180deg, #0d0820 0%, rgba(124,58,237,0.03) 50%, #0d0820 100%)" }}>
      <FadeInSection className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest" style={{ color: "#a78bfa" }}>Gacha System</p>
        <h2 className="heading-shimmer text-4xl font-black md:text-5xl">Collect Legendary Characters</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed" style={{ color: "#94a3b8" }}>Open packs with cinematic animations and discover characters across 600 collectible cards.</p>
      </FadeInSection>
      <StaggerContainer className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
        {cards.map((c) => (
          <StaggerItem key={c.rarity}>
            <TiltCard>
              <div className={`${c.glow} flex flex-col items-center gap-5 rounded-2xl p-8`} style={{ background: c.bg }}>
                <div className="card-frame relative flex h-56 w-40 items-center justify-center overflow-hidden rounded-xl" style={{ border: `2px solid ${c.color}` }}>
                  <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 50% 30%, ${c.color}, transparent 70%)` }} />
                  <span className="relative z-10 rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest" style={{ background: "rgba(0,0,0,0.6)", color: c.color, border: `1px solid ${c.color}` }}>{c.rarity}</span>
                </div>
                <p className="text-lg font-bold" style={{ color: c.color }}>{c.rarity}</p>
                <p className="text-2xl font-black" style={{ color: c.color }}>{c.pct}</p>
                <p className="text-xs" style={{ color: "#64748b" }}>drop rate</p>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative px-6 py-24" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%), #0d0820" }}>
      <FadeInSection className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-black text-[#f1f5f9] md:text-5xl">Everything You Need</h2>
        <p className="mt-4 text-base" style={{ color: "#94a3b8" }}>A complete anime guessing experience in your pocket.</p>
      </FadeInSection>
      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-8 text-center md:gap-16">
        <ScaleIn delay={0.1} className="flex flex-col items-center gap-2">
          <AnimatedCounter target={30} suffix="" className="text-5xl font-black leading-none text-[#f1f5f9] md:text-6xl" />
          <span className="text-sm font-medium" style={{ color: "#94a3b8" }}>Anime Series</span>
        </ScaleIn>
        <ScaleIn delay={0.2} className="flex flex-col items-center gap-2">
          <AnimatedCounter target={600} suffix="+" className="text-5xl font-black leading-none text-[#f1f5f9] md:text-6xl" />
          <span className="text-sm font-medium" style={{ color: "#94a3b8" }}>Characters</span>
        </ScaleIn>
        <ScaleIn delay={0.3} className="flex flex-col items-center gap-2">
          <AnimatedCounter target={3} suffix="" className="text-5xl font-black leading-none text-[#f1f5f9] md:text-6xl" />
          <span className="text-sm font-medium" style={{ color: "#94a3b8" }}>Rarity Tiers</span>
        </ScaleIn>
      </div>
      <div className="glow-divider mx-auto mt-16 max-w-2xl" />
    </section>
  );
}

function CTABanner() {
  return (
    <section className="px-6 py-20">
      <FadeInSection>
        <div className="mx-auto max-w-3xl rounded-3xl p-12 text-center" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 60%), #110c22", border: "1px solid rgba(124,58,237,0.25)" }}>
          <h2 className="text-3xl font-black text-[#f1f5f9] md:text-4xl">Ready to test your anime knowledge?</h2>
          <p className="mt-3 text-base" style={{ color: "#94a3b8" }}>Join thousands of anime fans. It&apos;s free.</p>
          <a href="#" className="btn-primary mt-8 inline-flex items-center gap-2 rounded-2xl px-10 py-4 text-lg font-bold text-white"><IconApple /> Download Now</a>
          <p className="mt-3 text-xs" style={{ color: "#475569" }}>Free on the App Store</p>
        </div>
      </FadeInSection>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-12" style={{ background: "#0a0618", borderTop: "1px solid #1e1b2e" }}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <p className="logo-shimmer text-2xl font-black tracking-tight">AniMyst</p>
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
          {[{ href: "/privacy", label: "Privacy Policy" }, { href: "/terms", label: "Terms" }, { href: "/support", label: "Support" }, { href: "mailto:support@animyst.app", label: "Contact" }].map((l) => (
            <a key={l.href} href={l.href} className="text-sm transition-colors hover:text-[#a78bfa]" style={{ color: "#64748b" }}>{l.label}</a>
          ))}
        </nav>
        <p className="text-xs" style={{ color: "#475569" }}>&copy; 2026 AniMyst. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col" style={{ background: "#0d0820" }}>
      <HeroSection />
      <AnimeMarquee />
      <FeaturesSection />
      <HowItWorksSection />
      <CardCollectionSection />
      <StatsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
