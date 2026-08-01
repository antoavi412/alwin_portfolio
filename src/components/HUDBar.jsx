import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useUptime() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export default function HUDBar() {
  const uptime = useUptime();
  const [sessionId] = useState(() =>
    Array.from({ length: 8 }, () => "ABCDEF0123456789"[Math.floor(Math.random() * 16)]).join("")
  );

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="fixed top-0 z-40 hidden w-full border-b border-line/60 bg-void/70 backdrop-blur-md md:block"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 font-mono text-[10px] tracking-wider text-ink-faint">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            SESSION {sessionId}
          </span>
          <span className="hidden lg:inline">UPTIME {uptime}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">THREAT LEVEL: <span className="text-cyan">LOW</span></span>
          <span>ENCRYPTED CHANNEL</span>
        </div>
      </div>
    </motion.div>
  );
}
