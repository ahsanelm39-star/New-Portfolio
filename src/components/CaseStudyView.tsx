'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/lib/types';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Layers,
  Sparkles,
  Code,
  Globe,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudyViewProps {
  project: Project;
  nextProject: Project;
}

export default function CaseStudyView({ project, nextProject }: CaseStudyViewProps) {
  const { lang, isRtl, t } = useLanguage();

  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#07080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
          >
            <ArrowLeft className={cn('w-4 h-4', isRtl && 'rotate-180')} />
            <span>{t.caseStudy.backToWork}</span>
          </Link>
        </div>

        {/* Case Study Hero Header */}
        <header className="space-y-6 max-w-4xl mb-14">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-mono text-sky-400">
              {project.industry[lang]}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.caseStudy.verifiedDelivery}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.title[lang]}
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
            {project.tagline[lang]}
          </p>

          {/* Primary Action Button */}
          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-6 py-3.5 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-lg shadow-sky-500/20"
              >
                <span>{t.caseStudy.visitLiveSite}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </header>

        {/* Intelligence Metadata Dossier */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#0c0f17] border border-white/10 mb-14 text-xs">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 block">
              {t.caseStudy.roleLabel}
            </span>
            <span className="font-semibold text-white block">
              {project.role[lang]}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 block">
              {t.caseStudy.platformLabel}
            </span>
            <span className="font-semibold text-sky-400 block font-mono">
              {project.platform}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 block">
              {t.caseStudy.locationLabel}
            </span>
            <span className="font-semibold text-white block">
              {project.location[lang]}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 block">
              {t.caseStudy.languagesLabel}
            </span>
            <span className="font-semibold text-white block">
              {project.languages[lang]}
            </span>
          </div>
        </div>

        {/* Featured Browser Mockup Preview */}
        <div className="rounded-3xl bg-[#0c0f17] border border-white/10 p-2 sm:p-3 shadow-2xl mb-16 overflow-hidden">
          <div className="bg-[#08090d] px-4 py-3 rounded-t-2xl border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="ms-2 text-slate-400 hidden sm:inline">{project.liveUrl}</span>
            </div>
            <span className="text-sky-400">{project.platform}</span>
          </div>

          <div className="relative aspect-[16/10] w-full bg-[#0a0d14]">
            <Image
              src={project.image}
              alt={project.title[lang]}
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0c0f17] border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
                {metric.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {metric.label[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* In-Depth Case Study Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Main Content Body (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <span>{t.caseStudy.clientOverview}</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.overview[lang]}
              </p>
            </section>

            {/* The Challenge Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>{t.caseStudy.theChallenge}</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.challenge[lang]}
              </p>
            </section>

            {/* Strategic Approach */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{t.caseStudy.theApproach}</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.approach[lang]}
              </p>
            </section>

            {/* Architectural Decisions */}
            <section className="space-y-6 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {t.caseStudy.designDecisionsTitle}
              </h2>
              <ul className="space-y-3 text-sm text-slate-300">
                {project.designDecisions[lang].map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#0c0f17] border border-white/5">
                    <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{decision}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Delivered Features */}
            <section className="space-y-6 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {t.caseStudy.keyFeaturesTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures[lang].map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#0c0f17] border border-white/5 text-xs text-slate-300 space-y-1">
                    <span className="text-sky-400 font-mono text-[10px] block">0{idx + 1}</span>
                    <p className="leading-relaxed">{feat}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Strategic Takeaways */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {t.caseStudy.takeawaysTitle}
              </h2>
              <div className="space-y-3">
                {project.keyTakeaways[lang].map((takeaway, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-sky-950/20 border border-sky-400/20 text-xs sm:text-sm text-sky-200 leading-relaxed">
                    {takeaway}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Dossier (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0f17] border border-white/10 space-y-6 sticky top-28">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                {t.caseStudy.projectMetaTitle}
              </h3>

              {project.platformContextNote && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-sky-400 block mb-1">Production Context:</span>
                  {project.platformContextNote[lang]}
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2">
                <span className="text-xs text-slate-400 block">Implementation Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Link Button */}
              {project.liveUrl && (
                <div className="pt-4 border-t border-white/5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
                  >
                    <span>{t.caseStudy.visitLiveSite}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  </a>
                </div>
              )}

              {/* Direct Project Consultation */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <span className="text-xs text-slate-300 font-semibold block">Need a similar site?</span>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold transition-all shadow-md shadow-sky-500/20"
                >
                  <span>{t.caseStudy.ctaBtn}</span>
                  <ArrowUpRight className={cn('w-3.5 h-3.5', isRtl && 'rotate-90')} />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Navigator: Next Project Preview */}
        {nextProject && (
          <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-slate-500 block mb-1">
                {t.caseStudy.nextProject}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white hover:text-sky-400 transition-colors">
                <Link href={`/work/${nextProject.slug}`}>
                  {nextProject.title[lang]}
                </Link>
              </h4>
              <span className="text-xs text-slate-400">{nextProject.industry[lang]}</span>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all self-start sm:self-auto"
            >
              <span>Explore Study</span>
              <ArrowRight className={cn('w-4 h-4', isRtl && 'rotate-180')} />
            </Link>
          </div>
        )}

      </div>
    </article>
  );
}
