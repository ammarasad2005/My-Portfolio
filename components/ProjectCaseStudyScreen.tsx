'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProject } from '@/lib/projects';

interface ProjectCaseStudyScreenProps {
  projectId: string | null;
}

export default function ProjectCaseStudyScreen({ projectId }: ProjectCaseStudyScreenProps) {
  const resolved = projectId ? getProject(projectId) : undefined;
  const project = resolved ?? getProject('fast-utilities');

  if (!project) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      {/* BACK NAVIGATION BUTTON */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE] hover:underline transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
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
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-3.5 py-1.5 rounded text-xs font-medium hover:bg-[#333333] dark:bg-[#dddddd] transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
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
