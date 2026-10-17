import type { Metadata } from 'next';

const title = 'GoHighLevel & Custom Web Development Services | Ahmed';
const description = 'GoHighLevel website implementation, custom HTML/CSS/JavaScript, Arabic RTL, and agency production support.';

export const metadata: Metadata = {
  title: 'Services',
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    url: 'https://ahmed-web1.vercel.app/services',
    siteName: 'Ahmed — GoHighLevel Developer',
    title,
    description,
    images: ['/images/ahmed-web.jpg'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/ahmed-web.jpg'] },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
