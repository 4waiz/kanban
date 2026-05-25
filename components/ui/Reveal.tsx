"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Stagger position in a list — multiplied by 0.08s to delay subsequent items. */
  index?: number;
  /** y-axis travel distance in pixels. */
  y?: number;
  /** Custom className passed to the motion wrapper. */
  className?: string;
}

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Reveal({ children, index = 0, y = 28, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: easeOut, delay: index * 0.08 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
