'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const NAV_LINKS = [
  { href: '/projects', label: 'Work', matchPrefix: '/projects' },
  { href: '/about', label: 'About', matchPrefix: '/about' },
  { href: '/skills', label: 'Skills', matchPrefix: '/skills' },
  { href: '/experience', label: 'Experience', matchPrefix: '/experience' },
  { href: '/contact', label: 'Contact', matchPrefix: '/contact' },
] as const;

export function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  // next-themes reads from localStorage; on the server it has no value, so
  // resolvedTheme is undefined during SSR and on first paint. We render a
  // stable toggle button until the client has hydrated, then reflect the
  // real theme. This avoids hydration mismatches without an explicit effect.
  const isDark = resolvedTheme === 'dark';
  const isHydrated = resolvedTheme !== undefined;
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <header className="flex items-center justify-between border-b border-[#E0D8CE] dark:border-[#2a2a2a] px-4 sm:px-8 md:px-10 lg:px-14 py-5 bg-[#F5F2EE] dark:bg-[#1a1a1a] sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <Link
        href="/"
        aria-label="Ammar Asad — home"
        className="font-serif text-2xl font-bold tracking-tight text-[#1F1F1F] dark:text-[#F5F2EE] hover:opacity-80 transition-opacity"
      >
        A.
      </Link>
      <div className="flex items-center gap-2 sm:gap-6 text-sm text-[#444444] dark:text-[#aaaaaa] min-w-0 max-w-full">
        <nav
          aria-label="Primary"
          className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm font-medium overflow-x-auto whitespace-nowrap py-1"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.matchPrefix === '/projects'
                ? pathname === '/projects' || pathname.startsWith('/projects/')
                : pathname === link.matchPrefix;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={
                  'transition-colors ' +
                  (isActive
                    ? 'font-bold text-[#1F1F1F] dark:text-[#F5F2EE] border-b-2 border-[#1F1F1F] dark:border-[#F5F2EE] pb-0.5'
                    : 'text-[#555555] dark:text-[#aaaaaa] hover:text-[#1F1F1F] dark:hover:text-[#F5F2EE]')
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          disabled={!isHydrated}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={isDark}
          title={!isHydrated ? 'Loading theme…' : undefined}
          className="w-10 h-5 bg-[#1F1F1F] dark:bg-[#F5F2EE] rounded-full p-0.5 flex items-center transition-colors cursor-pointer shrink-0 disabled:cursor-default disabled:opacity-60"
          style={{ justifyContent: isDark ? 'flex-start' : 'flex-end' }}
        >
          <div className="w-4 h-4 bg-white dark:bg-[#1F1F1F] rounded-full shadow-sm" />
        </button>
      </div>
    </header>
  );
}
