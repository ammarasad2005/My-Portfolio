'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterSectionProps {
  onNavigate?: (tab: string) => void;
}

export default function FooterSection({ onNavigate }: FooterSectionProps) {
  const handleNav = (tab: string, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(tab);
    }
  };

  return (
    <footer className="w-full border-t border-[#E0D8CE] dark:border-[#33302c] bg-[#F5F2EE] dark:bg-[#1a1714] px-4 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-10 relative overflow-hidden font-sans text-[#1F1F1F] dark:text-[#F5F2EE] antialiased">
      <div className="w-full flex flex-col gap-8">
        
        {/* MOBILE FOOTER (Level 1: 2-Col Split, Level 2: 4-Col Grid) */}
        <div className="flex flex-col gap-6 md:hidden">
          {/* LEVEL 1: Virtual 2-Column Split */}
          <div className="grid grid-cols-2 gap-3.5 items-start">
            {/* Column 1: Brand Logo, Tagline & Social Icons */}
            <div className="flex flex-col gap-2.5">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE]">
                A.
              </span>
              <p className="text-[11px] text-[#555555] dark:text-[#aaaaaa] leading-relaxed">
                Full-stack developer in Islamabad. Backend AI Engineer Intern at FlyRank AI.
              </p>

              {/* Social Icons Row */}
              <div className="flex items-center gap-2.5 text-[#1F1F1F] dark:text-[#F5F2EE] pt-0.5">
                <a href="https://github.com/ammarasad2005" target="_blank" rel="noopener noreferrer" className="hover:text-[#D6702C] transition-colors" aria-label="GitHub">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/muhammad-ammar-asad" target="_blank" rel="noopener noreferrer" className="hover:text-[#D6702C] transition-colors" aria-label="LinkedIn">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="mailto:ammarasad321993@gmail.com" className="hover:text-[#D6702C] transition-colors" aria-label="Email">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 3l5.377 3.84 5.377-3.84h-10.754zm-3.623 12v-10.323l8.373 5.981 8.373-5.981v10.323h-16.746z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Contracted Desk Sketch Card with Tape on TOP-LEFT CANVAS FRAME */}
            <div className="flex justify-end w-full pt-1">
              <div className="relative w-full max-w-[145px] h-[140px] border border-[#D8CEBA] dark:border-[#3a3530] bg-[#EFEADF]/60 p-2 rounded-xs shadow-2xs">
                {/* Diagonal Tape Clip on Canvas Frame (Leaves corner uncovered, stays outside photo) */}
                <div className="absolute -top-1 -left-1 w-9 h-3.5 bg-[#E2D4B9]/90 dark:bg-[#4a4530]/90 border border-[#D4C5A9] dark:border-[#5a5045] -rotate-[38deg] z-10 shadow-2xs pointer-events-none"></div>
                
                <div className="w-full h-full relative overflow-hidden">
                  <Image 
                    src="/assets/desk_sketch_illustration.webp" 
                    alt="Developer Workbench Sketch" 
                    fill
                    className="object-contain opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* LEVEL 2: Virtual 4-Column Grid below Horizontal Boundary */}
          <div className="grid grid-cols-4 gap-2.5 items-start pt-4 border-t border-[#E0D8CE]/60 dark:border-[#33302c]/60">
            {/* Cols 1 & 2 (col-span-2): GET IN TOUCH */}
            <div className="col-span-2 flex flex-col gap-2">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
                GET IN TOUCH
              </h3>
              <p className="text-[11px] text-[#555555] dark:text-[#aaaaaa] leading-snug">
                Open to full-stack and backend AI engineering roles.
              </p>
              <Link
                href="/contact"
                onClick={(e) => handleNav('contact', e)}
                className="inline-flex items-center justify-center gap-1 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-2.5 py-1.5 rounded text-[11px] font-medium hover:bg-[#333333] dark:bg-[#dddddd] transition-all shadow-2xs w-fit cursor-pointer min-h-[38px] mt-0.5"
              >
                <span>Start Conversation</span>
                <span>&rarr;</span>
              </Link>

              {/* Code-Rendered Sticky Note */}
              <div className="relative mt-1 bg-[#EAE1BD] dark:bg-[#3d3a30] border border-[#D8CEAA] dark:border-[#4a4540] shadow-2xs rotate-[2deg] px-2.5 py-1 rounded-2xs w-fit">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-5 h-2 bg-[#E2D4B9]/80 dark:bg-[#4a4530]/80 border border-[#D4C5A9] dark:border-[#5a5045] shadow-2xs"></div>
                <span className="font-script text-xs text-[#333333] dark:text-[#dddddd] leading-none block select-none">
                  Thanks for stopping by! 😊
                </span>
              </div>
            </div>

            {/* Col 3 (col-span-1): NAVIGATION */}
            <div className="col-span-1 flex flex-col gap-2">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
                NAV
              </h3>
              <ul className="flex flex-col gap-1.5 text-[11px] text-[#555555] dark:text-[#aaaaaa]">
                <li><Link href="/" onClick={(e) => handleNav('home', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">Home</Link></li>
                <li><Link href="/about" onClick={(e) => handleNav('about', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">About</Link></li>
                <li><Link href="/projects" onClick={(e) => handleNav('projects', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">Projects</Link></li>
                <li><Link href="/experience" onClick={(e) => handleNav('experience', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">Experience</Link></li>
                <li><Link href="/contact" onClick={(e) => handleNav('contact', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Col 4 (col-span-1): RESOURCES */}
            <div className="col-span-1 flex flex-col gap-2">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
                RESOURCES
              </h3>
              <ul className="flex flex-col gap-1.5 text-[11px] text-[#555555] dark:text-[#aaaaaa]">
                <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">Resume</a></li>
                <li><a href="https://github.com/ammarasad2005" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">GitHub</a></li>
                <li><Link href="/projects" onClick={(e) => handleNav('projects', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">Projects</Link></li>
                <li><Link href="/skills" onClick={(e) => handleNav('skills', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">Tech Stack</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* DESKTOP & TABLET FOOTER GRID */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* COLUMN 1: BRAND & SOCIALS (Tablet: 6 cols | Desktop: 3 cols) */}
          <div className="col-span-1 md:col-span-6 lg:col-span-3 flex flex-col gap-4">
            <span className="font-serif text-3xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE]">
              A.
            </span>
            <p className="text-xs text-[#555555] dark:text-[#aaaaaa] leading-relaxed max-w-[280px]">
              Full-stack developer in Islamabad. I build web apps that replace manual work.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3.5 text-[#1F1F1F] dark:text-[#F5F2EE] pt-1">
              <a href="https://github.com/ammarasad2005" target="_blank" rel="noopener noreferrer" className="hover:text-[#D6702C] transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/muhammad-ammar-asad" target="_blank" rel="noopener noreferrer" className="hover:text-[#D6702C] transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:ammarasad321993@gmail.com" className="hover:text-[#D6702C] transition-colors" aria-label="Email">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 3l5.377 3.84 5.377-3.84h-10.754zm-3.623 12v-10.323l8.373 5.981 8.373-5.981v10.323h-16.746z"/></svg>
              </a>
            </div>

            {/* Code-Rendered Sticky Note: "Let's connect!" */}
            <div className="relative mt-2 flex items-center gap-2">
              <div className="relative bg-[#EAE1BD] dark:bg-[#3d3a30] border border-[#D8CEAA] dark:border-[#4a4540] shadow-xs rotate-[-2deg] px-3.5 py-1.5 rounded-2xs hover:rotate-[-0.5deg] transition-transform duration-200">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-2.5 bg-[#E2D4B9]/80 dark:bg-[#4a4530]/80 border border-[#D4C5A9] dark:border-[#5a5045] shadow-2xs"></div>
                <span className="font-script text-xl sm:text-2xl text-[#333333] dark:text-[#dddddd] leading-none block select-none">
                  Let&apos;s connect!
                </span>
              </div>
              <svg className="w-6 h-7 text-[#444444] dark:text-[#cccccc]" viewBox="0 0 30 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 30 C 5 15, 15 5, 25 10" strokeLinecap="round" />
                <path d="M20 5 L 26 10 L 22 16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* COLUMN 2: NAVIGATION LINKS (Tablet: 3 cols | Desktop: 2 cols) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
              NAVIGATION
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#555555] dark:text-[#aaaaaa]">
              <li><Link href="/" onClick={(e) => handleNav('home', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/about" onClick={(e) => handleNav('about', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors cursor-pointer">About</Link></li>
              <li><Link href="/projects" onClick={(e) => handleNav('projects', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors cursor-pointer">Projects</Link></li>
              <li><Link href="/experience" onClick={(e) => handleNav('experience', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors cursor-pointer">Experience</Link></li>
              <li><Link href="/contact" onClick={(e) => handleNav('contact', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: RESOURCES LINKS (Tablet: 3 cols | Desktop: 2 cols) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
              RESOURCES
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#555555] dark:text-[#aaaaaa]">
              <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">Resume (PDF)</a></li>
              <li><a href="https://github.com/ammarasad2005" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">GitHub</a></li>
              <li><Link href="/projects" onClick={(e) => handleNav('projects', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors cursor-pointer">Projects</Link></li>
              <li><Link href="/skills" onClick={(e) => handleNav('skills', e)} className="hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors cursor-pointer">Tech Stack</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: GET IN TOUCH & CTAS (Tablet: 7 cols | Desktop: 3 cols) */}
          <div className="col-span-1 md:col-span-7 lg:col-span-3 flex flex-col gap-3.5">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
              GET IN TOUCH
            </h3>
            
            <p className="text-xs text-[#555555] dark:text-[#aaaaaa] leading-relaxed">
              Let&apos;s collaborate and create something meaningful.
            </p>

            <Link
              href="/contact"
              onClick={(e) => handleNav('contact', e)}
              className="inline-flex items-center justify-center gap-2 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-4 py-2.5 rounded-md text-xs font-medium hover:bg-[#333333] dark:bg-[#dddddd] transition-all shadow-xs w-fit cursor-pointer min-h-[44px]"
            >
              <span>Start a Conversation</span>
              <span>&rarr;</span>
            </Link>

            {/* Code-Rendered Sticky Note: "Thanks for stopping by! 😊" */}
            <div className="relative mt-1 bg-[#EAE1BD] dark:bg-[#3d3a30] border border-[#D8CEAA] dark:border-[#4a4540] shadow-2xs rotate-[3deg] px-3.5 py-1.5 rounded-2xs w-fit hover:rotate-[1.5deg] transition-transform duration-200">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-2.5 bg-[#E2D4B9]/80 dark:bg-[#4a4530]/80 border border-[#D4C5A9] dark:border-[#5a5045] shadow-2xs"></div>
              <span className="font-script text-base sm:text-lg text-[#333333] dark:text-[#dddddd] leading-none block select-none">
                Thanks for stopping by! 😊
              </span>
            </div>
          </div>

          {/* COLUMN 5: DESK SKETCH ILLUSTRATION CARD (Tablet: 5 cols | Desktop: 2 cols) */}
          <div className="col-span-1 md:col-span-5 lg:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[200px] h-[180px] sm:h-[210px] lg:h-[220px] border border-[#D8CEBA] dark:border-[#3a3530] bg-[#EFEADF]/60 p-2 rounded-xs shadow-2xs">
              {/* Diagonal Tape Clip on Canvas Frame (Leaves corner uncovered, stays outside photo) — matches mobile */}
              <div className="absolute -top-1 -left-1 w-9 h-3.5 bg-[#E2D4B9]/90 dark:bg-[#4a4530]/90 border border-[#D4C5A9] dark:border-[#5a5045] -rotate-[38deg] z-10 shadow-2xs pointer-events-none"></div>
              
              <div className="w-full h-full relative overflow-hidden">
                <Image 
                  src="/assets/desk_sketch_illustration.webp" 
                  alt="Developer Workbench Sketch" 
                  fill
                  className="object-contain opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>

        {/* SUB-FOOTER LEGAL BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#666666] dark:text-[#999999] pt-4 border-t border-[#E0D8CE]/60 dark:border-[#33302c]/60 gap-2">
          <span>&copy; {new Date().getFullYear()} Muhammad Ammar Asad. All rights reserved.</span>
          <span>Built with Next.js + Tailwind CSS ❤️</span>
        </div>

      </div>
    </footer>
  );
}

