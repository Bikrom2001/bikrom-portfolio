"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, FolderGit2, Search, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/sections/Projects";
import { profile, projectFilters, projects, type ProjectCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

export function AllProjectsClient() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      const matchesCategory =
        filter === "all" ? true : project.categories.includes(filter);

      // Search match (name, tagline, description, tech stack, highlights)
      const q = query.trim().toLowerCase();
      if (!q) return matchesCategory;

      const inName = project.name.toLowerCase().includes(q);
      const inTagline = project.tagline.toLowerCase().includes(q);
      const inDesc = project.description.toLowerCase().includes(q);
      const inTech = project.tech.some((t) => t.toLowerCase().includes(q));
      const inHighlights = project.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesCategory && (inName || inTagline || inDesc || inTech || inHighlights);
    });
  }, [filter, query]);

  const clearFilters = () => {
    setFilter("all");
    setQuery("");
  };

  return (
    <div className="relative min-h-screen py-24 sm:py-32">
      {/* Decorative background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-full max-w-5xl -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <Container>
        {/* Navigation & Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-medium text-muted transition-all duration-200 hover:-translate-x-0.5 hover:border-accent/40 hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-medium text-muted transition-all duration-200 hover:border-accent/40 hover:text-accent sm:inline-flex"
          >
            <GitHubIcon size={16} />
            GitHub Profile
          </a>
        </div>

        {/* Page Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            All Works & Case Studies
          </span>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-fg sm:text-5xl lg:text-6xl">
            All Projects & <span className="text-gradient">Production Work</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            A comprehensive catalog of university portals, enterprise management systems, LMS platforms, dynamic web applications, and RESTful APIs built with Laravel, React, Next.js, and Python.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="mt-12 space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 sm:max-w-md">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by project name, tech stack, or keywords..."
                className="w-full rounded-xl border border-line bg-surface py-2.5 pl-10 pr-9 text-sm text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-fg"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="flex items-center gap-2 text-xs font-mono text-muted">
              <span>
                Showing <strong className="text-fg">{filteredProjects.length}</strong> of {projects.length} projects
              </span>
              {(filter !== "all" || query) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="ml-2 rounded-md bg-accent/10 px-2 py-0.5 text-accent hover:bg-accent/20 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Technology Filter Pills */}
          <div role="tablist" aria-label="Filter projects by technology" className="flex flex-wrap gap-2 pt-1">
            {projectFilters.map((f) => {
              const count =
                f.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.categories.includes(f.id as ProjectCategory)).length;
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
                      layoutId="all-projects-filter"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  {f.label}
                  <span className={cn("font-mono text-[11px]", selected ? "text-white/75" : "text-muted/70")}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-10">
          {filteredProjects.length > 0 ? (
            <motion.ul layout className="grid gap-6 md:grid-cols-2">
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredProjects.map((project) => (
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
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface/50 py-16 px-4 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-surface-2 text-muted">
                <FolderGit2 className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-fg">No projects found</h3>
              <p className="mt-1.5 max-w-sm text-sm text-muted">
                No projects matched your search &quot;{query}&quot; in this category. Try adjusting your search keywords or resetting filters.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA & Collaboration Card */}
        <div className="mt-16 rounded-2xl border border-line bg-surface p-8 sm:p-12 relative overflow-hidden">
          <div aria-hidden className="bg-grid absolute inset-0 opacity-40 pointer-events-none" />
          <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">
              Let&apos;s Build Together
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
              Have a project in mind or need a reliable developer?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Whether you need an enterprise web application, high-converting portal, or technical instruction for your team — I&apos;m ready to contribute.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
              <a
                href={profile.cvPath}
                download={profile.cvFileName}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-line bg-surface-2 px-6 text-sm font-medium text-fg transition-colors hover:border-accent/40 hover:text-accent"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

