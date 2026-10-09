import type { Metadata } from 'next';

const title = 'Webflow, GoHighLevel & Custom Web Development Services | Ahmed';
const description = 'Webflow development, GoHighLevel website implementation, custom HTML/CSS/JavaScript, Arabic RTL, and agency production support.';

export const metadata: Metadata = {
  title: 'Services',
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    url: 'https://ahmed-web1.vercel.app/services',
    siteName: 'Ahmed — Webflow & GoHighLevel Developer',
    title,
    description,
    images: ['/images/projects/alawad.png'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/projects/alawad.png'] },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
