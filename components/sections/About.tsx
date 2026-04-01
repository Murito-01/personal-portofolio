import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="about">
      <SectionTitle eyebrow="Background">About</SectionTitle>
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        {profile.about.map((paragraph, index) => (
          <p
            key={index}
            className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
