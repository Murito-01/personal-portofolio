export type ProjectGradient = "chain" | "mesh" | "slate";

export type ProjectEntry = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  github: string;
  demo: string;
  gradient?: ProjectGradient;
  gallery?: string[];
  galleryLayout?: "landscape" | "portrait";
};

export const projects: ProjectEntry[] = [
  {
    title: "SkillChain",
    description:
      "Decentralized application for managing and verifying professional certificates using Ethereum and IPFS.",
    problem: "Traditional certification systems are vulnerable to forgery and lack transparency.",
    solution:
      "Implemented a blockchain-based system to ensure data integrity and public verifiability.",
    outcome:
      "Built a public verification flow that makes certificate ownership easier to validate and harder to falsify.",
    tech: ["Solidity", "React", "Ethers.js", "IPFS"],
    github: "https://github.com/Murito-01/DApp-Skillchain",
    demo: "",
    gradient: "chain",
    gallery: ["/project1/1A.png", "/project1/1B.png", "/project1/1C.png"],
    galleryLayout: "landscape",
  },
  {
    title: "Growbit",
    description:
      "Growbit is a gamified habit tracker mobile app built with Flutter that helps users build daily routines through XP, levels, and visual progress.",
    problem: "Most habit tracker apps are simple checklists with low engagement and no meaningful progression system, making users lose motivation quickly.",
    solution:
      "Growbit introduces a gamified system with XP, leveling, daily reset, and anti-cheat logic to create a more engaging and consistent habit-building experience.",
    outcome:
      "Turned routine tracking into a more motivating loop with daily progress feedback, XP, and level-based retention cues.",
    tech: ["Flutter", "Dart", "Android Emulator"],
    github: "https://github.com/Murito-01/growbit",
    demo: "",
    gradient: "mesh",
    gallery: ["/project2/2A.jpeg", "/project2/2B.jpeg", "/project2/2C.jpeg"],
    galleryLayout: "portrait",
  },
  {
    title: "Freelora",
    description:
      "Freelora is a web-based freelance management system that helps users manage clients, projects, tasks, and invoices in one integrated platform.",
    problem: "Freelancers often struggle to organize their work, track project progress, and manage billing efficiently using scattered tools.",
    solution:
      "This system provides a centralized platform to manage clients, track tasks with deadlines, generate invoices, export them as PDF, and send them via email.",
    outcome:
      "Consolidated common freelance operations into one workflow from client tracking to invoice delivery.",
    tech: ["Laravel", "Blade", "Tailwind CSS"],
    github: "https://github.com/Murito-01/freelora",
    demo: "",
    gradient: "mesh",
    gallery: ["/project3/3A.png", "/project3/3B.png", "/project3/3C.png"],
    galleryLayout: "landscape",
  },
];
