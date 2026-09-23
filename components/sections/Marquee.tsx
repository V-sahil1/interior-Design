const WORDS = ["Space", "Light", "Material", "Detail", "Life"];

/** One run of the phrase; each row renders it twice so the loop wraps seamlessly at -50%. */
function Run({ outline = false }: { outline?: boolean }) {
  return (
    <span className="flex shrink-0 items-center">
      {WORDS.map((w, i) => (
        <span key={w} className="flex items-center">
          <span
            className={i % 2 ? "text-secondary-fixed italic" : outline ? "text-transparent" : "text-surface-bright"}
            style={outline && !(i % 2) ? { WebkitTextStroke: "1px rgb(255 255 255 / 0.55)" } : undefined}
          >
            {w}
          </span>
          <span className="mx-6 text-secondary-fixed/60 md:mx-10">·</span>
        </span>
      ))}
    </span>
  );
}

/** Kinetic type band between chapters: two rows drifting in opposite directions, quickened by scroll. */
export default function Marquee() {
  return (
    <section aria-label="Space, Light, Material, Detail, Life" className="w-full overflow-hidden bg-primary py-10 md:py-16">
      <div aria-hidden="true" className="font-serif leading-none whitespace-nowrap select-none">
        <div data-marquee="left" data-speed="45" className="text-[56px] md:text-[96px] lg:text-[128px]">
          <div className="flex w-max">
            <Run />
            <Run />
          </div>
        </div>
        <div data-marquee="right" data-speed="55" className="mt-2 text-[40px] md:mt-4 md:text-[64px] lg:text-[80px]">
          <div className="flex w-max">
            <Run outline />
            <Run outline />
          </div>
        </div>
      </div>
    </section>
  );
}
