import { Kicker, SectionTitle, gutters, sectionY } from "../ui";
import { phases } from "@/lib/data";

export default function Process() {
  return (
    <section className={`w-full bg-background ${gutters} ${sectionY}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl md:mb-16">
          <Kicker>Artisanal Methodology</Kicker>
          <SectionTitle className="leading-tight">How We Work: The 5 Phases</SectionTitle>
          <p className="mt-2 text-body-md text-on-surface-variant md:hidden">
            From first idea to final detail: a five-stage collaborative discipline.
          </p>
        </div>

        {/* Mobile: vertical stepper */}
        <ol className="relative flex flex-col gap-8 pl-6 md:hidden">
          <span aria-hidden className="absolute top-3 bottom-3 left-2 w-[2px] bg-surface-container-highest" />
          <span aria-hidden data-draw-y className="absolute top-3 bottom-3 left-2 w-[2px] bg-secondary" />
          {phases.map((p, i) => (
            <li key={p.title} data-reveal className="relative">
              <span
                className={`absolute top-1.5 -left-[25px] flex h-4 w-4 items-center justify-center rounded-full ${
                  i === 0 ? "bg-primary" : "bg-surface-container-highest"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-surface" : "bg-on-surface-variant"}`} />
              </span>
              <span className="text-label-sm font-semibold tracking-widest text-secondary uppercase">
                Stage {String(i + 1).padStart(2, "0")} · {p.time}
              </span>
              <h3 className="mb-1 font-serif text-headline-sm text-primary">{p.title}</h3>
              <p className="text-body-sm leading-relaxed text-on-surface-variant">{p.body}</p>
            </li>
          ))}
        </ol>

        {/* Tablet & desktop: drafting dimension line + horizontal pipeline */}
        <div aria-hidden className="relative mb-6 hidden h-4 md:block">
          <span className="absolute inset-x-0 top-1/2 h-px bg-outline-variant/50" />
          <span data-draw-x className="absolute inset-x-0 top-1/2 h-px bg-secondary" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="absolute top-0 h-4 w-px bg-outline" style={{ left: `${i * 20}%` }} />
          ))}
        </div>
        <div data-reveal-stagger className="hidden grid-cols-5 gap-6 md:grid">
          {phases.map((p, i) => (
            <div
              key={p.title}
              className={`flex min-h-[300px] flex-col justify-between border-t-2 bg-surface-container-low p-6 ${p.border}`}
            >
              <div>
                <span className="mb-4 block font-serif text-headline-md text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="mb-2 block text-label-sm font-semibold tracking-widest text-secondary uppercase">
                  Phase {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 font-serif text-headline-sm text-primary">{p.title}</h3>
                <p className="text-body-sm leading-relaxed text-on-surface-variant">{p.body}</p>
              </div>
              <div className="pt-4 text-label-sm tracking-wider text-outline uppercase">{p.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
