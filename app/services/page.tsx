import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Disciplines & Scope"
        title="What We"
        accent="Do."
        description="An integrated spatial practice navigating from foundational structural interventions down to the final artisanal ceramic vessel."
        image={IMAGES.livingSalon}
        crumb={[{ href: "/services", label: "Services" }]}
      />
      <Services />
      <Process />
      <ContactCta />
    </>
  );
}
