import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

export default function Contact() {
  const { blurb, email, github } = profile.contact;

  return (
    <Section id="contact" className="border-b-0">
      <SectionTitle eyebrow="Let's talk">Contact</SectionTitle>
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{blurb}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
          <Button href={email} className="sm:min-w-[9rem]">
            Email
          </Button>
          <Button href={github} target="_blank" rel="noopener noreferrer" variant="secondary" className="sm:min-w-[9rem]">
            GitHub
          </Button>
        </div>
      </div>
    </Section>
  );
}
