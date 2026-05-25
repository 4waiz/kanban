import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Work from "@/components/sections/Work";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Work — Kanban Studios",
  description:
    "Selected projects from defense, government, sustainability, real estate, hospitality, and Industry 5.0.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="02 / Selected case studies"
        title="Work"
        intro="A small sample of the engagements we have built — and the references that prove the thesis. Full case studies available under NDA."
      />
      <Work compact />
      <CTA />
    </>
  );
}
