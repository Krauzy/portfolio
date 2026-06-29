import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  animate?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  animate = true
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        animate && "slide-on-scroll slide-from-bottom",
        align === "center" && "mx-auto text-center"
      )}
    >
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-text-primary [overflow-wrap:anywhere] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-text-secondary [overflow-wrap:anywhere] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
