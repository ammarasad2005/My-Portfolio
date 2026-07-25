'use client';

import React, { useState } from 'react';
import { ArrowRight, Layout, Server, Database, Rocket, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/lib/projects';

interface HomeScreenProps {
  onNavigate: (tab: string) => void;
  onOpenCaseStudy: (id: string) => void;
}

export default function HomeScreen({ onNavigate, onOpenCaseStudy }: HomeScreenProps) {
  const [allExpanded, setAllExpanded] = useState(false);

  const services = [
    {
      id: 'web-apps',
      icon: Layout,
      title: 'Web Apps',
      description: 'Interfaces people actually use — not just demo well.',
      stack: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
    },
    {
      id: 'apis',
      icon: Server,
      title: 'APIs & Backends',
      description: 'Auth, rate limits, and API keys that never touch the client.',
      stack: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
    },
    {
      id: 'databases',
      icon: Database,
      title: 'Databases',
      description: 'Schemas that hold up once real people start using the app.',
      stack: ['PostgreSQL', 'Supabase', 'Prisma', 'MongoDB'],
    },
    {
      id: 'deployment',
      icon: Rocket,
      title: 'Deployment',
      description: 'Ships to Vercel, then keeps working — cron jobs, refresh pipelines, the boring stuff.',
      stack: ['Vercel', 'Docker', 'CI/CD', 'Git'],
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* A. MOBILE HERO (Variant 2: Split Bio Micro-Card) */}
      <section className="flex flex-col gap-4 md:hidden pt-1 pb-2">
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE] leading-[1.18]">
          I build full-stack web apps{' '}
          <span className="text-[#D6702C]">that replace manual work.</span>
        </h1>

        {/* Integrated Micro Bio Card */}
        <div className="flex items-center gap-3.5 p-3 bg-[#EAE5DC]/60 dark:bg-[#252220]/60 border border-[#DDD6C9] dark:border-[#3a3530] rounded-lg shadow-2xs relative">
          {/* Taped Micro Photo Frame */}
          <div className="relative shrink-0 pt-1">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#E2D4B9]/90 dark:bg-[#4a4530]/90 border border-[#D4C5A9] dark:border-[#5a5045] rotate-[2deg] z-10"></div>
            <div className="w-16 h-16 bg-white dark:bg-[#252220] p-1 border border-[#E2DDD5] dark:border-[#3a3530] shadow-xs rotate-[-2deg]">
              <div className="w-full h-full relative bg-[#EAE5DC] dark:bg-[#252220] overflow-hidden rounded-2xs">
                <Image
                  src="https://picsum.photos/seed/portrait321/400/400"
                  alt="Muhammad Ammar Asad"
                  fill
                  className="object-cover grayscale contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Bio Details */}
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <h2 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F5F2EE] truncate">Muhammad Ammar Asad</h2>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#2E7D32] dark:text-[#66bb6a] bg-[#E8F5E9] dark:bg-[#1a2e1a] px-1.5 py-0.5 rounded border border-[#C8E6C9] dark:border-[#2e5a30] shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] dark:bg-[#66bb6a] animate-pulse"></span>
                Available
              </span>
            </div>
            <p className="text-xs text-[#555555] dark:text-[#aaaaaa] font-medium">Full-Stack Developer · Intern @ FlyRank AI</p>
            <p className="text-[11px] text-[#666666] dark:text-[#999999] leading-tight">
              📍 Islamabad • CS @ FAST-NUCES
            </p>
          </div>
        </div>

        {/* Tech Stack Quick-Scan Badges */}
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] font-bold text-[#666666] dark:text-[#999999] tracking-wider uppercase">
            CORE TECH STACK
          </span>
          <div className="flex flex-wrap gap-1.5">
            <span className="font-mono text-xs bg-[#EAE5DC] dark:bg-[#252220] border border-[#D8D0C3] dark:border-[#3a3530] text-[#333333] dark:text-[#dddddd] px-2 py-0.5 rounded">
              TypeScript
            </span>
            <span className="font-mono text-xs bg-[#EAE5DC] dark:bg-[#252220] border border-[#D8D0C3] dark:border-[#3a3530] text-[#333333] dark:text-[#dddddd] px-2 py-0.5 rounded">
              Next.js
            </span>
            <span className="font-mono text-xs bg-[#EAE5DC] dark:bg-[#252220] border border-[#D8D0C3] dark:border-[#3a3530] text-[#333333] dark:text-[#dddddd] px-2 py-0.5 rounded">
              Node.js
            </span>
            <span className="font-mono text-xs bg-[#EAE5DC] dark:bg-[#252220] border border-[#D8D0C3] dark:border-[#3a3530] text-[#333333] dark:text-[#dddddd] px-2 py-0.5 rounded">
              PostgreSQL
            </span>
            <span className="font-mono text-xs bg-[#EAE5DC] dark:bg-[#252220] border border-[#D8D0C3] dark:border-[#3a3530] text-[#333333] dark:text-[#dddddd] px-2 py-0.5 rounded">
              Python
            </span>
          </div>
        </div>

        {/* Dual Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center justify-center gap-1.5 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-3.5 py-2.5 rounded-md text-xs font-medium hover:bg-[#333333] dark:bg-[#dddddd] transition-all shadow-xs cursor-pointer min-h-[44px]"
          >
            <span>View Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-1.5 bg-white dark:bg-[#252220] text-[#1F1F1F] dark:text-[#F5F2EE] border border-[#C8C2B5] dark:border-[#4a4540] px-3.5 py-2.5 rounded-md text-xs font-medium hover:bg-[#F5F2EB] transition-all shadow-xs cursor-pointer min-h-[44px]"
          >
            <span>Contact Me</span>
          </button>
        </div>
      </section>

      {/* A. DESKTOP & TABLET HERO (12-Column Grid) */}
      <section className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 pb-4">
        {/* Left Column (Headline, Paragraph, CTA) */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-between gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE] leading-[1.12]">
            I build full-stack web apps{' '}
            <span className="text-[#D6702C]">that replace manual work.</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#555555] dark:text-[#aaaaaa] max-w-[500px] leading-relaxed">
            Full-stack developer in Islamabad. Backend AI Engineer Intern at FlyRank AI. Four projects shipped — one of them live at my own university.
          </p>
          <div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center justify-center gap-2 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-6 py-3 rounded-md text-sm font-medium w-full sm:w-fit hover:bg-[#333333] dark:bg-[#dddddd] transition-all shadow-sm cursor-pointer min-h-[44px]"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column (Polaroid Frame & Annotation Stack) */}
        <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end w-full">
          <div className="flex flex-col items-center pt-2">
            {/* Polaroid Frame */}
            <div className="relative bg-white dark:bg-[#252220] p-3 pb-5 shadow-md border border-[#E2DDD5] dark:border-[#3a3530] rotate-[-2deg] w-[200px] sm:w-[220px] lg:w-[260px]">
              {/* Top Tape Graphic */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#E2D4B9]/80 dark:bg-[#4a4530]/80 border border-[#D4C5A9] dark:border-[#5a5045] rotate-[1deg] z-10"></div>
              {/* Photo Element */}
              <div className="w-full h-[190px] sm:h-[210px] lg:h-[240px] overflow-hidden rounded-sm bg-[#EAE5DC] dark:bg-[#252220] relative">
                <Image
                  src="https://picsum.photos/seed/portrait321/400/400"
                  alt="Developer portrait"
                  fill
                  className="object-cover grayscale contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Hand-Drawn Annotation Group */}
            <div className="mt-4 flex items-center gap-3">
              <svg
                width="28"
                height="36"
                viewBox="0 0 30 40"
                fill="none"
                stroke="#444444"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="rotate-[-10deg]"
              >
                <path d="M 5,5 C 2,20 18,22 10,35" />
                <path d="M 5,30 L 10,35 L 15,30" />
              </svg>
              <div className="flex flex-col font-script text-lg sm:text-xl leading-tight text-[#444444] dark:text-[#cccccc]">
                <span>Frontend</span>
                <span>Backend</span>
                <span>Database</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. "WHAT I DO" SECTION (2x2 Grid on Mobile, 4-Col on Desktop) */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between mb-0.5">
          <h2 className="font-mono text-xs font-bold tracking-widest text-[#1F1F1F] dark:text-[#F5F2EE] uppercase">
            WHAT I DO
          </h2>
          <span className="text-[10px] font-mono text-[#777777] dark:text-[#888888] md:hidden">
            Tap cards to expand
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => setAllExpanded(!allExpanded)}
                className={`flex flex-col gap-2 p-3 bg-[#EAE5DC]/40 dark:bg-[#252220]/40 border rounded-lg transition-all cursor-pointer select-none group ${
                  allExpanded
                    ? 'border-[#B8AB96] dark:border-[#5a5550] bg-[#EAE5DC]/80 dark:bg-[#252220]/80 shadow-xs ring-1 ring-[#B8AB96]/30'
                    : 'border-[#DDD6C9] dark:border-[#3a3530] hover:border-[#C8BEAD] hover:bg-[#EAE5DC]/60 dark:bg-[#252220]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#EAE5DC] dark:bg-[#252220] border border-[#DDD6C9] dark:border-[#3a3530] flex items-center justify-center text-[#1F1F1F] dark:text-[#F5F2EE] shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-[#888888] dark:text-[#777777] group-hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">
                    {allExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">
                    {service.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#666666] dark:text-[#999999] leading-snug">
                    {service.description}
                  </p>
                </div>

                {/* Expanded Domain Tech Stack */}
                {allExpanded && (
                  <div className="pt-2 border-t border-[#DDD6C9]/80 dark:border-[#3a3530]/80 mt-1 flex flex-col gap-1.5">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#777777] dark:text-[#888888]">
                      Domain Tech
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {service.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] bg-[#E2DDD3] border border-[#CDC4B5] dark:border-[#4a4540] text-[#222222] dark:text-[#dddddd] px-1.5 py-0.5 rounded-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* C. "FEATURED PROJECTS" SECTION (2-Column Grid) */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-mono text-xs font-bold tracking-widest text-[#1F1F1F] dark:text-[#F5F2EE] uppercase">
            FEATURED PROJECTS
          </h2>
          <button
            onClick={() => onNavigate('projects')}
            className="font-mono text-xs text-[#1F1F1F] dark:text-[#F5F2EE] hover:underline flex items-center gap-1 cursor-pointer"
          >
            See all projects <span className="text-[#D6702C] font-bold">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenCaseStudy(project.id)}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] max-h-[220px] sm:max-h-[260px] bg-[#E3DDD1] dark:bg-[#252220] rounded-lg border border-[#D0C7B8] dark:border-[#3a3530] overflow-hidden p-2 relative">
                <div className="w-full h-full relative rounded-md overflow-hidden shadow-inner border border-[#C5BCAD] dark:border-[#4a4540]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-[#1F1F1F] dark:text-[#F5F2EE] group-hover:text-[#D6702C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#aaaaaa] truncate">
                  {project.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="font-mono text-[11px] bg-[#EAE5DC] dark:bg-[#252220] border border-[#D8D0C3] dark:border-[#3a3530] text-[#444444] dark:text-[#cccccc] px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* D. BOTTOM STATUS BANNER */}
      <section className="w-full bg-[#E8E2D7] dark:bg-[#2a2622] border border-[#D5CCC0] rounded-md p-4 flex items-center justify-between shadow-sm">
        <p className="text-xs sm:text-sm text-[#444444] dark:text-[#cccccc] font-medium">
          Currently exploring:{' '}
          <span className="font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">
            Agentic AI — not the hype, the version that saves real time without wasting resources.
          </span>
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="text-[#D6702C] font-bold text-sm hover:translate-x-0.5 transition-transform cursor-pointer"
        >
          &rarr;
        </button>
      </section>
    </div>
  );
}
