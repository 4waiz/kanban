import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services — Kanban Studios",
  description:
    "Five practice areas: AI surveillance, document intelligence, autonomous robotics, audit-grade workflows, and computer vision for operations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="01 / Practice areas"
        title="Services"
        intro="Five disciplines, each rooted in projects we have already shipped. Each is a credible specialty backed by deployed work, research publications, and competition wins — not marketing claims."
      />
      <Services />
      <CTA />
    </>
  );
}
