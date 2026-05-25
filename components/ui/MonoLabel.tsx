import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type MonoLabelProps = HTMLAttributes<HTMLSpanElement>;

export default function MonoLabel({ className, children, ...props }: MonoLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em] text-kanban-violet-soft",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
