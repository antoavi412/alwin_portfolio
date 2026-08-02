import { motion } from "framer-motion";
import { Trophy, X } from "lucide-react";
import { achievements } from "../data/profile";
import SectionHeader from "./SectionHeader";
import { revealUp } from "../hooks/useReveal";
import { useState } from "react";

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader title="Achievements" />

      {achievements.map((a) => (
        <motion.div
          key={a.title}
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="glass relative overflow-hidden rounded-2xl px-8 py-14"
        >
          <div className="relative flex flex-col items-center">
            {a.image ? (
              <img
                src={a.image}
                alt={a.title}
                onClick={() => setSelectedImage(a)}
                className="mb-6 h-48 w-full max-w-sm rounded-xl object-cover cursor-pointer border border-amber/30 transition-colors hover:border-amber/60"
              />
            ) : (
              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-amber/40 bg-amber/10">
                <Trophy className="h-8 w-8 text-amber" strokeWidth={1.6} />
              </div>
            )}

            <h3 className="relative font-display text-2xl font-semibold text-ink sm:text-3xl text-center">
              {a.title}
            </h3>
            <p className="relative mt-2 font-mono text-xs uppercase tracking-widest text-amber text-center">
              {a.org}
            </p>
            {a.date && (
              <p className="relative mt-1 font-mono text-[10px] tracking-widest text-cyan">
                {a.date}
              </p>
            )}
            <p className="relative mx-auto mt-4 max-w-md text-sm text-ink-dim text-center">
              {a.description}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Image modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/80 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-cyan hover:text-ink transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-display text-lg font-semibold text-amber">
                {selectedImage.title}
              </h3>
              <p className="font-mono text-sm text-ink-dim mt-1">
                {selectedImage.org}
              </p>
              {selectedImage.date && (
                <p className="font-mono text-xs text-cyan mt-1">
                  {selectedImage.date}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
