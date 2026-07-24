import Link from 'next/link';
import Image from 'next/image';
import {ArrowRight} from 'lucide-react';
import {ServiceCards} from '@/components/ServiceCards';

// Phase 2 TODO: replace placeholder project entries with real project data
// (real screenshots, real metrics, real links).
const featuredProjects = [
  {
    id: 'fast-utilities',
    title: 'FAST Utilities',
    blurb: 'Campus platform used by 500+ students monthly.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
  },
  {
    id: 'dramaghar',
    title: 'DramaGhar',
    blurb: 'Drama discovery platform for Pakistani drama lovers.',
    image:
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'TMDB API', 'Tailwind'],
  },
] as const;

export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-10">
      {/* A. MOBILE HERO (Variant 2: Split Bio Micro-Card) */}
      <section className="flex flex-col gap-4 md:hidden pt-1 pb-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE] leading-[1.18]">
          I build digital products that solve{' '}
          <span className="text-[#D6702C]">real problems.</span>
        </h1>

        <div className="flex items-center gap-3.5 p-3 bg-[#EAE5DC]/60 dark:bg-[#222]/60 border border-[#DDD6C9] dark:border-[#3a3a3a] rounded-lg shadow-xs relative">
          <div className="relative shrink-0 pt-1">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#E2D4B9]/90 border border-[#D4C5A9] rotate-[2deg] z-10"></div>
            <div className="w-16 h-16 bg-white p-1 border border-[#E2DDD5] shadow-xs rotate-[-2deg]">
              {/* Phase 2 TODO: replace placeholder portrait with a real photo. */}
              <div className="w-full h-full relative bg-[#EAE5DC] overflow-hidden rounded-sm">
                <Image
                  src="https://picsum.photos/seed/portrait321/400/400"
                  alt="Ammar Asad"
                  fill
                  className="object-cover grayscale contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <h2 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F5F2EE] truncate">
                Ammar Asad
              </h2>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#2E7D32] bg-[#E8F5E9] px-1.5 py-0.5 rounded border border-[#C8E6C9] shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse"></span>
                Available
              </span>
            </div>
            <p className="text-xs text-[#555555] dark:text-[#aaaaaa] font-medium">
              Full Stack Developer
            </p>
            <p className="text-[11px] text-[#666666] dark:text-[#999] leading-tight">
              Islamabad, Pakistan &bull; Clean, scalable web apps
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] font-bold text-[#666666] dark:text-[#999] tracking-wider uppercase">
            CORE TECH STACK
          </span>
          <div className="flex flex-wrap gap-1.5">
            {['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'].map((t) => (
              <span
                key={t}
                className="font-mono text-xs bg-[#EAE5DC] dark:bg-[#222] border border-[#D8D0C3] dark:border-[#3a3a3a] text-[#333333] dark:text-[#ddd] px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-1.5 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-3.5 py-2.5 rounded-md text-xs font-medium hover:bg-[#333333] dark:hover:bg-[#e5e5e5] transition-all shadow-xs cursor-pointer min-h-[44px]"
          >
            <span>View Work</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 bg-white dark:bg-[#222] text-[#1F1F1F] dark:text-[#F5F2EE] border border-[#C8C2B5] dark:border-[#3a3a3a] px-3.5 py-2.5 rounded-md text-xs font-medium hover:bg-[#F5F2EB] dark:hover:bg-[#2a2a2a] transition-all shadow-xs cursor-pointer min-h-[44px]"
          >
            <span>Contact Me</span>
          </Link>
        </div>
      </section>

      {/* A. DESKTOP & TABLET HERO (12-Column Grid) */}
      <section className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 pb-4">
        <div className="col-span-1 md:col-span-7 flex flex-col justify-between gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE] leading-[1.12]">
            I build digital products that solve{' '}
            <span className="text-[#D6702C]">real problems.</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#555555] dark:text-[#aaaaaa] max-w-[500px] leading-relaxed">
            Full stack developer focused on building clean, scalable and impactful web
            applications.
          </p>
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-6 py-3 rounded-md text-sm font-medium w-full sm:w-fit hover:bg-[#333333] dark:hover:bg-[#e5e5e5] transition-all shadow-sm cursor-pointer min-h-[44px]"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end w-full">
          <div className="flex flex-col items-center pt-2">
            <div className="relative bg-white dark:bg-[#222] p-3 pb-5 shadow-md border border-[#E2DDD5] dark:border-[#3a3a3a] rotate-[-2deg] w-[200px] sm:w-[220px] lg:w-[260px]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#E2D4B9]/80 border border-[#D4C5A9] rotate-[1deg] z-10"></div>
              {/* Phase 2 TODO: replace placeholder portrait with a real photo. */}
              <div className="w-full h-[190px] sm:h-[210px] lg:h-[240px] overflow-hidden rounded-sm bg-[#EAE5DC] relative">
                <Image
                  src="https://picsum.photos/seed/portrait321/400/400"
                  alt="Developer portrait"
                  fill
                  className="object-cover grayscale contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

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
                aria-hidden="true"
              >
                <path d="M 5,5 C 2,20 18,22 10,35" />
                <path d="M 5,30 L 10,35 L 15,30" />
              </svg>
              <div className="flex flex-col font-script text-lg sm:text-xl leading-tight text-[#444444] dark:text-[#aaa]">
                <span>Builder</span>
                <span>Problem Solver</span>
                <span>Lifelong Learner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. "WHAT I DO" SECTION (2x2 on mobile, 4-col on desktop) */}
      <ServiceCards />

      {/* C. "FEATURED PROJECTS" SECTION (2-Column Grid) */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-mono text-xs font-bold tracking-widest text-[#1F1F1F] dark:text-[#F5F2EE] uppercase">
            FEATURED PROJECTS
          </h2>
          <Link
            href="/projects"
            className="font-mono text-xs text-[#1F1F1F] dark:text-[#F5F2EE] hover:underline flex items-center gap-1 cursor-pointer"
          >
            See all projects <span className="text-[#D6702C] font-bold" aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="flex flex-col gap-3 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6702C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F2EE] dark:focus-visible:ring-offset-[#1a1a1a] rounded-lg"
            >
              <div className="w-full aspect-[16/10] max-h-[220px] sm:max-h-[260px] bg-[#E3DDD1] dark:bg-[#222] rounded-lg border border-[#D0C7B8] dark:border-[#3a3a3a] overflow-hidden p-2 relative">
                <div className="w-full h-full relative rounded-md overflow-hidden shadow-inner border border-[#C5BCAD] dark:border-[#444]">
                  {/* Phase 2 TODO: replace with real screenshot */}
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
                <p className="text-xs text-[#555555] dark:text-[#aaaaaa]">{project.blurb}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] bg-[#EAE5DC] dark:bg-[#222] border border-[#D8D0C3] dark:border-[#3a3a3a] text-[#444444] dark:text-[#ddd] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* D. BOTTOM STATUS BANNER */}
      <section className="w-full bg-[#E8E2D7] dark:bg-[#222] border border-[#D5CCC0] dark:border-[#3a3a3a] rounded-md p-4 flex items-center justify-between shadow-sm">
        <p className="text-xs sm:text-sm text-[#444444] dark:text-[#ccc] font-medium">
          Currently exploring:{' '}
          <span className="font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">
            System Design, AI Tools, and better ways to ship.
          </span>
        </p>
        <Link
          href="/contact"
          aria-label="Get in touch"
          className="text-[#D6702C] font-bold text-sm hover:translate-x-0.5 transition-transform cursor-pointer"
        >
          &rarr;
        </Link>
      </section>
    </div>
  );
}
