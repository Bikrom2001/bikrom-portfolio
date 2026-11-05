import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11.5px] leading-none text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
