'use client';

import React from 'react';

// Standard Brand SVG Components
const ReactLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="9" fill="#61DAFB" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="5.5" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="5.5" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="5.5" transform="rotate(120 50 50)" />
  </svg>
);

const TypeScriptLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="18" fill="#3178C6" />
    <path d="M22 36 H58 M40 36 V76" stroke="white" strokeWidth="9" strokeLinecap="round" />
    <path d="M78 45 C78 37 64 37 64 49 C64 64 78 61 78 72 C78 81 63 81 63 73" stroke="white" strokeWidth="9" strokeLinecap="round" fill="none" />
  </svg>
);

const NextJsLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="48" fill="#000000" />
    <path d="M35 28 V72 M35 28 L68 72 M65 28 V52" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TailwindLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <path d="M20 45 C25 30 38 28 45 35 C52 42 58 45 68 45 C78 45 83 38 85 30 C80 45 68 47 60 40 C52 33 46 30 35 30 C25 30 22 38 20 45 Z" fill="#06B6D4" />
    <path d="M10 65 C15 50 28 48 35 55 C42 62 48 65 58 65 C68 65 73 58 75 50 C70 65 58 67 50 60 C42 53 36 50 25 50 C15 50 12 58 10 65 Z" fill="#06B6D4" />
  </svg>
);

const Html5Logo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <path d="M15 10 L22 85 L50 93 L78 85 L85 10 H15 Z" fill="#E34F26" />
    <path d="M50 17 V85 L72 79 L78 17 H50 Z" fill="#EF652A" />
    <path d="M50 32 H30 L31 44 H50 V56 H32 L33 68 L50 73 V84 L23 76 L20 32 H50 V32 Z" fill="#FFFFFF" />
    <path d="M50 32 H70 L68 56 H50 V44 H58 L59 32 H50 V32 Z" fill="#EEEEEE" />
  </svg>
);

const Css3Logo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <path d="M15 10 L22 85 L50 93 L78 85 L85 10 H15 Z" fill="#1572B6" />
    <path d="M50 17 V85 L72 79 L78 17 H50 Z" fill="#33A9DC" />
    <path d="M50 32 H28 L29 44 H50 V32 Z M30 56 H50 V68 L34 63.5 L33 52 H21 L23 76 L50 84 V72 M50 56 L68 56 L66 76 L50 84 V72" fill="#FFFFFF" />
  </svg>
);

const NodeJsLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <path d="M50 8 L88 30 V74 L50 96 L12 74 V30 Z" fill="#339933" />
    <path d="M50 24 L75 38 V66 L50 80 L25 66 V38 Z" stroke="white" strokeWidth="5" fill="none" />
    <circle cx="50" cy="52" r="8" fill="white" />
  </svg>
);

const ExpressJsLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="18" fill="#1F1F1F" />
    <text x="50" y="64" textAnchor="middle" fontSize="38" fontWeight="bold" fontFamily="monospace" fill="#F5F2EE">ex</text>
  </svg>
);

const PostgreSqlLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" fill="#336791" />
    <path d="M35 30 C30 35 28 45 32 55 C35 62 42 65 48 65 C55 65 62 58 65 50 C68 40 62 32 52 30 C45 28 38 29 35 30 Z" stroke="white" strokeWidth="5" fill="none" />
    <circle cx="42" cy="42" r="3" fill="white" />
    <path d="M50 55 C55 60 60 62 68 62 M62 50 C68 52 72 56 72 62" stroke="white" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const SupabaseLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <path d="M55 8 L15 58 H48 L42 92 L85 42 H52 L55 8 Z" fill="#3ECF8E" />
  </svg>
);

const RestApiLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="18" fill="#E05D44" />
    <path d="M22 50 H78 M62 34 L78 50 L62 66" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="28" cy="50" r="5" fill="white" />
  </svg>
);

const GitLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <path d="M92 45 L55 8 C52 5 48 5 45 8 L8 45 C5 48 5 52 8 55 L45 92 C48 95 52 95 55 92 L92 55 C95 52 95 48 92 45 Z" fill="#F05032" />
    <circle cx="68" cy="40" r="7" fill="white" />
    <circle cx="38" cy="70" r="7" fill="white" />
    <circle cx="38" cy="40" r="7" fill="white" />
    <path d="M38 40 V70 M38 52 C50 52 68 48 68 40" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
  </svg>
);

const GitHubLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="#181717">
    <path fillRule="evenodd" clipRule="evenodd" d="M50 5C25.15 5 5 25.15 5 50C5 69.88 17.89 86.74 35.79 92.7C38.04 93.11 38.86 91.72 38.86 90.53C38.86 89.47 38.82 86.65 38.8 82.93C26.28 85.65 23.64 76.89 23.64 76.89C21.59 71.69 18.64 70.31 18.64 70.31C14.56 67.52 18.95 67.58 18.95 67.58C23.46 67.9 25.83 72.21 25.83 72.21C29.84 79.08 36.35 77.09 38.91 75.94C39.32 73.04 40.48 71.06 41.76 69.94C31.77 68.8 21.27 64.94 21.27 47.66C21.27 42.74 23.03 38.71 25.9 35.56C25.44 34.42 23.9 29.84 26.34 23.66C26.34 23.66 30.12 22.45 38.72 28.28C42.31 27.28 46.16 26.78 50 26.76C53.84 26.78 57.69 27.28 61.29 28.28C69.88 22.45 73.65 23.66 73.65 23.66C76.1 29.84 74.56 34.42 74.1 35.56C76.98 38.71 78.72 42.74 78.72 47.66C78.72 64.99 68.2 68.79 58.18 69.91C59.8 71.3 61.24 74.05 61.24 78.26C61.24 84.28 61.19 89.15 61.19 90.53C61.19 91.73 62 93.14 64.28 92.7C82.17 86.72 95 69.87 95 50C95 25.15 74.85 5 50 5Z" />
  </svg>
);

const DockerLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <path d="M10 60 C10 80 30 88 55 88 C85 88 95 65 92 50 C88 50 82 52 78 56 C70 42 55 45 50 55 C40 55 30 52 10 60 Z" fill="#2496ED" />
    <rect x="25" y="42" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="37" y="42" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="49" y="42" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="37" y="31" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="49" y="31" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="61" y="42" width="10" height="9" rx="1" fill="#2496ED" />
  </svg>
);

const VercelLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="#000000">
    <path d="M50 15 L92 85 H8 Z" />
  </svg>
);

const VsCodeLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <path d="M72 10 L92 20 V80 L72 90 L32 58 L12 72 L5 67 V33 L12 28 L32 42 L72 10 Z" fill="#007ACC" />
    <path d="M72 10 L92 20 V80 L72 90 L48 50 L72 10 Z" fill="#0066B8" />
    <path d="M5 33 L32 58 L5 67 V33 Z" fill="#0052A3" />
  </svg>
);

const FigmaLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
    <path d="M32 20 C23 20 16 27 16 36 C16 45 23 52 32 52 H48 V20 H32 Z" fill="#F24E1E" />
    <path d="M68 20 C59 20 52 27 52 36 V52 H68 C77 52 84 45 84 36 C84 27 77 20 68 20 Z" fill="#FF7262" />
    <path d="M68 52 C59 52 52 59 52 68 C52 77 59 84 68 84 C77 84 84 77 84 68 C84 59 77 52 68 52 Z" fill="#1ABCFE" />
    <path d="M32 52 C23 52 16 59 16 68 C16 77 23 84 32 84 C41 84 48 77 48 68 V52 H32 Z" fill="#0ACF83" />
    <path d="M32 84 C23 84 16 77 16 68 C16 59 23 52 32 52 C41 52 48 59 48 68 C48 77 41 84 32 84 Z" fill="#A259FF" />
  </svg>
);

