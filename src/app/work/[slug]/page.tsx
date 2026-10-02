import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PROJECTS } from '@/data/projects';
import CaseStudyView from '@/components/CaseStudyView';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title.en} | Case Study`,
    description: project.overview.en,
    openGraph: {
      title: `${project.title.en} — Webflow Case Study by Ahmed`,
      description: project.overview.en,
      images: [{ url: project.image }],
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  // Find next project for bottom navigator
  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return <CaseStudyView project={project} nextProject={nextProject} />;
}
