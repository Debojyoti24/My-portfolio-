export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  type: string;
  stack: string[];
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Nimbus Systems",
    role: "Senior Software Engineer",
    start: "2023",
    end: "Present",
    location: "Remote",
    type: "Full-time",
    stack: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    points: [
      "Led the re-architecture of the core dashboard, cutting median load time from 3.4s to 900ms.",
      "Designed a component library adopted across 6 product teams, reducing UI bugs by 42%.",
      "Mentored 4 engineers through promotion cycles; ran the frontend guild's weekly design reviews.",
      "Drove adoption of feature-flagged progressive rollouts, reducing incident rate by 30%.",
    ],
  },
  {
    id: "exp-2",
    company: "Fieldstone Labs",
    role: "Software Engineer II",
    start: "2021",
    end: "2023",
    location: "San Francisco, CA",
    type: "Full-time",
    stack: ["Next.js", "GraphQL", "Go", "Kubernetes"],
    points: [
      "Built a real-time collaboration engine (CRDT-based) powering multiplayer editing for 500k+ users.",
      "Owned the migration from REST to GraphQL, improving mobile payload sizes by ~55%.",
      "Introduced end-to-end testing with Playwright, catching regressions pre-release across 3 squads.",
      "Partnered with design to ship a full accessibility audit remediation, reaching WCAG 2.1 AA.",
    ],
  },
  {
    id: "exp-3",
    company: "Brightloop",
    role: "Software Engineer",
    start: "2020",
    end: "2021",
    location: "Seattle, WA",
    type: "Full-time",
    stack: ["React", "Redux", "Python", "Django"],
    points: [
      "Shipped the v1 billing and subscriptions system, processing $2M+ ARR within the first year.",
      "Built internal tooling that cut customer-support ticket resolution time by 25%.",
      "Wrote the team's first CI/CD pipeline using GitHub Actions and Docker.",
    ],
  },
  {
    id: "exp-4",
    company: "Brightloop",
    role: "Software Engineer Intern",
    start: "2019",
    end: "2019",
    location: "Seattle, WA",
    type: "Internship",
    stack: ["JavaScript", "Flask"],
    points: [
      "Built an internal analytics dashboard used daily by the growth team.",
      "Converted a legacy jQuery admin panel to React, reducing bug reports by 60%.",
    ],
  },
];
