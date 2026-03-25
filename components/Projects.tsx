import type { Project } from "@/types";
import { projects as defaultProjects } from "@/data/projects";

export type ProjectsProps = {
  projects?: Project[];
};

export default function Projects({
  projects = defaultProjects,
}: ProjectsProps) {
  return (
    <section id="projects" className="w-full py-14">
      <div className="mx-auto w-full max-w-5xl px-5">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
          Projects
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border border-black/5 bg-white p-6 dark:bg-black dark:border-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {p.description}
                  </p>
                </div>
                {p.year ? (
                  <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    {p.year}
                  </span>
                ) : null}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-white/15 dark:bg-white/5 dark:text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
                >
                  Visit
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

