import type { Metadata } from 'next';

const title = 'Webflow, Custom Code & GoHighLevel Development Services';
const description = 'Figma-to-Webflow implementation, responsive builds, custom HTML/CSS/JavaScript, GoHighLevel, Arabic RTL and technical SEO foundations.';

export const metadata: Metadata = {
  title: 'Services',
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    url: 'https://ahmed-webflow.vercel.app/services',
    siteName: 'Ahmed — Webflow Developer',
    title,
    description,
    images: ['/images/projects/alawad.png'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/projects/alawad.png'] },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
