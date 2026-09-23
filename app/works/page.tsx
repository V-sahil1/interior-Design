import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import SelectedWorks from "@/components/sections/SelectedWorks";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Testimonial from "@/components/sections/Testimonial";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = { title: "Selected Works" };

export default function WorksPage() {
  return (
    <>
      <PageHero
        kicker="Portfolio Directory · 18 Projects"
        title="Selected"
        accent="Works."
        description="A collection of spaces shaped by material, light, and purpose — private residences, studios, and retreats across India."
        image={IMAGES.earthHouse}
        crumb={[{ href: "/works", label: "Selected Works" }]}
      />
      <SelectedWorks />
      <FeaturedProject />
      <Testimonial />
      <ContactCta />
    </>
  );
}
