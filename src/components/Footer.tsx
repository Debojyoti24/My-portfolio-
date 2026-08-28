import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-soft">
      <div className="section-container flex flex-col items-center justify-between gap-3 py-8 text-sm text-text-faint md:flex-row">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">Built with React, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
