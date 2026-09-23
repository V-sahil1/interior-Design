import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject";
import SelectedWorks from "@/components/sections/SelectedWorks";
import Materiality from "@/components/sections/Materiality";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Studio from "@/components/sections/Studio";
import Journal from "@/components/sections/Journal";
import Testimonial from "@/components/sections/Testimonial";
import Inquiry from "@/components/sections/Inquiry";
import Vignettes from "@/components/sections/Vignettes";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <SelectedWorks />
      <Materiality />
      <Services />
      <Process />
      <Studio />
      <Journal />
      <Testimonial />
      <Inquiry />
      <Vignettes />
    </>
  );
}
