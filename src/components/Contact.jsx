import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import SectionHeader from "./SectionHeader";
import Toast from "./Toast";
import { revealUp } from "../hooks/useReveal";

const socials = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: FaGithub, label: "github.com/alwin905", href: profile.github },
  { icon: FaLinkedin, label: "linkedin.com/in/alwin-roshan-i", href: profile.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xaqrgrka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setToast({ message: "Message sent! Alwin will get back to you soon.", type: "success" });
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setToast({ message: "Failed to send. Please try again.", type: "error" });
      }
    } catch {
      setToast({ message: "Network error. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader title="Contact" />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass rounded-2xl p-8"
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
          
          <button
            onClick={copyEmailToClipboard}
            className="mt-6 w-full flex items-center justify-center gap-2 rounded-full border border-cyan/40 bg-cyan/5 px-4 py-3 font-mono text-xs uppercase tracking-widest text-cyan transition-colors hover:border-cyan hover:bg-cyan/10"
          >
            {copiedEmail ? (
              <>
                <Check className="h-4 w-4" /> Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copy Email
              </>
            )}
          </button>
          
          <p className="mt-6 font-mono text-[11px] text-ink-faint">{profile.location}</p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="mb-6 font-display text-lg font-semibold text-ink">Send a Message</h3>
          <div className="space-y-4">
            <div>
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full rounded-lg border ${
                  errors.name ? "border-red-600" : "border-line"
                } bg-panel px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-cyan`}
              />
              {errors.name && <p className="mt-1 font-mono text-[11px] text-red-500">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full rounded-lg border ${
                  errors.email ? "border-red-600" : "border-line"
                } bg-panel px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-cyan`}
              />
              {errors.email && <p className="mt-1 font-mono text-[11px] text-red-500">{errors.email}</p>}
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full resize-none rounded-lg border ${
                  errors.message ? "border-red-600" : "border-line"
                } bg-panel px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-cyan`}
              />
              {errors.message && <p className="mt-1 font-mono text-[11px] text-red-500">{errors.message}</p>}
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-panel transition-colors hover:bg-cyan disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" /> {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>

      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
