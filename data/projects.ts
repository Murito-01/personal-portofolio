export type ProjectGradient = "chain" | "mesh" | "slate";

export type ProjectEntry = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  github: string;
  demo: string;
  gradient?: ProjectGradient;
  gallery?: string[];
};

export const projects: ProjectEntry[] = [
  {
    title: "SkillChain",
    description:
      "Decentralized application for managing and verifying professional certificates using Ethereum and IPFS.",
    problem: "Traditional certification systems are vulnerable to forgery and lack transparency.",
    solution:
      "Implemented a blockchain-based system to ensure data integrity and public verifiability.",
    tech: ["Solidity", "React", "Ethers.js", "IPFS"],
    github: "https://github.com/Murito-01/DApp-Skillchain",
    demo: "",
    gradient: "chain",
    gallery: ["/project1/1A.png", "/project1/1B.png", "/project1/1C.png"],
  },
];
