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
  metadataBase: new URL('https://ahmed-webflow.vercel.app'),
  title: {
    default: 'Ahmed | Webflow Developer for Agencies & GCC Brands',
    template: '%s | Ahmed — Webflow Developer',
  },
  description:
    'Independent Webflow developer for agencies, studios and companies in Kuwait and the GCC. Figma-to-Webflow implementation, custom HTML/CSS/JavaScript, GoHighLevel and Arabic RTL.',
  keywords: [
    'Webflow Developer',
    'Webflow Development',
    'Figma to Webflow',
    'Webflow Developer Kuwait',
    'Webflow Developer GCC',
    'GoHighLevel Developer',
    'Arabic RTL Webflow',
    'Custom Webflow Development',
    'Ahmed Webflow Portfolio',
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
    url: 'https://ahmed-webflow.vercel.app/',
    siteName: 'Ahmed — Webflow Developer',
    title: 'Ahmed | Webflow Developer for Agencies & GCC Brands',
    description:
      'Independent Webflow developer for agencies, studios and companies in Kuwait and the GCC. Figma-to-Webflow implementation, custom development, GoHighLevel and Arabic RTL.',
    images: [
      {
        url: '/images/projects/alawad.png',
        width: 1200,
        height: 630,
        alt: 'Al Awad client website implementation by Ahmed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed | Webflow Developer for Agencies & GCC Brands',
    description:
      'Independent Webflow developer for agencies, studios and companies in Kuwait and the GCC. Figma-to-Webflow, custom code, GoHighLevel and Arabic RTL.',
    images: ['/images/projects/alawad.png'],
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
