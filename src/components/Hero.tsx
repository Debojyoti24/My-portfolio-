import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { profile } from "../data/profile";
import BackgroundFX from "./BackgroundFX";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  mail: Mail,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    sectionRef.current?.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    sectionRef.current?.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="group relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <BackgroundFX />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block"
        style={{
          background:
            "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 0%), rgba(250,204,21,0.1), transparent 70%)",
        }}
      />
      <div className="section-container">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/60 px-4 py-1.5 font-mono text-xs text-text-dim"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl md:text-6xl"
        >
          Hi, I'm {profile.name.split(" ")[0]} —{" "}
          <span className="text-gradient">{profile.role}</span> crafting products people love.
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 max-w-xl text-base text-text-dim md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a href={profile.resumeUrl} download className="btn-primary">
            <Download size={18} />
            Download Resume
          </a>
          <a href="#projects" className="btn-ghost">
            View Projects
          </a>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex items-center gap-4"
        >
          {profile.socials.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-text-dim transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft hover:text-text"
              >
                <Icon size={17} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
