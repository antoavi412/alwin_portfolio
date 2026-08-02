import { motion } from "framer-motion";
import { SiCisco, SiGoogle } from "react-icons/si";
import { SealIcon } from "./CustomIcons";
import { certifications } from "../data/profile";
import SectionHeader from "./SectionHeader";
import { revealStagger, scaleIn } from "../hooks/useReveal";

const issuerIcon = (issuer) => {
  if (issuer.includes("Cisco")) return SiCisco;
  if (issuer.includes("Google")) return SiGoogle;
  return null;
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader title="Certifications" />

      <motion.div
        variants={revealStagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certifications.map((c) => (
          <motion.div
            key={c.name}
            variants={scaleIn}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-start gap-3">
              <span className="relative mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber/30 bg-amber/10">
                <SealIcon className="h-5 w-5 text-amber" />
                {issuerIcon(c.issuer) &&
                  (() => {
                    const IssuerIcon = issuerIcon(c.issuer);
                    return (
                      <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-panel text-ink-dim">
                        <IssuerIcon className="h-2.5 w-2.5" />
                      </span>
                    );
                  })()}
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold leading-snug text-ink">{c.name}</h3>
                <div className="mt-2 flex items-center gap-2 font-mono text-[11px] text-ink-faint">
                  <span className="text-cyan">{c.issuer}</span>
                  <span>·</span>
                  <span>{c.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
