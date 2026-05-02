import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { LitanyHandoff } from "@/components/layout/LitanyHandoff";
import { ModeSwitcher } from "@/components/layout/ModeSwitcher";
import { Navbar } from "@/components/layout/Navbar";

export function SiteLayout() {
  return (
    <div className="min-h-screen" style={{ background: "var(--cream)", color: "var(--navy)" }}>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <LitanyHandoff />
      <ModeSwitcher />
    </div>
  );
}
