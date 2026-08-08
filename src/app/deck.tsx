'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';

/**
 * `<html lang>` değerini rota diline göre günceller.
 *
 * Kök layout `app/layout.tsx`'te ve rota parametresini göremiyor; yasal
 * sayfaların URL'leri (App Store'da kayıtlı) değişmesin diye siteyi `[lang]`
 * altına taşımadık. Bu yüzden dil bilgisi buradan veriliyor.
 */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

/**
 * Tam ekran dikey slayt destesinin animasyon parçaları.
 *
 * Zamanlama değerleri haticeoz-web'deki `SlideFrame.tsx`'ten birebir alındı —
 * iki sitenin aynı hissi vermesi isteniyor. Oradaki Swiper `isActive` prop'unun
 * karşılığı burada `whileInView`; kaydırma native scroll-snap ile yapılıyor.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const rise: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.7, ease: EASE } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const words: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

/** Başlığı kelime kelime, aşağıdan yukarı açar. */
export function RevealWords({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span variants={words} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.1em] pr-[0.14em]">
          <motion.span variants={rise} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Stagger sırasına giren tekil öğe. */
export function FadeUp({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fade} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Tam ekran slayt. Görünür olduğunda içindeki `RevealWords`/`FadeUp`
 * öğelerini sırayla açar, çıkınca sıfırlar (tekrar girişte yeniden oynar).
 */
export function Slide({
  children,
  background,
  className = '',
  style,
  id,
}: {
  children: React.ReactNode;
  /** Tam kaplayan arka plan katmanı (video, görsel, perde).
   *  İçerik sarmalayıcısı `max-w-6xl` ile sınırlı olduğu için buraya konan
   *  `absolute inset-0` öğeleri slaytın tamamını değil o kutuyu kaplardı —
   *  bu yüzden arka plan ayrı bir prop olarak section'ın doğrudan çocuğu. */
  background?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}) {
  return (
    <section
      id={id}
      style={style}
      className={`deck-slide relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden px-6 py-20 ${className}`}
    >
      {background}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4 }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
}

const APP_STORE_URL = 'https://apps.apple.com/app/id6786710063';

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/**
 * İndirme butonu. Her slaytta tekrarlanır — deste yapısı kaydırmayı ele
 * geçirdiği için kullanıcı sayfanın dibine inip buton arayamıyor.
 */
export function DownloadButton({ label = 'Download on the App Store' }: { label?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center gap-2.5 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] px-7 py-3.5 text-base font-extrabold text-white shadow-[0_10px_34px_rgba(124,58,237,0.45)] transition-transform duration-300 hover:scale-[1.03]"
    >
      <AppleGlyph />
      {label}
    </a>
  );
}

/** Küçük üst etiket — her slaytta aynı tipografiyle. */
export function Kicker({ children, color = '#c4b5fd' }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-xs font-extrabold uppercase tracking-[0.35em]" style={{ color }}>
      {children}
    </p>
  );
}

/**
 * Slayt arka planı olarak tam kaplayan döngülü video.
 *
 * Poster hemen basılır, video yalnızca istemcide ve hareket kısıtlaması yoksa
 * yüklenir. Böylece LCP posterle ölçülür, video onu geciktirmez; iOS Düşük Güç
 * Modu autoplay'i engellediğinde de poster tam kompozisyon olarak kalır.
 *
 * `eager` yalnızca ilk slayt için true — alttaki slaytların videoları görünür
 * olana kadar indirilmeye başlamasın diye.
 */
const subscribeNoop = () => () => {};

export function BackgroundVideo({
  poster,
  src,
  eager = false,
}: {
  poster: string;
  src: string;
  eager?: boolean;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  /* Slayt yaklaşana kadar video indirilmeye başlamaz. Üç slaytın videosu
     birden inseydi ilk açılış onlarca MB'a çıkardı. */
  const near = useInView(ref, { once: true, margin: '300px' });
  /* Sunucuda false, hidrasyondan sonra true. Video etiketi SSR çıktısına
     girmediği için tarayıcı önce posteri indirir — LCP posterle ölçülür. */
  const hydrated = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  return (
    <div ref={ref} className="absolute inset-0 z-0" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      {hydrated && !reduced && (eager || near) && (
        <video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
