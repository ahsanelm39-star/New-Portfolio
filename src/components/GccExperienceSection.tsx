'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, MessageCircle, Type, LayoutTemplate } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GccExperienceSection() {
  const { isRtl, t } = useLanguage();

  const iconList = [
    <LayoutTemplate key="0" className="w-5 h-5 text-sky-400" />,
    <Type key="1" className="w-5 h-5 text-sky-400" />,
    <MessageCircle key="2" className="w-5 h-5 text-emerald-400" />,
    <Globe key="3" className="w-5 h-5 text-sky-400" />,
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#090c13] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            {t.gcc.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.gcc.headline}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.gcc.subtext}
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.gcc.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0e121c] border border-white/10 hover:border-sky-400/40 transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {iconList[idx]}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Regional Proof Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#06080d] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>{t.gcc.proofLocation}</span>
          </div>
          <div className="text-xs text-sky-400 font-mono tracking-wider">
            {t.gcc.proofExperience}
          </div>
        </div>

      </div>
    </section>
  );
}
