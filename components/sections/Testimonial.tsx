import Icon from "../Icon";
import { gutters, sectionY } from "../ui";

export default function Testimonial() {
  return (
    <section className={`w-full bg-surface-container-high ${gutters} ${sectionY}`}>
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Icon data-reveal name="format_quote" className="mb-6 text-[32px] text-secondary md:mb-8 md:text-4xl" />
        <blockquote data-words className="mb-8 font-serif text-headline-md-mobile text-primary italic md:text-headline-lg md:leading-relaxed">
          “Every single detail felt intentional. The final home feels completely personal, peaceful, and timeless — a
          true sanctuary in the city.”
        </blockquote>
        <div className="flex flex-col items-center">
          <span className="text-label-lg font-semibold tracking-widest text-primary uppercase">Sheetal &amp; Rajesh Mehta</span>
          <span className="mt-1 text-body-sm text-on-surface-variant">The Earth House · Ahmedabad, Gujarat</span>
        </div>
      </div>
    </section>
  );
}
