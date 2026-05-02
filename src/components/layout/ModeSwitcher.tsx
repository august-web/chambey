import { motion } from "framer-motion";
import { useMode } from "@/hooks/useMode";

export function ModeSwitcher() {
  const { mode, setMode } = useMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mode-switcher"
    >
      <span className="sw-label">Mode</span>
      <button
        className={`sw-btn ${mode === "Organization" ? "sw-active" : ""}`}
        onClick={() => setMode("Organization")}
      >
        Organization
      </button>
      <button
        className={`sw-btn ${mode === "corridors" ? "sw-active" : ""}`}
        onClick={() => setMode("corridors")}
      >
        Corridors
      </button>
    </motion.div>
  );
}
