"use client";

// TODO: replace placeholder logo glyph with the real Kanban Studios mark from /public/logo.png.
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/approach" },
  { label: "Lab", href: "/lab" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex h-16 max-w-360 items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
      >
        {/* logo + wordmark */}
        <Link href="/" className="flex items-center gap-3 pl-2">
          <span
            aria-hidden
            className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-lg"
          >
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight text-kanban-text">
            Kanban Studios
          </span>
        </Link>

        {/* center links */}
        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-kanban-text/70 transition-colors hover:text-kanban-text"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA pill (nested glass pill on right edge) */}
        <Link
          href="/contact"
          className="inline-flex h-10 items-center rounded-full border border-white/10 bg-white/10 px-5 font-mono text-[11px] uppercase tracking-[0.22em] text-kanban-text transition-colors hover:bg-white/15"
        >
          Start a Project
        </Link>
      </motion.div>
    </header>
  );
}
