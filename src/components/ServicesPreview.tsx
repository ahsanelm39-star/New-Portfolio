'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SERVICES } from '@/data/services';
import { ArrowUpRight, Check, Layout, Database, Sparkles, Code, Globe, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ServicesPreview() {
  const { lang, isRtl, t } = useLanguage();

  // Pick top 4 services for homepage preview
  const previewServices = SERVICES.slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-[#07080a] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              {t.servicesSection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.servicesSection.headline}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.servicesSection.subtext}
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all self-start md:self-auto shrink-0"
          >
            <span>{t.servicesSection.viewAllServices}</span>
            <ArrowUpRight className={cn('w-4 h-4', isRtl && 'rotate-90')} />
          </Link>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previewServices.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#0c0f17] border border-white/10 hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
                    {service.badge[lang]}
                  </span>
                  <span className="text-xs font-mono text-slate-500">0{service.order}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {service.title[lang]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.subtitle[lang]}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="pt-2 space-y-2 border-t border-white/5">
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {service.deliverables[lang].slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/5">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>{t.servicesSection.learnMore}</span>
                  <ArrowUpRight className={cn('w-3.5 h-3.5', isRtl && 'rotate-90')} />
                </Link>
                <span className="text-[11px] font-mono text-slate-500">
                  {service.isPrimaryWebflow ? 'Webflow Native' : 'Custom Implementation'}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
