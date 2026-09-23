/**
 * Reading aids for the scroll story: a brass progress hairline across the top of the viewport and,
 * on wide screens, a chapter index on the right edge. Populated by `storyRail()` in lib/story.ts.
 */
export default function StoryRail() {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px]">
        <div data-progress className="h-full origin-left scale-x-0 bg-secondary-fixed-dim" />
      </div>
      <div
        data-rail
        className="pointer-events-none fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 text-white opacity-0 mix-blend-difference xl:flex"
      >
        <span data-rail-num className="font-serif text-headline-sm leading-none">01</span>
        <span className="relative h-28 w-px bg-white/30">
          <span data-rail-fill className="absolute inset-0 origin-top scale-y-0 bg-white" />
        </span>
        <span data-rail-total className="text-label-sm tracking-widest opacity-60">/ 01</span>
        <span className="mt-2 h-40 overflow-hidden">
          <span data-rail-label className="block text-label-sm tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
            Prologue
          </span>
        </span>
      </div>
    </>
  );
}
