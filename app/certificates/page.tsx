import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates } from "@/data/certificates";

export default function CertificatesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen border-b border-zinc-200/80 px-5 py-20 sm:px-6 sm:py-24 dark:border-zinc-800/80">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Credentials">Certificates and Learnings</SectionTitle>

          <div className="mb-8">
            <Button href="/#certificates" variant="ghost">
              Back to Home
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {certificates.map((cert) => {
              const external = cert.link.startsWith("http");
              return (
                <Card key={`${cert.title}-${cert.year}`}>
                  <h3 className="mb-2 text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{cert.issuer}</p>
                  <p className="mb-5 mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-500">
                    {cert.year}
                  </p>
                  <Button
                    href={cert.link}
                    variant="ghost"
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    View certificate
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
