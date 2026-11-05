import { Database, LayoutTemplate, Server, Workflow, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups, type SkillGroup } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons: Record<SkillGroup["id"], LucideIcon> = {
  frontend: LayoutTemplate,
  backend: Server,
  database: Database,
  tools: Wrench,
  cms: Workflow,
};

// Bento layout: frontend & backend get more room on large screens.
const spans: Record<SkillGroup["id"], string> = {
  frontend: "lg:col-span-2",
  backend: "",
  database: "",
  tools: "lg:col-span-2",
  cms: "md:col-span-2 lg:col-span-3",
};

export function Skills() {
  return (
    <section id="skills" className="relative bg-surface-2/40 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Technical skills"
          title={
            <>
              The stack I work with <span className="text-gradient">every day</span>
            </>
          }
          description="From pixel-accurate front-ends to MVC back-ends and REST APIs — the technologies I use to design, build and ship production websites."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.id];
            return (
              <Reveal key={group.id} delay={i * 0.06} className={cn(spans[group.id])}>
                <article className="card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                  <div
                    aria-hidden
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-fg">{group.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{group.description}</p>
                    </div>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-line bg-bg/60 px-3 py-1.5 text-[13px] font-medium text-fg/85 transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
