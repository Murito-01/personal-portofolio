import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle eyebrow="Toolbox">Skills</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
