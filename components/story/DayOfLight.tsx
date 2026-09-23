import { Img } from "../ui";
import { dayMoments } from "@/lib/data";

/**
 * "A Day in The Earth House": pinned horizontal journey from dawn to night on desktop
 * (vertical on mobile). The sun travels a sun-path arc and the room's palette shifts with the hour.
 * Driven by `dayOfLight()` in lib/story.ts.
 */
export default function DayOfLight() {
  return (
    <section data-story-day className="relative w-full overflow-hidden">
      {/* colours live on this inner canvas: the pinned section itself has its inline styles managed by ScrollTrigger */}
      <div
        data-day-canvas
        className="relative bg-(--day-bg) text-(--day-fg) [--day-bg:#efe7da] [--day-fg:#241b14]"
      >
      {/* Heading + sun path (fixed while the day scrolls by on desktop) */}
      <div className="relative z-10 px-5 pt-16 md:absolute md:inset-x-0 md:top-0 md:px-8 md:pt-28 lg:px-margin">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6">
          <div>
            <span className="mb-2 block text-label-sm font-semibold tracking-[0.2em] uppercase opacity-70">
              A Day of Light
            </span>
            <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg">A Day in The Earth House</h2>
          </div>
          <span className="hidden text-label-sm tracking-widest uppercase opacity-60 md:block">Scroll to move the sun →</span>
        </div>
        <div className="relative mx-auto mt-6 hidden max-w-7xl md:block">
          <svg viewBox="0 0 1000 120" className="h-auto w-full overflow-visible" aria-hidden="true">
            <line x1="0" y1="110" x2="1000" y2="110" stroke="currentColor" strokeOpacity="0.25" />
            <path data-sun-arc d="M20 110 Q500 -70 980 110" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="4 6" />
            <circle data-sun r="11" cx="0" cy="0" fill="#fddfa9" />
            <circle data-sun-halo r="26" cx="0" cy="0" fill="#fddfa9" opacity="0.18" />
          </svg>
          <div className="mt-2 flex justify-between text-label-sm tracking-widest uppercase opacity-60">
            {dayMoments.map((m) => (
              <span key={m.time}>{m.time}</span>
            ))}
          </div>
        </div>
      </div>

      <div data-day-track className="flex flex-col md:h-[100svh] md:w-max md:flex-row">
        {dayMoments.map((m, i) => (
          <article
            key={m.time}
            data-day-panel
            data-bg={m.bg}
            data-fg={m.fg}
            className="flex w-full items-center px-5 py-12 md:h-full md:w-screen md:px-8 md:pt-72 md:pb-12 lg:px-margin"
          >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-gutter">
              <div className="relative overflow-hidden md:col-span-7">
                <div className="aspect-[4/3] md:aspect-auto md:h-[min(52vh,560px)]">
                  <Img data-day-img src={m.image} alt={`${m.phase} — ${m.title}`} className="scale-110" />
                </div>
                <span className="absolute top-4 left-4 bg-black/30 px-3 py-1 text-label-sm tracking-widest text-white uppercase backdrop-blur-sm">
                  {String(i + 1).padStart(2, "0")} / {String(dayMoments.length).padStart(2, "0")}
                </span>
              </div>
              <div data-day-text className="md:col-span-5 md:pl-6">
                <span className="block font-serif text-[56px] leading-none md:text-[88px]">{m.time}</span>
                <span className="mt-3 mb-4 block text-label-md tracking-[0.3em] uppercase opacity-70">{m.phase}</span>
                <h3 className="mb-3 font-serif text-headline-sm md:text-headline-md">{m.title}</h3>
                <p className="max-w-md text-body-md leading-relaxed opacity-80">{m.body}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
