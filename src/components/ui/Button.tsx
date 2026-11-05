import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  children: ReactNode;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-accent text-white shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110",
  secondary:
    "border border-line bg-surface text-fg hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent",
  ghost: "text-muted hover:bg-surface-2 hover:text-fg",
};

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-12 px-6 text-[15px]",
};

/** Anchor styled as a button — used for in-page links, downloads and external links. */
export function ButtonLink({ variant = "primary", size = "md", className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}

export const buttonClasses = (variant: keyof typeof variants = "primary", size: keyof typeof sizes = "md") =>
  cn(base, variants[variant], sizes[size]);
