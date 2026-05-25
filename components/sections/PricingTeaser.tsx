"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import MonoLabel from "@/components/ui/MonoLabel";

const TIERS = [
  {
    name: "Pilot",
    range: "AED 50–150K",
    cycle: "2–3 months",
    blurb: "Fixed-scope proof or focused module. One workflow, audit-grade, deployed.",
  },
  {
    name: "Build",
    range: "AED 150–500K",
    cycle: "3–6 months",
    blurb: "Full custom system. Map → Architect → Build → Audit → Operate. Most engagements.",
    featured: true,
  },
  {
    name: "Operate",
    range: "AED 10–50K / month",
    cycle: "Ongoing",
    blurb: "Retainer for monitoring, feature extension, and 24/7 reliability after launch.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function PricingTeaser() {
  return (
    <section id="pricing" className="relative w-full px-8 py-24">
      <div className="mx-auto max-w-360">
        <div className="mb-16 flex flex-col gap-6">
          <MonoLabel>Engagement model</MonoLabel>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="font-display font-bold uppercase leading-[0.85] tracking-[-0.02em] text-kanban-text text-[12vw] md:text-[8vw] lg:text-[96px]"
          >
            Pricing
          </motion.h2>
          <p className="max-w-2xl text-base leading-relaxed text-kanban-text/60">
            Every project is scoped individually. These are the bands most engagements fall into.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: easeOut, delay: i * 0.1 }}
            >
              <GlassCard
                interactive
                className={
                  t.featured
                    ? "flex h-full flex-col gap-6 p-8 ring-1 ring-kanban-violet/40 shadow-[0_0_80px_-20px_rgba(123,91,255,0.4)]"
                    : "flex h-full flex-col gap-6 p-8"
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
                    {t.range}
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-kanban-text/40">
                    {t.cycle}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-kanban-text/60">{t.blurb}</p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-kanban-text/80 hover:text-kanban-text"
                  >
                    See full scope →
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
