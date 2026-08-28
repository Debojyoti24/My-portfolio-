import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass-nav" : "border-b border-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-text">
          {profile.avatarInitials}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-text-dim transition-colors hover:text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-all duration-300 hover:border-accent-soft hover:-translate-y-0.5"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-text"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-nav border-t border-border-soft">
          <ul className="section-container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-text-dim hover:bg-surface hover:text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profile.resumeUrl}
                download
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-bg"
              >
                <Download size={16} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
