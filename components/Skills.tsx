export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-b">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 tracking-tight">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Languages */}
          <div>
            <h3 className="text-xl text-gray-600 mb-4">
              Languages
            </h3>
            <div
              className="flex flex-wrap gap-2"
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
            >
              {["JavaScript", "Solidity", "Java", "Kotlin", "HTML", "CSS"].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-sm px-3 py-1 bg-gray-200 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: "#e5e7eb",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-xl text-gray-600 mb-4">
              Frameworks & Libraries
            </h3>
            <div
              className="flex flex-wrap gap-2"
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
            >
              {["React.js"].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-sm px-3 py-1 bg-gray-200 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: "#e5e7eb",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl text-gray-600 mb-4">
              Tools & Technologies
            </h3>
            <div
              className="flex flex-wrap gap-2"
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
            >
              {["PostgreSQL", "AI", "Openclaw"].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-sm px-3 py-1 bg-gray-200 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: "#e5e7eb",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl text-gray-600 mb-4">
              Soft Skills
            </h3>
            <div
              className="flex flex-wrap gap-2"
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
            >
              {["Time Management", "Teamwork", "Adaptability"].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-sm px-3 py-1 bg-gray-200 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: "#e5e7eb",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}