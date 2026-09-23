import { gutters } from "../ui";
import { stats } from "@/lib/data";

/** Words fill in as you scroll (pinned on desktop), followed by count-up figures. */
export default function Manifesto() {
  return (
    <section data-story-manifesto className={`relative flex min-h-[100svh] w-full items-center bg-background py-20 ${gutters}`}>
      <div className="mx-auto w-full max-w-6xl">
        <span data-type className="mb-6 block text-label-sm font-semibold tracking-[0.2em] text-secondary uppercase md:mb-10">
          Our Manifesto
        </span>
        <p data-fill className="font-serif text-[30px] leading-[1.25] text-primary md:text-[44px] lg:text-[58px] lg:leading-[1.18]">
          We don’t decorate rooms. We compose how <span className="text-secondary italic">light</span> falls, how{" "}
          <span className="text-secondary italic">stone</span> feels underfoot, and how a family{" "}
          <span className="text-secondary italic">gathers</span> at dusk — so that every day at home feels quietly
          considered.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-outline-variant/40 pt-8 md:mt-16 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <span className="block font-serif text-headline-lg-mobile text-primary md:text-headline-lg">
                <span data-count={s.value}>{s.value}</span>
                {s.suffix}
              </span>
              <span className="mt-1 block text-label-sm tracking-widest text-outline uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
