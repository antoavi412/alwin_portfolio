import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FolderGit2 } from "lucide-react";
import { profile } from "../data/profile";

function useTypewriter(words, speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96 rounded-2xl overflow-hidden border-2 border-cyan/30"
    >
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-cyan/20 pointer-events-none" />
      
      <img
        src={profile.profileImage}
        alt={profile.name}
        className="h-full w-full object-cover"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3 py-1 font-mono text-[11px] tracking-widest text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            CYBERSECURITY PORTFOLIO
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-3 font-display text-lg text-ink-dim sm:text-2xl">
            {profile.title}
          </p>

          <div className="mt-2 h-8 font-mono text-base text-cyan sm:text-lg">
            <span>{typed}</span>
            <span className="animate-pulse">_</span>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink-dim sm:text-base lg:mx-0">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan to-blue px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-void transition-transform hover:scale-[1.03]"
            >
              <FolderGit2 className="h-4 w-4" /> View Projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a
              href="#certifications"
              className="flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink-dim transition-colors hover:border-violet hover:text-violet"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <ProfileImage />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-ink-faint"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
