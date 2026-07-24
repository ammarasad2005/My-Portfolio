'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ExperienceScreen from '@/components/ExperienceScreen';
import FooterSection from '@/components/FooterSection';
import Link from 'next/link';

export default function ExperiencePage() {
  const router = useRouter();

  const handleNavigate = (tab: string) => {
    if (tab === 'home') router.push('/');
    else router.push(`/${tab}`);
  };

  return (
    <div className="w-full bg-[#EFECE6] min-h-screen font-sans antialiased text-[#1F1F1F]">
      <div className="w-full max-w-[1024px] lg:max-w-[1280px] xl:max-w-[1360px] mx-auto min-h-screen bg-[#F5F2EE] border-x border-[#D1C7BD] shadow-sm flex flex-col justify-between">
        <header className="flex items-center justify-between border-b border-[#E0D8CE] px-4 sm:px-8 md:px-10 lg:px-14 py-5 bg-[#F5F2EE] sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-[#1F1F1F] hover:opacity-80 transition-opacity">
            A.
          </Link>
          <div className="flex items-center gap-2 sm:gap-6 text-sm text-[#444444] min-w-0 max-w-full">
            <nav className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm font-medium overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              <Link href="/projects" className="text-[#555555] hover:text-[#1F1F1F] transition-colors">
                Work
              </Link>
              <Link href="/about" className="text-[#555555] hover:text-[#1F1F1F] transition-colors">
                About
              </Link>
              <Link href="/skills" className="text-[#555555] hover:text-[#1F1F1F] transition-colors">
                Skills
              </Link>
              <Link href="/experience" className="font-bold text-[#1F1F1F] border-b-2 border-[#1F1F1F] pb-0.5">
                Experience
              </Link>
              <Link href="/contact" className="text-[#555555] hover:text-[#1F1F1F] transition-colors">
                Contact
              </Link>
            </nav>
            <div className="w-9 h-4.5 sm:w-10 sm:h-5 bg-[#1F1F1F] rounded-full p-0.5 flex items-center justify-end cursor-pointer shadow-xs shrink-0">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-full shadow-xs"></div>
            </div>
          </div>
        </header>

        <main className="flex-1 w-full px-4 sm:px-8 md:px-12 py-6 sm:py-10">
          <ExperienceScreen onNavigate={handleNavigate} />
        </main>

        <FooterSection onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
