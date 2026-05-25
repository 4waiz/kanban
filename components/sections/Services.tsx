"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import MonoLabel from "@/components/ui/MonoLabel";

const SERVICES = [
  {
    n: "01",
    title: "AI Surveillance, Monitoring & Detection",
    blurb:
      "Real-time computer vision, perception, and event-detection platforms for security firms, defense suppliers, smart facilities, and critical infrastructure operators.",
    reference: "FalconPatrol AI · Boston Dynamics Spot",
  },
  {
    n: "02",
    title: "Document & Submission Intelligence",
    blurb:
      "OCR, document validation, submission verification, ambiguity detection, and queue analysis for free zones, government, insurance, KYC-heavy industries, and academia.",
    reference: "DocuMaster",
  },
  {
    n: "03",
    title: "Autonomous & Robotics Software",
    blurb:
      "ROS-based robotics, autonomous indoor navigation, LLM-integrated agents, and industrial automation for logistics, hospitality, manufacturing, and Industry 5.0.",
    reference: "Guide Bot · EDGE intelligent systems",
  },
  {
    n: "04",
    title: "Compliance & Audit-Grade Workflows",
    blurb:
      "Explainable AI, traceable approval flows, cryptographic audit trails, and human-in-the-loop decision systems for real estate, finance, healthcare, and sustainability reporting.",
    reference: "DeedFlow · EcoLens AI",
  },
  {
    n: "05",
    title: "Computer Vision for Operations",
    blurb:
      "Edge-AI and cloud computer vision for F&B, retail, manufacturing, healthcare ops, sustainability monitoring, and quality control.",
    reference: "Plate-Waste Framework · Hadia",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

interface ServicesProps {
  /** When true, skip the section title/intro (dedicated pages render PageHero above). */
  compact?: boolean;
}

export default function Services({ compact = false }: ServicesProps) {
  return (
    <section id="services" className="relative w-full px-8 py-24">
      <div className="mx-auto max-w-360">
        {!compact && (
          <div className="mb-16 flex flex-col gap-6">
            <MonoLabel>What we build</MonoLabel>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="font-display font-bold uppercase leading-[0.85] tracking-[-0.02em] text-kanban-text text-[12vw] md:text-[8vw] lg:text-[96px]"
            >
              Services
            </motion.h2>
            <p className="max-w-2xl text-base leading-relaxed text-kanban-text/60">
              Five practice areas, each rooted in projects we have already shipped. Each is a
              credible specialty backed by deployed work, research publications, and competition
              wins — not marketing claims.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: easeOut, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <GlassCard interactive className="flex h-full flex-col gap-5 p-8">
                <div className="flex items-center justify-between">
                  <MonoLabel className="text-kanban-text/40">{s.n}</MonoLabel>
                  <span className="h-1.5 w-1.5 rounded-full bg-kanban-violet shadow-[0_0_12px_rgba(123,91,255,0.8)]" />
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-kanban-text">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-kanban-text/60">{s.blurb}</p>
                <div className="mt-auto pt-4">
                  <MonoLabel className="text-kanban-violet-soft/80">{s.reference}</MonoLabel>
                </div>
              </GlassCard>
            </motion.div>
          ))}

          {/* 6th tile fills the grid + acts as soft CTA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeOut, delay: SERVICES.length * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <Link href="/contact" className="block h-full">
              <GlassCard interactive className="flex h-full flex-col gap-5 p-8 ring-1 ring-kanban-violet/30">
                <div className="flex items-center justify-between">
                  <MonoLabel className="text-kanban-violet-soft">06</MonoLabel>
                  <span className="h-1.5 w-1.5 rounded-full bg-kanban-violet-soft shadow-[0_0_12px_rgba(196,181,253,0.9)]" />
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-kanban-text">
                  Something outside these five?
                </h3>
                <p className="text-sm leading-relaxed text-kanban-text/65">
                  We take engagements that match our brief: regulated, sensitive, audit-grade. Tell
                  us what you are trying to ship.
                </p>
                <div className="mt-auto pt-4">
                  <MonoLabel className="text-kanban-text/70">Start a conversation →</MonoLabel>
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
