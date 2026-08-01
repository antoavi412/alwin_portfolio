import { motion } from "framer-motion";
import { revealUp } from "../hooks/useReveal";

export default function SectionHeader({ mod, title, subtitle }) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="mb-12 flex flex-col items-start gap-2"
    >
      <span className="font-mono text-xs tracking-[0.25em] text-cyan">{mod}</span>
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-xl text-sm text-ink-dim">{subtitle}</p>}
    </motion.div>
  );
}
