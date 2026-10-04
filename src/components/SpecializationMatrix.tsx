'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Layers, Code, Globe, Database, Sparkles, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SpecializationMatrix() {
  const { isRtl, t } = useLanguage();

  const iconMap = [
    <Layers key="0" className="w-5 h-5 text-sky-400" />,
    <Code key="1" className="w-5 h-5 text-sky-400" />,
    <Globe key="2" className="w-5 h-5 text-sky-400" />,
    <Database key="3" className="w-5 h-5 text-sky-400" />,
    <Sparkles key="4" className="w-5 h-5 text-sky-400" />,
    <Gauge key="5" className="w-5 h-5 text-sky-400" />,
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#090c13] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            {t.specialization.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.specialization.headline}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.specialization.subtext}
          </p>
        </div>

        {/* Designed Capabilities Architectural Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.specialization.items.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-[#0e121c] border border-white/10 hover:border-sky-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-400/20 transition-all">
                    {iconMap[index]}
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-sky-400/70 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="group-hover:text-slate-400 transition-colors">{t.specialization.capabilityLabel}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400/40 group-hover:bg-sky-400 transition-colors"></span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
