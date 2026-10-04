'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import FinalCta from '@/components/FinalCta';

export default function AboutPage() {
  const { lang, isRtl, t } = useLanguage();

  return (
    <div className="pt-32 pb-24 sm:pt-44 sm:pb-32 bg-[#07080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            {t.aboutPage.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {t.aboutPage.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
            {t.aboutPage.intro}
          </p>
        </div>

        {/* Narrative & Agency Background Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.aboutSection.headline}
            </h2>
            <p>{t.aboutSection.p1}</p>
            <p>{t.aboutSection.p2}</p>
            <p className="text-slate-200 font-medium">{t.aboutSection.p3}</p>
            
          </div>

          {/* Side Dossier: Verified Track Record */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0c0f17] border border-white/10 space-y-6">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>{t.aboutPage.snapshotTitle}</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-400">{t.aboutPage.snapshotExperience}</span>
                  <span className="text-white font-mono font-semibold">{t.aboutPage.snapshotExperienceValue}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-400">{t.aboutPage.snapshotProjects}</span>
                  <span className="text-sky-400 font-mono font-semibold">{t.aboutPage.snapshotProjectsValue}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-400">{t.aboutPage.snapshotRegional}</span>
                  <span className="text-white font-mono font-semibold">{t.aboutPage.snapshotRegionalValue}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-400">{t.aboutPage.snapshotLanguages}</span>
                  <span className="text-white font-mono font-semibold">{t.aboutPage.snapshotLanguagesValue}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-400">{t.aboutPage.snapshotSpecialization}</span>
                  <span className="text-sky-400 font-mono font-semibold">{t.aboutPage.snapshotSpecializationValue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{t.aboutPage.snapshotAgencyExperience}</span>
                  <span className="text-slate-300 font-mono">{t.aboutPage.snapshotAgencyValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Operating Principles Grid */}
        <div className="space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              {t.aboutPage.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.aboutPage.principlesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.aboutPage.principles.map((principle) => (
              <div
                key={principle.number}
                className="p-8 sm:p-10 rounded-3xl bg-[#0c0f17] border border-white/10 space-y-4 hover:border-sky-400/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
                    {t.aboutPage.principleLabel} {principle.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Closing CTA */}
      <div className="mt-20">
        <FinalCta />
      </div>
    </div>
  );
}
