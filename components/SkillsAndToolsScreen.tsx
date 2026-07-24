import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiPostman,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiVscodium,
  SiFigma,
} from 'react-icons/si';
import type {IconType} from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const frontendSkills: Skill[] = [
  {name: 'React', icon: SiReact, color: '#61DAFB'},
  {name: 'TypeScript', icon: SiTypescript, color: '#3178C6'},
  {name: 'Next.js', icon: SiNextdotjs, color: '#000000'},
  {name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4'},
  {name: 'HTML5', icon: SiHtml5, color: '#E34F26'},
  {name: 'CSS3', icon: SiCss, color: '#1572B6'},
];

const backendSkills: Skill[] = [
  {name: 'Node.js', icon: SiNodedotjs, color: '#339933'},
  {name: 'Express.js', icon: SiExpress, color: '#000000'},
  {name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1'},
  {name: 'Supabase', icon: SiSupabase, color: '#3ECF8E'},
  {name: 'REST APIs', icon: SiPostman, color: '#FF6C37'}, // Postman icon as REST API proxy
];

const toolsSkills: Skill[] = [
  {name: 'Git', icon: SiGit, color: '#F05032'},
  {name: 'GitHub', icon: SiGithub, color: '#181717'},
  {name: 'Docker', icon: SiDocker, color: '#2496ED'},
  {name: 'Vercel', icon: SiVercel, color: '#000000'},
  {name: 'VS Code', icon: SiVscodium, color: '#007ACC'},
  {name: 'Figma', icon: SiFigma, color: '#F24E1E'},
];

function SkillCard({skill}: {skill: Skill}) {
  const Icon = skill.icon;
  return (
    <div className="flex flex-col items-center gap-1.5 group cursor-default">
      <div className="w-12 h-12 bg-[#EAE5DC] dark:bg-[#1a1a1a] border border-[#DDD6C9] dark:border-[#3a3a3a] rounded-xl flex items-center justify-center p-2.5 shadow-xs group-hover:scale-105 transition-transform">
        <Icon className="w-full h-full" style={{color: skill.color}} aria-hidden="true" />
      </div>
      <span className="text-[11px] font-medium text-[#1F1F1F] dark:text-[#F5F2EE] text-center">
        {skill.name}
      </span>
    </div>
  );
}

function SkillGroup({title, skills}: {title: string; skills: Skill[]}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
        {title}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsAndToolsScreen() {
  return (
    <div className="flex flex-col gap-8">
      {/* PAGE TITLE & STICKY NOTE */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE]">
          Skills &amp; Tools
        </h1>

        <div className="relative bg-[#EAE1BD] border border-[#D8CEAA] shadow-xs rotate-[2deg] px-2.5 py-1 sm:px-4 sm:py-2 rounded-sm select-none shrink-0">
          <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-3 sm:h-4 bg-[#F2E7CD]/80 border border-[#D4C5A9]/70 shadow-xs rotate-[-1.5deg]"></div>
          <span className="font-script text-base sm:text-2xl text-[#2D2B26] block leading-none pt-0.5 sm:pt-1">
            The tools I use
          </span>
        </div>
      </div>

      {/* CATEGORIZED TECH ICON GRIDS */}
      <div className="flex flex-col gap-6 pt-2">
        <SkillGroup title="Frontend" skills={frontendSkills} />
        <div className="border-b border-[#E0D8CE]/50 dark:border-[#2a2a2a]/50"></div>
        <SkillGroup title="Backend" skills={backendSkills} />
        <div className="border-b border-[#E0D8CE]/50 dark:border-[#2a2a2a]/50"></div>
        <SkillGroup title="Tools & Others" skills={toolsSkills} />
      </div>

      {/* BOTTOM "ALWAYS LEARNING" KRAFT NOTE BANNER */}
      <div className="relative w-full bg-[#E8E0D2] dark:bg-[#222] border border-[#D5CBB9] dark:border-[#3a3a3a] rounded-sm p-5 mt-2 flex items-center justify-between shadow-xs">
        <div className="absolute -top-3 left-6 w-14 h-4 bg-[#F2E7CD]/80 border border-[#D4C5A9]/70 shadow-xs rotate-[-1deg]"></div>

        <div className="flex flex-col gap-1 pr-4">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-[#F5F2EE]">
            Always learning
          </h3>
          <p className="font-script text-2xl sm:text-3xl text-[#2D2B26] dark:text-[#F5F2EE] leading-snug">
            Currently exploring System Design, AI Integration and DevOps.
          </p>
        </div>

        <svg className="w-12 h-12 text-[#3A3833] dark:text-[#aaa] shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
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
