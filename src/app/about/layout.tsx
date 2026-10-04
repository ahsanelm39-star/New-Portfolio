import type { Metadata } from 'next';

const title = 'About Ahmed | Independent Webflow Developer';
const description = 'Website development experience, Webflow specialization, custom code and agency workflow experience for projects in Kuwait and the GCC.';

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: 'https://ahmed-webflow.vercel.app/about',
    siteName: 'Ahmed — Webflow Developer',
    title,
    description,
    images: ['/images/ahmed.png'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/ahmed.png'] },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
