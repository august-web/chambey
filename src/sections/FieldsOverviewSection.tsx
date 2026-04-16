import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { fields } from "@/data/siteContent";

export function FieldsOverviewSection() {
  return (
    <section className="bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 md:px-6">
        <Reveal>
          <SectionIntro
            eyebrow="Our Approach"
            title="Empowering communities through collective action & digital access"
            description="Chambey provides pathways to resource management, skill building, and meaningful community communication."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {fields.map((field, index) => (
            <Reveal key={field.title} delay={index * 0.1}>
              <article className="space-y-4 border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <field.icon className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-100">{field.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300">{field.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link to="/fields" className="inline-flex text-sm font-medium text-blue-500 hover:text-blue-400">
            Explore our approach in detail
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
