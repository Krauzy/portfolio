import type { AnchorHTMLAttributes, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "@/lib/icons";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: keyof typeof iconMap;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-indigo-700/60 bg-indigo-700 text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#2530ff]",
  secondary:
    "border-white/10 bg-white/[0.055] text-text-primary hover:-translate-y-0.5 hover:border-blue-muted/60 hover:bg-white/[0.09]",
  ghost:
    "border-transparent bg-transparent text-text-secondary hover:text-text-primary"
};

export function Button({
  children,
  className,
  variant = "primary",
  icon,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-center text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-muted",
        variants[variant],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <FontAwesomeIcon icon={iconMap[icon]} className="h-3.5 w-3.5" aria-hidden />
      ) : null}
    </a>
  );
}
