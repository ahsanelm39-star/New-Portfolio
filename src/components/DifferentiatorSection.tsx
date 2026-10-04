'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Layers, Code, CheckCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DifferentiatorSection() {
  const { isRtl, t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#07080a] relative border-b border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow-cyan w-[500px] h-[500px] -bottom-40 -right-40 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            {t.differentiator.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.differentiator.headline}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.differentiator.subtext}
          </p>
        </div>

        {/* Split Screen Layer Comparison: Design Layer vs Code Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Webflow Native Layer */}
          <div className="rounded-3xl bg-[#0c0f17] border border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-sky-400/30 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-mono text-sky-400 font-semibold">
                  {t.differentiator.leftCardBadge}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {t.differentiator.leftCardTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {t.differentiator.leftCardDescription}
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {t.differentiator.leftCardBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Micro-Preview of Webflow UI Layout */}
            <div className="p-4 rounded-2xl bg-[#08090d] border border-white/5 font-mono text-[11px] text-slate-400 space-y-2">
              <div className="flex items-center justify-between text-slate-500 border-b border-white/5 pb-2">
                <span>DOM Tree</span>
                <span className="text-sky-400">Section &gt; Container &gt; Grid</span>
              </div>
              <div className="text-xs text-slate-300">
                <span className="text-sky-400">.hero-container</span> &#123; display: grid; gap: 3rem; &#125;
              </div>
            </div>

          </div>

          {/* Card 2: Custom Code Layer */}
          <div className="rounded-3xl bg-[#0e121c] border border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-sky-400/30 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
                  <Code className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-mono text-blue-400 font-semibold">
                  {t.differentiator.rightCardBadge}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {t.differentiator.rightCardTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {t.differentiator.rightCardDescription}
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {t.differentiator.rightCardBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Micro-Preview of Custom Code */}
            <div className="p-4 rounded-2xl bg-[#08090d] border border-white/5 font-mono text-[11px] text-slate-400 space-y-2">
              <div className="flex items-center justify-between text-slate-500 border-b border-white/5 pb-2">
                <span>custom-logic.js</span>
                <span className="text-emerald-400">Calculated State</span>
              </div>
              <div className="text-xs text-slate-300 overflow-x-auto">
                <span className="text-purple-400">const</span> quote = computeEstimate(inputs);
              </div>
            </div>

          </div>

        </div>

        {/* Central Manifesto Quote Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-transparent border border-sky-400/20 text-center relative overflow-hidden">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight leading-relaxed max-w-4xl mx-auto">
            {t.differentiator.quote}
          </p>
        </div>

      </div>
    </section>
  );
}
