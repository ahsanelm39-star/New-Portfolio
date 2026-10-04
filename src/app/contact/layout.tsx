import type { Metadata } from 'next';

const title = 'Contact | Webflow Development & Agency Production Support';
const description = 'Discuss Figma-to-Webflow implementation, custom development, GoHighLevel or production support for agency and company projects.';

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    url: 'https://ahmed-webflow.vercel.app/contact',
    siteName: 'Ahmed — Webflow Developer',
    title,
    description,
    images: ['/images/projects/alawad.png'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/projects/alawad.png'] },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
