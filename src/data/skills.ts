export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    label: "Backend",
    items: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "gRPC"],
  },
  {
    label: "Infra & Tools",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
  },
];
