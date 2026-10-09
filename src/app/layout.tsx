import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const viewport: Viewport = {
  themeColor: '#07080a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmed-web1.vercel.app'),
  title: {
    default: 'Ahmed | Webflow & GoHighLevel Website Developer | Kuwait & GCC',
    template: '%s | Ahmed — Webflow & GHL Developer',
  },
  description:
    'Webflow & GoHighLevel website developer for agencies, studios, and marketing teams in Kuwait and the GCC. Figma and Adobe XD implementation, custom HTML/CSS/JavaScript, and Arabic RTL.',
  keywords: [
    'Webflow Developer',
    'GoHighLevel Website Developer',
    'GHL Website Developer',
    'Webflow Development',
    'Figma to Webflow',
    'Figma to GoHighLevel',
    'Webflow Developer Kuwait',
    'Webflow Developer GCC',
    'Arabic RTL Webflow',
    'Custom Front-End Developer',
    'Ahmed Portfolio',
  ],
  authors: [{ name: 'Ahmed' }],
  creator: 'Ahmed',
  publisher: 'Ahmed',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmed-web1.vercel.app/',
    siteName: 'Ahmed — Webflow & GoHighLevel Developer',
    title: 'Ahmed | Webflow & GoHighLevel Website Developer | Kuwait & GCC',
    description:
      'Webflow & GoHighLevel website developer for agencies, studios, and marketing teams in Kuwait and the GCC. Figma and Adobe XD implementation, custom HTML/CSS/JavaScript, and Arabic RTL.',
    images: [
      {
        url: '/images/ahmed.png',
        width: 1200,
        height: 630,
        alt: 'Al Awad client website implementation by Ahmed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed | Webflow & GoHighLevel Website Developer | Kuwait & GCC',
    description:
      'Webflow & GoHighLevel website developer for agencies, studios, and marketing teams in Kuwait and the GCC. Figma and Adobe XD implementation, custom code, and Arabic RTL.',
    images: ['/images/ahmed.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${plusJakartaSans.variable} ${ibmPlexArabic.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#07080a] text-slate-100 font-sans selection:bg-sky-500/25 selection:text-white relative min-h-screen flex flex-col justify-between">
        <LanguageProvider>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
