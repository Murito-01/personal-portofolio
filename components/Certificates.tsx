import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Certificates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl hover:shadow-lg transition bg-white"
            >
              <h3 className="text-lg font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-500 text-sm mb-1">
                {cert.issuer}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {cert.year}
              </p>

              <a
                className="text-sm text-blue-600 hover:underline"
                href={cert.link}
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}