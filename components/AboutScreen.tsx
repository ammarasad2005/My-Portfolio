'use client';

import React from 'react';
import { Code2, Lightbulb, GraduationCap, Blocks } from 'lucide-react';

interface AboutScreenProps {
  onNavigate?: (tab: string) => void;
}

export default function AboutScreen({ onNavigate }: AboutScreenProps) {
  return (
    <div className="flex flex-col gap-10">
      {/* HERO "ABOUT ME" SECTION (12-Column Grid) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center pt-1 pb-2">
        {/* Left Column: Bio + Stat Counters */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE]">
            About Me
          </h1>
          
          <p className="text-sm sm:text-base text-[#444444] dark:text-[#cccccc] leading-relaxed max-w-[520px]">
            I&apos;m Muhammad Ammar Asad, a full-stack web developer and 6th-semester B.S. Computer Science student at FAST-NUCES Islamabad. I build end-to-end web apps with TypeScript, React, Next.js, Node.js, and PostgreSQL — four deployed projects spanning campus utilities, ride-hailing integration, Chrome extensions, and streaming platforms. Seeking a full-stack development internship.
          </p>

          {/* 4-Column Stat Counter Grid (2x2 on mobile, 4-col on sm+) */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-2">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">4</span>
              <span className="text-[11px] sm:text-xs text-[#666666] dark:text-[#999999] leading-tight mt-0.5">Deployed Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">200+</span>
              <span className="text-[11px] sm:text-xs text-[#666666] dark:text-[#999999] leading-tight mt-0.5">Dramas Indexed (DramaGhar)</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">10</span>
              <span className="text-[11px] sm:text-xs text-[#666666] dark:text-[#999999] leading-tight mt-0.5">Campus Tools (FAST Utilities)</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">6th</span>
              <span className="text-[11px] sm:text-xs text-[#666666] dark:text-[#999999] leading-tight mt-0.5">Semester CS Student</span>
            </div>
          </div>
        </div>

        {/* Right Column: Taped Workspace Desk Photo */}
        <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end relative">
          <div className="relative w-[200px] sm:w-[230px] lg:w-[270px] h-[200px] sm:h-[220px] lg:h-[250px] bg-white dark:bg-[#252220] p-2.5 border border-[#E2DDD5] dark:border-[#3a3530] shadow-sm rounded-xs">
            {/* Adhesive Tape */}
            <div className="absolute -top-3.5 right-4 w-12 h-4 bg-[#E2D4B9]/90 dark:bg-[#4a4530]/90 border border-[#D4C5A9] dark:border-[#5a5045] rotate-[3deg] z-10"></div>
            {/* Workspace Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80" 
              alt="Workspace Setup"
              className="w-full h-full object-cover rounded-2xs grayscale contrast-105"
            />
          </div>
        </div>
      </section>

      <div className="border-b border-[#E0D8CE] dark:border-[#33302c] my-1"></div>

      {/* CORE PRINCIPLES STACK */}
      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
          CORE PRINCIPLES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Item 1 */}
          <div className="flex items-start gap-4 p-3.5 rounded-lg border border-[#DDD6C9] dark:border-[#3a3530] bg-[#EAE5DC]/30 dark:bg-[#252220]/30 hover:bg-[#EAE5DC]/60 dark:bg-[#252220]/60 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#EAE5DC] dark:bg-[#252220] border border-[#DDD6C9] dark:border-[#3a3530] flex items-center justify-center text-[#1F1F1F] dark:text-[#F5F2EE] shrink-0 shadow-xs">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">Clean Code</h3>
              <p className="text-xs text-[#666666] dark:text-[#999999]">I refuse to ship a feature I haven&apos;t tested end-to-end.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 p-3.5 rounded-lg border border-[#DDD6C9] dark:border-[#3a3530] bg-[#EAE5DC]/30 dark:bg-[#252220]/30 hover:bg-[#EAE5DC]/60 dark:bg-[#252220]/60 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#EAE5DC] dark:bg-[#252220] border border-[#DDD6C9] dark:border-[#3a3530] flex items-center justify-center text-[#1F1F1F] dark:text-[#F5F2EE] shrink-0 shadow-xs">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">Problem Solver</h3>
              <p className="text-xs text-[#666666] dark:text-[#999999]">I built a Chrome extension because I got tired of clicking Download 47 times.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4 p-3.5 rounded-lg border border-[#DDD6C9] dark:border-[#3a3530] bg-[#EAE5DC]/30 dark:bg-[#252220]/30 hover:bg-[#EAE5DC]/60 dark:bg-[#252220]/60 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#EAE5DC] dark:bg-[#252220] border border-[#DDD6C9] dark:border-[#3a3530] flex items-center justify-center text-[#1F1F1F] dark:text-[#F5F2EE] shrink-0 shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">Continuous Learner</h3>
              <p className="text-xs text-[#666666] dark:text-[#999999]">Currently exploring system design, AI integration, and multi-agent orchestration.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-4 p-3.5 rounded-lg border border-[#DDD6C9] dark:border-[#3a3530] bg-[#EAE5DC]/30 dark:bg-[#252220]/30 hover:bg-[#EAE5DC]/60 dark:bg-[#252220]/60 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#EAE5DC] dark:bg-[#252220] border border-[#DDD6C9] dark:border-[#3a3530] flex items-center justify-center text-[#1F1F1F] dark:text-[#F5F2EE] shrink-0 shadow-xs">
              <Blocks className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">Builder Mindset</h3>
              <p className="text-xs text-[#666666] dark:text-[#999999]">Four deployed projects, two hackathons, one volunteer stint — I build things.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH SCRAPBOOK PARCHMENT NOTE */}
      <div className="relative w-full bg-[#E8E0D2] dark:bg-[#2a2622] border border-[#D5CBB9] dark:border-[#3a3530] rounded-sm p-6 mt-2 shadow-sm">
        {/* Tape Graphic */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#E2D4B9] dark:bg-[#4a4530] border border-[#D4C5A9] dark:border-[#5a5045] rotate-[-1deg] z-10"></div>
        
        <div className="flex flex-col gap-3 relative z-10">
          <h3 className="text-sm sm:text-base font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">
            Tech I enjoy working with
          </h3>
          
          <div className="font-mono text-xs sm:text-sm text-[#333333] dark:text-[#dddddd] space-y-1.5 leading-relaxed tracking-wide">
            <p>TypeScript &bull; React &bull; Next.js &bull; Node.js</p>
            <p>PostgreSQL (Supabase) &bull; MongoDB (Atlas)</p>
            <p>OAuth 2.0 &bull; GitHub Actions &bull; Chrome Extension MV3</p>
          </div>
        </div>

        {/* Red Stamp Seal */}
        <div className="absolute bottom-3 right-4 w-16 h-16 rounded-full border-2 border-[#C04A38]/60 dark:border-[#d65a48]/60 flex items-center justify-center rotate-[-12deg] pointer-events-none opacity-80 select-none">
          <span className="font-mono text-[9px] font-bold text-[#C04A38] dark:text-[#d65a48] uppercase text-center leading-tight">
            CHECKED<br/>&amp; PASSED
          </span>
        </div>
      </div>
    </div>
  );
}
