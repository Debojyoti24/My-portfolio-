export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Web App" | "API & Backend" | "Mobile" | "AI / ML" | "DevTools" | "Open Source";
  tags: string[];
  year: string;
  featured?: boolean;
  github?: string;
  live?: string;
  gradient: string;
  image?: string;
}

const gradients = [
  "from-violet-500/30 via-fuchsia-500/20 to-cyan-400/20",
  "from-cyan-400/25 via-blue-500/20 to-violet-500/25",
  "from-pink-500/25 via-rose-500/15 to-orange-400/20",
  "from-emerald-400/25 via-teal-500/15 to-cyan-500/20",
  "from-amber-400/25 via-orange-500/15 to-pink-500/20",
  "from-indigo-500/25 via-violet-500/20 to-pink-400/20",
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Pixxel",
    description:
      "A demo build of a Photoshop-style photo editor from a freelance client engagement — shown here as a preview only, since the full product isn't mine to release publicly. Covers all the core editing tools you'd expect from Photoshop, plus AI-assisted background removal, upscaling, and color correction on top.",
    category: "Web App",
    tags: ["React", "AI Image Editing", "Canvas", "Freelance"],
    year: "2025",
    featured: true,
    live: "https://ai-image-editing-web-app.vercel.app/",
    gradient: gradients[0],
    image: "/src/assets/Screenshot 2026-08-29 014131.png",
  },
  {
    id: "proj-2",
    title: "Cre8tor",
    description:
      "A demo build of another freelance client project — shown here as a preview only, since the full product isn't mine to release publicly. An AI-powered platform where creators share their thoughts and create, edit, and publish posts with ease.",
    category: "Web App",
    tags: ["React", "AI Content Tools", "Publishing", "Freelance"],
    year: "2025",
    featured: true,
    live: "https://creatrify.vercel.app/",
    gradient: gradients[1],
    image: "/src/assets/Screenshot 2026-08-29 014618.png",
  },
  {
    id: "proj-3",
    title: "Cortex API",
    description:
      "High-throughput GraphQL gateway aggregating 12 microservices with schema stitching and per-field caching.",
    category: "API & Backend",
    tags: ["Node.js", "GraphQL", "Redis", "Docker"],
    year: "2024",
    featured: true,
    github: "https://github.com/",
    gradient: gradients[2],
  },
  {
    id: "proj-4",
    title: "Nimbus Queue",
    description:
      "Distributed task queue with exactly-once delivery semantics, dead-letter handling, and a live web inspector.",
    category: "API & Backend",
    tags: ["Go", "gRPC", "PostgreSQL"],
    year: "2024",
    github: "https://github.com/",
    gradient: gradients[3],
  },
  {
    id: "proj-5",
    title: "Recall",
    description:
      "Semantic search over personal notes using local embeddings, with a Raycast-style command palette UI.",
    category: "AI / ML",
    tags: ["Python", "FastAPI", "pgvector", "React"],
    year: "2025",
    featured: true,
    github: "https://github.com/",
    live: "https://example.com/",
    gradient: gradients[4],
  },
  {
    id: "proj-6",
    title: "PromptForge",
    description:
      "Prompt-engineering workbench for comparing LLM outputs side-by-side with token-cost and latency tracking.",
    category: "AI / ML",
    tags: ["TypeScript", "OpenAI API", "Vite"],
    year: "2024",
    github: "https://github.com/",
    live: "https://example.com/",
    gradient: gradients[5],
  },
  {
    id: "proj-7",
    title: "Trailmap",
    description:
      "Offline-first hiking companion with downloadable maps, GPS breadcrumb trails, and elevation profiles.",
    category: "Mobile",
    tags: ["React Native", "MapLibre", "SQLite"],
    year: "2024",
    github: "https://github.com/",
    gradient: gradients[0],
  },
  //   {
  //     id: "proj-8",
  //     title: "Habitloop",
  //     description:
  //       "Habit-tracking app with streaks, local notifications, and a widget for iOS/Android home screens.",
  //     category: "Mobile",
  //     tags: ["Flutter", "Firebase"],
  //     year: "2023",
  //     github: "https://github.com/",
  //     gradient: gradients[1],
  //   },
  //   {
  //     id: "proj-9",
  //     title: "devkit-cli",
  //     description:
  //       "Zero-config CLI that scaffolds full-stack apps with linting, CI, and Docker baked in — 8k+ downloads/month.",
  //     category: "DevTools",
  //     tags: ["Node.js", "TypeScript", "npm"],
  //     year: "2024",
  //     featured: true,
  //     github: "https://github.com/",
  //     gradient: gradients[2],
  //   },
  //   {
  //     id: "proj-10",
  //     title: "gitgraph-tui",
  //     description:
  //       "Terminal UI for visualizing and navigating complex git branch histories with vim-style keybindings.",
  //     category: "DevTools",
  //     tags: ["Rust", "ratatui"],
  //     year: "2023",
  //     github: "https://github.com/",
  //     gradient: gradients[3],
  //   },
  //   {
  //     id: "proj-11",
  //     title: "react-motion-kit",
  //     description:
  //       "Open-source animation primitives built on Framer Motion with 40+ ready-to-use interaction patterns.",
  //     category: "Open Source",
  //     tags: ["React", "Framer Motion", "TypeScript"],
  //     year: "2024",
  //     github: "https://github.com/",
  //     live: "https://example.com/",
  //     gradient: gradients[4],
  //   },
  //   {
  //     id: "proj-12",
  //     title: "use-async-queue",
  //     description:
  //       "Lightweight React hook for concurrency-controlled async task queues with retry/backoff support.",
  //     category: "Open Source",
  //     tags: ["React", "TypeScript"],
  //     year: "2023",
  //     github: "https://github.com/",
  //     gradient: gradients[5],
  //   },
  //   {
  //     id: "proj-13",
  //     title: "Marketside",
  //     description:
  //       "Headless commerce storefront with server components, edge caching, and a visual page builder for merchants.",
  //     category: "Web App",
  //     tags: ["Next.js", "Tailwind CSS", "Shopify API"],
  //     year: "2023",
  //     github: "https://github.com/",
  //     live: "https://example.com/",
  //     gradient: gradients[0],
  //   },
  //   {
  //     id: "proj-14",
  //     title: "Roomly",
  //     description:
  //       "Collaborative floor-planning tool with drag-and-drop furniture, real-time multiplayer cursors, and exports.",
  //     category: "Web App",
  //     tags: ["React", "Canvas API", "Yjs"],
  //     year: "2023",
  //     github: "https://github.com/",
  //     gradient: gradients[1],
  //   },
  //   {
  //     id: "proj-15",
  //     title: "Signalpath",
  //     description:
  //       "Event-driven notification service supporting email, SMS, and push with templated multi-channel routing.",
  //     category: "API & Backend",
  //     tags: ["Node.js", "AWS SQS", "PostgreSQL"],
  //     year: "2022",
  //     github: "https://github.com/",
  //     gradient: gradients[2],
  //   },
  //   {
  //     id: "proj-16",
  //     title: "Vectorly",
  //     description:
  //       "Self-hosted vector database with a REST API, HNSW indexing, and a lightweight admin dashboard.",
  //     category: "AI / ML",
  //     tags: ["Go", "HNSW", "React"],
  //     year: "2025",
  //     github: "https://github.com/",
  //     gradient: gradients[3],
  //   },
  //   {
  //     id: "proj-17",
  //     title: "TicketFlow",
  //     description:
  //       "Kanban-style support desk with SLA timers, canned responses, and Slack-native ticket creation.",
  //     category: "Web App",
  //     tags: ["Vue", "Node.js", "MongoDB"],
  //     year: "2022",
  //     github: "https://github.com/",
  //     gradient: gradients[4],
  //   },
  //   {
  //     id: "proj-18",
  //     title: "Splitwise Clone",
  //     description:
  //       "Expense-splitting app for group trips with debt simplification algorithm and multi-currency support.",
  //     category: "Mobile",
  //     tags: ["React Native", "Expo", "Supabase"],
  //     year: "2022",
  //     github: "https://github.com/",
  //     gradient: gradients[5],
  //   },
  //   {
  //     id: "proj-19",
  //     title: "codeframe",
  //     description:
  //       "Embeddable, sandboxed code playground component for docs sites, supporting 8 languages via WASM runtimes.",
  //     category: "DevTools",
  //     tags: ["WebAssembly", "TypeScript", "React"],
  //     year: "2024",
  //     github: "https://github.com/",
  //     live: "https://example.com/",
  //     gradient: gradients[0],
  //   },
  //   {
  //     id: "proj-20",
  //     title: "eslint-config-strict",
  //     description:
  //       "Opinionated shareable ESLint + Prettier config for TypeScript teams, downloaded 15k+ times on npm.",
  //     category: "Open Source",
  //     tags: ["ESLint", "TypeScript"],
  //     year: "2021",
  //     github: "https://github.com/",
  //     gradient: gradients[1],
  //   },
  //   {
  //     id: "proj-21",
  //     title: "Weatherglass",
  //     description:
  //       "Minimalist weather app with animated backgrounds that react to real conditions and time of day.",
  //     category: "Web App",
  //     tags: ["Svelte", "OpenWeather API"],
  //     year: "2021",
  //     github: "https://github.com/",
  //     live: "https://example.com/",
  //     gradient: gradients[2],
  //   },
  //   {
  //     id: "proj-22",
  //     title: "Auto-Standup Bot",
  //     description:
  //       "Slack bot that collects async standup updates, summarizes them with an LLM, and posts a daily digest.",
  //     category: "AI / ML",
  //     tags: ["TypeScript", "Slack API", "OpenAI API"],
  //     year: "2023",
  //     github: "https://github.com/",
  //     gradient: gradients[3],
  //   },
];
