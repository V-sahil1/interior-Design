import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center">
      <span className="mb-2 text-label-sm font-semibold tracking-[0.2em] text-secondary uppercase">Error 404</span>
      <h1 className="mb-4 font-serif text-headline-lg-mobile text-primary md:text-headline-lg">This room does not exist.</h1>
      <p className="mb-8 max-w-md text-body-md text-on-surface-variant">
        The page you are looking for may have been moved to the archive.
      </p>
      <Link href="/" className="bg-primary-container px-8 py-4 text-label-lg tracking-widest text-on-primary uppercase hover:bg-primary">
        Return Home
      </Link>
    </section>
  );
}
