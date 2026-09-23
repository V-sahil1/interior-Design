import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import Journal from "@/components/sections/Journal";
import Vignettes from "@/components/sections/Vignettes";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <>
      <PageHero
        kicker="Essays & Research"
        title="Monograph"
        accent="Journal."
        description="Dissertations on climate, craft, and the contemporary Indian domestic sanctum — written from the studio floor."
        image={IMAGES.livingSalon}
        crumb={[{ href: "/journal", label: "Journal" }]}
      />
      <Journal showAllLink={false} />
      <Vignettes />
      <ContactCta />
    </>
  );
}
