import type { Metadata } from 'next';

const title = 'Client Work & Selected Concepts | Ahmed';
const description = 'Browse client website projects separately from self-initiated concepts, with platform and implementation details for each.';

export const metadata: Metadata = {
  title: 'Client Work & Concepts',
  description,
  alternates: { canonical: '/work' },
  openGraph: {
    type: 'website',
    url: 'https://ahmed-webflow.vercel.app/work',
    siteName: 'Ahmed — Webflow Developer',
    title,
    description,
    images: ['/images/projects/alawad.png'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/projects/alawad.png'] },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
