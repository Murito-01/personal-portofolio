import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <Section id="certificates">
      <SectionTitle>Certificates</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <Card key={`${cert.title}-${cert.year}`}>
            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
            <p className="text-sm text-gray-600 mb-4">{cert.year}</p>
            <Button href={cert.link} variant="ghost">
              View Certificate
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
