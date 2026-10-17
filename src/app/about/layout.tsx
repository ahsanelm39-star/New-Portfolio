import type { Metadata } from 'next';

const title = 'About Ahmed | GoHighLevel Website Developer';
const description = 'Professional website development in GoHighLevel, custom code, and agency delivery experience across GCC.';

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: 'https://ahmed-web1.vercel.app/about',
    siteName: 'Ahmed — GoHighLevel Developer',
    title,
    description,
    images: ['/images/ahmed-web.jpg'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/ahmed-web.jpg'] },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
