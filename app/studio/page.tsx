import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import Studio from "@/components/sections/Studio";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";
import Vignettes from "@/components/sections/Vignettes";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = { title: "The Studio" };

export default function StudioPage() {
  return (
    <>
      <PageHero
        kicker="The Studio · Ahmedabad & Mumbai · Est. 2018"
        title="We Design How"
        accent="People Live."
        description="An interior architecture and bespoke spatial practice working from a flagship in Ahmedabad and a heritage loft in Mumbai’s Kala Ghoda."
        image={IMAGES.studioEvening}
        crumb={[{ href: "/studio", label: "Studio" }]}
      />
      <Studio />
      <Process />
      <Testimonial />
      <Vignettes />
      <ContactCta />
    </>
  );
}
