"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProjectGallery from "@/components/ui/ProjectGallery";
import ProjectPreview from "@/components/ui/ProjectPreview";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <Section id="projects">
      <SectionTitle eyebrow="Selected work">Projects</SectionTitle>

      {/* ── Mobile: pill tabs ── */}
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1 md:hidden">
        {projects.map((p, i) => (
          <button
            key={p.title}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200
              ${
                active === i
                  ? "border-cyan-500 bg-cyan-500/10 text-cyan-700 dark:border-cyan-400 dark:bg-cyan-400/10 dark:text-cyan-300"
                  : "border-zinc-200/80 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-200"
              }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* ── Desktop: sidebar + detail panel ── */}
      <div className="hidden md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-8">
        {/* Sidebar — project list */}
        <aside className="flex flex-col gap-2">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className={`group relative flex flex-col rounded-xl border px-4 py-3.5 text-left transition-all duration-200
                ${
                  active === i
                    ? "border-cyan-500/60 bg-cyan-50/80 shadow-sm shadow-cyan-500/10 dark:border-cyan-500/40 dark:bg-cyan-950/30"
                    : "border-zinc-200/80 bg-white hover:border-zinc-300 hover:bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
                }`}
            >
              {/* Active indicator line */}
              <span
                className={`absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-r-full bg-cyan-500 transition-all duration-200
                  ${active === i ? "opacity-100" : "opacity-0 group-hover:opacity-30"}`}
              />
              <span
                className={`text-sm font-semibold transition-colors duration-150
                  ${active === i ? "text-cyan-700 dark:text-cyan-300" : "text-zinc-800 group-hover:text-zinc-900 dark:text-zinc-200 dark:group-hover:text-zinc-100"}`}
              >
                {p.title}
              </span>
              <span className="mt-0.5 line-clamp-1 text-xs text-zinc-500 dark:text-zinc-500">
                {p.tech.slice(0, 2).join(" · ")}
              </span>
            </button>
          ))}
        </aside>

        {/* Detail panel — key is used to re-trigger animation on tab switch */}
        <ProjectDetail key={active} project={project} />
      </div>

      {/* ── Mobile: detail panel below pills ── */}
      <div className="md:hidden">
        <ProjectDetail key={`m-${active}`} project={project} />
      </div>
    </Section>
  );
}

/* ────────────────────────────────────────────────────────── */

type ProjectDetailProps = {
  project: (typeof projects)[number];
};

function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="animate-fade-in rounded-2xl border border-zinc-200/80 bg-white/90 shadow-sm shadow-zinc-950/[0.04] backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
      {/* Gallery / Preview */}
      <div className="border-b border-zinc-200/80 p-4 dark:border-zinc-800/80 sm:p-5">
        {project.gallery && project.gallery.length > 0 ? (
          <ProjectGallery
            images={project.gallery}
            title={project.title}
            layout={project.galleryLayout}
          />
        ) : (
          <ProjectPreview title={project.title} gradient={project.gradient} />
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="mb-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="mb-5 rounded-lg border border-cyan-200/70 bg-cyan-50/70 p-4 dark:border-cyan-900/60 dark:bg-cyan-950/20">
          <p className="mb-1 font-mono text-[11px] font-medium uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            Outcome
          </p>
          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.outcome}
          </p>
        </div>

        {/* Tech badges */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Case study accordion */}
        <details className="mb-5 rounded-lg border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
          <summary className="cursor-pointer list-none text-xs font-medium uppercase tracking-wider text-zinc-500 transition-colors hover:text-zinc-700 dark:hover:text-zinc-300">
            Case study details
          </summary>
          <dl className="mt-3 space-y-3 text-sm">
            <div>
              <dt className="mb-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                Problem
              </dt>
              <dd className="text-zinc-700 dark:text-zinc-300">{project.problem}</dd>
            </div>
            <div>
              <dt className="mb-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                Solution
              </dt>
              <dd className="text-zinc-700 dark:text-zinc-300">{project.solution}</dd>
            </div>
            <div>
              <dt className="mb-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                Outcome
              </dt>
              <dd className="text-zinc-700 dark:text-zinc-300">{project.outcome}</dd>
            </div>
          </dl>
        </details>

        {/* Links */}
        <div className="flex flex-wrap gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
          <Button
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            className="gap-2 px-0 py-2"
          >
            <GithubMark className="h-4 w-4 text-current" />
            GitHub
          </Button>
          {project.demo ? (
            <Button
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              className="gap-2 px-0 py-2"
            >
              Live demo
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function GithubMark({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}
