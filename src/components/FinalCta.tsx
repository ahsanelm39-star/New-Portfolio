'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FinalCta() {
  const { isRtl, t } = useLanguage();

  return (
    <section className="py-28 sm:py-36 bg-[#07080a] relative overflow-hidden text-center">
      {/* Ambient Radial Illumination */}
      <div className="ambient-glow-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 text-sky-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{t.hero.statusAvailable}</span>
        </div>

        {/* Dramatic Oversized Display Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
          <span>{t.finalCta.headlineStart} </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-blue-500">
            {t.finalCta.headlineAccent}
          </span>
        </h2>

        {/* Concise Supporting Copy */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
          {t.finalCta.subtext}
        </p>

        {/* Action Triggers */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold px-8 py-4 rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 shadow-xl shadow-sky-500/25 hover:shadow-sky-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>{t.finalCta.primaryBtn}</span>
            <ArrowUpRight className={cn('w-4 h-4', isRtl && 'rotate-90')} />
          </Link>

          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all backdrop-blur-sm"
          >
            <span>{t.finalCta.secondaryBtn}</span>
          </Link>
        </div>

        {/* Direct Communication Channels */}
        <div className="pt-8 border-t border-white/5 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium text-slate-400">
          <span>{t.finalCta.orContactVia}</span>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/201097926288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t.finalCta.whatsappBtn}</span>
            </a>
            <span>•</span>
            <a
              href="mailto:ah.dev.3@gmail.com"
              className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.finalCta.emailBtn}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
