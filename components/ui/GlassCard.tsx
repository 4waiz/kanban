import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement>;

export default function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_40px_-10px_rgba(0,0,0,0.6)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
