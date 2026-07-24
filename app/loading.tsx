export default function Loading() {
  return (
    <div
      className="flex items-center justify-center py-20"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-[#D1C7BD] dark:border-[#3a3a3a] border-t-[#D6702C] rounded-full animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#666666] dark:text-[#888]">
          Loading
        </span>
      </div>
    </div>
  );
}
