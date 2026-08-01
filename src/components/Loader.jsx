import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { loadingSteps } from "../data/profile";

export default function Loader({ onDone }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const stepDuration = 220;
    const stepTimer = setInterval(() => {
      setStepIndex((i) => {
        if (i >= loadingSteps.length - 1) {
          clearInterval(stepTimer);
          return i;
        }
        return i + 1;
      });
    }, stepDuration);

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(100, p + 14));
    }, 100);

    const doneTimer = setTimeout(() => {
      setProgress(100);
      setExiting(true);
      setTimeout(onDone, 300);
    }, loadingSteps.length * stepDuration + 120);

    return () => {
      clearInterval(stepTimer);
      clearInterval(progressTimer);
      clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          style={{ pointerEvents: exiting ? "none" : "auto" }}
        >
          <div className="absolute inset-0 grid-fade opacity-40" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-cyan/30"
          >
            <ShieldCheck className="h-7 w-7 text-cyan" strokeWidth={1.5} />
          </motion.div>

          <p className="font-mono text-xs tracking-[0.3em] text-ink-dim">SECURE BOOT SEQUENCE</p>

          <div className="mt-6 h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={stepIndex}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-sm text-ink"
              >
                {loadingSteps[stepIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-8 h-[3px] w-64 overflow-hidden rounded-full bg-panel-light">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue via-cyan to-violet"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>
          <p className="mt-3 font-mono text-[11px] text-ink-faint">{Math.floor(progress)}%</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
