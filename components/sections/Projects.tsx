import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ProjectGallery from "@/components/ui/ProjectGallery";
import ProjectPreview from "@/components/ui/ProjectPreview";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle eyebrow="Selected work">Projects</SectionTitle>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden p-0">
            <div className="grid items-stretch gap-0 md:grid-cols-2">
              <div className="border-b border-zinc-200/80 p-5 md:border-b-0 md:border-r md:p-6 dark:border-zinc-800/80">
                {project.gallery && project.gallery.length > 0 ? (
                  <ProjectGallery images={project.gallery} title={project.title} />
                ) : (
                  <ProjectPreview title={project.title} gradient={project.gradient} />
                )}
              </div>
              <div className="flex flex-col p-5 md:p-6">
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>

                <dl className="mb-6 space-y-3 text-sm">
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
                </dl>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 border-t border-zinc-100 pt-5 dark:border-zinc-800/80">
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
          </Card>
        ))}
      </div>
    </Section>
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
