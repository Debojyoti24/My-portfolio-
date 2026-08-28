import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const PAGE_SIZE = 6;

export default function Projects() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = projects.slice(0, visible);
  const sectionRef = useRef<HTMLElement>(null);

  const showLess = () => {
    setVisible(PAGE_SIZE);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="projects" ref={sectionRef} className="section-container py-24 md:py-32">
      <SectionHeading num="04" title={`Projects (${projects.length}+)`} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-12 flex justify-center">
        {visible < projects.length ? (
          <button onClick={() => setVisible(projects.length)} className="btn-ghost">
            Show more projects
          </button>
        ) : (
          projects.length > PAGE_SIZE && (
            <button onClick={showLess} className="btn-ghost">
              Show less
            </button>
          )
        )}
      </div>
    </section>
  );
}
