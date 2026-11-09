"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { ButtonLink } from "../ui/Button";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 max-w-full overflow-hidden transition-all duration-300",
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-accent to-accent-2 font-display text-sm font-bold text-white shadow-md shadow-accent/30 transition-transform group-hover:-rotate-6">
            BR
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-fg">
            Bikrom<span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => {
            const isCurrent = isHome ? active === link.id : link.id === "projects" && pathname === "/projects";
            return (
              <li key={link.id}>
                <Link
                  href={isHome ? `#${link.id}` : `/#${link.id}`}
                  aria-current={isCurrent ? "true" : undefined}
                  className={cn(
                    "relative isolate whitespace-nowrap rounded-lg px-2 py-1.5 text-xs transition-colors xl:px-3 xl:py-2 xl:text-sm",
                    isCurrent ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {isCurrent && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-surface-2"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <ButtonLink href={profile.cvPath} download={profile.cvFileName} size="sm">
              <Download className="h-4 w-4" />
              Resume
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-fg lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pt-6 sm:px-8">
              {navLinks.map((link, i) => {
                const isCurrent = isHome ? active === link.id : link.id === "projects" && pathname === "/projects";
                return (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={isHome ? `#${link.id}` : `/#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg transition-colors",
                        isCurrent ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface hover:text-fg",
                      )}
                    >
                      {link.label}
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    </Link>
                  </motion.li>
                );
              })}
              <li className="mt-4 px-1">
                <ButtonLink href={profile.cvPath} download={profile.cvFileName} className="w-full">
                  <Download className="h-4 w-4" />
                  Download CV
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
