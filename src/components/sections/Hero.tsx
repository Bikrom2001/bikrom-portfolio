"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import portrait from "@/assets/bikrom-roy.jpg";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "../icons/BrandIcons";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const socials = [
  { href: profile.socials.github, label: "GitHub", icon: <GitHubIcon size={18} />, external: true },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: <LinkedInIcon size={18} />, external: true },
  { href: `mailto:${profile.email}`, label: "Email", icon: <Mail className="h-[18px] w-[18px]" />, external: false },
];

/** Faint developer-themed glyphs scattered in the background. */
const glyphs = [
  { text: "</>", className: "left-[6%] top-[22%]" },
  { text: "{ }", className: "right-[44%] top-[14%] hidden lg:block" },
  { text: "=>", className: "left-[40%] bottom-[12%] hidden md:block" },
  { text: "$ npm run dev", className: "right-[6%] bottom-[10%] hidden lg:block" },
  { text: "<?php", className: "left-[3%] bottom-[22%] hidden md:block" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 lg:pt-24">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-accent-2/10 blur-[110px]" />
        {glyphs.map((g) => (
          <span
            key={g.text}
            className={`absolute select-none font-mono text-sm text-accent/25 dark:text-accent/20 ${g.className}`}
          >
            {g.text}
          </span>
        ))}
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        {/* Intro */}
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Currently {profile.currentRole.title} @ {profile.currentRole.short}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-[4.1rem]"
          >
            Hi, I&apos;m <span className="text-gradient">Bikrom Roy</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[15px] font-medium text-fg/85"
          >
            {profile.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {role}
                {i < profile.roles.length - 1 && <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />}
              </span>
            ))}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.heroIntro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={profile.cvPath} download={profile.cvFileName}>
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </ButtonLink>
            <ButtonLink href="#projects" variant="secondary">
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <span className="flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="group relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]"
          >
            {/* Multi-layered breathing ambient aura */}
            <motion.div
              aria-hidden
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.65, 0.9, 0.65],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-8 rounded-[3rem] bg-linear-to-tr from-accent/50 via-accent-2/35 to-accent/10 opacity-75 blur-3xl dark:opacity-85"
            />

            {/* Pulsing dashed boundary */}
            <motion.div
              aria-hidden
              animate={{
                scale: [1, 1.025, 1],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -inset-3 rounded-[2.4rem] border border-dashed border-accent/40"
            />

            {/* Corner Tech Accents */}
            <div aria-hidden className="pointer-events-none absolute -inset-3.5 z-10 hidden sm:block">
              <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-accent" />
              <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-accent-2" />
              <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-accent-2" />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-accent" />
            </div>

            {/* Live status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: EASE }}
              className="absolute -top-3.5 right-3 z-30 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-surface/90 px-3 py-1 text-xs font-medium text-fg shadow-lg shadow-black/10 backdrop-blur-md transition-transform hover:scale-105"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Open to work</span>
            </motion.div>

            {/* Animated glowing border frame */}
            <div className="relative overflow-hidden rounded-[2rem] p-[2.5px] shadow-2xl shadow-accent/25 transition-all duration-500 group-hover:shadow-accent/40">
              {/* Subtle base border */}
              <div className="absolute inset-0 bg-line/60" />

              {/* Spinning animated neon beam / glowing border */}
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-[50%] -left-[50%] h-[200%] w-[200%] origin-center"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg 90deg, var(--accent-2) 140deg, var(--accent) 170deg, #ffffff 180deg, transparent 185deg 270deg, var(--accent) 320deg, var(--accent-2) 350deg, #ffffff 360deg)",
                }}
              />

              {/* Inner portrait container */}
              <div className="relative overflow-hidden rounded-[calc(2rem-2.5px)] bg-surface">
                <Image
                  src={portrait}
                  alt="Portrait of Bikrom Roy"
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 340px, 280px"
                  className="aspect-[4/5] w-full origin-bottom scale-[1.03] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />

                {/* Light reflection sheen on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full"
                />

                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#050a17]/60 via-[#050a17]/20 to-transparent" />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -7, 0],
              }}
              transition={{
                opacity: { delay: 0.7, duration: 0.6, ease: EASE },
                x: { delay: 0.7, duration: 0.6, ease: EASE },
                y: {
                  delay: 1.2,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="card absolute -left-4 bottom-6 z-20 flex items-center gap-3 px-3.5 py-2.5 shadow-xl shadow-black/10 backdrop-blur-md transition-colors sm:bottom-auto sm:top-14 sm:-left-10"
            >
              <span className="font-display text-2xl font-semibold text-accent">5+</span>
              <span className="text-xs leading-tight text-muted">
                years building
                <br />
                for the web
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, 8, 0],
              }}
              transition={{
                opacity: { delay: 0.85, duration: 0.6, ease: EASE },
                x: { delay: 0.85, duration: 0.6, ease: EASE },
                y: {
                  delay: 1.4,
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="card absolute -right-8 bottom-16 z-20 hidden px-3.5 py-2.5 font-mono text-[11px] shadow-xl shadow-black/10 backdrop-blur-md transition-colors sm:block"
            >
              <span className="text-accent">const</span> <span className="text-fg">stack</span>{" "}
              <span className="text-muted">=</span>
              <br />
              <span className="text-accent-2">[&quot;Next.js&quot;, &quot;Laravel&quot;]</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent md:flex"
      >
        <ArrowDown className="h-3.5 w-3.5 animate-bounce motion-reduce:animate-none" />
        scroll
      </a>
    </section>
  );
}
