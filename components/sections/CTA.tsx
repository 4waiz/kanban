"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import MonoLabel from "@/components/ui/MonoLabel";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden px-8 pt-20 pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(196,87,160,0.12) 0%, rgba(123,91,255,0.08) 30%, rgba(10,6,18,0) 65%)",
        }}
      />

      <div className="relative mx-auto max-w-360">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <GlassCard className="grid grid-cols-1 items-center gap-10 px-10 py-16 md:grid-cols-[1.4fr_1fr] md:px-16 md:py-20">
            <div>
              <MonoLabel>Engagement</MonoLabel>
              <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-[-0.02em] text-kanban-text md:text-7xl">
                Software you cannot afford to get wrong.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-kanban-text/65">
                Twenty target slots open this year. We take on engagements that need to outlive their
                project plan.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-kanban-text px-10 font-mono text-[12px] uppercase tracking-[0.22em] text-kanban-bg transition-colors hover:bg-white"
              >
                Start a project
              </Link>
              <Link
                href="/work"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 font-mono text-[12px] uppercase tracking-[0.22em] text-kanban-text transition-colors hover:bg-white/10"
              >
                See the work
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
