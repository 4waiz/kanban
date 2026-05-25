"use client";

import { motion } from "framer-motion";
import MonoLabel from "@/components/ui/MonoLabel";

interface Feature {
  word: string;
  color: string; // brand-aligned highlight color
  bubble: string;
  bubbleBg: string; // bubble fill color
  bubbleText: string;
}

const FEATURES: Feature[] = [
  {
    word: "Mission-critical.",
    color: "#a78bfa",
    bubble: "Defense, healthcare, government — domains where downtime is not an option.",
    bubbleBg: "rgba(167,139,250,0.9)",
    bubbleText: "#0a0612",
  },
  {
    word: "Audit-grade.",
    color: "#5b9eff",
    bubble: "Every AI decision is reviewable. Cryptographic trails by default.",
    bubbleBg: "rgba(91,158,255,0.9)",
    bubbleText: "#0a0612",
  },
  {
    word: "AI-native.",
    color: "#ff8fc8",
    bubble: "Modern AI is the substrate, not a chatbot bolted onto a CRUD app.",
    bubbleBg: "rgba(255,143,200,0.9)",
    bubbleText: "#0a0612",
  },
  {
    word: "Built to outlive.",
    color: "#c4b5fd",
    bubble: "Software handed over, not abandoned. Engineered for the next regulator.",
    bubbleBg: "rgba(196,181,253,0.9)",
    bubbleText: "#0a0612",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function FeatureStack() {
  return (
    <section className="relative w-full px-6 py-32 md:px-12">
      <div className="mx-auto max-w-360">
        <div className="mb-20 flex flex-col gap-6">
          <MonoLabel>Operating principles</MonoLabel>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-kanban-text md:text-4xl">
            Four words we refuse to compromise on.
          </h2>
        </div>

        <ul className="flex flex-col gap-8 md:gap-12">
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.word} feature={f} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const bubbleSide = index % 2 === 0 ? "right" : "left";

  return (
    <li className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1.4fr_1fr]">
      {/* The word — dim baseline, brightens to brand color when in view */}
      <motion.span
        initial={{ color: "rgba(244,241,250,0.18)", x: 0 }}
        whileInView={{ color: feature.color, x: 0 }}
        viewport={{ amount: 0.6, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="font-display font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[11vw] md:text-[6.5vw] lg:text-[88px]"
        style={{ order: bubbleSide === "right" ? 1 : 2 }}
      >
        {feature.word}
      </motion.span>

      {/* The speech-bubble — fades in / slides in when in view */}
      <motion.div
        initial={{ opacity: 0, x: bubbleSide === "right" ? -30 : 30, scale: 0.92 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ amount: 0.6, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
        className="relative max-w-md justify-self-start md:justify-self-end"
        style={{ order: bubbleSide === "right" ? 2 : 1 }}
      >
        <div
          className="rounded-3xl px-6 py-4 text-base font-medium leading-snug shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)] md:text-lg"
          style={{
            background: feature.bubbleBg,
            color: feature.bubbleText,
          }}
        >
          {feature.bubble}
        </div>
      </motion.div>
    </li>
  );
}
