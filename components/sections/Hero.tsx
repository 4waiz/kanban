"use client";

// TODO: headline currently uses Space Grotesk Bold as a stand-in for Neue Machina.
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import GlassShard3D from "@/components/ui/GlassShard3D";
import MonoLabel from "@/components/ui/MonoLabel";
import PillButton from "@/components/ui/PillButton";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* top-left shard */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="pointer-events-none absolute left-[2%] top-[14%] hidden md:block"
      >
        <GlassShard3D size={460} variant="spiky" />
      </motion.div>

      {/* center content */}
      <div className="relative mx-auto flex max-w-350 flex-col items-center px-6 pt-[44vh] pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
          className="font-display font-bold uppercase leading-[0.85] tracking-[-0.02em] text-kanban-text text-[22vw] sm:text-[18vw] md:text-[14vw] lg:text-[200px] xl:text-[240px]"
        >
          <span className="block">Built to</span>
          <span className="block">not fail.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.45 }}
        >
          <GlassCard className="mt-10 px-8 py-5">
            <div className="flex flex-col items-center gap-2">
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
          className="mt-10"
        >
          <PillButton variant="light">Initialize core</PillButton>
        </motion.div>
      </div>

      {/* bottom centered larger shard */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: easeOut }}
        className="pointer-events-none relative grid place-items-center pb-32"
      >
        <GlassShard3D size={640} variant="crystal" speed={0.7} />
      </motion.div>
    </section>
  );
}
