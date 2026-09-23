import { PlanSvg } from "../HeroDecor";
import { Img, gutters } from "../ui";
import { IMAGES, blueprintSteps } from "@/lib/data";

/**
 * Pinned scroll story: the floor plan is drafted → it becomes stone → light enters → life moves in.
 * Driven by `blueprintStory()` in lib/story.ts.
 */
export default function BlueprintStory() {
  return (
    <section data-story-blueprint className={`relative flex min-h-[100svh] w-full items-center overflow-hidden bg-surface-container-low pt-24 pb-10 ${gutters}`}>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 md:gap-gutter lg:grid-cols-12">
        {/* Narrative */}
        <div className="order-2 lg:order-1 lg:col-span-4">
          <div className="mb-4 flex items-center gap-3 md:mb-8">
            <span className="text-label-sm font-semibold tracking-[0.2em] text-secondary uppercase">From Line to Living</span>
            <span className="h-px flex-1 bg-outline-variant/50" />
            <span className="font-serif text-headline-sm text-primary">
              <span data-bs-count>01</span>
              <span className="text-outline"> / 0{blueprintSteps.length}</span>
            </span>
          </div>

          <div className="grid">
            {blueprintSteps.map((s, i) => (
              <div key={s.label} data-bs-step className="[grid-area:1/1]">
                <span className="mb-2 block text-label-sm tracking-widest text-outline uppercase">
                  Chapter {String(i + 1).padStart(2, "0")} · {s.label}
                </span>
                <h2 className="mb-3 font-serif text-headline-md-mobile text-primary md:mb-4 md:text-headline-md lg:text-headline-lg">
                  {s.title}
                </h2>
                <p className="text-body-md leading-relaxed text-on-surface-variant">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-2 md:mt-10">
            {blueprintSteps.map((s) => (
              <span key={s.label} className="relative h-[2px] flex-1 overflow-hidden bg-outline-variant/40">
                <span data-bs-bar className="absolute inset-0 origin-left bg-secondary" />
              </span>
            ))}
          </div>
        </div>

        {/* Drawing → room */}
        <div className="order-1 lg:order-2 lg:col-span-8">
          <div className="drafting-paper relative aspect-[4/3] w-full overflow-hidden border border-outline-variant/40 shadow-xl">
            <div data-bs-photo className="absolute inset-0" style={{ clipPath: "inset(0% 100% 0% 0%)" }}>
              <Img
                src={IMAGES.earthHouse}
                alt="The finished Earth House living room"
                className="object-[50%_60%]"
                data-bs-img
              />
              <div
                data-bs-warm
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_45%_35%,rgba(255,214,150,0.45),transparent_60%)] opacity-0 mix-blend-soft-light"
              />
            </div>
            <div data-bs-plan className="absolute inset-[6%]">
              <PlanSvg stroke="#3a3028" pathAttr="data-plan" labelAttr="data-plan-label" />
            </div>
            <div
              data-bs-tag
              className="absolute bottom-4 left-4 flex items-center gap-3 bg-surface-bright/95 px-4 py-2.5 opacity-0 shadow-sm md:bottom-6 md:left-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="text-label-sm font-semibold tracking-widest text-primary uppercase">
                The Mehta family · Sunday, 4:30 pm
              </span>
            </div>
            <span className="absolute top-3 right-4 text-label-sm tracking-widest text-outline uppercase">Plate 084</span>
          </div>
        </div>
      </div>
    </section>
  );
}
