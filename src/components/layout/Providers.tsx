"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  // Signals that React has hydrated. Until then, a CSS safety net in globals.css
  // makes sure animated content can never stay invisible.
  useEffect(() => {
    document.documentElement.setAttribute("data-hydrated", "true");
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {/* Respect the visitor's "reduce motion" OS setting for every animation. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
