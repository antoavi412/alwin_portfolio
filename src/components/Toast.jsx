import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Toast({ message, type = "success", duration = 4000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const isSuccess = type === "success";
  const borderColor = isSuccess ? "border-green-500" : "border-red-500";
  const iconColor = isSuccess ? "text-green-600" : "text-red-600";
  const Icon = isSuccess ? Check : X;

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 rounded-xl border ${borderColor} bg-panel px-4 py-3 max-w-sm shadow-md`}
    >
      <Icon className={`h-5 w-5 ${iconColor}`} />
      <p className="font-mono text-sm text-ink">{message}</p>
    </motion.div>
  );
}
