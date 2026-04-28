import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CommunityCtaSection() {
  return (
    <section className="bg-black py-20 dark:bg-zinc-950">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-end md:justify-between md:px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">Get Active</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Enjoy your journey to economic prosperity by gaining skills and contributing to a change-making movement.
            </h2>
          </div>
          <div className="flex gap-3">
            <Button href="/contact">Join Community</Button>
            <Button href="/fields" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
