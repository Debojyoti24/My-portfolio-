import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-container py-24 md:py-32">
      <SectionHeading num="02" title="Education" />

      <div className="relative space-y-8 border-l border-border-soft pl-8 md:pl-10">
        {education.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem+7px)] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-bg bg-accent md:-left-[calc(2.5rem+7px)]">
              <GraduationCap size={0} />
            </span>

            <div className="card p-6 transition-colors hover:border-accent-soft/50 md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-text">
                  {item.degree} · {item.field}
                </h3>
                <span className="tag">
                  {item.start} — {item.end}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent-soft">{item.school}</p>
              <p className="mt-0.5 text-xs text-text-faint">
                {item.location}
                {item.gpa ? ` · GPA ${item.gpa}` : ""}
              </p>
              {item.rank ? (
                <span className="mt-3 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg">
                  {item.rank}
                </span>
              ) : null}
              <ul className="mt-4 space-y-2">
                {item.details.map((d, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-text-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
