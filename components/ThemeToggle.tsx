'use client';

import {useTheme} from 'next-themes';

/**
 * Functional dark-mode toggle.
 *
 * The light-mode appearance is identical to the original non-functional
 * toggle that was duplicated across every route file:
 *   - pill: w-9 h-4.5 sm:w-10 sm:h-5, bg-[#1F1F1F], rounded-full, p-0.5, shadow-xs
 *   - knob: w-3.5 h-3.5 sm:w-4 sm:h-4, bg-white, rounded-full, shadow-xs
 *   - knob position: justify-end (right side = light mode)
 *
 * When dark mode is active, the pill background flips to white and the knob
 * slides to the left (justify-start) and flips to dark — the standard
 * light/dark toggle convention. The theme persists to localStorage via
 * next-themes and is applied as a `.dark` class on <html>.
 *
 * Hydration safety: next-themes injects a blocking <script> that sets the
 * theme class on <html> before React hydrates, so the Tailwind dark: variants
 * apply correctly on first paint. We default to 'light' on the server
 * (defaultTheme='light', enableSystem={false}), so aria-checked={false}
 * matches the server render. Once the client mounts, resolvedTheme resolves
 * to the actual stored theme and the toggle updates.
 *
 * Note: this toggle only controls the theme class. The actual dark-mode
 * color palette for the whole site is a separate Phase 2 design task —
 * adding `dark:` variants to every component is out of scope here.
 */
export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();

  // resolvedTheme is undefined during SSR and first paint, then resolves to
  // 'light' or 'dark'. Because defaultTheme='light' and the next-themes
  // blocking script sets the class before hydration, we can safely default
  // to false (light) for the aria-checked + knob position without causing
  // a hydration mismatch.
  const isDark = resolvedTheme === 'dark';

  const toggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      suppressHydrationWarning
      className="w-9 h-4.5 sm:w-10 sm:h-5 bg-[#1F1F1F] dark:bg-white rounded-full p-0.5 flex items-center justify-end dark:justify-start cursor-pointer shadow-xs shrink-0 transition-colors"
    >
      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white dark:bg-[#1F1F1F] rounded-full shadow-xs transition-colors" />
    </button>
  );
}
