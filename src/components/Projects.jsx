import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/profile";
import SectionHeader from "./SectionHeader";
import { revealUp } from "../hooks/useReveal";
import { profile } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader mod="MOD-04 · BUILDS" title="Projects" subtitle="Independent security tooling, from recon to defense." />

      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`glass module-corner grid gap-6 rounded-2xl p-8 sm:grid-cols-[auto_1fr] ${
              i % 2 === 1 ? "sm:[direction:rtl]" : ""
            }`}
          >
            <div
              className={`flex h-full w-full items-center justify-center rounded-xl border border-line bg-panel-light p-8 sm:w-48 [direction:ltr]`}
            >
              <span className="font-display text-3xl font-bold text-ink-faint/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="[direction:ltr]">
              <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{p.description}</p>

              <ul className="mt-4 space-y-1.5">
                {p.details.map((d) => (
                  <li key={d} className="flex gap-2 text-xs text-ink-dim">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cyan/25 bg-cyan/5 px-2.5 py-1 font-mono text-[10px] text-cyan"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-dim transition-colors hover:border-cyan hover:text-cyan"
                >
                  <FaGithub className="h-3.5 w-3.5" /> GitHub
                </a>
                <span className="flex items-center gap-1.5 rounded-lg border border-line/60 px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  <FileText className="h-3.5 w-3.5" /> Case Study — soon
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
