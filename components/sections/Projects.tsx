import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.title}>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="h-56 rounded-xl bg-gray-100 border flex items-center justify-center text-sm text-gray-400">
                Project Preview
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Problem:</span> {project.problem}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Solution:</span> {project.solution}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href={project.github} target="_blank" rel="noreferrer" variant="ghost">
                    GitHub
                  </Button>
                  {project.demo && (
                    <Button href={project.demo} target="_blank" rel="noreferrer" variant="ghost">
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
