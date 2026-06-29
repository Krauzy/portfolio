import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card slide-on-scroll slide-from-bottom min-w-0 rounded-lg p-6 transition-colors duration-300 hover:border-blue-muted/45",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
