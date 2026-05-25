"use client";

import { motion } from "framer-motion";
import MonoLabel from "@/components/ui/MonoLabel";

interface Step {
  n: string;
  word: string;
  color: string;
  bubble: string;
  bubbleBg: string;
}

const STEPS: Step[] = [
  {
    n: "01",
    word: "Map.",
    color: "#a78bfa",
    bubble: "Understand the workflow, the data, the regulator, and the failure modes before writing code.",
    bubbleBg: "rgba(167,139,250,0.92)",
  },
  {
    n: "02",
    word: "Architect.",
    color: "#5b9eff",
    bubble: "Design for security, auditability, and graceful degradation first. Features come second.",
    bubbleBg: "rgba(91,158,255,0.92)",
  },
  {
    n: "03",
    word: "Build.",
    color: "#ff8fc8",
    bubble: "Python, FastAPI, Next.js, TypeScript, PyTorch, ROS, Azure/AWS — instrumented and logged from day one.",
    bubbleBg: "rgba(255,143,200,0.92)",
  },
  {
    n: "04",
    word: "Audit.",
    color: "#c4b5fd",
    bubble: "Explainability, traceability, and human-in-the-loop controls by default. Every AI decision is reviewable.",
    bubbleBg: "rgba(196,181,253,0.92)",
  },
  {
    n: "05",
    word: "Operate.",
    color: "#ffb84d",
    bubble: "Documentation, training, and retainer-based monitoring. Software is handed over, not abandoned.",
    bubbleBg: "rgba(255,184,77,0.92)",
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
      className="relative w-full overflow-hidden border-y border-white/5 px-6 py-32 md:px-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(123,91,255,0.1) 0%, rgba(10,6,18,0) 60%)",
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
              className="font-display font-bold uppercase leading-[0.85] tracking-[-0.02em] text-kanban-text text-[12vw] md:text-[8vw] lg:text-[96px]"
            >
              Approach
            </motion.h2>
            <p className="max-w-2xl text-base leading-relaxed text-kanban-text/60">
              Five steps. The difference between a working demo and a system a hospital, ministry,
              or defense supplier can actually deploy.
            </p>
          </div>
        )}

        <ol className="flex flex-col gap-10 md:gap-16">
          {STEPS.map((s, i) => (
            <StepRow key={s.n} step={s} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepRow({ step, index }: { step: Step; index: number }) {
  const bubbleSide = index % 2 === 0 ? "right" : "left";

  return (
    <li className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-[1.4fr_1fr]">
      {/* Word + step number */}
      <div
        className="flex items-baseline gap-4 md:gap-8"
        style={{ order: bubbleSide === "right" ? 1 : 2 }}
      >
        <motion.span
          initial={{ color: "rgba(244,241,250,0.18)" }}
          whileInView={{ color: step.color }}
          viewport={{ amount: 0.6, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="font-mono text-sm uppercase tracking-[0.22em]"
        >
          {step.n}
        </motion.span>
        <motion.span
          initial={{ color: "rgba(244,241,250,0.16)" }}
          whileInView={{ color: step.color }}
          viewport={{ amount: 0.6, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="font-display font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[16vw] md:text-[10vw] lg:text-[140px]"
        >
          {step.word}
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, x: bubbleSide === "right" ? -30 : 30, scale: 0.92 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ amount: 0.6, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
        className="relative max-w-md justify-self-start md:justify-self-end"
        style={{ order: bubbleSide === "right" ? 2 : 1 }}
      >
        <div
          className="rounded-3xl px-6 py-4 text-base font-medium leading-snug text-kanban-bg shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)] md:text-lg"
          style={{ background: step.bubbleBg }}
        >
          {step.bubble}
        </div>
      </motion.div>
    </li>
  );
}
