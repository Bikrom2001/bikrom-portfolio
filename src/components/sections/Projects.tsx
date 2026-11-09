"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { profile, projectFilters, projects, type Project, type ProjectCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { GitHubIcon } from "../icons/BrandIcons";
import { Container } from "../ui/Container";
import { ProjectPreview } from "../ui/ProjectPreview";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";

type Filter = "all" | ProjectCategory;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="relative bg-surface-2/40 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Selected projects"
          title={
            <>
              Real products, <span className="text-gradient">in production</span>
            </>
          }
          description="University portals, training platforms, an LMS and a recruitment platform — built with Laravel, React, Next.js and Python."
        />

        <Reveal className="mb-10 flex flex-wrap gap-2" y={10}>
          <div role="tablist" aria-label="Filter projects by technology" className="flex flex-wrap gap-2">
            {projectFilters.map((f) => {
              const count = f.id === "all" ? projects.length : projects.filter((p) => p.categories.includes(f.id as ProjectCategory)).length;
              const selected = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "relative isolate inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    selected ? "border-transparent text-white" : "border-line bg-surface text-muted hover:text-fg",
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  {f.label}
                  <span className={cn("font-mono text-[11px]", selected ? "text-white/75" : "text-muted/70")}>{count}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.ul layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="group inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110"
          >
            <LayoutGrid className="h-4 w-4" />
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-surface px-5 text-sm font-medium text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
          >
            <GitHubIcon size={16} />
            More on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group flex h-full flex-col p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 sm:p-5">
      <ProjectPreview project={project} />

      <div className="flex flex-1 flex-col px-1 pt-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{project.tagline}</p>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-fg">{project.name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-line px-4 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GitHubIcon size={16} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.name}`}
              className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-accent/10 px-4 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
            >
              Live site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
