import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-container py-24 md:py-32">
      <SectionHeading num="01" title="About Me" />

      <div className="grid gap-14 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-4 text-text-dim leading-relaxed"
        >
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 space-y-6"
        >
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-xs font-mono uppercase tracking-wider text-text-faint">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
