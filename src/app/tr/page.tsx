import type { Metadata } from 'next';
import { Landing } from '../landing';
import { getDictionary } from '@/lib/dictionary';

const d = getDictionary('tr');

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  alternates: {
    canonical: '/tr',
    languages: { en: '/', tr: '/tr' },
  },
  openGraph: { title: d.meta.title, description: d.meta.description, url: '/tr', locale: 'tr_TR' },
};

export default function HomeTr() {
  return <Landing d={d} />;
}
