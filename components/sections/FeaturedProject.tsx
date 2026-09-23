import { ArrowLink, Img, Kicker, gutters, sectionY } from "../ui";
import { projects } from "@/lib/data";

export default function FeaturedProject() {
  const p = projects[0];
  const specs = [
    ["Typology", p.typology],
    ["Location", "Ahmedabad, Gujarat"],
    ["Scope", p.scope],
    ["Completed", "Spring 2026"],
  ];

  return (
    <section id="featured" className={`w-full scroll-mt-24 bg-background ${gutters} ${sectionY}`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
          <div className="group relative lg:col-span-7">
            <div data-panel="left" className="relative aspect-[4/5] overflow-hidden bg-surface-container shadow-xl md:aspect-[4/3]">
              <Img
                src={p.image}
                alt={p.alt}
                className="transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div data-sweep className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#fff3dc]/35 to-transparent mix-blend-soft-light" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3 border border-outline-variant/30 bg-surface-bright/95 px-5 py-3 shadow-sm backdrop-blur-sm md:bottom-6 md:left-6">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <span className="text-label-sm font-semibold tracking-widest text-primary uppercase">
                  The Earth House — Residential 4,200 sq.ft.
                </span>
              </div>
            </div>
            <div data-reveal className="absolute top-1/2 -right-6 hidden -translate-y-1/2 text-label-sm tracking-[0.25em] text-outline uppercase opacity-60 [writing-mode:vertical-rl] xl:block">
              Monograph Series · Plate 084 / Gujarat
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 lg:col-span-5 lg:pl-6">
            <div className="flex items-center gap-3">
              <Kicker className="mb-0">Featured Monograph / 01</Kicker>
              <span data-rule className="h-px w-8 bg-secondary/40" />
            </div>
            <h2 data-split className="font-serif text-headline-lg-mobile leading-tight text-primary md:text-headline-lg">
              Quiet Transitions in Rammed Earth &amp; Living Courtyards
            </h2>
            {p.narrative.map((t) => (
              <p data-lines key={t} className="text-body-md leading-relaxed text-on-surface-variant">
                {t}
              </p>
            ))}
            <div data-reveal-stagger className="my-2 grid grid-cols-2 gap-4 border-y border-outline-variant/30 py-6">
              {specs.map(([k, v]) => (
                <div key={k}>
                  <span className="mb-1 block text-label-sm tracking-wider text-outline uppercase">{k}</span>
                  <span className="text-body-md font-medium text-primary">{v}</span>
                </div>
              ))}
            </div>
            <div data-reveal>
              <ArrowLink href={`/works/${p.slug}`} className="border-b border-secondary pb-1">
                Explore Complete Case Study &amp; Drawing Folio
              </ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
