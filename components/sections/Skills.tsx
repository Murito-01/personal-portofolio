import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <h3 className="text-xl text-gray-700 mb-4">{group.title}</h3>
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
