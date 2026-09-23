import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import { Img, Kicker, gutters, sectionY } from "@/components/ui";
import { projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.title ?? "Project" };
}

const swatches = [
  { code: "Stone 01", name: "Natural Dholpur Sandstone", bg: "bg-[#dfc390]/40", overlay: "bg-[radial-gradient(#715b31_1px,transparent_1px)] [background-size:8px_8px] opacity-25" },
  { code: "Timber 02", name: "Reclaimed Teak Wood", bg: "bg-[#3a3028]/25", overlay: "bg-gradient-to-r from-transparent via-[#241b14]/20 to-transparent" },
  { code: "Render 03", name: "Hand-troweled Lime Plaster", bg: "bg-[#ebe8e2]", overlay: "bg-[radial-gradient(#4d453f_1px,transparent_1px)] [background-size:4px_4px] opacity-15" },
  { code: "Hardware 04", name: "Patinated Raw Brass", bg: "bg-[#dfc390]/80", overlay: "bg-gradient-to-br from-white/30 to-black/20" },
];

const details = [
  ["Concealed Joinery", "Mortise and tenon timber joints engineered without exposed fasteners, allowing timber to naturally breathe with seasonal humidity."],
  ["Indirect 2700K Lighting", "Recessed architectural niches and shadow-gap coves eliminate glare, washing raw stone surfaces with warm grazing luminosity."],
  ["Passive Water Body", "Central shallow lotus court acts as an evaporative cooler, drawing cross-breezes across the low-slung living lounge."],
];

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];

  const specs = [
    ["Typology", p.typology],
    ["Location", p.city],
    ["Scope", p.scope],
    ["Area", p.area],
    ["Completed", p.year],
    ["Category", p.tag],
  ];

  return (
    <>
      <PageHero
        kicker={`Project ${p.number} / ${p.city}`}
        title={p.title}
        description={p.summary}
        image={p.image}
        crumb={[
          { href: "/works", label: "Selected Works" },
          { href: `/works/${p.slug}`, label: p.title },
        ]}
      />

      <section className={`w-full bg-background ${gutters} ${sectionY}`}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <Kicker>Case File · Monograph No. {p.number}</Kicker>
            <h2 data-split className="font-serif text-headline-lg-mobile leading-tight text-primary md:text-headline-lg">
              “Designed Around Quiet Moments.”
            </h2>
            {p.narrative.map((t) => (
              <p data-reveal key={t} className="text-body-md leading-relaxed text-on-surface-variant">
                {t}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-4 border-y border-outline-variant/30 py-6">
              {specs.map(([k, v]) => (
                <div key={k}>
                  <span className="mb-1 block text-label-sm tracking-wider text-outline uppercase">{k}</span>
                  <span className="text-body-md font-medium text-primary">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div data-panel="left" className="relative aspect-[4/5] overflow-hidden bg-surface-container shadow-xl md:aspect-[4/3]">
              <Img src={p.image} alt={p.alt} />
            </div>
          </div>
        </div>
      </section>

      <section className={`w-full bg-surface-container-low ${gutters} ${sectionY}`}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter lg:grid-cols-2">
          <div>
            <Kicker>Materiality &amp; Specimen</Kicker>
            <h3 className="mb-6 font-serif text-headline-md-mobile text-primary md:text-headline-md">Tactile Material Board</h3>
            <div data-tiles className="grid grid-cols-2 gap-3">
              {swatches.map((s) => (
                <div key={s.code} className="flex flex-col gap-2 bg-surface-container p-3">
                  <div className={`relative h-20 w-full overflow-hidden md:h-28 ${s.bg}`}>
                    <div className={`absolute inset-0 ${s.overlay}`} />
                  </div>
                  <div>
                    <span className="block text-label-sm tracking-widest text-secondary uppercase">{s.code}</span>
                    <span className="text-body-sm font-semibold text-primary">{s.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between bg-surface-container p-3">
              <div>
                <span className="block text-label-sm tracking-widest text-secondary uppercase">Textile 05</span>
                <span className="text-body-sm font-semibold text-primary">Belgian Unbleached Sheer Linen</span>
              </div>
              <Icon name="texture" className="text-[20px] text-secondary" />
            </div>
          </div>
          <div>
            <Kicker>Architectural Detail</Kicker>
            <h3 className="mb-6 font-serif text-headline-md-mobile text-primary md:text-headline-md">Spec Points</h3>
            <div data-reveal-stagger className="flex flex-col gap-3">
              {details.map(([title, body], i) => (
                <div key={title} className="flex gap-4 bg-surface-container-high p-5">
                  <span className="shrink-0 font-serif text-headline-sm text-secondary">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="mb-1 text-label-lg tracking-wider text-primary uppercase">{title}</h4>
                    <p className="text-body-sm text-on-surface-variant">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`w-full bg-background py-10 ${gutters}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 border-y border-outline-variant/30 py-8">
          <Link href="/works" className="text-label-lg tracking-wider text-on-surface-variant uppercase hover:text-primary">
            ← All Works
          </Link>
          <Link href={`/works/${next.slug}`} className="group text-right">
            <span className="block text-label-sm tracking-widest text-outline uppercase">Next Project</span>
            <span className="font-serif text-headline-sm text-primary transition-colors group-hover:text-secondary">
              {next.title} →
            </span>
          </Link>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
