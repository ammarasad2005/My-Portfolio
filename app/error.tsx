'use client';

import Link from 'next/link';
import {useEffect} from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    // Phase 2 TODO: report to Sentry / Vercel Insights once configured.
    console.error('Unhandled route error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
      <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-[#D6702C]">
        Something went wrong
      </h2>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">
        That wasn&apos;t supposed to happen.
      </h1>
      <p className="text-sm text-[#666666] dark:text-[#aaaaaa] max-w-sm">
        An unexpected error occurred while rendering this page. Try again, or head back
        home.
      </p>
      <div className="flex items-center gap-3 mt-2">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-4 py-2.5 rounded-md text-xs font-medium hover:bg-[#333333] dark:hover:bg-[#e5e5e5] transition-colors cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white dark:bg-[#222] text-[#1F1F1F] dark:text-[#F5F2EE] border border-[#C8C2B5] dark:border-[#3a3a3a] px-4 py-2.5 rounded-md text-xs font-medium hover:bg-[#F5F2EB] dark:hover:bg-[#2a2a2a] transition-colors"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
}
