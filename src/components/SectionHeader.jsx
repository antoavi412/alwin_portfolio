import { motion } from "framer-motion";
import { revealUp } from "../hooks/useReveal";

export default function SectionHeader({ title }) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="mb-12"
    >
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
