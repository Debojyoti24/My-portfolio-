import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const iconMap = { github: FaGithub, linkedin: FaLinkedin, twitter: FaXTwitter, mail: Mail };

export default function Contact() {
  return (
    <section id="contact" className="section-container py-24 md:py-32">
      <SectionHeading num="05" title="Contact" align="center" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="text-text-dim leading-relaxed">
          I'm currently open to new roles and interesting freelance projects. Whether you have a
          question or just want to say hi, my inbox is always open.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail size={18} />
            Say Hello
          </a>
          <a href={profile.resumeUrl} download className="btn-ghost">
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-text-faint">
          <MapPin size={15} />
          {profile.location}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {profile.socials.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft text-text-dim transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft hover:text-text"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
