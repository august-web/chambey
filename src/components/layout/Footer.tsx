import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { navItems, socialLinks } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10 dark:border-zinc-900 dark:bg-black">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-6">
        <div className="space-y-4">
          <Logo showText={true} size="md" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Collaborating for a smarter, more connected world.</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Navigation</p>
          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-zinc-700 hover:text-blue-500 dark:text-zinc-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Social</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-700 transition-colors hover:text-blue-500 dark:text-zinc-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
