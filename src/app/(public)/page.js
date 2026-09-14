import TechSlider from "@/features/public/TechSlider";
import About from "@/features/public/About";
import CTA from "@/features/public/CTA";
import Hero from "@/features/public/Hero";
import SomeWorks from "@/features/public/SomeWorks";

function page() {
  return (
    <div>
      <Hero />
      <SomeWorks />
      <About />
      <TechSlider />
      <CTA />
    </div>
  );
}

export default page;
