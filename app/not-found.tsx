import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
      <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-[#D6702C]">
        404 — Page Not Found
      </h2>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1F1F] dark:text-[#F5F2EE]">
        Lost in the margins.
      </h1>
      <p className="text-sm text-[#666666] dark:text-[#aaaaaa] max-w-sm">
        The page you were looking for isn&apos;t here. It may have been moved, renamed, or
        never existed in the first place.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#1F1F1F] dark:bg-[#F5F2EE] text-white dark:text-[#1F1F1F] px-4 py-2.5 rounded-md text-xs font-medium hover:bg-[#333333] dark:hover:bg-[#e5e5e5] transition-colors mt-2"
      >
        <span aria-hidden="true">&larr;</span>
        <span>Return Home</span>
      </Link>
    </div>
  );
}
