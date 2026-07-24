'use client';

import {useTheme} from 'next-themes';

/**
 * Functional dark-mode toggle with a smooth slide animation.
 *
 * The light-mode appearance is identical to the original non-functional
 * toggle that was duplicated across every route file:
 *   - pill: w-9 h-4.5 sm:w-10 sm:h-5, bg-[#1F1F1F], rounded-full, p-0.5, shadow-xs
 *   - knob: w-3.5 h-3.5 sm:w-4 sm:h-4, bg-white, rounded-full, shadow-xs
 *   - knob position: right side = light mode
 *
 * The knob slides smoothly between positions using transform: translateX()
 * (which is animatable), NOT justify-end/justify-start (which is discrete
 * and jumps instantly). Travel distance:
 *   - mobile:  pill 36px - padding 4px - knob 14px = 18px
 *   - desktop: pill 40px - padding 4px - knob 16px = 20px
 *
 * When dark mode is active, the pill background flips to white and the knob
 * slides to the left + flips to dark. The theme persists to localStorage via
 * next-themes and is applied as a `.dark` class on <html>.
 *
 * Note: this toggle only controls the theme class. The actual dark-mode
 * color palette for the whole site is a separate Phase 2 design task.
 */
export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();

  // resolvedTheme is undefined during SSR and first paint, then resolves to
  // 'light' or 'dark'. Because defaultTheme='light' and the next-themes
  // blocking script sets the class before hydration, we can safely default
  // to false (light) without causing a hydration mismatch.
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
      className="w-9 h-4.5 sm:w-10 sm:h-5 bg-[#1F1F1F] dark:bg-white rounded-full p-0.5 flex items-center justify-start cursor-pointer shadow-xs shrink-0 transition-colors duration-300 ease-in-out"
    >
      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white dark:bg-[#1F1F1F] rounded-full shadow-xs transition-all duration-300 ease-in-out translate-x-[18px] sm:translate-x-[20px] dark:translate-x-0" />
    </button>
  );
}
