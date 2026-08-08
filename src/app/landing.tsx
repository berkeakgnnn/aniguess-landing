import Image from 'next/image';
import { Slide, RevealWords, FadeUp, DownloadButton, Kicker, BackgroundVideo, HtmlLang } from './deck';
import type { Dictionary } from '@/lib/dictionary';

/* Bu sayfadaki her sayı ve fiyat uygulama kaynağından doğrulanmıştır:
   - drop oranları .......... aniguess/components/ui/ShopScreen.tsx:1006
   - paket fiyatları ........ aniguess/components/ui/ShopScreen.tsx:585
   - nadirlik renkleri ...... aniguess/constants/colors.ts:22
   - 30 anime / 600 kart .... aniguess/CLAUDE.md
   Doğrulanamayan hiçbir iddia sayfaya girmiyor.

   Sayılar (fiyat, oran, adet) dile göre değişmiyor; yalnızca metinler sözlükten
   geliyor. Böylece bir dili güncelleyip diğerini unutma riski yok. */

const RARITY_META = [
  { pct: '84,9%', color: '#64748b' },
  { pct: '10%', color: '#4aa8ff' },
  { pct: '5%', color: '#f59e0b' },
  { pct: '0,09%', color: '#ff6b9d' },
  { pct: '0,01%', color: '#22d3ee' },
];

const PACK_META = [
  { cost: 20, img: '/app/packs/standard.png', color: '#7c3aed' },
  { cost: 75, img: '/app/packs/premium.png', color: '#f59e0b' },
  { cost: 200, img: '/app/packs/ultra.png', color: '#f43f5e' },
];

/* Rütbe adları marka terimi — uygulamada da çevrilmiyor. */
const RANKS = [
  { name: 'Rookie', img: '/app/ranks/rookie.png' },
  { name: 'Weeb', img: '/app/ranks/weeb.png' },
  { name: 'Otaku', img: '/app/ranks/otaku.png' },
  { name: 'Weeb Master', img: '/app/ranks/weeb-master.png' },
  { name: 'Legend', img: '/app/ranks/legend.png' },
  { name: 'AniMyst', img: '/app/ranks/animyst.png' },
];

const ANIME_ROW_1 =
  'NARUTO · ONE PIECE · DEMON SLAYER · ATTACK ON TITAN · JUJUTSU KAISEN · MY HERO ACADEMIA · BLEACH · DEATH NOTE · HUNTER×HUNTER · FRIEREN · SPY×FAMILY · DANDADAN · CODE GEASS · VINLAND SAGA · ONE PUNCH MAN';
const ANIME_ROW_2 =
  'FULLMETAL ALCHEMIST · TOKYO GHOUL · SWORD ART ONLINE · RE:ZERO · BLACK CLOVER · CHAINSAW MAN · SOLO LEVELING · POKÉMON · BLUE LOCK · FAIRY TAIL · GINTAMA · KUROKO’S BASKETBALL · MOB PSYCHO 100 · HAIKYUU · OSHI NO KO';

const HEADING = 'text-[clamp(2.2rem,5.4vw,4rem)] font-black leading-[0.98] tracking-tight text-white';
const LEDE = 'text-base leading-relaxed text-[#cbd5e1] md:text-lg';

/* 1 — Hero */
function HeroSlide({ d }: { d: Dictionary }) {
  return (
    <Slide
      id="hero"
      className="text-center"
      background={
        <>
          <BackgroundVideo poster="/hero/poster.jpg" src="/hero/hero.mp4" eager />
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_72%_62%_at_50%_50%,rgba(10,6,24,0.72)_0%,rgba(10,6,24,0.28)_58%,rgba(10,6,24,0.6)_100%)]" />
          <div className="absolute inset-x-0 bottom-9 z-[2] flex justify-center" aria-hidden="true">
            <div className="h-9 w-5 rounded-full border-2 border-[#7c3aed66]">
              <div className="scroll-dot mx-auto mt-1.5 h-1.5 w-1 rounded-full bg-[#a78bfa]" />
            </div>
          </div>
        </>
      }
    >
      <div className="flex flex-col items-center">
        <Kicker>アニミスト</Kicker>
        <h1 className="mt-5 text-[clamp(2.6rem,7vw,5.4rem)] font-black leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_40px_rgba(0,0,0,0.8)]">
          <RevealWords text={d.hero.title} />
        </h1>
        <FadeUp
          className={`mt-6 max-w-2xl text-balance drop-shadow-[0_2px_20px_rgba(0,0,0,0.85)] ${LEDE}`}
        >
          {d.hero.lede}
        </FadeUp>
        <FadeUp className="mt-9">
          <DownloadButton label={d.cta.download} />
        </FadeUp>
        <FadeUp className="mt-4 text-xs text-[#94a3b8]">{d.hero.meta}</FadeUp>
      </div>
    </Slide>
  );
}

