'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Footer() {
  const { isRtl, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-12 text-slate-400 text-sm relative overflow-hidden">
      {/* Subtle background ambient line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Positioning (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="text-xl font-extrabold text-white tracking-tight">
                AHMED<span className="text-sky-400">.</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footer.brandDesc}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t.hero.statusAvailable}</span>
            </div>
          </div>

          {/* Quick Navigation (Col 6-7) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              {t.footer.navHeading}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  {t.nav.work}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Specializations (Col 8-10) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              {t.footer.servicesHeading}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.footer.webflowService}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.footer.customService}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.footer.languageService}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.footer.ghlService}
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries (Col 11-12) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              {t.footer.contactHeading}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`https://wa.me/201097926288`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors group"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                  <ArrowUpRight className={cn('w-3 h-3 text-slate-500 group-hover:text-emerald-400', isRtl && 'rotate-90')} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:ah.dev.3@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>Email</span>
                  <ArrowUpRight className={cn('w-3 h-3 text-slate-500 group-hover:text-sky-400', isRtl && 'rotate-90')} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Verified Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {t.footer.copyright}
          </div>
          <div className="text-[11px] font-mono text-slate-500">
            {t.footer.verifiedNote}
          </div>
        </div>

      </div>
    </footer>
  );
}
