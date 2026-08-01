import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/profile";
import SectionHeader from "./SectionHeader";
import { revealStagger, revealUp } from "../hooks/useReveal";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader mod="MOD-03 · TIMELINE" title="Experience" subtitle="Roles and internships in chronological order." />

      <motion.div
        variants={revealStagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative border-l border-line pl-8 sm:pl-10"
      >
        {experience.map((e) => (
          <motion.div key={e.role + e.org} variants={revealUp} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan/50 bg-void sm:-left-[49px]">
              <Briefcase className="h-3 w-3 text-cyan" />
            </span>
            <div className="glass module-corner rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink">{e.role}</h3>
                <span className="font-mono text-[11px] text-cyan">{e.date}</span>
              </div>
              <p className="mb-3 font-mono text-xs text-ink-faint">{e.org}</p>
              <ul className="space-y-1.5">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-ink-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
