import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold mb-10 text-center">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-600 mb-1">
                {cert.issuer}
              </p>

              <p className="text-sm text-gray-400 mb-4">
                {cert.year}
              </p>

              <a
                href={cert.link}
                target="_blank"
                className="text-blue-600 text-sm hover:underline"
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