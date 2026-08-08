/**
 * Landing sözlüğü.
 *
 * Nadirlik ve ekonomi terimleri uygulamanın kendi i18n'inden alındı
 * (`aniguess/lib/i18n.ts`) — landing ile uygulama aynı kelimeleri kullanmalı,
 * yoksa indiren kişi farklı bir ürüne bakıyormuş gibi hissediyor.
 *
 * Rütbe adları (Rookie, Weeb, Otaku…) marka terimi; uygulamada da
 * çevrilmiyor, burada da çevrilmiyor.
 */

export type Lang = 'en' | 'tr';

export interface Dictionary {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { switchTo: string; switchHref: string };
  cta: { download: string; tryFree: string };
  hero: { title: string; lede: string; meta: string };
  mechanic: {
    kicker: string;
    title: string;
    body: string;
    lives3: string;
    lives2: string;
    lives1: string;
    solved: string;
  };
  packs: {
    kicker: string;
    title: string;
    standard: { name: string; desc: string };
    premium: { name: string; desc: string };
    ultra: { name: string; desc: string };
    rarities: [string, string, string, string, string];
    pity: string;
  };
  collection: {
    kicker: string;
    title: string;
    lede: string;
    series: string;
    cards: string;
    tiers: string;
  };
  compete: { kicker: string; title: string; lede: string };
  closing: { title: string; lede: string };
  footer: {
    privacy: string;
    terms: string;
    support: string;
    contact: string;
    rights: string;
  };
}

const en: Dictionary = {
  htmlLang: 'en',
  meta: {
    title: 'AniMyst — Anime Character Guessing Game',
    description:
      'Guess anime characters from blurred images across 30 series. Collect 600 cards, open packs, and challenge yourself daily. Available on iOS.',
  },
  nav: { switchTo: 'Türkçe', switchHref: '/tr' },
  cta: { download: 'Download on the App Store', tryFree: 'Try it free' },
  hero: {
    title: 'Can you name the character?',
    lede: 'Guess anime characters from a blur. Open packs. Collect 600 cards.',
    meta: 'iOS · Free to play · 30 anime series',
  },
  mechanic: {
    kicker: 'The game',
    title: 'It starts as a blur',
    body:
      'Every round opens out of focus. Each wrong answer sharpens the image and costs you a life. Name the character while it is still a mystery, and the runes are yours.',
    lives3: '3 lives',
    lives2: '2 lives',
    lives1: '1 life',
    solved: 'Solved',
  },
  packs: {
    kicker: 'Packs',
    title: 'Spend your runes',
    standard: { name: 'Standard Pack', desc: '1 random card' },
    premium: { name: 'Premium Pack', desc: '5 cards · 1 Rare+ guaranteed' },
    ultra: { name: 'Ultra Pack', desc: '10 cards · 1 Legendary + 3 Rare+ guaranteed' },
    rarities: ['Common', 'Rare', 'Legendary', 'Exclusive', 'Mythic'],
    pity: 'Pity: a new card is guaranteed on pack 7 if none appeared before it.',
  },
  collection: {
    kicker: 'Collection',
    title: '600 cards. 30 anime.',
    lede:
      'Twenty cards per series, five rarity tiers, one collection. Duplicates convert back into runes, so no pull is wasted.',
    series: 'Anime series',
    cards: 'Cards',
    tiers: 'Rarity tiers',
  },
  compete: {
    kicker: 'Compete',
    title: 'Climb the ranks',
    lede:
      'A new Daily Challenge every day. Keep your streak alive, earn XP, and push up the weekly and all-time leaderboards.',
  },
  closing: {
    title: 'Ready to test your anime knowledge?',
    lede: 'Free on the App Store.',
  },
  footer: {
    privacy: 'Privacy Policy',
    terms: 'Terms',
    support: 'Support',
    contact: 'Contact',
    rights: '© 2026 AniMyst. All rights reserved.',
  },
};

const tr: Dictionary = {
  htmlLang: 'tr',
  meta: {
    title: 'AniMyst — Anime Karakter Tahmin Oyunu',
    description:
      '30 anime serisinden bulanık görsellerle karakterleri tahmin et. 600 kart topla, paket aç, her gün kendini dene. iOS için ücretsiz.',
  },
  nav: { switchTo: 'English', switchHref: '/' },
  cta: { download: "App Store'dan indir", tryFree: 'Ücretsiz dene' },
  hero: {
    title: 'Karakteri tanıyabilecek misin?',
    lede: 'Bulanıklıktan anime karakterlerini bil. Paket aç. 600 kart topla.',
    meta: 'iOS · Ücretsiz · 30 anime serisi',
  },
  mechanic: {
    kicker: 'Oyun',
    title: 'Bulanık başlıyor',
    body:
      'Her tur bulanık açılır. Her yanlış cevap görüntüyü biraz netleştirir ve bir hakkına mal olur. Karakteri hâlâ sis içindeyken bilirsen rune senindir.',
    lives3: '3 hak',
    lives2: '2 hak',
    lives1: '1 hak',
    solved: 'Bildin',
  },
  packs: {
    kicker: 'Paketler',
    title: "Rune'larını harca",
    standard: { name: 'Standart Paket', desc: '1 rastgele kart' },
    premium: { name: 'Premium Paket', desc: '5 kart · 1 Nadir+ garantili' },
    ultra: { name: 'Ultra Paket', desc: '10 kart · 1 Efsanevi + 3 Nadir+ garantili' },
    rarities: ['Normal', 'Nadir', 'Efsanevi', 'Özel', 'Mitik'],
    pity: 'Pity: önceki paketlerden yeni kart çıkmadıysa 7. pakette yeni kart garantidir.',
  },
  collection: {
    kicker: 'Koleksiyon',
    title: '600 kart. 30 anime.',
    lede:
      'Seri başına yirmi kart, beş nadirlik seviyesi, tek koleksiyon. Çift çıkan kartlar rune olarak geri döner, hiçbir açılım boşa gitmez.',
    series: 'Anime serisi',
    cards: 'Kart',
    tiers: 'Nadirlik seviyesi',
  },
  compete: {
    kicker: 'Rekabet',
    title: 'Rütbeleri tırman',
    lede:
      'Her gün yeni bir Günlük Meydan Okuma. Serini kırma, XP kazan, haftalık ve tüm zamanlar sıralamasında yüksel.',
  },
  closing: {
    title: 'Anime bilgini test etmeye hazır mısın?',
    lede: "App Store'da ücretsiz.",
  },
  footer: {
    privacy: 'Gizlilik Politikası',
    terms: 'Şartlar',
    support: 'Destek',
    contact: 'İletişim',
    rights: '© 2026 AniMyst. Tüm hakları saklıdır.',
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, tr };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
