"use client";

import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon } from "../icons/BrandIcons";
import { buttonClasses } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type Channel = { label: string; value: string; href?: string; icon: ReactNode; external?: boolean };

const channels: Channel[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <Mail className="h-5 w-5" /> },
  {
    label: "LinkedIn",
    value: "in/bikrom-roy",
    href: profile.socials.linkedin,
    icon: <LinkedInIcon size={20} />,
    external: true,
  },
  {
    label: "GitHub",
    value: "Bikrom2001",
    href: profile.socials.github,
    icon: <GitHubIcon size={20} />,
    external: true,
  },
  { label: "Location", value: profile.location, icon: <MapPin className="h-5 w-5" /> },
];

const inputClasses =
  "w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-[15px] text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

export function Contact() {
  const [sent, setSent] = useState(false);

  /**
   * No backend required: the form composes an email in the visitor's mail app.
   * To send directly from the site, swap this handler for a call to an API
   * route or a service such as Formspree / Resend.
   */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim() || `Portfolio inquiry from ${name}`;
    const message = String(data.get("message") ?? "").trim();

    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[500px] bg-linear-to-t from-accent/10 to-transparent" />
      <Container>
        <SectionHeading
          index="09"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">great together</span>
            </>
          }
          description="Have a project, a role or a training programme in mind? Send me a message — I'll get back to you as soon as I can."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((c) => {
                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                      {c.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">{c.label}</span>
                      <span className="mt-0.5 block truncate text-[15px] font-medium text-fg">{c.value}</span>
                    </span>
                    {c.href && (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    )}
                  </>
                );
                const cls = "card group flex items-center gap-4 p-4 transition-colors";
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={cn(cls, "hover:border-accent/40")}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={cls}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8" aria-describedby="contact-note">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Your name">
                  <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" className={inputClasses} />
                </Field>
                <Field id="email" label="Email address">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    className={inputClasses}
                  />
                </Field>
              </div>
              <Field id="subject" label="Subject" className="mt-5">
                <input id="subject" name="subject" type="text" placeholder="Project, role or training inquiry" className={inputClasses} />
              </Field>
              <Field id="message" label="Message" className="mt-5">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about what you have in mind…"
                  className={cn(inputClasses, "resize-y")}
                />
              </Field>

              <div className="mt-6 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p id="contact-note" className="text-xs text-muted" aria-live="polite">
                  {sent ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      Your email app should now be open with the message ready to send.
                    </span>
                  ) : (
                    "Sending opens your email app with the message pre-filled."
                  )}
                </p>
                <button type="submit" className={cn(buttonClasses("primary"), "w-full sm:w-auto")}>
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({ id, label, children, className }: { id: string; label: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg">
        {label}
      </label>
      {children}
    </div>
  );
}
