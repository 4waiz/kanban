import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Lab from "@/components/sections/Lab";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Lab — Kanban Studios",
  description:
    "Kanban Labs is the R&D arm. Experimental prototypes, research collaborations, hackathon builds, and open-source contributions that feed the Systems arm.",
};

export default function LabPage() {
  return (
    <>
      <PageHero
        eyebrow="04 / Research & experiments"
        title="Lab"
        intro="Where credibility, talent attraction, and future product seeds come from. Labs work proves new capabilities that Systems then sells. Systems revenue funds Labs experimentation."
      />
      <Lab compact />
      <CTA />
    </>
  );
}
