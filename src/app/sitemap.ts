import type { MetadataRoute } from 'next';

const BASE = 'https://animyst.vexloft.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: 'weekly', priority: 1, alternates: { languages: { tr: `${BASE}/tr` } } },
    { url: `${BASE}/tr`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/support`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
