import { ClipboardCheck, Hammer, RefreshCw, ShieldCheck, Presentation, type LucideIcon } from "lucide-react";
import { teaching } from "@/data/portfolio";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const approachIcons: LucideIcon[] = [Hammer, ClipboardCheck, ShieldCheck, RefreshCw];

export function Teaching() {
  return (
    <section id="teaching" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Teaching & mentoring"
          title={
            <>
              Turning learners into <span className="text-gradient">builders</span>
            </>
          }
          description={teaching.intro}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teaching.roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.08} className="h-full">
              <article className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Presentation className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] text-muted">{role.period}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-fg">{role.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{role.org}</p>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted">Topics taught</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {role.topics.map((t) => (
                    <li key={t} className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-fg/80">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-6">
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
            <div className="relative">
              <h3 className="font-display text-lg font-semibold text-fg">How I teach</h3>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {teaching.approach.map((a, i) => {
                  const Icon = approachIcons[i] ?? Hammer;
                  return (
                    <li key={a.title}>
                      <Icon className="h-5 w-5 text-accent" />
                      <p className="mt-3 font-medium text-fg">{a.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