/* 2 — Mekanik: oyunun gacha'dan farkı burası */
function MechanicSlide({ d }: { d: Dictionary }) {
  const steps = [
    { label: d.mechanic.lives3, blur: 'blur-[7px]' },
    { label: d.mechanic.lives2, blur: 'blur-[4px]' },
    { label: d.mechanic.lives1, blur: 'blur-[2px]' },
    { label: d.mechanic.solved, blur: 'blur-0' },
  ];
  return (
    <Slide
      id="how"
      background={
        <>
          <BackgroundVideo poster="/hero/mechanic.jpg" src="/hero/mechanic.mp4" />
          <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(10,6,24,0.94)_0%,rgba(10,6,24,0.62)_44%,rgba(10,6,24,0.12)_76%)]" />
        </>
      }
    >
      <div className="max-w-xl">
        <Kicker>{d.mechanic.kicker}</Kicker>
        <h2 className={`mt-5 ${HEADING}`}>
          <RevealWords text={d.mechanic.title} />
        </h2>
        <FadeUp className={`mt-6 ${LEDE}`}>{d.mechanic.body}</FadeUp>
        <FadeUp className="mt-8 flex flex-wrap items-center gap-3">
          {steps.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-[#7c3aed40]">
                <Image
                  src="/app/rune-gem.png"
                  alt=""
                  fill
                  sizes="48px"
                  className={`object-contain p-1 ${s.blur}`}
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">
                {s.label}
              </span>
            </div>
          ))}
        </FadeUp>
        <FadeUp className="mt-9">
          <DownloadButton label={d.cta.tryFree} />
        </FadeUp>
      </div>
    </Slide>
  );
}

