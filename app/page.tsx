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
import Marquee from "@/components/sections/Marquee";
import BlueprintStory from "@/components/story/BlueprintStory";
import Manifesto from "@/components/story/Manifesto";
import DayOfLight from "@/components/story/DayOfLight";

/** The home page reads as one story, chapter by chapter (`data-chapter` feeds the side index). */
export default function Home() {
  return (
    <>
      <div data-chapter="Prologue">
        <Hero />
      </div>
      <div data-chapter="The Plan">
        <BlueprintStory />
      </div>
      <div data-chapter="The House">
        <FeaturedProject />
      </div>
      <div data-chapter="Manifesto">
        <Manifesto />
      </div>
      <Marquee />
      <div data-chapter="Selected Works">
        <SelectedWorks />
      </div>
      <div data-chapter="Materials">
        <Materiality />
      </div>
      <div data-chapter="A Day of Light">
        <DayOfLight />
      </div>
      <div data-chapter="Practice">
        <Services />
      </div>
      <div data-chapter="Method">
        <Process />
      </div>
      <div data-chapter="The Studio">
        <Studio />
      </div>
      <div data-chapter="Journal">
        <Journal />
      </div>
      <div data-chapter="Voices">
        <Testimonial />
      </div>
      <div data-chapter="Begin">
        <Inquiry />
      </div>
      <Vignettes />
    </>
  );
}
