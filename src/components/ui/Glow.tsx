import { cn } from "@/lib/cn";

type GlowProps = {
  className?: string;
};

export function Glow({ className }: GlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full bg-indigo-700/30 blur-3xl",
        className
      )}
    />
  );
}
