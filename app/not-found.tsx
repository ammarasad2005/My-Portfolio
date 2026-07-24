import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#EFECE6] flex items-center justify-center p-4 font-sans text-[#1F1F1F]">
      <div className="bg-[#F5F2EE] border border-[#D1C7BD] p-8 rounded-md text-center max-w-md">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-[#D6702C] mb-2">
          404 - Page Not Found
        </h2>
        <p className="text-xs text-[#666666] mb-4">
          The requested page could not be located.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#1F1F1F] text-white text-xs px-4 py-2 rounded-md font-medium"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
