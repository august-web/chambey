import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <img
        src="https://chambey.org/wp-content/uploads/2025/02/banner.jpeg?w=1024"
        alt="Chambey banner"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl items-center px-4 py-24 md:px-6">
        <div className="max-w-3xl space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-lg font-semibold tracking-wide text-blue-400 md:text-xl uppercase"
          >
            Chambey
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            Building Bridges for Global Opportunity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-base text-zinc-200 md:text-lg"
          >
            Collaborating for a smarter, more connected world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Button href="/contact">Get Active</Button>
            <Button href="/fields" variant="secondary">
              Our Approach
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
