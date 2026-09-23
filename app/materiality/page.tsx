import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import Materiality from "@/components/sections/Materiality";
import Vignettes from "@/components/sections/Vignettes";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = { title: "Materiality" };

export default function MaterialityPage() {
  return (
    <>
      <PageHero
        kicker="Tectonic Spec Archive"
        title="Honest Materials,"
        accent="Graceful Patina."
        description="Regional geologies, reclaimed timbers, slaked lime and living brass — tested, aged, and curated in our physical workshop."
        image={IMAGES.earthHouse}
        crumb={[{ href: "/materiality", label: "Materiality" }]}
      />
      <Materiality />
      <Vignettes />
      <ContactCta />
    </>
  );
}
