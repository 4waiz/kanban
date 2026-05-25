import Hero from "@/components/sections/Hero";
import FeatureStack from "@/components/sections/FeatureStack";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Approach from "@/components/sections/Approach";
import Lab from "@/components/sections/Lab";
import PricingTeaser from "@/components/sections/PricingTeaser";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStack />
      <Services />
      <Work />
      <Approach />
      <Lab />
      <PricingTeaser />
      <CTA />
    </>
  );
}
