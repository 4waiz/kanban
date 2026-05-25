"use client";

import { motion } from "framer-motion";
import MonoLabel from "@/components/ui/MonoLabel";

const STEPS = [
  {
    n: "01",
    name: "Map",
    body: "Understand the workflow, the data, the regulator, and the failure modes before writing code.",
  },
  {
    n: "02",
    name: "Architect",
    body: "Design for security, auditability, and graceful degradation first. Features come second.",
  },
  {
    n: "03",
    name: "Build",
    body: "Engineer in modern stacks — Python, FastAPI, Next.js, TypeScript, PyTorch, ROS, Azure/AWS — instrumented and logged from day one.",
  },
  {
    n: "04",
    name: "Audit",
    body: "Apply explainability, traceability, and human-in-the-loop controls by default. Every AI decision is reviewable.",
  },
  {
    n: "05",
    name: "Operate",
    body: "Deliver with documentation, training, and retainer-based monitoring. Software is handed over, not abandoned.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

interface ApproachProps {
  compact?: boolean;
}

export default function Approach({ compact = false }: ApproachProps) {
  return (
    <section
      id="approach"
      className="relative w-full overflow-hidden border-y border-white/5 px-8 py-32"
    >
      {/* faint violet glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(123,91,255,0.08) 0%, rgba(10,6,18,0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-360">
        {!compact && (
          <div className="mb-20 flex flex-col gap-6">
            <MonoLabel>How we engineer</MonoLabel>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="font-display font-bold uppercase leading-[0.85] tracking-[-0.02em] text-kanban-text text-[18vw] md:text-[12vw] lg:text-[160px]"
            >
              Approach
            </motion.h2>
            <p className="max-w-2xl text-base leading-relaxed text-kanban-text/60">
              Five steps. The difference between a working demo and a system a hospital, ministry,
              or defense supplier can actually deploy.
            </p>
          </div>
        )}

        <ol className="flex flex-col">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: easeOut, delay: i * 0.08 }}
              className="grid grid-cols-[80px_1fr] items-start gap-6 border-t border-white/5 py-10 md:grid-cols-[120px_240px_1fr] md:gap-10"
            >
              <MonoLabel className="text-kanban-text/40">{s.n}</MonoLabel>
              <h3 className="font-display text-3xl font-semibold tracking-tight text-kanban-text md:text-4xl">
                {s.name}
              </h3>
              <p className="col-span-2 max-w-2xl text-base leading-relaxed text-kanban-text/65 md:col-span-1">
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
