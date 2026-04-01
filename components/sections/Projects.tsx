import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
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
                <ProjectPreview title={project.title} gradient={project.gradient} />
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
                  <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="ghost">
                    GitHub
                  </Button>
                  {project.demo ? (
                    <Button href={project.demo} target="_blank" rel="noopener noreferrer" variant="ghost">
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
