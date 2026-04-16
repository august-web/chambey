import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { whatWeDo } from "@/data/siteContent";

export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-16 md:px-6 md:py-20">
      <Reveal>
        <SectionIntro
          eyebrow="About Chambey"
          title="Building Bridges for Global Opportunity"
          description="Many individuals are either out of work or working in jobs that don't fully utilize their skills and potential. This results in lost economic productivity and personal fulfillment, contributing to financial instability. Chambey stimulates growth through collective action and digital access, creating pathways for fulfilling opportunities through shared resources, skill building, and open communication."
        />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <section className="space-y-3">
            <h3 className="text-2xl font-semibold uppercase text-zinc-950 dark:text-zinc-100">Our Mission</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Power through collective Action.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section className="space-y-3">
            <h3 className="text-2xl font-semibold uppercase text-zinc-950 dark:text-zinc-100">Our Vision</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              A world where economic opportunities are within everyone's reach.
            </p>
          </section>
        </Reveal>
      </div>

      <Reveal>
        <section className="space-y-5">
          <h3 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100">Make a lasting & meaningful impact</h3>
          <ul className="grid gap-3 text-zinc-600 dark:text-zinc-300 md:grid-cols-2">
            {whatWeDo.map((item) => (
              <li key={item} className="border-l-2 border-blue-500 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </div>
  );
}
