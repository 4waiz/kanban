import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import MonoLabel from "@/components/ui/MonoLabel";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Pricing — Kanban Studios",
  description:
    "Three engagement modes — Pilot, Build, Operate. Every project is scoped individually.",
};

const TIERS = [
  {
    name: "Pilot",
    price: "AED 50–150K",
    cycle: "2–3 month engagement",
    blurb:
      "A fixed-scope module or proof. One workflow, audit-grade, fully deployed. Best when you need to derisk before a wider commitment.",
    includes: [
      "Scoped to a single workflow or system component",
      "Map → Architect → Build delivery",
      "Audit-grade logging and explainability from day one",
      "Source code + documentation handover",
      "30-day post-launch support",
    ],
  },
  {
    name: "Build",
    price: "AED 150–500K+",
    cycle: "3–6 month engagement",
    blurb:
      "A full custom system across the five-step method. Where most engagements land. Owned by you, operated by you, engineered to outlive the project plan.",
    includes: [
      "Full Map → Architect → Build → Audit → Operate cycle",
      "Dedicated engineering pod (2–4 specialists)",
      "Security, compliance, and audit-trail layers by default",
      "Human-in-the-loop controls on every AI decision",
      "Training, documentation, and 90-day operational hand-holding",
    ],
    featured: true,
  },
  {
    name: "Operate",
    price: "AED 10–50K / month",
    cycle: "Ongoing retainer",
    blurb:
      "Maintenance, monitoring, and feature extension after launch. For clients whose systems we have already built — or whose existing systems we have taken responsibility for.",
    includes: [
      "Continuous monitoring and incident response",
      "Quarterly feature extensions and model retraining",
      "Compliance updates and audit reporting",
      "Direct line to the engineering team",
      "Roadmap and capacity planning sessions",
    ],
  },
];

const ACCELERATORS = [
  {
    name: "Document Intelligence Engine",
    blurb:
      "OCR, validation, ambiguity detection, and submission verification. Bilingual EN/AR. Licensed per workflow.",
  },
  {
    name: "Vision Verification System",
    blurb:
      "Edge-AI computer vision pipeline for compliance verification, quality control, and operational tracking.",
  },
  {
    name: "Audit Workflow Module",
    blurb:
      "Cryptographic audit trails, human-in-the-loop approval flows, and explainable AI decision logs.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="05 / Engagement model"
        title="Pricing"
        intro="Every project is scoped individually. These are the bands most engagements fall into. Productized accelerators are licensed separately."
      />

      <section className="px-8 py-12">
        <div className="mx-auto max-w-360">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TIERS.map((t) => (
              <GlassCard
                key={t.name}
                className={
                  t.featured
                    ? "flex flex-col gap-7 p-8 ring-1 ring-kanban-violet/40 shadow-[0_0_80px_-20px_rgba(123,91,255,0.4)]"
                    : "flex flex-col gap-7 p-8"
                }
              >
                <div className="flex items-center justify-between">
                  <MonoLabel className={t.featured ? "text-kanban-violet-soft" : "text-kanban-text/45"}>
                    {t.name}
                  </MonoLabel>
                  {t.featured && (
                    <span className="rounded-full border border-kanban-violet/40 bg-kanban-violet/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-kanban-violet-soft">
                      Most common
                    </span>
                  )}
                </div>
                <div>
                  <div className="font-display text-3xl font-semibold tracking-tight text-kanban-text">
                    {t.price}
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-kanban-text/40">
                    {t.cycle}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-kanban-text/65">{t.blurb}</p>
                <ul className="flex flex-col gap-3 border-t border-white/5 pt-5">
                  {t.includes.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sm text-kanban-text/70">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-kanban-violet-soft" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-auto inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 font-mono text-[11px] uppercase tracking-[0.22em] text-kanban-text transition-colors hover:bg-white/10"
                >
                  Talk to us
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-360">
          <div className="mb-12 flex flex-col gap-4">
            <MonoLabel>Productized accelerators</MonoLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-kanban-text md:text-5xl">
              Pre-built modules, licensed separately.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-kanban-text/60">
              When you do not need a full custom build, the same engineering distilled into reusable
              components. Sold or licensed as software products. Long-term leverage.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ACCELERATORS.map((a) => (
              <GlassCard key={a.name} className="flex flex-col gap-4 p-7">
                <h3 className="font-display text-xl font-semibold tracking-tight text-kanban-text">
                  {a.name}
                </h3>
                <p className="text-sm leading-relaxed text-kanban-text/60">{a.blurb}</p>
                <MonoLabel className="text-kanban-violet-soft/80">License on request</MonoLabel>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
