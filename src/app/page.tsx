import type { Metadata } from 'next';
import { Landing } from './landing';
import { getDictionary } from '@/lib/dictionary';

const d = getDictionary('en');

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  alternates: {
    canonical: '/',
    languages: { en: '/', tr: '/tr' },
  },
  openGraph: { title: d.meta.title, description: d.meta.description, url: '/', locale: 'en_US' },
};

export default function Home() {
  return <Landing d={d} />;
}
