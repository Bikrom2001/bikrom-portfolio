"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Code2,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { activities, education } from "@/data/portfolio";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const activityMeta = [
  {
    icon: <Code2 className="h-5 w-5 text-accent" />,
    badge: "Algorithms",
    badgeColor: "border-accent/30 bg-accent/10 text-accent",
  },
  {
    icon: <Trophy className="h-5 w-5 text-amber-400" />,
    badge: "ICPC Regional",
    badgeColor: "border-amber-400/30 bg-amber-400/10 text-amber-400",
  },
  {
    icon: <Award className="h-5 w-5 text-accent-2" />,
    badge: "Contest",
    badgeColor: "border-accent-2/30 bg-accent-2/10 text-accent-2",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
    badge: "Leadership",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  },
];

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background ambient accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-36 top-1/3 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-36 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent-2/10 blur-[130px]"
      />

      <Container>
        <SectionHeading
          index="07"
          eyebrow="Education"
          title={
            <>
              Academic Foundations &amp; <span className="text-gradient">Problem Solving</span>
            </>
          }
          description="Formal degree programs in Computer Science and Engineering combined with competitive programming and university leadership."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Academic Degrees (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="card overflow-hidden border-line bg-surface/90 p-6 shadow-xl shadow-black/5 backdrop-blur-md sm:p-8">
                <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent shadow-sm">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-fg">Academic Degrees</h3>
                      <p className="font-mono text-xs text-muted">Computer Science & Engineering</p>
                    </div>
                  </div>
                  <span className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-accent">
                    Higher Education
                  </span>
                </div>

                <div className="space-y-6">
                  {education.map((e, index) => {
                    const isBSc = index === 0;
                    return (
                      <motion.div
                        key={e.degree}
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 350, damping: 22 }}
                        className="group relative rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:bg-surface-2/40 hover:shadow-lg hover:shadow-accent/5 sm:p-6"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <span
                            className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium ${
                              isBSc
                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                                : "border-accent-2/30 bg-accent-2/10 text-accent-2"
                            }`}
                          >
                            {isBSc ? "Undergraduate Degree" : "Engineering Diploma"}
                          </span>

                          {e.period ? (
                            <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                              <Calendar className="h-3.5 w-3.5 text-accent-2" />
                              {e.period}
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                              <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                              </span>
                              Enrolled
                            </span>
                          )}
                        </div>

                        <h4 className="mt-3.5 font-display text-base font-semibold leading-snug text-fg transition-colors group-hover:text-accent sm:text-lg">
                          {e.degree}
                        </h4>

                        <div className="mt-2 flex items-center gap-2 text-sm text-muted">
                          <MapPin className="h-4 w-4 shrink-0 text-accent" />
                          <span className="font-medium text-fg/90">{e.institution}</span>
                        </div>

                        <p className="mt-3 text-xs leading-relaxed text-muted sm:text-[13px]">
                          {isBSc
                            ? "Core focus on Software Engineering, Data Structures & Algorithms, Object-Oriented Analysis, and Database Management Systems."
                            : "Comprehensive 4-year engineering curriculum covering programming fundamentals, web technologies, computer hardware, and networks."}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Problem Solving & Activities (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="card overflow-hidden border-line bg-surface/90 p-6 shadow-xl shadow-black/5 backdrop-blur-md sm:p-7">
                <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-400 shadow-sm">
                      <Trophy className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-fg">Problem Solving</h3>
                      <p className="font-mono text-xs text-muted">Contests & Leadership</p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-accent">verified</span>
                </div>

                <div className="space-y-3.5">
                  {activities.map((a, i) => {
                    const meta = activityMeta[i];
                    return (
                      <motion.div
                        key={a}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="group flex items-start gap-3.5 rounded-xl border border-line/60 bg-surface p-3.5 transition-all duration-200 hover:border-accent/40 hover:bg-surface-2/60"
                      >
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6">
                          {meta?.icon ?? <Sparkles className="h-4 w-4 text-accent" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`rounded-full border px-2 py-0.2 font-mono text-[10px] font-medium ${
                                meta?.badgeColor ?? "border-line text-muted"
                              }`}
                            >
                              {meta?.badge ?? "Activity"}
                            </span>
                          </div>
                          <p className="mt-1.5 text-sm font-medium leading-snug text-fg group-hover:text-accent transition-colors">
                            {a}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
