import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Work experience"
          title={
            <>
              Where I&apos;ve built and <span className="text-gradient">taught</span>
            </>
          }
          description="Software development and technical training roles — most recent first."
        />

        <ol className="relative">
          {/* timeline rail */}
          <span
            aria-hidden
            className="absolute bottom-2 left-[11px] top-2 w-px bg-linear-to-b from-accent via-line to-transparent md:left-[204px]"
          />

          {experiences.map((exp, i) => {
            const isFeatured = exp.current && exp.highlight;
            const KindIcon = exp.kind === "teaching" ? GraduationCap : Briefcase;
            return (
              <li key={`${exp.company}-${exp.role}`} className="relative grid gap-3 pb-10 pl-10 last:pb-0 md:grid-cols-[180px_1fr] md:gap-12 md:pl-0">
                {/* date column */}
                <Reveal delay={0.05} className="md:pt-6 md:text-right">
                  <p className={cn("font-mono text-xs uppercase tracking-wider", exp.current ? "text-accent" : "text-muted")}>
                    {exp.period}
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted md:justify-end">
                    <KindIcon className="h-3.5 w-3.5" />
                    {exp.kind === "teaching" ? "Teaching" : "Development"}
                  </p>
                </Reveal>

                {/* dot */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-[5px] top-1 grid h-[13px] w-[13px] place-items-center rounded-full border-2 bg-bg md:left-[198px] md:top-7",
                    exp.current ? "border-accent" : "border-line",
                  )}
                >
                  {exp.current && <span className="h-1 w-1 rounded-full bg-accent" />}
                </span>
                {isFeatured && (
                  <span
                    aria-hidden
                    className="absolute left-[2px] top-[-2px] h-[19px] w-[19px] animate-ping rounded-full bg-accent/30 motion-reduce:hidden md:left-[195px] md:top-[25px]"
                  />
                )}

                {/* card */}
                <Reveal delay={0.1 + i * 0.02}>
                  <article
                    className={cn(
                      "group relative rounded-2xl transition-all duration-300",
                      isFeatured
                        ? "bg-linear-to-br from-accent/70 via-accent-2/40 to-line p-px shadow-2xl shadow-accent/10"
                        : "",
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-[calc(1rem-1px)] p-6 sm:p-7",
                        isFeatured
                          ? "bg-surface"
                          : "card transition-colors group-hover:border-accent/35",
                      )}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-lg font-semibold text-fg sm:text-xl">{exp.role}</h3>
                          <p className="mt-1 text-[15px] font-medium text-accent">{exp.company}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-current" />
                              {isFeatured ? "Current role" : "Ongoing"}
                            </span>
                          )}
                          {exp.meta && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted">
                              {exp.meta === "Remote" && <MapPin className="h-3 w-3" />}
                              {exp.meta}
                            </span>
                          )}
                        </div>
                      </div>

                      <ul className="mt-5 space-y-2.5">
                        {exp.points.map((point) => (
                          <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                            <span aria-hidden className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {exp.stack && (
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {exp.stack.map((t) => (
                            <Tag key={t}>{t}</Tag>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
