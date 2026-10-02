'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SERVICES } from '@/data/services';
import {
  ArrowUpRight,
  Check,
  Layout,
  Database,
  Sparkles,
  Code,
  Globe,
  TrendingUp,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import FinalCta from '@/components/FinalCta';

export default function ServicesPage() {
  const { lang, isRtl, t } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    layout: <Layout className="w-6 h-6 text-sky-400" />,
    database: <Database className="w-6 h-6 text-sky-400" />,
    sparkles: <Sparkles className="w-6 h-6 text-sky-400" />,
    code: <Code className="w-6 h-6 text-blue-400" />,
    globe: <Globe className="w-6 h-6 text-sky-400" />,
    'trending-up': <TrendingUp className="w-6 h-6 text-sky-400" />,
    'refresh-cw': <RefreshCw className="w-6 h-6 text-sky-400" />,
    'shield-check': <ShieldCheck className="w-6 h-6 text-slate-400" />,
  };

  return (
    <div className="pt-32 pb-24 sm:pt-44 sm:pb-32 bg-[#07080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            {t.servicesPage.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {t.servicesPage.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.servicesPage.subtext}
          </p>
        </div>

        {/* Detailed Services Dossier List */}
        <div className="space-y-12">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className={cn(
                'rounded-3xl p-8 sm:p-12 border transition-all duration-300',
                service.isBackgroundExperience
                  ? 'bg-[#090b10] border-white/5 opacity-90'
                  : 'bg-[#0c0f17] border-white/10 hover:border-sky-400/30'
              )}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Title & Overview (6 cols) */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {iconMap[service.icon] || <Layout className="w-6 h-6 text-sky-400" />}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-sky-400 block font-semibold">
                        {service.badge[lang]}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {service.title[lang]}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                    {service.subtitle[lang]}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {service.description[lang]}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                      {t.servicesPage.idealForLabel}
                    </span>
                    <p className="text-xs text-sky-300/90 leading-relaxed">
                      {service.idealFor[lang]}
                    </p>
                  </div>
                </div>

                {/* Right Column: Deliverables & Action (6 cols) */}
                <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#080a10] border border-white/5 space-y-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
                      {t.servicesPage.deliverablesLabel}
                    </h3>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                      {service.deliverables[lang].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-full bg-white/5 hover:bg-sky-400 hover:text-slate-950 border border-white/10 text-white transition-all shadow-sm"
                    >
                      <span>{t.servicesPage.ctaService}</span>
                      <ArrowUpRight className={cn('w-3.5 h-3.5', isRtl && 'rotate-90')} />
                    </Link>

                    <span className="text-[11px] font-mono text-slate-500">
                      Service 0{service.order}
                    </span>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Closing CTA */}
      <div className="mt-20">
        <FinalCta />
      </div>
    </div>
  );
}
