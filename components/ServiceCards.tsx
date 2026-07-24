'use client';

import {useState} from 'react';
import {Layout, Server, Database, Rocket, ChevronDown, ChevronUp} from 'lucide-react';

const services = [
  {
    id: 'web-apps',
    icon: Layout,
    title: 'Web Apps',
    description: 'Beautiful, responsive interfaces.',
    stack: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
  },
  {
    id: 'apis',
    icon: Server,
    title: 'APIs & Backends',
    description: 'Secure, scalable & structured.',
    stack: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    id: 'databases',
    icon: Database,
    title: 'Databases',
    description: 'Design, optimize & manage.',
    stack: ['PostgreSQL', 'Supabase', 'Prisma', 'MongoDB'],
  },
  {
    id: 'deployment',
    icon: Rocket,
    title: 'Deployment',
    description: 'Ship reliable products.',
    stack: ['Vercel', 'Docker', 'CI/CD', 'Git'],
  },
] as const;

export function ServiceCards() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between mb-0.5">
        <h2 className="font-mono text-xs font-bold tracking-widest text-[#1F1F1F] dark:text-[#F5F2EE] uppercase">
          WHAT I DO
        </h2>
        <span className="text-[10px] font-mono text-[#777777] dark:text-[#999] md:hidden">
          Tap cards to expand
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          const isExpanded = expandedId === service.id;
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => setExpandedId(isExpanded ? null : service.id)}
              aria-expanded={isExpanded}
              className={`flex flex-col gap-2 p-3 bg-[#EAE5DC]/40 dark:bg-[#222]/40 border rounded-lg transition-all cursor-pointer select-none group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6702C] ${
                isExpanded
                  ? 'border-[#B8AB96] bg-[#EAE5DC]/80 dark:bg-[#222] shadow-xs ring-1 ring-[#B8AB96]/30'
                  : 'border-[#DDD6C9] dark:border-[#3a3a3a] hover:border-[#C8BEAD] hover:bg-[#EAE5DC]/60 dark:hover:bg-[#222]/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#EAE5DC] dark:bg-[#1a1a1a] border border-[#DDD6C9] dark:border-[#3a3a3a] flex items-center justify-center text-[#1F1F1F] dark:text-[#F5F2EE] shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </div>
                <div className="text-[#888888] dark:text-[#999] group-hover:text-[#1F1F1F] dark:group-hover:text-[#F5F2EE] transition-colors">
                  {isExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">
                  {service.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#666666] dark:text-[#aaa] leading-snug">
                  {service.description}
                </p>
              </div>

              {isExpanded && (
                <div className="pt-2 border-t border-[#DDD6C9]/80 dark:border-[#3a3a3a]/80 mt-1 flex flex-col gap-1.5">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#777777] dark:text-[#999]">
                    Domain Tech
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] bg-[#E2DDD3] dark:bg-[#1a1a1a] border border-[#CDC4B5] dark:border-[#3a3a3a] text-[#222222] dark:text-[#ddd] px-1.5 py-0.5 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
