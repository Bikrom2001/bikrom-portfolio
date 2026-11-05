"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      title="Toggle theme"
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent",
        className,
      )}
    >
      {/* Icons swap purely via CSS, so there is no hydration mismatch. */}
      <Sun className="hidden h-4 w-4 dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
    </button>
  );
}
