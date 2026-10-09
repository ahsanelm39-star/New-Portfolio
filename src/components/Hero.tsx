'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Sparkles, Layers, Code, CheckCircle, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const { isRtl, t, lang } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-white/10 bg-grid-fine">
      {/* Ambient Radial Lighting */}
      <div className="ambient-glow-cyan w-[600px] h-[600px] -top-40 -left-40 opacity-70"></div>
      <div className="ambient-glow-indigo w-[700px] h-[700px] top-1/4 -right-60 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className='flex justify-between max-md:flex-col'>
        <div>
                  {/* Top Eyebrow Status Pill */}
                <div className="flex flex-wrap items-center gap-3 mb-6 ">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 text-sky-300 text-xs font-mono tracking-wide backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                    <span>{t.hero.badge}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="hidden sm:inline">{t.hero.statusAvailable}</span>
                    <span className="sm:hidden">{t.hero.statusAvailable}</span>
                  </div>
                </div>

                {/* Main Display Headline */}
                <div className="max-w-4xl space-y-6">
                  <h1 className="text-4xl sm:text-5xl  lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
                    <span>{t.hero.headlineStart} </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-blue-500">
                      {t.hero.headlineAccent}
                    </span>{' '}
                    <span>{t.hero.headlineEnd}</span>
                  </h1>

                  <p className="text-slate-300 text-base sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-2xl text-pretty">
                    {t.hero.subtext}
                  </p>
                </div>

                {/* CTAs & Subordinate Credibility */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-7 py-4 rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>{t.hero.ctaContact}</span>
                    <ArrowUpRight className={cn('w-4 h-4', isRtl && 'rotate-90')} />
                  </Link>

                  <Link
                    href="#selected-work"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/40 text-slate-200 hover:text-white backdrop-blur-sm transition-all"
                  >
                    <span>{t.hero.ctaWork}</span>
                  </Link>
                </div>

                {/* Subordinate Credibility Pill */}
                <div className="mt-6 text-xs text-slate-400 font-mono tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400/70"></span>
                  <span>{t.hero.credibilityLine}</span>
                </div>
        </div>
        <div className='max-md:mt-6'>
          <Image src={'/images/ahmed.png'} alt='Ahmed, independent Webflow developer' width={500} height={400}
          className='rounded-3xl'/>
        </div>
    </div>

        {/* Cinematic Visual Centerpiece: Floating Layered Architecture Mockup */}
        <div className="mt-14 lg:mt-20 relative max-md:hidden">
          
          {/* Main Architectural Browser Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/0 border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-sm overflow-hidden group">
            
            {/* Window Controls Bar */}
            <div className="bg-[#0b0e17] px-4 py-3 rounded-t-xl sm:rounded-t-2xl border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-3 text-[11px] font-mono text-slate-500 hidden sm:inline-block">
                  https://alawad-arch.com
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-[11px] font-mono text-sky-400">
                <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-sky-400/10 border border-sky-400/20">
                  <Layers className="w-3 h-3" /> {lang === 'ar' ? 'موقع تجاري مباشر' : 'Live Commercial Build'}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300">
                  Arabic RTL & English LTR
                </span>
              </div>
            </div>

            {/* Featured Showcase Project Interface */}
            <div className="relative aspect-[16/9] w-full bg-[#080a10] overflow-hidden">
              <Image
                src="/images/projects/alawad.png"
                alt="Al Awad Residential & Commercial Solutions - Kuwait"
                fill
                priority
                sizes="100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Bottom Subtle Overlay with Live Indicator */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/70 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-semibold mb-1">
                    {t.caseStudy.clientProject}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Al Awad Residential & Commercial Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl line-clamp-1 sm:line-clamp-2 mt-1">
                    {t.hero.featuredDescription}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="https://alawad-arch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md transition-all"
                  >
                    <span>{t.workSection.viewLiveDemo}</span>
                    <ArrowUpRight className={cn('w-3.5 h-3.5', isRtl && 'rotate-90')} />
                  </a>
                  <Link
                    href="/work/al-awad-solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-md shadow-sky-500/20"
                  >
                    <span>{t.workSection.viewCaseStudy}</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Floating Peripheral Spec Badges (Layered Depth) */}

          <div className="hidden lg:flex absolute -top-8 -right-6 glass-panel p-4 rounded-2xl shadow-xl shadow-black/80 items-center gap-3 animate-float [animation-delay:2s]">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">{t.hero.metrics.projectsValue} {t.hero.metrics.projectsLabel}</div>
              <div className="text-[11px] text-slate-400">{t.hero.regionalProof}</div>
            </div>
          </div>

        </div>

        {/* status */}
        <div className="md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 pt-10 md:border-t border-white/10">
          <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono text-sky-400">
              {t.hero.metrics.projectsValue}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              {t.hero.metrics.projectsLabel}
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono text-sky-400">
              {t.hero.metrics.expValue}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              {t.hero.metrics.expLabel}
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono text-sky-400">
              {t.hero.metrics.customCodeValue}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              {t.hero.metrics.customCodeLabel}
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono text-sky-400">
              {t.hero.metrics.gccValue}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              {t.hero.metrics.gccLabel}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
