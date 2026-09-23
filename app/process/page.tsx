import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import Process from "@/components/sections/Process";
import FeaturedProject from "@/components/sections/FeaturedProject";
import BlueprintStory from "@/components/story/BlueprintStory";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = { title: "Process" };

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Artisanal Methodology"
        title="From First Idea to"
        accent="Final Detail."
        description="A five-stage collaborative discipline — discover, concept, design, execute, reveal — calibrated over 14 weeks of design and months of careful craft."
        image={IMAGES.studioEvening}
        crumb={[{ href: "/process", label: "Process" }]}
      />
      <BlueprintStory />
      <Process />
      <FeaturedProject />
      <ContactCta />
    </>
  );
}
