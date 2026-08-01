import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Target } from "lucide-react";
import { profile, stats, education } from "../data/profile";
import SectionHeader from "./SectionHeader";
import { revealUp, revealStagger } from "../hooks/useReveal";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 1000;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-semibold text-ink sm:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader mod="MOD-01 · IDENTITY" title="About" subtitle="Operator profile and background." />

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass module-corner rounded-2xl p-8"
        >
          <p className="text-base leading-relaxed text-ink-dim">{profile.longSummary}</p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-faint">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={revealStagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass module-corner rounded-2xl p-8"
        >
          <div className="mb-6 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-violet" />
            <h3 className="font-display text-lg font-semibold text-ink">Education</h3>
          </div>

          <div className="space-y-6 border-l border-line pl-5">
            {education.map((e) => (
              <motion.div key={e.school} variants={revealUp} className="relative">
                <span className="absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full border-2 border-cyan bg-void" />
                <p className="font-display text-sm font-semibold text-ink">{e.school}</p>
                <p className="text-xs text-ink-dim">{e.degree}</p>
                <p className="mt-1 font-mono text-[11px] text-ink-faint">
                  {e.date} · {e.location}
                </p>
                <p className="font-mono text-[11px] text-cyan">{e.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-2 border-t border-line pt-6">
            <Target className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
            <p className="text-xs leading-relaxed text-ink-dim">
              Goal: grow from foundational security knowledge into hands-on offensive and defensive
              practice through internships, CTFs, and real-world collaboration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
