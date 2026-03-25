export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type NavLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  technologies: string[];
  year?: string;
};

export type Skill = {
  id: string;
  name: string;
  category: string;
  level?: SkillLevel;
};

export type Certificate = {
  id: string;
  name: string;
  issuer: string;
  credentialUrl?: string;
  year?: string;
};

