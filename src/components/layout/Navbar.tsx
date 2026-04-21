import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/data/siteContent";
import { useTheme } from "@/hooks/useTheme";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-900 dark:bg-black/70"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <Logo size="sm" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? "text-blue-500" : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://donate.stripe.com/bIY3dT5tr3RZ5vW000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <Button size="sm">Donate</Button>
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-100"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center text-zinc-700 dark:text-zinc-300 md:hidden"
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
            className="overflow-hidden border-t border-zinc-200/70 bg-white px-4 pb-4 pt-2 dark:border-zinc-800 dark:bg-black md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-1 text-sm ${isActive ? "text-blue-500" : "text-zinc-700 dark:text-zinc-300"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="https://donate.stripe.com/bIY3dT5tr3RZ5vW000"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 text-sm font-medium text-blue-500 hover:text-blue-600"
              >
                Donate
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
