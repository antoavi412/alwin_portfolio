import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import SectionHeader from "./SectionHeader";
import { revealUp } from "../hooks/useReveal";

const socials = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: FaGithub, label: "github.com/alwin905", href: profile.github },
  { icon: FaLinkedin, label: "linkedin.com/in/alwin-roshan-i", href: profile.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailLink = document.createElement("a");
    mailLink.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    mailLink.click();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader mod="MOD-07 · CONTACT" title="Contact" subtitle="Get in touch for internships, projects, or collaboration." />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass module-corner rounded-2xl p-8"
        >
          <h3 className="mb-6 font-display text-lg font-semibold text-ink">Direct Lines</h3>
          <div className="space-y-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-line bg-panel-light/40 px-4 py-3 transition-colors hover:border-cyan"
              >
                <s.icon className="h-4 w-4 text-cyan" />
                <span className="font-mono text-xs text-ink-dim group-hover:text-ink">{s.label}</span>
              </a>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-ink-faint">{profile.location}</p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass module-corner rounded-2xl p-8"
        >
          <h3 className="mb-6 font-display text-lg font-semibold text-ink">Send a Message</h3>
          <div className="space-y-4">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-line bg-void/40 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-cyan"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-line bg-void/40 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-cyan"
            />
            <textarea
              required
              rows={4}
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-line bg-void/40 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-cyan"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.99 }}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-cyan px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-void"
          >
            <Send className="h-4 w-4" /> {sent ? "Message Queued" : "Send Message"}
          </motion.button>
          {sent && (
            <p className="mt-3 text-center font-mono text-[11px] text-cyan">
              Your email app should open with the message draft ready.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
