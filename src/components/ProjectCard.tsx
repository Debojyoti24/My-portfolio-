import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const href = project.live ?? project.github;

  return (
    <motion.a
      layout
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="card group relative flex flex-col overflow-hidden transition-colors hover:border-accent-soft/50"
    >
      <div className={`relative h-36 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="bg-grid absolute inset-0 opacity-40" />
        <span className="absolute right-4 top-4 tag !bg-bg/50">{project.year}</span>
        <span className="absolute left-5 bottom-4 font-display text-3xl font-bold text-text/90">
          {project.title
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-text">{project.title}</h3>
          <span className="shrink-0 tag">{project.category}</span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-dim">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="rounded-md bg-surface-hi px-2 py-1 text-[11px] text-text-faint">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1.5 border-t border-border-soft pt-4 text-xs font-medium text-text-dim transition-colors group-hover:text-text">
          <ArrowUpRight size={14} />
          View Live
        </div>
      </div>
    </motion.a>
  );
}
