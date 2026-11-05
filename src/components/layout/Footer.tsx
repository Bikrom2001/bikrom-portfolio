"use client";

import { motion } from "framer-motion";
import { ArrowUp, Download, Mail, MapPin } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "../icons/BrandIcons";
import { Container } from "../ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface/60 pt-16 pb-12 backdrop-blur-xl">
      {/* ------------------------------------------------------------------ */}
      {/* Background Animated Shapes & Aurora Layer                          */}
      {/* ------------------------------------------------------------------ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {/* Subtle cyber grid */}
        <div className="bg-grid mask-fade absolute inset-0 opacity-40 dark:opacity-60" />

        {/* Floating Aurora Blob 1 (Royal Blue / Accent) */}
        <motion.div
          animate={{
            x: [-25, 25, -25],
            y: [-15, 20, -15],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/15 blur-[100px] dark:bg-accent/20"
        />

        {/* Floating Aurora Blob 2 (Cyan / Accent-2) */}
        <motion.div
          animate={{
            x: [25, -20, 25],
            y: [20, -15, 20],
            scale: [1.15, 1, 1.15],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-accent-2/15 blur-[90px] dark:bg-accent-2/20"
        />

        {/* Floating Aurora Blob 3 (Emerald / Highlight) */}
        <motion.div
          animate={{
            x: [15, -25, 15],
            y: [-10, 15, -10],
            scale: [0.95, 1.1, 0.95],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-500/15"
        />

        {/* Rotating Concentric Tech Orbit Rings (Right side) */}
        <div className="absolute -right-28 -bottom-28 hidden md:block">
          {/* Outer dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative grid h-[420px] w-[420px] place-items-center rounded-full border border-dashed border-accent/20"
          >
            {/* Satellite dot */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-accent shadow-sm shadow-accent" />
          </motion.div>

          {/* Middle dotted ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[40px] rounded-full border border-dotted border-accent-2/25"
          >
            <span className="absolute bottom-4 right-12 h-2 w-2 rounded-full bg-accent-2 shadow-sm shadow-accent-2" />
          </motion.div>

          {/* Inner solid subtle ring */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[90px] rounded-full border border-line bg-surface/30 backdrop-blur-xs"
          />
        </div>

        {/* Floating Geometric Wireframe Diamond (Left side) */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotate: [45, 65, 45],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[8%] top-1/3 hidden h-16 w-16 rounded-xl border border-accent/20 bg-accent/5 backdrop-blur-xs lg:block"
        />

        {/* Floating Small Hexagon/Square (Center) */}
        <motion.div
          animate={{
            y: [6, -6, 6],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-10 hidden h-8 w-8 rounded-lg border border-accent-2/20 bg-accent-2/5 lg:block"
        />

        {/* Floating Tech Glyphs */}
        <div className="absolute inset-x-8 bottom-3 hidden justify-between font-mono text-[10px] text-muted/30 select-none md:flex">
          <span>{"// thank you for visiting"}</span>
          <span>status: 200 OK</span>
          <span>git commit -m &quot;shipped&quot;</span>
        </div>
      </div>

      {/* Animated traveling laser beam on top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1.5,
          }}
          className="h-full w-1/3 bg-linear-to-r from-transparent via-accent to-transparent"
        />
      </div>

      <Container>
        {/* Main Footer Grid */}
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Bio (5 cols) */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-accent to-accent-2 font-display text-sm font-bold text-white shadow-md shadow-accent/25">
                BR
              </span>
              <div>
                <span className="font-display text-base font-bold text-fg">
                  {profile.name}
                </span>
                <p className="font-mono text-xs text-muted">
                  {profile.currentRole.title}
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Building scalable, high-performance web applications and training the next generation of software developers from Dhaka, Bangladesh.
            </p>

            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for new projects &amp; roles</span>
            </div>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-fg">
              Navigation
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials (3 cols) */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-fg">
              Connect
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
              >
                <div className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface transition-colors hover:border-accent/40">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <span className="truncate">{profile.email}</span>
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
              >
                <div className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface transition-colors hover:border-accent/40">
                  <LinkedInIcon size={16} />
                </div>
                <span>LinkedIn / bikrom-roy</span>
              </a>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
              >
                <div className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface transition-colors hover:border-accent/40">
                  <GitHubIcon size={16} />
                </div>
                <span>GitHub / Bikrom2001</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={profile.cvPath}
                download={profile.cvFileName}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-3.5 py-2 text-xs font-medium text-fg shadow-xs transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                <Download className="h-3.5 w-3.5 text-accent" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line/80 pt-8 text-xs text-muted sm:flex-row">
          <p>© {year} {profile.name}. All rights reserved.</p>

          <a
            href="#home"
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
