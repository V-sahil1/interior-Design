import Link from "next/link";
import Icon from "./Icon";

/** Horizontal page gutters from the editorial grid: 20px mobile, 32px tablet, 48px desktop. */
export const gutters = "px-5 md:px-8 lg:px-margin";
export const sectionY = "py-12 md:py-space-xl";

export function Kicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span data-reveal className={`mb-2 block text-label-sm font-semibold tracking-[0.2em] text-secondary uppercase ${className}`}>
      {children}
    </span>
  );
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 data-split className={`font-serif text-headline-lg-mobile text-primary md:text-headline-lg ${className}`}>{children}</h2>
  );
}

export function Img({ className = "", ...props }: React.ImgHTMLAttributes<HTMLImageElement> & Record<`data-${string}`, unknown>) {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img loading="lazy" {...props} className={`h-full w-full object-cover ${className}`} />;
}

export function ArrowLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-label-lg tracking-wider text-primary uppercase transition-colors hover:text-secondary ${className}`}
    >
      <span>{children}</span>
      <Icon name="arrow_forward" className="text-sm transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
