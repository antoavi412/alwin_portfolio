import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t border-line/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-[11px] text-ink-faint">
          © {new Date().getFullYear()} {profile.name} · Built with intent, not templates.
        </p>
        <motion.a
          href="#top"
          whileHover={{ y: -3 }}
          className="flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-ink-dim transition-colors hover:border-cyan hover:text-cyan"
        >
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </motion.a>
      </div>
    </footer>
  );
}
