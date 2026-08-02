import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center print:hidden"
    >
      <div className="mt-4 flex w-[95%] max-w-5xl items-center justify-between gap-6 rounded-full border border-line bg-panel/85 px-6 py-3 backdrop-blur-md shadow-sm">
        <a href="#top" className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-dim transition-colors hover:text-ink">
          Alwin
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-ink-dim transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="text-ink-dim lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-panel/95 backdrop-blur-md lg:hidden"
          >
            <button onClick={() => setOpen(false)} className="absolute right-6 top-6" aria-label="Close menu">
              <X className="h-6 w-6 text-ink" />
            </button>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold uppercase tracking-[0.3em] text-ink-dim transition-colors hover:text-cyan"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
