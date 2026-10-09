import type { Metadata } from 'next';

const title = 'Contact | Webflow & GoHighLevel Website Developer';
const description = 'Discuss Webflow or GoHighLevel website implementation, white-label agency support, contract roles, or full-time opportunities.';

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    url: 'https://ahmed-web1.vercel.app/contact',
    siteName: 'Ahmed — Webflow & GoHighLevel Developer',
    title,
    description,
    images: ['/images/projects/alawad.png'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/projects/alawad.png'] },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
