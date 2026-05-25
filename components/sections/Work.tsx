"use client";

// TODO: wire real project case-study links once /work/[slug] pages exist.
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import MonoLabel from "@/components/ui/MonoLabel";

interface Project {
  category: string;
  discipline: string;
  title: string;
  blurb: string;
}

const PROJECTS: Project[] = [
  {
    category: "Defense",
    discipline: "Vision",
    title: "FalconPatrol AI",
    blurb: "Real-time perception and event detection on a Boston Dynamics Spot platform.",
  },
  {
    category: "Government",
    discipline: "Documents",
    title: "DocuMaster",
    blurb: "Submission verification, OCR, and ambiguity detection for free-zone authorities.",
  },
  {
    category: "Sustainability",
    discipline: "Edge AI",
    title: "EcoLens AI",
    blurb: "IEEE-published edge computer vision for verifiable carbon accounting. Hult Prize winner.",
  },
  {
    category: "Real Estate",
    discipline: "Compliance",
    title: "DeedFlow",
    blurb: "Explainable AI for compliance-first transaction workflows with cryptographic audit trails.",
  },
  {
    category: "Hospitality",
    discipline: "Robotics",
    title: "Guide Bot",
    blurb: "ROS-based autonomous indoor navigation and LLM-integrated guest interaction.",
  },
  {
    category: "Industry 5.0",
    discipline: "Vision",
    title: "Plate-Waste Framework",
    blurb: "Edge-AI plate waste tracking for F&B operations. Research-grade, deployed.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

interface WorkProps {
  compact?: boolean;
}

export default function Work({ compact = false }: WorkProps) {
  return (
    <section id="work" className="relative w-full px-8 py-32">
      <div className="mx-auto max-w-350">
        {!compact && (
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="font-display font-bold uppercase leading-[0.85] tracking-[-0.02em] text-kanban-text text-[12vw] md:text-[8vw] lg:text-[96px]"
          >
            Work
          </motion.h2>
        )}

        <div className={`${compact ? "" : "mt-16"} grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: easeOut, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <GlassCard interactive className="p-7">
                <div className="flex flex-col gap-3">
                  <MonoLabel>
                    {p.category} <span className="text-kanban-text/30 mx-1">/</span>{" "}
                    {p.discipline}
                  </MonoLabel>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-kanban-text">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-kanban-text/60">
                    {p.blurb}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
