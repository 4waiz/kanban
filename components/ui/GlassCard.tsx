import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /** When true, adds a violet edge glow on hover. */
  interactive?: boolean;
}

export default function GlassCard({
  className,
  children,
  interactive = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_40px_-10px_rgba(0,0,0,0.6)]",
        "transition-all duration-300",
        interactive &&
          "hover:border-kanban-violet/40 hover:bg-white/5 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_20px_60px_-10px_rgba(123,91,255,0.35)]",
        className,
      )}
      {...props}
    >
      {interactive && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--x, 50%) var(--y, 0%), rgba(196,181,253,0.15) 0%, rgba(123,91,255,0) 60%)",
          }}
        />
      )}
      {children}
    </div>
  );
}
