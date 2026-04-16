import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { socialLinks } from "@/data/siteContent";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
      <Reveal>
        <div className="space-y-8">
          <SectionIntro
            eyebrow="Contact"
            title="Let us build with you"
            description="Reach out to get active in the Swarm Economy, collaborate on collective action, or discuss pathways for fulfilling opportunities."
          />

          <div className="space-y-3 text-zinc-600 dark:text-zinc-300">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-blue-500" /> info@chambey.org
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-blue-500" /> Global community
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-700 transition-colors hover:text-blue-500 dark:text-zinc-300"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <form onSubmit={handleSubmit} className="space-y-4 border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <label className="block space-y-2">
            <span className="text-sm text-zinc-600 dark:text-zinc-300">Full Name</span>
            <input
              type="text"
              required
              className="w-full border border-zinc-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-black"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm text-zinc-600 dark:text-zinc-300">Email</span>
            <input
              type="email"
              required
              className="w-full border border-zinc-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-black"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm text-zinc-600 dark:text-zinc-300">Message</span>
            <textarea
              required
              rows={4}
              className="w-full border border-zinc-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-black"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-400"
          >
            Send Message
          </button>
          {submitted ? <p className="text-sm text-blue-500">Thanks for reaching out. We will contact you shortly.</p> : null}
        </form>
      </Reveal>
    </div>
  );
}
