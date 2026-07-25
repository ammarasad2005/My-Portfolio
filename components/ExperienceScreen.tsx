'use client';

import React from 'react';
import { motion } from 'motion/react';
import { experiences } from '@/lib/experience';

interface ExperienceScreenProps {
  onNavigate?: (tab: string) => void;
}

const RubberStampSeal = () => (
  <div className="relative rotate-[-15deg] opacity-80 pointer-events-none select-none shrink-0 text-[#3A3630]">
    <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 120 120" fill="none" stroke="currentColor">
      <circle cx="60" cy="60" r="54" strokeWidth="2" />
      <circle cx="60" cy="60" r="50" strokeWidth="1" strokeDasharray="60 1" />
      <circle cx="60" cy="60" r="42" strokeWidth="1.2" strokeDasharray="5 3" />
      <circle cx="60" cy="60" r="38" strokeWidth="1" />

      <path id="keepArcExp" d="M 30 60 A 30 30 0 0 1 90 60" fill="none" />
      <text fill="currentColor" className="font-mono text-[10px] font-bold tracking-[0.22em]">
        <textPath href="#keepArcExp" startOffset="50%" textAnchor="middle">
          ★ KEEP ★
        </textPath>
      </text>

      <g>
        <rect x="14" y="47" width="92" height="26" fill="#F5F2EE" stroke="currentColor" strokeWidth="1.8" rx="2" />
        <text x="60" y="64" textAnchor="middle" fill="currentColor" className="font-mono text-[12px] font-black tracking-[0.22em]">
          SHIPPING
        </text>
      </g>

      <path id="bottomArcExp" d="M 90 60 A 30 30 0 0 1 30 60" fill="none" />
      <text fill="currentColor" className="font-mono text-[8px] font-bold tracking-[0.18em]">
        <textPath href="#bottomArcExp" startOffset="50%" textAnchor="middle">
          • PORTFOLIO SEAL •
        </textPath>
      </text>
    </svg>
  </div>
);

export default function ExperienceScreen({ onNavigate }: ExperienceScreenProps) {
  return (
    <div className="flex flex-col gap-8">
      {/* PAGE TITLE & STICKY NOTE */}
      <div className="flex items-center justify-between pt-1">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE]">
          Experience
        </h1>

        {/* Taped Sticky Note */}
        <div className="relative bg-[#EAE1BD] dark:bg-[#3d3a30] border border-[#D8CEAA] dark:border-[#4a4540] shadow-xs rotate-[3deg] px-5 py-2.5 rounded-2xs select-none">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-12 h-4.5 bg-[#F4ECDA]/85 dark:bg-[#4a4530]/85 backdrop-blur-[1px] border border-[#D8CCAF]/70 shadow-2xs rotate-[-1deg]"></div>
          <span className="font-script text-2xl sm:text-3xl text-[#2D2B26] dark:text-[#F5F2EE] block leading-tight text-center pt-1">
            The journey<br />so far
          </span>
        </div>
      </div>

      {/* VERTICAL CHRONOLOGICAL TIMELINE */}
      <div className="relative pl-6 ml-2 border-l-2 border-[#D5CBB9] dark:border-[#3a3530] flex flex-col gap-8 my-2 pt-2">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex flex-col gap-1 pb-2 border-b border-[#E0D8CE]/40 dark:border-[#33302c]/40 last:border-b-0">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] top-1.5 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative flex items-center justify-center"
              >
                <motion.span
                  animate={{ scale: [1, 1.85, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.4,
                  }}
                  className="absolute h-3.5 w-3.5 rounded-full bg-[#1F1F1F] dark:bg-[#F5F2EE]"
                />
                <span className="relative w-3.5 h-3.5 rounded-full bg-[#1F1F1F] dark:bg-[#F5F2EE] border-2 border-[#F5F2EE] dark:border-[#1a1714] shadow-2xs" />
              </motion.div>
            </div>
            
            {/* Date Badge */}
            <span className="font-mono text-xs text-[#666666] dark:text-[#999999] font-medium">
              {exp.period}
            </span>

            {/* Role Title */}
            <h3 className="text-base sm:text-lg font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">
              {exp.role}{exp.organization ? ` · ${exp.organization}` : ''}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#555555] dark:text-[#aaaaaa] max-w-[500px] leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      {/* BOTTOM CTA & TACTILE STAMP */}
      <div className="flex items-center justify-between pt-4 relative">
        <button
          onClick={() => onNavigate && onNavigate('projects')}
          className="inline-flex items-center gap-2 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-5 py-2.5 rounded-md text-xs sm:text-sm font-medium hover:bg-[#333333] dark:bg-[#dddddd] transition-all shadow-xs cursor-pointer"
        >
          <span>View all projects</span>
          <span className="text-sm">&rarr;</span>
        </button>

        {/* Circular "KEEP SHIPPING" Rubber Stamp Seal */}
        <RubberStampSeal />
      </div>
    </div>
  );
}
