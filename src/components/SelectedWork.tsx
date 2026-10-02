'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/lib/types';
import { ArrowUpRight, Layers, ExternalLink, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SelectedWorkProps {
  projects: Project[];
}

export default function SelectedWork({ projects }: SelectedWorkProps) {
  const { lang, isRtl, t } = useLanguage();

  // Featured projects to display on home page
  const featured = projects.filter((p) => p.featured).slice(0, 5);
  const heroProject = featured[0];
  const secondaryProjects = featured.slice(1);

  return (
    <section id="selected-work" className="py-24 sm:py-32 bg-[#07080a] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              {t.workSection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.workSection.headline}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.workSection.subtext}
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all self-start md:self-auto shrink-0"
          >
            <span>{t.workSection.viewAll}</span>
            <ArrowUpRight className={cn('w-4 h-4', isRtl && 'rotate-90')} />
          </Link>
        </div>

        {/* Asymmetric Case Study Layout */}
        <div className="space-y-12">
          
          {/* Card 1: Featured Flagship Case Study (Wide Architectural Spotlight) */}
          {heroProject && (
            <article className="group rounded-3xl bg-[#0c0f17] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-sky-400/40 hover:shadow-sky-500/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Visual Image Presentation (7 cols) */}
                <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[460px] overflow-hidden bg-[#0a0d14]">
                  <Image
                    src={heroProject.image}
                    alt={heroProject.title[lang]}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f17] via-transparent to-black/20 lg:hidden"></div>
                  
                  {/* Platform & Location Badge Floating */}
                  <div className="absolute top-4 start-4 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-sky-400">
                      {heroProject.platform}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300">
                      {heroProject.location[lang]}
                    </span>
                  </div>
                </div>

                {/* Narrative & Case Intelligence (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>{heroProject.industry[lang]}</span>
                      <span className="text-sky-400 font-semibold">{heroProject.languages[lang]}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors">
                      {heroProject.title[lang]}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {heroProject.overview[lang]}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="pt-2 space-y-2">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Key Architectural Highlights:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {heroProject.designDecisions[lang].slice(0, 2).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Triggers */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/work/${heroProject.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-md shadow-sky-500/20"
                    >
                      <span>{t.workSection.viewCaseStudy}</span>
                      <ArrowUpRight className={cn('w-3.5 h-3.5', isRtl && 'rotate-90')} />
                    </Link>

                    {heroProject.liveUrl && (
                      <a
                        href={heroProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        <span>{t.workSection.viewLiveDemo}</span>
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </article>
          )}

          {/* Cards 2-5: Asymmetric 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {secondaryProjects.map((project, index) => (
              <article
                key={project.slug}
                className="group rounded-3xl bg-[#0c0f17] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-500 hover:border-sky-400/40 hover:shadow-sky-500/10"
              >
                <div>
                  {/* Project Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0d14] border-b border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title[lang]}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-4 start-4 flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-sky-400">
                        {project.platform}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300">
                        {project.location[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Project Intelligence */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>{project.industry[lang]}</span>
                      <span className="text-sky-400">{project.languages[lang]}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {project.title[lang]}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {project.overview[lang]}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techTags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-4">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>{t.workSection.viewCaseStudy}</span>
                    <ArrowUpRight className={cn('w-3.5 h-3.5', isRtl && 'rotate-90')} />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.workSection.viewLiveDemo}</span>
                    </a>
                  )}
                </div>

              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
