"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import MonoLabel from "@/components/ui/MonoLabel";

interface InitializeCoreOverlayProps {
  open: boolean;
  onClose: () => void;
}

const BOOT_LINES = [
  "[ AUTH ] handshake — KANBAN_SYSTEMS.SECURE_CHANNEL",
  "[ MAP ] reading mission profile…",
  "[ ARCH ] provisioning audit-grade workspace…",
  "[ KEY ] generating session cryptography…",
  "[ NET ] linking to founder review queue…",
  "[ READY ] secure intake channel open.",
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function InitializeCoreOverlay({ open, onClose }: InitializeCoreOverlayProps) {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [complete, setComplete] = useState(false);
  const router = useRouter();
  const cancelled = useRef(false);

  // Reset when re-opened, lock body scroll, respond to Esc.
  useEffect(() => {
    if (!open) return;
    cancelled.current = false;
    setProgress(0);
    setLineIndex(0);
    setTyped("");
    setComplete(false);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Boot sequence: type each line, advance, drive a progress bar.
  useEffect(() => {
    if (!open) return;
    if (lineIndex >= BOOT_LINES.length) {
      setComplete(true);
      return;
    }
    const line = BOOT_LINES[lineIndex];
    let i = 0;
    const tick = setInterval(() => {
      if (cancelled.current) return;
      i += 1;
      setTyped(line.slice(0, i));
      setProgress(((lineIndex + i / line.length) / BOOT_LINES.length) * 100);
      if (i >= line.length) {
        clearInterval(tick);
        setTimeout(() => {
          if (!cancelled.current) setLineIndex((n) => n + 1);
        }, 220);
      }
    }, 22);
    return () => clearInterval(tick);
  }, [lineIndex, open]);

  const handleEnter = () => {
    cancelled.current = true;
    router.push("/services");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-kanban-bg/85 px-6 backdrop-blur-md"
          onClick={(e) => {
            // click outside the panel closes
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Initialize core sequence"
        >
          {/* radial glow behind the panel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(123,91,255,0.18) 0%, rgba(10,6,18,0) 60%)",
            }}
          />

          <motion.div
            initial={{ y: 30, scale: 0.94, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-kanban-bg-2/95 shadow-[0_40px_140px_-30px_rgba(123,91,255,0.5)]"
          >
            {/* header bar */}
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="relative grid h-2.5 w-2.5 place-items-center">
                  <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-kanban-violet/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-kanban-violet-soft" />
                </span>
                <MonoLabel className="text-kanban-violet-soft">
                  KANBAN.CORE / INIT
                </MonoLabel>
              </div>
              <button
                onClick={onClose}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-kanban-text/40 transition-colors hover:text-kanban-text"
                aria-label="Cancel initialization"
              >
                Esc · Cancel
              </button>
            </div>

            {/* terminal body */}
            <div className="space-y-2 px-6 py-7 font-mono text-[12px] leading-relaxed text-kanban-text/85 sm:text-[13px]">
              {BOOT_LINES.slice(0, lineIndex).map((l) => (
                <div key={l} className="flex items-start gap-3">
                  <span className="text-kanban-violet-soft">›</span>
                  <span>{l}</span>
                  <span className="ml-auto text-kanban-text/30">OK</span>
                </div>
              ))}
              {lineIndex < BOOT_LINES.length && (
                <div className="flex items-start gap-3">
                  <span className="text-kanban-violet-soft">›</span>
                  <span>
                    {typed}
                    <span className="ml-0.5 inline-block h-3.5 w-1.5 -translate-y-px bg-kanban-text/80 align-middle [animation:blink_0.9s_steps(2)_infinite]" />
                  </span>
                </div>
              )}
            </div>

            {/* progress bar */}
            <div className="px-6">
              <div className="h-px w-full bg-white/5">
                <motion.div
                  className="h-px bg-gradient-to-r from-kanban-violet via-kanban-violet-soft to-pink-300"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-kanban-text/40">
                <span>{Math.round(progress)}% · core</span>
                <span>{complete ? "channel open" : "establishing"}</span>
              </div>
            </div>

            {/* footer */}
            <div className="flex flex-col items-stretch gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-kanban-text/45">
                {complete ? "Channel open. Press enter." : "Standby — provisioning."}
              </p>
              <button
                onClick={handleEnter}
                disabled={!complete}
                className="inline-flex h-12 items-center justify-center rounded-full bg-kanban-text px-8 font-mono text-[11px] uppercase tracking-[0.22em] text-kanban-bg transition-all hover:bg-white disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-kanban-text/40"
              >
                {complete ? "Enter brief →" : "Initializing…"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
