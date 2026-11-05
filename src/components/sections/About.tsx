"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Calendar,
  Code2,
  FolderGit2,
  Globe,
  GraduationCap,
  Languages,
  Laptop,
  MapPin,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { about } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const paragraphMeta = [
  {
    step: "01",
    title: "Engineering & Architecture",
    icon: <Terminal className="h-4 w-4 text-accent" />,
    badgeColor: "border-accent/30 bg-accent/10 text-accent",
    nodeBorder: "border-accent/40 bg-surface group-hover:border-accent group-hover:shadow-accent/20",
  },
  {
    step: "02",
    title: "Production & Scale",
    icon: <Laptop className="h-4 w-4 text-accent-2" />,
    badgeColor: "border-accent-2/30 bg-accent-2/10 text-accent-2",
    nodeBorder: "border-accent-2/40 bg-surface group-hover:border-accent-2 group-hover:shadow-accent-2/20",
  },
  {
    step: "03",
    title: "Mentorship & Teaching",
    icon: <BookOpen className="h-4 w-4 text-emerald-400" />,
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    nodeBorder: "border-emerald-500/40 bg-surface group-hover:border-emerald-500 group-hover:shadow-emerald-500/20",
  },
];

function getStatIcon(label: string): ReactNode {
  const lower = label.toLowerCase();
  if (lower.includes("student") || lower.includes("train")) {
    return <Users className="h-4 w-4 text-emerald-400" />;
  }
  if (lower.includes("year")) {
    return <Calendar className="h-4 w-4 text-accent" />;
  }
  if (lower.includes("website")) {
    return <Globe className="h-4 w-4 text-accent-2" />;
  }
  if (lower.includes("project")) {
    return <FolderGit2 className="h-4 w-4 text-accent" />;
  }
  if (lower.includes("problem") || lower.includes("geek")) {
    return <Code2 className="h-4 w-4 text-accent-2" />;
  }
  return <Sparkles className="h-4 w-4 text-accent" />;
}

function getFactIcon(label: string): ReactNode {
  switch (label.toLowerCase()) {
    case "based in":
      return <MapPin className="h-4 w-4 text-accent" />;
    case "currently":
      return <Briefcase className="h-4 w-4 text-accent-2" />;
    case "education":
      return <GraduationCap className="h-4 w-4 text-accent" />;
    case "languages":
      return <Languages className="h-4 w-4 text-accent-2" />;
    default:
      return <Terminal className="h-4 w-4 text-muted" />;
  }
}

