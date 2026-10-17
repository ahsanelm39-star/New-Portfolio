import type { Metadata } from 'next';

const title = 'Selected Website Projects & Concepts | Ahmed';
const description = 'Browse delivered client website projects and front-end concepts with scope, responsive implementation, and delivery details.';

export const metadata: Metadata = {
  title: 'Client Work & Concepts',
  description,
  alternates: { canonical: '/work' },
  openGraph: {
    type: 'website',
    url: 'https://ahmed-web1.vercel.app/work',
    siteName: 'Ahmed — GoHighLevel Developer',
    title,
    description,
    images: ['/images/ahmed-web.jpg'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/ahmed-web.jpg'] },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
