import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
