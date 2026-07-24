'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ContactScreen from '@/components/ContactScreen';
import FooterSection from '@/components/FooterSection';
import Link from 'next/link';
import {ThemeToggle} from '@/components/ThemeToggle';

export default function ContactPage() {
  const router = useRouter();

  const handleNavigate = (tab: string) => {
    if (tab === 'home') router.push('/');
    else router.push(`/${tab}`);
  };

  return (
    <div className="w-full bg-[#EFECE6] dark:bg-[#0f0d0a] min-h-screen font-sans antialiased text-[#1F1F1F] dark:text-[#F5F2EE]">
      <div className="w-full max-w-[1024px] lg:max-w-[1280px] xl:max-w-[1360px] mx-auto min-h-screen bg-[#F5F2EE] dark:bg-[#1a1714] border-x border-[#D1C7BD] dark:border-[#3a3530] shadow-sm flex flex-col justify-between">
        <header className="flex items-center justify-between border-b border-[#E0D8CE] dark:border-[#33302c] px-4 sm:px-8 md:px-10 lg:px-14 py-5 bg-[#F5F2EE] dark:bg-[#1a1714] sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE] hover:opacity-80 transition-opacity">
            A.
          </Link>
          <div className="flex items-center gap-2 sm:gap-6 text-sm text-[#444444] dark:text-[#cccccc] min-w-0 max-w-full">
            <nav className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm font-medium overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              <Link href="/projects" className="text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">
                Work
              </Link>
              <Link href="/about" className="text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">
                About
              </Link>
              <Link href="/skills" className="text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">
                Skills
              </Link>
              <Link href="/experience" className="text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE] transition-colors">
                Experience
              </Link>
              <Link href="/contact" className="font-bold text-[#1F1F1F] dark:text-[#F5F2EE] border-b-2 border-[#1F1F1F] dark:border-[#F5F2EE] pb-0.5">
                Contact
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 w-full px-4 sm:px-8 md:px-12 py-6 sm:py-10">
          <ContactScreen />
        </main>

        <FooterSection onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
