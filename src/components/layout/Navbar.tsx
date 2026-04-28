import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";
import { navItems } from "@/data/siteContent";
import { useMode } from "@/hooks/useMode";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { mode, setMode } = useMode();

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const isFoundation = mode === "foundation";

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 nav"
    >
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => handleNavClick("/")}>
          Cham<span className="co">bey</span>
          <span className={cn("nav-badge", isFoundation ? "badge-f" : "badge-c")}>
            {isFoundation ? "Foundation" : "Corridors"}
          </span>
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.href}
              className="nav-link"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="nav-link"
            style={{ color: "var(--tealD)", fontWeight: 500 }}
            onClick={() => handleNavClick("/support")}
          >
            Support
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            className={cn("nav-cta", isFoundation ? "nav-cta-f" : "nav-cta-c")}
            onClick={() => handleNavClick("/contact")}
          >
            {isFoundation ? "Join network" : "Start request"}
          </button>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="nav-mobile-menu"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  className="py-1 text-sm"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              ))}
              <button
                className="py-1 text-sm font-medium"
                style={{ color: "var(--tealD)" }}
                onClick={() => handleNavClick("/support")}
              >
                Support
              </button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}