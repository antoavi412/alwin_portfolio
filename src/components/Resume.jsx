import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, Check } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeader from "./SectionHeader";
import { revealUp } from "../hooks/useReveal";

const resumeSections = [
  "Experience",
  "Projects",
  "Certifications",
  "Education",
  "Skills & Tools",
  "Achievements",
];

export default function Resume() {
  return (
    <section id="resume" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader title="Resume" />

      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="glass overflow-hidden rounded-2xl"
      >
        <div className="grid lg:grid-cols-[1.4fr_1fr]">
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-5">
              <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan/5 text-cyan">
                <FileText className="h-7 w-7" strokeWidth={1.6} />
                <span className="absolute -bottom-1 -right-1 rounded-md bg-cyan px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-panel">
                  PDF
                </span>
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{profile.name}</h3>
                <p className="mt-0.5 font-mono text-xs text-ink-faint">
                  Resume · PDF · Updated 2026
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-dim">
              A complete summary of my background — experience, projects, certifications, skills,
              and education — ready to share with recruiters and hiring teams.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
              {resumeSections.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-ink-dim">
                  <Check className="h-3.5 w-3.5 shrink-0 text-cyan" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 border-t border-line bg-panel-light p-8 sm:p-10 lg:border-l lg:border-t-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
              Get the full document
            </p>
            <a
              href={profile.resume}
              download
              className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-widest text-panel transition-colors hover:bg-cyan"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink-dim transition-colors hover:text-cyan"
            >
              Open PDF <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
