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

  const projectKind = project.projectType === 'client' ? 'Client Website Case Study' : 'Front-End Website Concept';
  const description = `${project.title.en} — ${projectKind}. ${project.tagline.en}`;

  return {
    title: `${project.title.en} — ${projectKind}`,
    description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title.en} — ${projectKind} | Ahmed`,
      description,
      url: `https://ahmed-web1.vercel.app/work/${project.slug}`,
      images: [{ url: project.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title.en} — ${projectKind} | Ahmed`,
      description,
      images: [project.image],
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