export default function SkillsAndToolsScreen() {
  const frontendSkills = [
    { name: 'React', icon: <ReactLogo /> },
    { name: 'TypeScript', icon: <TypeScriptLogo /> },
    { name: 'Next.js', icon: <NextJsLogo /> },
    { name: 'Tailwind CSS', icon: <TailwindLogo /> },
    { name: 'HTML5', icon: <Html5Logo /> },
    { name: 'CSS3', icon: <Css3Logo /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <NodeJsLogo /> },
    { name: 'Express.js', icon: <ExpressJsLogo /> },
    { name: 'PostgreSQL', icon: <PostgreSqlLogo /> },
    { name: 'Supabase', icon: <SupabaseLogo /> },
    { name: 'REST APIs', icon: <RestApiLogo /> },
  ];

  const toolsSkills = [
    { name: 'Git', icon: <GitLogo /> },
    { name: 'GitHub', icon: <GitHubLogo /> },
    { name: 'Docker', icon: <DockerLogo /> },
    { name: 'Vercel', icon: <VercelLogo /> },
    { name: 'VS Code', icon: <VsCodeLogo /> },
    { name: 'Figma', icon: <FigmaLogo /> },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* PAGE TITLE & STICKY NOTE */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE]">
          Skills &amp; Tools
        </h1>

        {/* Taped Sticky Note */}
        <div className="relative bg-[#EAE1BD] dark:bg-[#3d3a30] border border-[#D8CEAA] dark:border-[#4a4540] shadow-xs rotate-[2deg] px-2.5 py-1 sm:px-4 sm:py-2 rounded-2xs select-none shrink-0">
          <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-3 sm:h-4 bg-[#F2E7CD]/80 dark:bg-[#4a4530]/80 backdrop-blur-[1px] border border-[#D4C5A9]/70 dark:border-[#5a5045]/70 shadow-2xs rotate-[-1.5deg]"></div>
          <span className="font-script text-base sm:text-2xl text-[#2D2B26] dark:text-[#F5F2EE] block leading-none pt-0.5 sm:pt-1">
            The tools I use
          </span>
        </div>
      </div>

      {/* CATEGORIZED TECH ICON GRIDS */}
      <div className="flex flex-col gap-6 pt-2">
        {/* Group 1: Frontend */}
        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
            Frontend
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {frontendSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-12 h-12 bg-[#EAE5DC] dark:bg-[#252220] border border-[#DDD6C9] dark:border-[#3a3530] rounded-xl flex items-center justify-center p-2.5 shadow-2xs group-hover:scale-105 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-[11px] font-medium text-[#1F1F1F] dark:text-[#F5F2EE] text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-[#E0D8CE]/50 dark:border-[#33302c]/50"></div>

        {/* Group 2: Backend */}
        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
            Backend
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {backendSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-12 h-12 bg-[#EAE5DC] dark:bg-[#252220] border border-[#DDD6C9] dark:border-[#3a3530] rounded-xl flex items-center justify-center p-2.5 shadow-2xs group-hover:scale-105 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-[11px] font-medium text-[#1F1F1F] dark:text-[#F5F2EE] text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-[#E0D8CE]/50 dark:border-[#33302c]/50"></div>

        {/* Group 3: Tools & Others */}
        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
            Tools &amp; Others
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {toolsSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-12 h-12 bg-[#EAE5DC] dark:bg-[#252220] border border-[#DDD6C9] dark:border-[#3a3530] rounded-xl flex items-center justify-center p-2.5 shadow-2xs group-hover:scale-105 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-[11px] font-medium text-[#1F1F1F] dark:text-[#F5F2EE] text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM "ALWAYS LEARNING" KRAFT NOTE BANNER */}
      <div className="relative w-full bg-[#E8E0D2] dark:bg-[#2a2622] border border-[#D5CBB9] dark:border-[#3a3530] rounded-sm p-5 mt-2 flex items-center justify-between shadow-xs">
        <div className="absolute -top-3 left-6 w-14 h-4.5 bg-[#F2E7CD]/80 dark:bg-[#4a4530]/80 backdrop-blur-[1px] border border-[#D4C5A9]/70 dark:border-[#5a5045]/70 shadow-2xs rotate-[-1deg]"></div>
        
        <div className="flex flex-col gap-1 pr-4">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
            Always learning
          </h3>
          <p className="font-script text-2xl sm:text-3xl text-[#2D2B26] dark:text-[#F5F2EE] leading-snug">
            Currently exploring System Design, AI Integration and DevOps.
          </p>
        </div>

        {/* Hand-drawn Lightbulb Doodle SVG */}
        <svg className="w-12 h-12 text-[#3A3833] shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M18 29 C14 25 12 19 16 13 C20 7 28 7 32 13 C36 19 34 25 30 29 V33 H18 V29 Z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 24 C23 21 25 21 27 24" strokeLinecap="round" strokeWidth="1.4"/>
          <path d="M20 37 H28" strokeLinecap="round"/>
          <path d="M22 41 H26" strokeLinecap="round"/>
          <path d="M24 3 V7" strokeLinecap="round"/>
          <path d="M7 19 H11" strokeLinecap="round"/>
          <path d="M37 19 H41" strokeLinecap="round"/>
          <path d="M11 9 L14 12" strokeLinecap="round"/>
          <path d="M37 9 L34 12" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}
