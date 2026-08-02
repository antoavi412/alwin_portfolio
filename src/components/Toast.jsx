import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Toast({ message, type = "success", duration = 4000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const isSuccess = type === "success";
  const bgColor = isSuccess ? "bg-green-900/80" : "bg-red-900/80";
  const borderColor = isSuccess ? "border-green-700" : "border-red-700";
  const Icon = isSuccess ? Check : X;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 rounded-lg border ${bgColor} ${borderColor} px-4 py-3 max-w-sm`}
    >
      <Icon className={`h-5 w-5 ${isSuccess ? "text-green-400" : "text-red-400"}`} />
      <p className="font-mono text-sm text-ink">{message}</p>
    </motion.div>
  );
}
