import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-b">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">
          Projects
        </h2>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center hover:scale-[1.02] transition duration-300"
            >
              
              {/* LEFT - Preview */}
              <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
                Project Preview
              </div>

              {/* RIGHT - Content */}
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  <span className="font-semibold">Problem:</span>{" "}
                  {project.problem}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  <span className="font-semibold">Solution:</span>{" "}
                  {project.solution}
                </p>

                {/* Tech Stack */}
                <div
                  className="mb-4"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-xs px-3 py-1 bg-gray-200 rounded-full whitespace-nowrap flex-shrink-0"
                      style={{
                        backgroundColor: "#e5e7eb",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}