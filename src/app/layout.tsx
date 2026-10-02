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
  metadataBase: new URL('https://ahmed-portfolio.design'),
  title: {
    default: 'Ahmed | High-End Webflow Specialist & Digital Designer',
    template: '%s | Ahmed — Webflow Specialist',
  },
  description:
    'High-end Webflow specialist, web designer, and custom-code developer. 16+ delivered commercial client projects across Kuwait, the GCC, and internationally.',
  keywords: [
    'Webflow Specialist',
    'Webflow Designer',
    'Webflow Developer Kuwait',
    'Bilingual Webflow Arabic RTL',
    'Custom Code Webflow',
    'Premium Web Design GCC',
    'Ahmed Webflow Portfolio',
  ],
  authors: [{ name: 'Ahmed', url: 'https://ahmed-web-3.vercel.app' }],
  creator: 'Ahmed',
  publisher: 'Ahmed',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmed-web-3.vercel.app',
    siteName: 'Ahmed — Webflow Specialist',
    title: 'Ahmed | High-End Webflow Specialist & Digital Designer',
    description:
      'High-end Webflow specialist and web designer with custom-code capability. 16+ delivered client projects across Kuwait and the GCC.',
    images: [
      {
        url: '/images/projects/alawad.png',
        width: 1200,
        height: 630,
        alt: 'Ahmed Webflow Specialist Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed | High-End Webflow Specialist & Digital Designer',
    description:
      'High-end Webflow specialist and web designer with custom-code capability. 16+ delivered client projects across Kuwait and the GCC.',
    images: ['/images/projects/alawad.png'],
  },
  icons: {
    icon: '/favicon.ico',
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
