import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { prettyUrl } from "@/lib/utils";

/**
 * Shows a real screenshot when `project.image` is set; otherwise renders a
 * lightweight browser-window mock-up tinted with the project's hue.
 * Drop screenshots in /public/projects and set `image: "/projects/<file>"`.
 */
export function ProjectPreview({ project }: { project: Project }) {
  const url = project.live ? prettyUrl(project.live) : `github.com/${project.github.split("github.com/")[1] ?? ""}`;
  const h = project.hue;

  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-surface-2">
      {/* browser chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-surface px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="flex-1 truncate rounded-md bg-surface-2 px-2.5 py-1 text-center font-mono text-[10.5px] text-muted">
          {url}
        </div>
      </div>

      <div className="relative aspect-[16/9]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
            style={{
              background: `radial-gradient(120% 90% at 0% 0%, hsl(${h} 85% 60% / 0.28), transparent 60%), radial-gradient(90% 80% at 100% 100%, hsl(${(h + 40) % 360} 85% 55% / 0.22), transparent 60%)`,
            }}
          >
            {/* wireframe of a page */}
            <div className="absolute inset-x-[7%] top-[9%] flex items-center justify-between">
              <span className="h-2 w-14 rounded-full" style={{ background: `hsl(${h} 70% 55% / 0.7)` }} />
              <span className="flex gap-1.5">
                {[0, 1, 2, 3].map((n) => (
                  <span key={n} className="h-1.5 w-6 rounded-full bg-fg/15" />
                ))}
              </span>
            </div>
            <div className="absolute left-[7%] top-[30%] w-[55%] space-y-2">
              <span className="block h-3 w-full rounded-full bg-fg/25" />
              <span className="block h-3 w-4/5 rounded-full bg-fg/20" />
              <span className="block h-1.5 w-3/5 rounded-full bg-fg/10" />
              <span
                className="mt-3 block h-4 w-20 rounded-md"
                style={{ background: `hsl(${h} 80% 55% / 0.75)` }}
              />
            </div>
            <div
              className="absolute right-[7%] top-[26%] h-[44%] w-[26%] rounded-lg border border-fg/10"
              style={{ background: `linear-gradient(135deg, hsl(${h} 80% 60% / 0.35), hsl(${(h + 40) % 360} 80% 55% / 0.15))` }}
            />
            <div className="absolute inset-x-[7%] bottom-[8%] grid grid-cols-3 gap-2">
              {[0, 1, 2].map((n) => (
                <span key={n} className="h-6 rounded-md border border-fg/10 bg-surface/60" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
