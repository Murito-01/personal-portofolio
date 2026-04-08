import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  const highlighted = certificates.slice(0, 4);

  return (
    <Section id="certificates">
      <SectionTitle eyebrow="Credentials">Certificates</SectionTitle>
      <div id="certificates-list" className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {highlighted.map((cert) => {
          const external = cert.link.startsWith("http");
          return (
            <Card key={`${cert.title}-${cert.year}`}>
              <h3 className="mb-2 text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
                {cert.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{cert.issuer}</p>
              <p className="mb-5 mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-500">{cert.year}</p>
              <Button
                href={cert.link}
                variant="ghost"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                View certificate
              </Button>
            </Card>
          );
        })}
      </div>
      {certificates.length > 4 && (
        <div className="mt-8 flex justify-center">
          <Button href="/certificates" variant="secondary">
            View All
          </Button>
        </div>
      )}
    </Section>
  );
}
