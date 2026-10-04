'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, CheckCircle2, History } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AboutStoryPreview() {
  const { isRtl, t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#090c13] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              {t.aboutSection.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.aboutSection.headline}
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{t.aboutSection.p1}</p>
              <p>{t.aboutSection.p2}</p>
              <p className="text-slate-200 font-medium">{t.aboutSection.p3}</p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all shadow-sm"
              >
                <span>{t.aboutSection.ctaAbout}</span>
                <ArrowUpRight className={cn('w-4 h-4', isRtl && 'rotate-90')} />
              </Link>
            </div>
          </div>

          {/* Evolution Steps Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 rounded-3xl bg-[#0c0f17] border border-white/10 space-y-6">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <History className="w-4 h-4 text-sky-400" />
                <span>{t.aboutSection.evolutionTitle}</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:start-3.5 before:w-0.5 before:bg-white/10">
                {t.aboutSection.evolutionSteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 ps-2">
                    <span className="w-7 h-7 rounded-full bg-[#121622] border border-sky-400/40 text-[11px] font-mono text-sky-400 flex items-center justify-center shrink-0 z-10">
                      {step.phase}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
