import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { fields } from "@/data/siteContent";

export function FieldsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16 md:px-6 md:py-20">
      <Reveal>
        <SectionIntro
          eyebrow="Our Approach"
          title="Empowering communities through collective action & digital access"
          description="We provide structured pathways through shared resources, skill building, and open communication to help individuals integrate seamlessly into the Swarm Economy."
        />
      </Reveal>

      <div className="grid gap-6">
        {fields.map((field, index) => (
          <Reveal key={field.title} delay={index * 0.08}>
            <article className="grid gap-4 border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-[auto,1fr] md:gap-6">
              <field.icon className="h-10 w-10 text-blue-500" />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100">{field.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300">{field.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
