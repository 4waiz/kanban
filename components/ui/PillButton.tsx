import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "light" | "dark";

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export default function PillButton({
  variant = "light",
  className,
  children,
  ...props
}: PillButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-mono uppercase tracking-[0.22em] text-[11px] transition-colors";
  const styles =
    variant === "light"
      ? "bg-kanban-text text-kanban-bg hover:bg-white px-10 py-4"
      : "bg-white/5 text-kanban-text border border-white/10 hover:bg-white/10 px-6 py-3 backdrop-blur-md";

  return (
    <button className={cn(base, styles, className)} {...props}>
      {children}
    </button>
  );
}
