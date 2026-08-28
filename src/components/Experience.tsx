import { motion } from "framer-motion";
import { experience } from "../data/experience";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-24 md:py-32">
      <SectionHeading num="03" title="Experience" />

      <div className="space-y-6">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="card group grid gap-4 p-6 transition-colors hover:border-accent-soft/50 md:grid-cols-[220px_1fr] md:gap-8 md:p-8"
          >
            <div>
              <p className="font-mono text-xs text-text-faint">
                {item.start} — {item.end}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-text">{item.role}</h3>
              <p className="mt-1 text-sm font-medium text-accent-soft">{item.company}</p>
              <p className="mt-1 text-xs text-text-faint">
                {item.location} · {item.type}
              </p>
            </div>

            <div>
              <ul className="space-y-2.5">
                {item.points.map((p, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-text-dim">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
