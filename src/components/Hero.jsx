import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import { profile } from "../data/profile";

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96 rounded-2xl overflow-hidden border border-line bg-panel shadow-sm"
    >
      <img
        src={profile.profileImage}
        alt={profile.name}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-panel/30 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
            Cybersecurity Portfolio
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 font-mono text-sm tracking-wide text-ink-dim sm:text-base">
            {profile.roles.join(" · ")}
          </p>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink-dim sm:text-base lg:mx-0">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-panel transition-colors hover:bg-cyan"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-dim transition-colors hover:border-cyan hover:text-cyan"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-dim transition-colors hover:border-cyan hover:text-cyan"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ProfileImage />
        </motion.div>
      </div>
    </section>
  );
}
