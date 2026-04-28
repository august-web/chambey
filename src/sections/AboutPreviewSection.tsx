import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function AboutPreviewSection() {
  return (
    <section className="bg-white py-20 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 md:px-6">
        <Reveal>
          <SectionIntro
            eyebrow="Get Active"
            title="Get Active in the Swarm Economy"
            description="Many individuals are either out of work or working in jobs that don't fully utilize their skills and potential. This results in lost economic productivity and personal fulfillment, contributing to financial instability."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="max-w-4xl space-y-4 text-zinc-600 dark:text-zinc-300">
            <p>
              Chambey stimulates growth through collective action and digital access, creating pathways for fulfilling opportunities through shared resources, skill building, and open communication.
            </p>
            <Link to="/about" className="inline-flex text-sm font-medium text-blue-500 hover:text-blue-400">
              Read our full story
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
