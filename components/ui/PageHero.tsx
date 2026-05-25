"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import MonoLabel from "@/components/ui/MonoLabel";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="relative w-full px-8 pt-32 pb-16">
      <div className="mx-auto max-w-360">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="flex flex-col gap-6"
        >
          <MonoLabel>{eyebrow}</MonoLabel>
          <h1 className="font-display font-bold uppercase leading-[0.88] tracking-[-0.02em] text-kanban-text text-[11vw] md:text-[7vw] lg:text-[88px]">
            {title}
          </h1>
          {intro && (
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-kanban-text/65 md:text-lg">
              {intro}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
