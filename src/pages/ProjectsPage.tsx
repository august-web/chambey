import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { projects } from "@/data/siteContent";

export function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16 md:px-6 md:py-20">
      <Reveal>
        <SectionIntro
          eyebrow="Projects"
          title="Scalable initiative pipeline for learning and real-world problem solving"
          description="These are early placeholders for TechCrew project tracks. The structure is ready to grow into a full project showcase."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.08}>
            <article className="space-y-4 border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs uppercase tracking-[0.18em] text-blue-500">{project.status}</p>
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-100">{project.name}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.type}</p>
              <p className="text-zinc-600 dark:text-zinc-300">{project.summary}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
