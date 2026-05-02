import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";
import { navItems } from "@/data/siteContent";
import { useMode } from "@/hooks/useMode";
import { openLitanyHandoff } from "@/utils/litany";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { mode } = useMode();

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const isOrganization = mode === "Organization";
  const handleJoinClick = () => {
    openLitanyHandoff({ intent: "user", campaign: "navbar" });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 nav"
    >
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => handleNavClick("/")}>
          <img src="/favicon.png" alt="" className="nav-logo-mark" />
          <span>CHAMBEY</span>
          <span className={cn("nav-badge", isOrganization ? "badge-f" : "badge-c")}>
            {isOrganization ? "Organization" : "Corridors"}
          </span>
        </Link>

        <nav className="nav-links hidden md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              className="nav-link"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            className={cn("nav-cta hidden md:flex", isOrganization ? "nav-cta-f" : "nav-cta-c")}
            onClick={isOrganization ? handleJoinClick : () => handleNavClick("/contact")}
          >
            {isOrganization ? "Join network" : "Start request"}
          </button>
          <button
            type="button"
            className="nav-toggle md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <button
            className={cn("nav-cta md:hidden", isOrganization ? "nav-cta-f" : "nav-cta-c")}
            onClick={isOrganization ? handleJoinClick : () => handleNavClick("/contact")}
          >
            {isOrganization ? "Join" : "Start"}
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
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
