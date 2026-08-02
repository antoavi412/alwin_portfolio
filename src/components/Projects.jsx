import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects, profile } from "../data/profile";
import SectionHeader from "./SectionHeader";
import { revealUp } from "../hooks/useReveal";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader title="Projects" />

      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glass grid gap-6 rounded-2xl p-8 sm:grid-cols-[auto_1fr]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-xl border border-line bg-panel-light p-8 sm:w-24">
              <span className="font-display text-3xl font-bold text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div>
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
                  className="flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-dim transition-colors hover:border-cyan hover:text-cyan"
                >
                  <FaGithub className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
