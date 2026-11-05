import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ index, eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn("mb-12 max-w-2xl md:mb-16", centered && "mx-auto text-center")}>
      <p
        className={cn(
          "mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent",
          centered && "justify-center",
        )}
      >
        <span className="text-muted">{index}</span>
        <span aria-hidden className="h-px w-8 bg-accent/50" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p> : null}
    </Reveal>
  );
}
