import Link from "next/link";
import Icon from "./Icon";
import { gutters, sectionY } from "./ui";

export default function ContactCta() {
  return (
    <section className={`w-full bg-primary text-on-primary ${gutters} ${sectionY}`}>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <span className="mb-3 block text-label-sm font-semibold tracking-[0.25em] text-secondary-fixed uppercase">
            Private Commission Intake
          </span>
          <h2 data-split className="mb-4 font-serif text-headline-lg-mobile text-surface-bright md:text-headline-lg">
            Let’s Create Your Space.
          </h2>
          <p className="text-body-md leading-relaxed text-surface-container-high">
            Have a private residence, luxury workspace, or boutique hospitality venture in mind? We welcome a limited
            number of select commissions each season.
          </p>
        </div>
        <Link
          data-reveal
          href="/contact"
          className="flex w-full items-center justify-center gap-3 bg-surface-bright px-8 py-4 text-label-lg tracking-widest text-primary uppercase transition-colors hover:bg-secondary-fixed hover:text-on-secondary-fixed sm:w-auto"
        >
          <span>Start a Project</span>
          <Icon name="arrow_forward" className="text-[18px]" />
        </Link>
      </div>
    </section>
  );
}
