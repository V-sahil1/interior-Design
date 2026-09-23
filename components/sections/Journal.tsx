import Link from "next/link";
import Icon from "../Icon";
import { Img, Kicker, SectionTitle, gutters, sectionY } from "../ui";
import { articles } from "@/lib/data";

export default function Journal({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section className={`w-full bg-background ${gutters} ${sectionY}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-outline-variant/40 pb-6 md:mb-16">
          <div>
            <Kicker>Essays &amp; Research</Kicker>
            <SectionTitle>Monograph Journal</SectionTitle>
          </div>
          {showAllLink && (
            <Link
              href="/journal"
              className="inline-flex shrink-0 items-center gap-2 text-label-sm tracking-wider text-primary uppercase transition-colors hover:text-secondary md:text-label-lg"
            >
              <span>Read All Essays</span>
              <Icon name="arrow_forward" className="text-sm" />
            </Link>
          )}
        </div>

        <div data-reveal-stagger className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group flex cursor-pointer flex-col justify-between bg-surface-container-low p-5 transition-colors hover:bg-surface-container md:bg-transparent md:p-0 md:hover:bg-transparent"
            >
              <div>
                <div data-panel="up" className="relative mb-4 hidden aspect-[16/10] overflow-hidden bg-surface-container md:block">
                  <Img src={a.image} alt={a.title} className="transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mb-2 flex items-center gap-3 text-label-sm tracking-widest text-outline uppercase">
                  <span className="text-secondary md:text-outline">{a.category}</span>
                  <span>·</span>
                  <span>{a.read}</span>
                </div>
                <h3 className="mb-2 font-serif text-[20px] leading-7 text-primary transition-colors group-hover:text-secondary md:text-headline-sm">
                  {a.title}
                </h3>
                <p className="line-clamp-2 text-body-sm leading-relaxed text-on-surface-variant md:line-clamp-none">{a.body}</p>
              </div>
              <div className="mt-4 border-t border-outline-variant/20 pt-4 text-label-sm tracking-wider text-primary uppercase">
                {a.date}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
