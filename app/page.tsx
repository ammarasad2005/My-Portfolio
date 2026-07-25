'use client';

import React, { useState } from 'react';
import HomeScreen from '@/components/HomeScreen';
import AboutScreen from '@/components/AboutScreen';
import ProjectsOverviewScreen from '@/components/ProjectsOverviewScreen';
import ProjectCaseStudyScreen from '@/components/ProjectCaseStudyScreen';
import SkillsAndToolsScreen from '@/components/SkillsAndToolsScreen';
import ExperienceScreen from '@/components/ExperienceScreen';
import ContactScreen from '@/components/ContactScreen';
import FooterSection from '@/components/FooterSection';
import {ThemeToggle} from '@/components/ThemeToggle';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenCaseStudy = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveTab('case-study');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#EFECE6] dark:bg-[#0f0d0a] min-h-screen font-sans antialiased text-[#1F1F1F] dark:text-[#F5F2EE]">
      {/* UNIFIED GLOBAL SHELL */}
      <div className="w-full max-w-[1024px] lg:max-w-[1280px] xl:max-w-[1360px] mx-auto min-h-screen bg-[#F5F2EE] dark:bg-[#1a1714] border-x border-[#D1C7BD] dark:border-[#3a3530] shadow-sm flex flex-col justify-between">
        
        {/* PERSISTENT GLOBAL HEADER */}
        <header className="flex items-center justify-between border-b border-[#E0D8CE] dark:border-[#33302c] px-4 sm:px-8 md:px-10 lg:px-14 py-5 bg-[#F5F2EE] dark:bg-[#1a1714] sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
          <button 
            onClick={() => handleNavigate('home')} 
            className="font-serif text-2xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE] hover:opacity-80 transition-opacity cursor-pointer"
          >
            A.
          </button>
          
          <div className="flex items-center gap-2 sm:gap-6 text-sm text-[#444444] dark:text-[#cccccc] min-w-0 max-w-full">
            <nav className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm font-medium overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              <button
                onClick={() => handleNavigate('projects')}
                className={`transition-colors cursor-pointer ${
                  activeTab === 'projects' || activeTab === 'case-study'
                    ? 'font-bold text-[#1F1F1F] dark:text-[#F5F2EE] border-b-2 border-[#1F1F1F] dark:border-[#F5F2EE] pb-0.5'
                    : 'text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE]'
                }`}
              >
                Work
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className={`transition-colors cursor-pointer ${
                  activeTab === 'about'
                    ? 'font-bold text-[#1F1F1F] dark:text-[#F5F2EE] border-b-2 border-[#1F1F1F] dark:border-[#F5F2EE] pb-0.5'
                    : 'text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE]'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavigate('skills')}
                className={`transition-colors cursor-pointer ${
                  activeTab === 'skills'
                    ? 'font-bold text-[#1F1F1F] dark:text-[#F5F2EE] border-b-2 border-[#1F1F1F] dark:border-[#F5F2EE] pb-0.5'
                    : 'text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE]'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => handleNavigate('experience')}
                className={`transition-colors cursor-pointer ${
                  activeTab === 'experience'
                    ? 'font-bold text-[#1F1F1F] dark:text-[#F5F2EE] border-b-2 border-[#1F1F1F] dark:border-[#F5F2EE] pb-0.5'
                    : 'text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE]'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className={`transition-colors cursor-pointer ${
                  activeTab === 'contact'
                    ? 'font-bold text-[#1F1F1F] dark:text-[#F5F2EE] border-b-2 border-[#1F1F1F] dark:border-[#F5F2EE] pb-0.5'
                    : 'text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:text-[#F5F2EE]'
                }`}
              >
                Contact
              </button>
            </nav>
            
            <ThemeToggle />
          </div>
        </header>

        {/* ACTIVE PAGE VIEW CONTAINER */}
        <main className="flex-1 w-full px-4 sm:px-8 md:px-12 py-6 sm:py-10">
          {activeTab === 'home' && (
            <HomeScreen onNavigate={handleNavigate} onOpenCaseStudy={handleOpenCaseStudy} />
          )}
          {activeTab === 'about' && (
            <AboutScreen onNavigate={handleNavigate} />
          )}
          {activeTab === 'projects' && (
            <ProjectsOverviewScreen onOpenCaseStudy={handleOpenCaseStudy} />
          )}
          {activeTab === 'case-study' && (
            <ProjectCaseStudyScreen
              projectId={selectedProjectId}
            />
          )}
          {activeTab === 'skills' && (
            <SkillsAndToolsScreen />
          )}
          {activeTab === 'experience' && (
            <ExperienceScreen onNavigate={handleNavigate} />
          )}
          {activeTab === 'contact' && (
            <ContactScreen />
          )}
        </main>

        {/* PERSISTENT GLOBAL FOOTER */}
        <FooterSection onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
