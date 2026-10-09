'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { PROJECTS } from '@/data/projects';
import { ProjectCategory } from '@/lib/types';
import { ArrowUpRight, ExternalLink, Filter, Layers, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function WorkPage() {
  const { lang, isRtl, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.workPage.filterAll },
    { id: 'commercial', label: t.workPage.filterCommercial },
    { id: 'automotive', label: t.workPage.filterAutomotive },
    { id: 'hospitality', label: t.workPage.filterHospitality },
    { id: 'services', label: t.workPage.filterServices },
    { id: 'fintech', label: t.workPage.filterFintech },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeCategory === 'fintech') return p.category === 'fintech' || p.category === 'saas';
        return p.category === activeCategory;
      });

  const projectGroups = [
    {
      id: 'client-work',
      title: t.workPage.clientWorkTitle,
      projects: filteredProjects.filter((project) => project.projectType === 'client'),
    },
    {
      id: 'selected-concepts',
      title: t.workPage.conceptsTitle,
      projects: filteredProjects.filter((project) => project.projectType === 'concept'),
    },
  ].filter((group) => group.projects.length > 0);

  return (
    <div className="pt-32 pb-24 sm:pt-44 bg-[#07080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            {t.workPage.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {t.workPage.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.workPage.subtext}
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-white/10 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-medium transition-all focus:outline-none',
                  isActive
                    ? 'bg-sky-400 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Archive Grid */}
        {projectGroups.map((group) => (
          <section key={group.id} aria-labelledby={`${group.id}-heading`} className="mb-16 last:mb-0">
            <h2 id={`${group.id}-heading`} className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
              {group.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.projects.map((project) => (
            <article
              key={project.slug}
              className="group rounded-3xl bg-[#0c0f17] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-500 hover:border-sky-400/40 hover:shadow-sky-500/10 hover:-translate-y-1"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0d14] border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title[lang]}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                </div>

                {/* Case Intelligence Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{project.industry[lang]}</span>
                    <span className="text-sky-400 font-medium">{project.languages[lang]}</span>
                  </div>

                  <h2 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors leading-snug">
                    {project.title[lang]}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {project.tagline[lang]}
                  </p>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Controls */}
              <div className="p-6 pt-4 flex items-center justify-between gap-3 border-t border-white/5 mt-4">
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
          </section>
        ))}

        {/* Platform Transparency Notice */}
        {/* <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-slate-400 text-center font-mono">
          <p>{t.workPage.platformHonestyNotice}</p>
          <p className="mt-2">{t.workPage.screenshotDisclosure}</p>
        </div> */}

      </div>
    </div>
  );
}
