"use client";

// TODO: headline currently uses Space Grotesk Bold as a stand-in for Neue Machina.
import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import GlassShard3D from "@/components/ui/GlassShard3D";
import MonoLabel from "@/components/ui/MonoLabel";
import PillButton from "@/components/ui/PillButton";
import InitializeCoreOverlay from "@/components/ui/InitializeCoreOverlay";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [coreOpen, setCoreOpen] = useState(false);
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-360 grid-cols-1 items-center gap-8 px-6 pt-28 pb-12 md:grid-cols-[1.2fr_1fr] md:gap-10 md:px-8 md:pt-24 md:pb-12 lg:gap-14">
        {/* LEFT — headline, glass card, CTA */}
        <div className="flex flex-col items-start gap-6 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
            className="font-display font-bold uppercase leading-[0.85] tracking-[-0.02em] text-kanban-text text-[14vw] sm:text-[11vw] md:text-[7.5vw] lg:text-[8vw] xl:text-[112px]"
          >
            <span className="block">Built to</span>
            <span className="block">not fail.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.45 }}
            className="w-full max-w-xl"
          >
            <GlassCard className="px-6 py-4">
              <div className="flex flex-col items-start gap-2">
                <MonoLabel className="text-kanban-text/80">
                  Mission-critical AI software for regulated and high-stakes environments.
                </MonoLabel>
                <MonoLabel>Designed in the UAE. Engineered to outlive.</MonoLabel>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.65 }}
          >
            <PillButton variant="light" onClick={() => setCoreOpen(true)}>
              Initialize core
            </PillButton>
          </motion.div>
        </div>

        {/* RIGHT — orb (drag to spin) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: easeOut, delay: 0.2 }}
          className="relative grid w-full place-items-center"
        >
          <GlassShard3D size={440} variant="spiky" speed={0.7} />
        </motion.div>
      </div>

      <InitializeCoreOverlay open={coreOpen} onClose={() => setCoreOpen(false)} />
    </section>
  );
}
