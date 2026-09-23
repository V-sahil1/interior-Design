import Link from "next/link";
import { Img, gutters } from "./ui";
import { Curtains, Sunbeam } from "./HeroDecor";

/** Compact cinematic banner for inner pages, echoing the home hero. */
export default function PageHero({
  kicker,
  title,
  accent,
  description,
  image,
  crumb,
}: {
  kicker: string;
  title: string;
  accent?: string;
  description: string;
  image: string;
  crumb: { href: string; label: string }[];
}) {
  return (
    <section
      data-hero
      className={`relative -mt-20 flex min-h-[520px] w-full flex-col justify-end overflow-hidden bg-primary pt-32 pb-12 text-on-primary lg:-mt-24 lg:min-h-[600px] lg:pb-16 ${gutters}`}
    >
      <div className="absolute inset-0 z-0">
        <Img src={image} alt="" loading="eager" data-hero-img className="opacity-55 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
        <Sunbeam />
        <Curtains />
      </div>
      <div data-hero-content className="relative z-10 mx-auto w-full max-w-7xl">
        <nav data-hero-item data-anim-hide aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-label-sm tracking-widest text-surface-variant uppercase">
          <Link href="/" className="hover:text-secondary-fixed">
            Home
          </Link>
          {crumb.map((c) => (
            <span key={c.href} className="flex items-center gap-2">
              <span>/</span>
              <Link href={c.href} className="hover:text-secondary-fixed">
                {c.label}
              </Link>
            </span>
          ))}
        </nav>
        <div data-hero-item data-anim-hide className="mb-4 flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-secondary-fixed" />
          <span className="text-label-sm tracking-[0.2em] text-secondary-fixed uppercase">{kicker}</span>
        </div>
        <h1 data-hero-split data-anim-hide className="mb-6 max-w-4xl font-serif text-display-mobile tracking-tight text-surface-bright lg:text-display">
          {title} {accent && <span className="text-secondary-fixed italic">{accent}</span>}
        </h1>
        <span data-hero-line className="mb-6 block h-px w-24 bg-secondary-fixed/60" />
        <p data-hero-item data-anim-hide className="max-w-2xl text-body-md leading-relaxed text-surface-container-high md:text-body-lg">{description}</p>
      </div>
    </section>
  );
}
