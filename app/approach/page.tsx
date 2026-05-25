import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Approach from "@/components/sections/Approach";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Approach — Kanban Studios",
  description:
    "The five-step delivery method: Map, Architect, Build, Audit, Operate. The difference between a working demo and a system a hospital, ministry, or defense supplier can actually deploy.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="03 / Delivery method"
        title="Approach"
        intro="Map. Architect. Build. Audit. Operate. The difference between a working demo and a system a hospital, ministry, or defense supplier can actually deploy."
      />
      <Approach />
      <CTA />
    </>
  );
}
