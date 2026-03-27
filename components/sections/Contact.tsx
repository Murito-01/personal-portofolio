import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <Section id="contact" className="border-b-0">
      <SectionTitle>Contact</SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <p className="text-gray-600 leading-relaxed">
          Open for collaboration on web and blockchain-focused products. Feel free
          to reach out for projects, freelance work, or technical discussions.
        </p>
        <div className="flex flex-wrap gap-4 md:justify-end">
          <Button href="mailto:hello@risto.dev" variant="primary">
            Send Email
          </Button>
          <Button href="https://github.com/Murito-01" target="_blank" rel="noreferrer" variant="secondary">
            GitHub
          </Button>
        </div>
      </div>
    </Section>
  );
}
