import type { Metadata } from 'next';

const title = 'About Ahmed | Webflow & GoHighLevel Website Developer';
const description = 'Professional website development in Webflow and GoHighLevel, custom code, and agency delivery experience across Kuwait and the GCC.';

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: 'https://ahmed-web1.vercel.app/about',
    siteName: 'Ahmed — Webflow & GoHighLevel Developer',
    title,
    description,
    images: ['/images/ahmed.png'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/ahmed.png'] },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