/** Subtle ambient code glyphs */
const ambientGlyphs = [
  { text: "<Experience years={5} />", className: "left-[4%] top-[14%]" },
  { text: "// 500+ mentored", className: "right-[6%] top-[20%] hidden md:block" },
  { text: "deploy(production)", className: "left-[8%] bottom-[10%] hidden lg:block" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-1/3 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-accent-2/10 blur-[120px]"
      />

      {/* Floating decorative developer glyphs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {ambientGlyphs.map((g) => (
          <span
            key={g.text}
            className={`absolute font-mono text-xs text-accent/20 dark:text-accent/15 ${g.className}`}
          >
            {g.text}
          </span>
        ))}
      </div>

      <Container>
        <SectionHeading
          index="01"
          eyebrow="About me"
          title={
            <>
              Developer By Trade, <span className="text-gradient">Teacher By Choice.</span>
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Interactive Story & Journey Cards (7 cols) */}
          <div className="space-y-4 lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="card overflow-hidden border-line bg-surface/90 shadow-xl shadow-black/5 backdrop-blur-md">
                {/* Editor / terminal style header with blinking cursor and live branch */}
                <div className="flex items-center justify-between border-b border-line bg-surface-2/60 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 transition-transform hover:scale-125" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 transition-transform hover:scale-125" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 transition-transform hover:scale-125" />
                    <span className="ml-2 font-mono text-xs text-muted">bikrom / biography.md</span>
                    <span className="inline-block h-3.5 w-1.5 animate-pulse rounded-xs bg-accent" />
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="hidden items-center gap-1.5 font-mono text-[11px] text-emerald-500 sm:flex">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      main
                    </span>
                    <span className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-muted">
                      5+ YOE
                    </span>
                  </div>
                </div>

                {/* Narrative timeline with connected gradient path */}
                <div className="relative p-5 sm:p-7">
                  {/* Vertical connecting gradient line */}
                  <div
                    aria-hidden
                    className="absolute left-9 top-10 bottom-10 hidden w-0.5 bg-linear-to-b from-accent via-accent-2 to-emerald-400/80 opacity-30 sm:block"
                  />

                  <div className="space-y-6">
                    {about.paragraphs.map((p, i) => {
                      const meta = paragraphMeta[i];
                      return (
                        <div
                          key={i}
                          className="group relative flex gap-4 sm:gap-6 rounded-2xl p-2 transition-all duration-300 hover:bg-surface-2/40"
                        >
                          {/* Step Node */}
                          {meta && (
                            <div className="hidden sm:flex flex-col items-center">
                              <div
                                className={cn(
                                  "relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-xl border shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
                                  meta.nodeBorder,
                                )}
                              >
                                {meta.icon}
                              </div>
                            </div>
                          )}

                          {/* Content */}
                          <div className="min-w-0 flex-1">
                            {meta && (
                              <div className="mb-2 flex items-center gap-2">
                                <span className="font-mono text-xs font-semibold text-muted">
                                  {meta.step}
                                </span>
                                <span
                                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${meta.badgeColor}`}
                                >
                                  <span className="sm:hidden">{meta.icon}</span>
                                  {meta.title}
                                </span>
                              </div>
                            )}
                            <p className="text-[15px] leading-relaxed text-muted sm:text-base">
                              {p}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Key Facts & Stats Bento (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Facts Card */}
            <Reveal delay={0.15}>
              <div className="card overflow-hidden border-line bg-surface/90 p-5 shadow-xl shadow-black/5 backdrop-blur-md sm:p-6">
                <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                    Quick Profile
                  </h3>
                  <span className="font-mono text-[11px] text-accent">verified</span>
                </div>

                <div className="space-y-3.5">
                  {about.facts.map((f) => {
                    const isLocation = f.label.toLowerCase().includes("based");
                    const isCurrent = f.label.toLowerCase().includes("current");
                    return (
                      <motion.div
                        key={f.label}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="group flex items-start gap-3.5 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-line hover:bg-surface-2/60"
                      >
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-surface-2 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6">
                          {getFactIcon(f.label)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                              {f.label}
                            </p>
                            {isLocation && (
                              <span className="relative flex h-2 w-2" title="Active location">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                              </span>
                            )}
                            {isCurrent && (
                              <span className="rounded-full border border-accent/30 bg-accent/10 px-1.5 py-0.2 font-mono text-[9px] font-semibold uppercase text-accent">
                                active
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-sm font-medium text-fg">
                            {f.value}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Stats Grid */}
            <Reveal delay={0.25}>
              <div className="grid grid-cols-2 gap-3.5">
                {about.stats.map((s) => {
                  const isFeatured = "featured" in s && Boolean(s.featured);
                  return (
                    <motion.div
                      key={s.label}
                      whileHover={{ y: -4, scale: 1.015 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={cn(
                        "card group relative overflow-hidden border-line bg-surface/90 p-4.5 shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:shadow-accent/10",
                        isFeatured && "col-span-2 border-emerald-500/30 bg-linear-to-r from-surface via-surface to-emerald-500/10 sm:p-5 hover:border-emerald-500/50 hover:shadow-emerald-500/10",
                      )}
                    >
                      {/* Flowing animated light sheen across the featured mentorship card */}
                      {isFeatured && (
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-emerald-400/15 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full"
                        />
                      )}

                      {/* Subtle hover gradient glow */}
                      <div
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100",
                          isFeatured ? "bg-emerald-500/20" : "bg-accent/10",
                        )}
                      />

                      {isFeatured ? (
                        <div className="relative flex items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2.5">
                              <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="font-display text-2xl font-bold tracking-tight text-fg transition-colors group-hover:text-emerald-400 sm:text-3xl"
                              >
                                {s.value}
                              </motion.span>
                              <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                mentorship
                              </span>
                            </div>
                            <p className="mt-1 text-xs font-medium text-muted transition-colors group-hover:text-fg/80 sm:text-sm">
                              {s.label}
                            </p>
                          </div>
                          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 shadow-sm transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                            {getStatIcon(s.label)}
                          </div>
                        </div>
                      ) : (
                        <div className="relative">
                          <div className="flex items-center justify-between">
                            <motion.span
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              className="font-display text-2xl font-bold tracking-tight text-fg transition-colors group-hover:text-accent sm:text-3xl"
                            >
                              {s.value}
                            </motion.span>
                            <div className="grid h-8 w-8 place-items-center rounded-lg border border-line/80 bg-surface-2/70 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                              {getStatIcon(s.label)}
                            </div>
                          </div>
                          <p className="mt-2 text-xs font-medium leading-snug text-muted transition-colors group-hover:text-fg/80">
                            {s.label}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
