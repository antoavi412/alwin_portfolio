import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Code2,
  Network,
  MonitorCog,
  Wrench,
  BookMarked,
  X,
} from "lucide-react";
import { skillCategories } from "../data/profile";
import { getSkillIcon } from "../data/skillIcons";
import SectionHeader from "./SectionHeader";
import { revealStagger, scaleIn, revealUp } from "../hooks/useReveal";

const icons = {
  cybersecurity: ShieldAlert,
  programming: Code2,
  networking: Network,
  os: MonitorCog,
  tools: Wrench,
  frameworks: BookMarked,
};

function HexCard({ cat, onOpen }) {
  const Icon = icons[cat.id];
  const preview = cat.skills.slice(0, 5);

  return (
    <motion.button
      variants={scaleIn}
      onClick={() => onOpen(cat)}
      whileHover={{ y: -6 }}
      className="glass module-corner group relative flex flex-col items-center gap-4 rounded-2xl p-6 text-center transition-shadow hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
    >
      <div
        className="flex h-14 w-14 items-center justify-center border border-cyan/30 bg-panel-light text-cyan transition-transform group-hover:scale-110"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      >
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold text-ink">{cat.label}</h3>
        <p className="mt-0.5 font-mono text-[11px] text-ink-faint">{cat.skills.length} SKILLS</p>
      </div>

      {/* Real tool logos, previewed on the card itself */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {preview.map((s) => {
          const { Icon: SkillIcon, brand } = getSkillIcon(s);
          return (
            <span
              key={s}
              title={s}
              className={`flex h-7 w-7 items-center justify-center rounded-md border border-line bg-void/40 ${
                brand ? "text-ink-dim" : "text-cyan/80"
              }`}
            >
              <SkillIcon className="h-3.5 w-3.5" />
            </span>
          );
        })}
        {cat.skills.length > preview.length && (
          <span className="flex h-7 items-center rounded-md px-1.5 font-mono text-[10px] text-ink-faint">
            +{cat.skills.length - preview.length}
          </span>
        )}
      </div>
    </motion.button>
  );
}

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        mod="MOD-02 · CAPABILITIES"
        title="Skills"
        subtitle="Real tool and technology icons — click a module to expand its contents."
      />

      <motion.div
        variants={revealStagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6"
      >
        {skillCategories.map((cat) => (
          <HexCard key={cat.id} cat={cat} onOpen={setActive} />
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-void/80 backdrop-blur-sm p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass module-corner w-full max-w-xl max-h-[80vh] overflow-y-auto rounded-2xl p-8"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-cyan">MODULE // {active.label.toUpperCase()}</span>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{active.label}</h3>
                </div>
                <button onClick={() => setActive(null)} aria-label="Close" className="text-ink-faint hover:text-cyan">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mb-6 text-sm text-ink-dim">{active.description}</p>

              <motion.div
                variants={revealStagger(0.04)}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 gap-3 sm:grid-cols-3"
              >
                {active.skills.map((s) => {
                  const { Icon: SkillIcon, brand } = getSkillIcon(s);
                  return (
                    <motion.div
                      key={s}
                      variants={revealUp}
                      className="flex items-center gap-2.5 rounded-xl border border-line bg-panel-light/50 px-3 py-2.5"
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-void/50 ${
                          brand ? "text-ink" : "text-cyan"
                        }`}
                      >
                        <SkillIcon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-[11px] leading-tight text-ink">{s}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
