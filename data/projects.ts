import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Portfolio Website",
    description:
      "Website portofolio untuk menampilkan profil, proyek, sertifikat, dan kontak.",
    link: "https://example.com",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    year: "2026",
  },
  {
    id: "proj-2",
    title: "Dashboard Analytics",
    description:
      "Dashboard untuk memvisualisasikan metrik utama dengan filtering dan drill-down.",
    link: "https://example.com",
    technologies: ["TypeScript", "React", "Charts"],
    year: "2025",
  },
  {
    id: "proj-3",
    title: "REST API Starter",
    description:
      "Template REST API yang rapi dengan dokumentasi dan best practices untuk pengembangan cepat.",
    link: "https://example.com",
    technologies: ["Node.js", "TypeScript", "OpenAPI"],
    year: "2024",
  },
];

