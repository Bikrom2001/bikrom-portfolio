"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { certifications, training } from "@/data/portfolio";
import { NSDALogo, PeopleNTechLogo, ProgrammingHeroLogo } from "../icons/BrandIcons";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="relative bg-surface-2/40 py-24 sm:py-32">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[130px]"
      />

      <Container>
        <SectionHeading
          index="08"
          eyebrow="Credentials & Accreditations"
          title={
            <>
              National Certifications &amp; <span className="text-gradient">Professional Training</span>
            </>
          }
          description="Government-accredited NSDA credentials and intensive hands-on professional development programs."
        />

        {/* ------------------------------------------------------------- */}
        {/* Zone 1: NSDA National Certifications                          */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-14">
          <Reveal delay={0.05}>
            <div className="card overflow-hidden border-line bg-surface/90 shadow-xl shadow-black/5 backdrop-blur-md">
              {/* NSDA Official Header Banner */}
              <div className="flex flex-col gap-4 border-b border-line bg-surface-2/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white p-2 shadow-sm ring-1 ring-black/10 transition-transform hover:scale-105">
                    <NSDALogo size={42} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-bold text-fg sm:text-xl">
                        National Skills Development Authority
                      </h3>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                        Government Verified
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted sm:text-sm">
                      Prime Minister&apos;s Office · Government of the People&apos;s Republic of Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start rounded-xl border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted sm:self-auto">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>4 Accredited Credentials</span>
                </div>
              </div>

              {/* Certificates 2x2 Grid */}
              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
                {certifications.map((c) => {
                  const isLevel4 = c.level.includes("4");
                  return (
                    <motion.div
                      key={c.title}
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                      className={`group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 ${
                        isLevel4
                          ? "border-emerald-500/40 bg-linear-to-br from-surface to-emerald-500/5 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/60"
                          : "border-line bg-surface hover:border-accent/40 hover:bg-surface-2/40"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-semibold ${
                              isLevel4
                                ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-400"
                                : "border-accent/30 bg-accent/10 text-accent"
                            }`}
                          >
                            NSDA {c.level} {isLevel4 && "· Highest"}
                          </span>

                          <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
                            <div className="grid h-6 w-6 place-items-center rounded-md bg-white p-0.5 shadow-xs ring-1 ring-black/5">
                              <NSDALogo size={16} />
                            </div>
                            <span>{c.issuer}</span>
                          </div>
                        </div>

                        <h4 className="mt-4 font-display text-[15px] font-semibold leading-snug text-fg transition-colors group-hover:text-accent sm:text-base">
                          {c.title}
                        </h4>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-3 font-mono text-[11px] text-muted">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Competency Certified
                        </span>
                        <span>Bangladesh</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* Zone 2: Professional Training with Real Company Logos         */}
        {/* ------------------------------------------------------------- */}
        <div>
          <Reveal delay={0.12}>
            <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-fg sm:text-2xl">
                  Industry Professional <span className="text-gradient">Training</span>
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Intensive specialized academies and technical diplomas from renowned institutes
                </p>
              </div>
              <span className="mt-2 font-mono text-xs text-accent sm:mt-0">
                Industry-standard curriculums
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {training.map((t, index) => {
                const isPH = t.provider.toLowerCase().includes("programming");
                const isQA = t.title.toLowerCase().includes("testing");

                return (
                  <motion.div
                    key={`${t.title}-${t.provider}`}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="card group relative flex flex-col justify-between overflow-hidden border-line bg-surface/90 p-6 shadow-xl shadow-black/5 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 sm:p-7"
                  >
                    {/* Top company logo badge */}
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div className="overflow-hidden rounded-2xl border border-line/80 bg-surface shadow-md shadow-black/5 transition-transform duration-300 group-hover:scale-105">
                          {isPH ? (
                            <ProgrammingHeroLogo size={52} />
                          ) : (
                            <PeopleNTechLogo size={52} />
                          )}
                        </div>

                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                            isPH
                              ? "border-orange-500/30 bg-orange-500/10 text-orange-400"
                              : isQA
                              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                              : "border-accent/30 bg-accent/10 text-accent"
                          }`}
                        >
                          {isPH ? "Bootcamp" : isQA ? "QA Track" : "Diploma"}
                        </span>
                      </div>

                      <div className="mt-5">
                        <p className="font-mono text-xs font-semibold text-accent">
                          {t.provider}
                        </p>
                        <h4 className="mt-1 font-display text-lg font-bold text-fg transition-colors group-hover:text-accent">
                          {t.title}
                        </h4>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-muted sm:text-[13px]">
                        {isPH
                          ? "Full-stack development covering modern JavaScript, React.js, Node.js, Express, MongoDB, REST APIs, and production deployment."
                          : isQA
                          ? "Comprehensive quality assurance methodologies, test case design, black-box testing, defect tracking, and SDLC practices."
                          : "Enterprise web application development with PHP, Laravel framework, MySQL databases, MVC pattern, and responsive UI."}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-3.5 font-mono text-[11px] text-muted">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5 text-accent" />
                        Graduated
                      </span>
                      <span className="text-fg/80 font-medium">Verified Certificate</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

