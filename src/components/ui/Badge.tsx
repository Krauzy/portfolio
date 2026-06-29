import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-medium text-text-secondary [overflow-wrap:anywhere]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
