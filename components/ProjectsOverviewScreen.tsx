'use client';

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Phase 2 TODO: replace placeholder entries with real project data
// (real screenshots, real metrics, real links).
const projects = [
  {
    id: 'fast-utilities',
    title: 'FAST Utilities',
    subtitle: 'Campus platform used by 500+ students monthly.',
    category: 'Full Stack',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dramaghar',
    title: 'DramaGhar',
    subtitle: 'Drama discovery platform for Pakistani drama lovers.',
    category: 'Web Apps',
    tags: ['Next.js', 'TMDB API', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'portfolio-v1',
    title: 'Personal Portfolio',
    subtitle: 'Minimalist paper-themed tactile developer portfolio.',
    category: 'Tools',
    tags: ['React', 'Tailwind CSS', 'Next.js'],
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  },
] as const;

const CATEGORIES = ['All', 'Full Stack', 'Web Apps', 'Tools'] as const;

export default function ProjectsOverviewScreen() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col gap-8">
      {/* PAGE TITLE & STICKY NOTE */}
      <div className="flex items-center justify-between pt-1">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE]">
          Projects
        </h1>

        <div className="relative bg-[#EAE1BD] border border-[#D8CEAA] shadow-xs rotate-[-2deg] px-4 py-2 rounded-sm select-none">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#F2E7CD]/80 border border-[#D4C5A9]/70 shadow-xs rotate-[1.5deg]"></div>
          <span className="font-script text-2xl sm:text-3xl text-[#2D2B26] block leading-none pt-1">
            What I&apos;ve built
          </span>
        </div>
      </div>

      {/* CATEGORY FILTER BAR */}
      <div className="flex items-center gap-2 border-b border-[#E0D8CE] dark:border-[#2a2a2a] pb-3 text-xs sm:text-sm font-medium">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer min-h-[36px] ${
                isActive
                  ? 'bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] shadow-xs'
                  : 'text-[#555555] dark:text-[#aaa] hover:text-[#1F1F1F] dark:hover:text-[#F5F2EE] hover:bg-[#EAE5DC]/50 dark:hover:bg-[#222]/80'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* VERTICAL PROJECTS LIST */}
      <div className="flex flex-col gap-6">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="flex flex-col sm:flex-row gap-6 p-4 sm:p-5 bg-[#EAE5DC]/30 dark:bg-[#222]/40 border border-[#DDD6C9] dark:border-[#3a3a3a] rounded-lg hover:border-[#B8AB96] dark:hover:border-[#555] hover:bg-[#EAE5DC]/60 dark:hover:bg-[#222]/80 transition-all duration-200 cursor-pointer group shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6702C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F2EE] dark:focus-visible:ring-offset-[#1a1a1a]"
          >
            {/* Project Image Frame */}
            <div className="w-full sm:w-[220px] lg:w-[280px] aspect-[16/10] max-h-[220px] sm:max-h-[260px] bg-[#E3DDD1] dark:bg-[#1a1a1a] rounded-md border border-[#D0C7B8] dark:border-[#3a3a3a] overflow-hidden relative shrink-0">
              {/* Phase 2 TODO: replace with real screenshot */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-between flex-1 py-1">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#1F1F1F] dark:text-[#F5F2EE] group-hover:text-[#D6702C] transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-sm text-[#D6702C] font-bold group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    &rarr;
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#555555] dark:text-[#aaa] leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] bg-[#EAE5DC] dark:bg-[#1a1a1a] border border-[#D8D0C3] dark:border-[#3a3a3a] text-[#444444] dark:text-[#ddd] px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* BOTTOM KRAFT PAPER BANNER */}
      <div className="relative w-full bg-[#E8E0D2] dark:bg-[#222] border border-[#D5CBB9] dark:border-[#3a3a3a] rounded-sm p-5 mt-2 flex items-center justify-between shadow-xs">
        <div className="absolute -top-3 left-6 w-14 h-4 bg-[#F2E7CD]/80 border border-[#D4C5A9]/70 shadow-xs rotate-[-1deg]"></div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
            Interested in a project?
          </h3>
          <p className="font-script text-2xl sm:text-3xl text-[#2D2B26] dark:text-[#F5F2EE] leading-snug">
            Let&apos;s build something great together.
          </p>
        </div>
      </div>
    </div>
  );
}
