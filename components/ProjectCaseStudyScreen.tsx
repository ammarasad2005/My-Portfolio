'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface ProjectCaseStudyScreenProps {
  projectId: string | null;
  onBack: () => void;
}

const projectData: Record<string, {
  title: string;
  tagline: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  metrics: { value: string; label: string }[];
}> = {
  'fast-utilities': {
    title: 'FAST Utilities',
    tagline: 'Campus platform used by 500+ students monthly for resource sharing, GPA calculations, and timetable management.',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://fast-utilities.demo.app',
    githubUrl: 'https://github.com/ammarasad/fast-utilities',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    overview: 'FAST Utilities was created to solve daily operational friction experienced by computer science students. It centralizes course resources, attendance calculators, and GPA planners in a single responsive web interface.',
    problem: 'Students spent hours manually tracking attendance percentages, computing target grades, and hunting for course past papers spread across fragmented WhatsApp groups and Google Drive folders.',
    solution: 'Built a unified serverless application powered by Next.js App Router and Supabase. Features real-time grade calculations, cached past-paper search, and clean client-side state persistence.',
    features: [
      'Interactive GPA & Target Grade Calculator',
      'Course Past Papers & Notes Repository with Search',
      'Custom Timetable Visualizer & Schedule Exporter',
      'Real-time Supabase Auth & Cloud Bookmarks',
    ],
    metrics: [
      { value: '500+', label: 'Active Monthly Users' },
      { value: '99.8%', label: 'Uptime on Vercel' },
      { value: '< 200ms', label: 'Average Query Speed' },
      { value: '4.9/5', label: 'User Feedback Rating' },
    ],
  },
  'dramaghar': {
    title: 'DramaGhar',
    tagline: 'A comprehensive discovery platform for Pakistani television dramas, reviews, and trending cast profiles.',
    tags: ['Next.js', 'TMDB API', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://dramaghar.demo.app',
    githubUrl: 'https://github.com/ammarasad/dramaghar',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80',
    overview: 'DramaGhar addresses the lack of dedicated, modern platforms for exploring and rating South Asian television dramas with structured metadata and user reviews.',
    problem: 'Information about popular drama series was scattered across YouTube comments and blog posts, making it difficult for viewers to discover trending shows, cast info, or release schedules.',
    solution: 'Designed a fast, responsive streaming discovery interface using Next.js, integrating external entertainment APIs and client-side rating filters.',
    features: [
      'Trending Dramas Carousel & Category Filtering',
      'Detailed Cast Profiles & Episode Release Tracker',
      'User Ratings & Review System',
      'Lightweight Mobile-First Interface',
    ],
    metrics: [
      { value: '1,200+', label: 'Dramas Indexed' },
      { value: '10k+', label: 'Pageviews / Month' },
      { value: '100', label: 'Google Lighthouse Performance' },
      { value: '< 1s', label: 'First Contentful Paint' },
    ],
  },
  'portfolio-v1': {
    title: 'Personal Portfolio',
    tagline: 'Minimalist paper-themed tactile developer portfolio built with React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    liveUrl: 'https://ammarasad.dev',
    githubUrl: 'https://github.com/ammarasad/portfolio',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    overview: 'A tactile, analog-inspired developer portfolio designed to resemble a physical workbench with taped notes, polaroid frames, and clean typography.',
    problem: 'Standard developer portfolios often look identical with dark mode purple gradients and generic feature grids.',
    solution: 'Engineered a distinctive paper-card design language (`#F5F2EE` canvas, warm neutral tones `#EAE1BD`, custom Reenie Beanie handwriting fonts, and real CSS transforms).',
    features: [
      'Single Page Application Router',
      'Custom Taped Sticky Notes & Polaroid Effects',
      'Responsive Interactive Component System',
      'Zero external visual library dependencies',
    ],
    metrics: [
      { value: '100/100', label: 'SEO & Performance' },
      { value: '0', label: 'External UI Framer Overheads' },
      { value: '< 150KB', label: 'Total Bundle Size' },
      { value: '60fps', label: 'Smooth Animation Runtime' },
    ],
  },
};

export default function ProjectCaseStudyScreen({ projectId, onBack }: ProjectCaseStudyScreenProps) {
  const currentId = projectId && projectData[projectId] ? projectId : 'fast-utilities';
  const project = projectData[currentId];

  return (
    <div className="flex flex-col gap-8">
      {/* BACK NAVIGATION BUTTON */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE] hover:underline transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* PROJECT HERO HEADLINE & TAGS */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE]">
          {project.title}
        </h1>
        <p className="text-sm sm:text-base text-[#555555] dark:text-[#aaaaaa] leading-relaxed max-w-[680px]">
          {project.tagline}
        </p>

        {/* Tags & Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] bg-[#EAE5DC] dark:bg-[#252220] border border-[#D8D0C3] dark:border-[#3a3530] text-[#444444] dark:text-[#cccccc] px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-3.5 py-1.5 rounded text-xs font-medium hover:bg-[#333333] dark:bg-[#dddddd] transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#EAE5DC] dark:bg-[#252220] border border-[#D8D0C3] dark:border-[#3a3530] text-[#1F1F1F] dark:text-[#F5F2EE] px-3.5 py-1.5 rounded text-xs font-medium hover:bg-[#E0D8CE] dark:bg-[#33302c] transition-colors"
            >
              <span>Source</span>
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN TAPED HERO MOCKUP IMAGE */}
      <div className="relative w-full h-[240px] sm:h-[360px] bg-[#DCD5C9] dark:bg-[#252220] rounded-lg border border-[#D0C7B8] dark:border-[#3a3530] p-2 shadow-sm overflow-hidden">
        {/* Top Tape Clip */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4.5 bg-[#E2D4B9]/90 dark:bg-[#4a4530]/90 border border-[#D4C5A9] dark:border-[#5a5045] rotate-[-1deg] z-10"></div>
        <div className="w-full h-full relative rounded overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* NARRATIVE BLOCK: OVERVIEW, PROBLEM, SOLUTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="flex flex-col gap-2 p-4 bg-[#EAE5DC]/30 dark:bg-[#252220]/30 border border-[#DDD6C9] dark:border-[#3a3530] rounded-lg">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
            Overview
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] dark:text-[#aaaaaa] leading-relaxed">
            {project.overview}
          </p>
        </div>

        <div className="flex flex-col gap-2 p-4 bg-[#EAE5DC]/30 dark:bg-[#252220]/30 border border-[#DDD6C9] dark:border-[#3a3530] rounded-lg">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
            The Problem
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] dark:text-[#aaaaaa] leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="flex flex-col gap-2 p-4 bg-[#EAE5DC]/30 dark:bg-[#252220]/30 border border-[#DDD6C9] dark:border-[#3a3530] rounded-lg">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
            The Solution
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] dark:text-[#aaaaaa] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* GRAPH PAPER NOTE: KEY FEATURES & ARCHITECTURE */}
      <div className="relative w-full bg-[#EAE1BD]/60 dark:bg-[#3d3a30]/60 border border-[#D8CEAA] dark:border-[#4a4540] rounded-md p-6 shadow-xs">
        <div className="absolute -top-3 left-8 w-14 h-4 bg-[#F2E7CD]/80 dark:bg-[#4a4530]/80 border border-[#D4C5A9]/70 dark:border-[#5a5045]/70 shadow-2xs rotate-[1deg]"></div>
        
        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
            Key Features &amp; Architecture
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#333333] dark:text-[#dddddd]">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-[#D6702C] font-bold">&bull;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* IMPACT METRICS GRID */}
      <div className="flex flex-col gap-3">
        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
          Impact &amp; Results
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col p-3.5 bg-[#EAE5DC]/50 dark:bg-[#252220]/50 border border-[#DDD6C9] dark:border-[#3a3530] rounded-lg">
              <span className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">
                {metric.value}
              </span>
              <span className="text-xs text-[#666666] dark:text-[#999999] mt-0.5">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
