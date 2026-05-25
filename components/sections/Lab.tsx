"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import MonoLabel from "@/components/ui/MonoLabel";

const EXPERIMENTS = [
  {
    auth: "AUTH: KANBAN_R&D",
    state: "Experimental",
    title: "Project Chronos",
    body: "Temporal AI forecasting for supply chain resilience.",
  },
  {
    auth: "AUTH: KANBAN_R&D",
    state: "Research",
    title: "Neural Knot",
    body: "Advanced topology-aware deep learning architectures.",
  },
  {
    auth: "AUTH: KANBAN_R&D",
    state: "Stable_Lab",
    title: "Ghost Protocol",
    body: "Stealth-first communication layers for autonomous fleets.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

interface LabProps {
  compact?: boolean;
}

export default function Lab({ compact = false }: LabProps) {
  return (
    <section id="lab" className="relative w-full px-8 py-24">
      <div className="mx-auto max-w-360">
        {!compact && (
          <div className="mb-16 flex flex-col gap-6">
            <MonoLabel>R&amp;D arm</MonoLabel>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="font-display font-bold uppercase leading-[0.85] tracking-[-0.02em] text-kanban-text text-[12vw] md:text-[8vw] lg:text-[96px]"
            >
              Lab
            </motion.h2>
            <p className="max-w-2xl text-base leading-relaxed text-kanban-text/60">
              Kanban Labs is where credibility, talent, and future product seeds come from.
              Experiments, research collaborations, and open-source contributions that feed the
              Systems arm.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIMENTS.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: easeOut, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <GlassCard interactive className="flex h-full flex-col gap-4 p-7">
                <div className="flex items-center justify-between gap-3">
                  <MonoLabel className="text-kanban-text/35">[{e.auth}]</MonoLabel>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-kanban-violet-soft">
                    {e.state}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-kanban-text">
                  {e.title}
                </h3>
                <p className="text-sm leading-relaxed text-kanban-text/60">{e.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {!compact && (
          <div className="mt-12">
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-kanban-text/70 transition-colors hover:text-kanban-text"
            >
              Explore the lab →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