/* 3 — Paketler: gerçek paket görselleri, gerçek fiyatlar, gerçek oranlar */
function PacksSlide({ d }: { d: Dictionary }) {
  const packs = [d.packs.standard, d.packs.premium, d.packs.ultra].map((p, i) => ({
    ...p,
    ...PACK_META[i],
  }));
  return (
    <Slide
      id="packs"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(124,58,237,0.14) 0%, transparent 70%), #0a0618',
      }}
    >
      <div className="text-center">
        <Kicker color="#fbbf24">{d.packs.kicker}</Kicker>
        <h2 className={`mt-5 ${HEADING}`}>
          <RevealWords text={d.packs.title} />
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {packs.map((p) => (
          <FadeUp key={p.name}>
            <div
              className="flex h-full flex-col items-center gap-4 rounded-2xl border p-6 text-center"
              style={{ borderColor: `${p.color}40`, background: `${p.color}0f` }}
            >
              <div className="relative h-40 w-32">
                <Image src={p.img} alt={p.name} fill sizes="128px" className="object-contain" />
              </div>
              <h3 className="text-base font-extrabold text-[#f1f5f9]">{p.name}</h3>
              <p className="flex items-center gap-1.5 text-lg font-black" style={{ color: p.color }}>
                <span className="relative inline-block h-4 w-4">
                  <Image src="/app/rune-gem.png" alt="" fill sizes="16px" className="object-contain" />
                </span>
                {p.cost}
              </p>
              <p className="text-xs leading-relaxed text-[#94a3b8]">{p.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp className="mt-10">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-[#1e1b2e] bg-[#0d0820]/70 px-6 py-4">
          {d.packs.rarities.map((name, i) => (
            <span key={name} className="flex items-center gap-2 text-xs font-bold">
              <span className="h-2 w-2 rounded-full" style={{ background: RARITY_META[i].color }} />
              <span style={{ color: RARITY_META[i].color }}>{name}</span>
              <span className="text-[#64748b]">{RARITY_META[i].pct}</span>
            </span>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-[#64748b]">{d.packs.pity}</p>
      </FadeUp>
    </Slide>
  );
}

/* 4 — Koleksiyon */
function CollectionSlide({ d }: { d: Dictionary }) {
  const stats = [
    { n: '30', l: d.collection.series },
    { n: '600', l: d.collection.cards },
    { n: '5', l: d.collection.tiers },
  ];
  return (
    <Slide
      id="collection"
      background={
        <>
          <BackgroundVideo poster="/hero/collection.jpg" src="/hero/collection.mp4" />
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(10,6,24,0.78)_0%,rgba(10,6,24,0.42)_64%,rgba(10,6,24,0.72)_100%)]" />
        </>
      }
    >
      <div className="text-center">
        <Kicker>{d.collection.kicker}</Kicker>
        <h2 className={`mt-5 ${HEADING}`}>
          <RevealWords text={d.collection.title} />
        </h2>
        <FadeUp className={`mx-auto mt-6 max-w-xl ${LEDE}`}>{d.collection.lede}</FadeUp>
        <FadeUp className="mt-10 grid grid-cols-3 gap-8 md:gap-16">
          {stats.map((s) => (
            <div key={s.l} className="flex flex-col items-center gap-1.5">
              <span className="text-4xl font-black leading-none text-white md:text-5xl">{s.n}</span>
              <span className="text-xs font-medium text-[#94a3b8]">{s.l}</span>
            </div>
          ))}
        </FadeUp>
        <FadeUp className="mt-10">
          <DownloadButton label={d.cta.download} />
        </FadeUp>
      </div>
    </Slide>
  );
}

/* 5 — Rekabet */
function CompeteSlide({ d }: { d: Dictionary }) {
  return (
    <Slide
      id="compete"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(245,158,11,0.07) 0%, transparent 70%), #0d0820',
      }}
    >
      <div className="text-center">
        <Kicker color="#fbbf24">{d.compete.kicker}</Kicker>
        <h2 className={`mt-5 ${HEADING}`}>
          <RevealWords text={d.compete.title} />
        </h2>
        <FadeUp className={`mx-auto mt-6 max-w-xl ${LEDE}`}>{d.compete.lede}</FadeUp>
      </div>

      <FadeUp className="mt-12">
        <div className="flex flex-wrap items-end justify-center gap-6 md:gap-10">
          {RANKS.map((r, i) => (
            <div key={r.name} className="flex flex-col items-center gap-2.5">
              <div className="relative" style={{ width: 44 + i * 6, height: 44 + i * 6 }}>
                <Image src={r.img} alt={r.name} fill sizes="80px" className="object-contain" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">
                {r.name}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp className="mt-12 text-center">
        <DownloadButton label={d.cta.download} />
      </FadeUp>
    </Slide>
  );
}

/* Anime şeridi — koleksiyonun kapsamını isimlerle gösterir. Seri adları özel
   isim, çevrilmiyor. */
function AnimeMarquee() {
  return (
    <div className="relative overflow-hidden py-6" aria-hidden="true">
      <div className="glow-divider mb-5" />
      <div className="marquee-track">
        <div className="marquee-content animate-marquee">
          <span>{ANIME_ROW_1}</span>
          <span>{ANIME_ROW_1}</span>
        </div>
      </div>
      <div className="marquee-track mt-2.5">
        <div className="marquee-content animate-marquee-rev">
          <span>{ANIME_ROW_2}</span>
          <span>{ANIME_ROW_2}</span>
        </div>
      </div>
      <div className="glow-divider mt-5" />
    </div>
  );
}

/* 6 — Son çağrı + footer */
function ClosingSlide({ d }: { d: Dictionary }) {
  /* Yasal sayfalar tek dilde (İngilizce) — App Store'da kayıtlı URL'ler bunlar,
     yolları değiştirmek listelemeyi bozar. */
  const links = [
    { href: '/privacy', label: d.footer.privacy },
    { href: '/terms', label: d.footer.terms },
    { href: '/support', label: d.footer.support },
    { href: 'mailto:vexloftstudio@gmail.com', label: d.footer.contact },
  ];
  return (
    <Slide id="download" style={{ background: 'linear-gradient(180deg,#0d0820 0%,#0a0618 100%)' }}>
      <div className="text-center">
        <div className="relative mx-auto h-16 w-16">
          <Image src="/app/rune-gem.png" alt="" fill sizes="64px" className="object-contain" />
        </div>
        <h2 className={`mt-7 ${HEADING}`}>
          <RevealWords text={d.closing.title} />
        </h2>
        <FadeUp className="mt-5 text-base text-[#94a3b8]">{d.closing.lede}</FadeUp>
        <FadeUp className="mt-9">
          <DownloadButton label={d.cta.download} />
        </FadeUp>
      </div>

      {/* Şerit ekranın tamamını kaplamalı, ama içerik sarmalayıcısı `max-w-6xl`
          ile sınırlı. `left-1/2` + `w-screen` + `-translate-x-1/2` ile o kutudan
          taşıp viewport genişliğine oturuyor; section'daki `overflow-hidden`
          yatay kaymayı engelliyor. */}
      <FadeUp className="relative left-1/2 mt-16 w-screen -translate-x-1/2">
        <AnimeMarquee />
      </FadeUp>

      <FadeUp className="mt-10 flex w-full flex-col items-center gap-5 text-center">
        <p className="logo-shimmer text-xl font-black tracking-tight">AniMyst</p>
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#64748b] transition-colors hover:text-[#a78bfa]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={d.nav.switchHref}
            hrefLang={d.nav.switchHref === '/tr' ? 'tr' : 'en'}
            className="text-sm font-bold text-[#a78bfa] transition-colors hover:text-[#c4b5fd]"
          >
            {d.nav.switchTo}
          </a>
        </nav>
        <p className="text-xs text-[#475569]">{d.footer.rights}</p>
      </FadeUp>
    </Slide>
  );
}

export function Landing({ d }: { d: Dictionary }) {
  return (
    <main className="flex flex-col bg-[#0d0820]">
      <HtmlLang lang={d.htmlLang} />
      <HeroSlide d={d} />
      <MechanicSlide d={d} />
      <PacksSlide d={d} />
      <CollectionSlide d={d} />
      <CompeteSlide d={d} />
      <ClosingSlide d={d} />
    </main>
  );
}
