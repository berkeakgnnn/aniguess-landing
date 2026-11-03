import type { MetadataRoute } from 'next';

// Arama motorları ve yapay zekâ arama botları (ChatGPT, Perplexity, Claude) siteyi okuyabilsin:
// ChatGPT'den gelen indirmeler bu sayfadaki metinden besleniyor.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/c/' },
    sitemap: 'https://animyst.vexloft.com/sitemap.xml',
  };
}
