import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";
import {
  collaborationPrinciples,
  leadershipTeam,
  teamClusters,
  teamRoleHighlights,
} from "@/data/siteContent";

export function TeamPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-14 px-4 py-16 md:px-6 md:py-20">
      <Reveal>
        <SectionIntro
          eyebrow="Teams"
          title="People behind the mission"
          description="Our team combines leadership, program delivery, and community support roles so members can learn, build, and grow with clear guidance."
        />
      </Reveal>

      <section className="space-y-6">
        <Reveal>
          <h3 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100">Leadership</h3>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {leadershipTeam.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950/50">
                <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-blue-500">{member.name}</p>
                    <h4 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-zinc-100">{member.title}</h4>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{member.bio}</p>
                  <ul className="grid gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {member.responsibilities.map((item) => (
                      <li key={item} className="border-l-2 border-blue-500 pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <Reveal>
          <h3 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100">Related Positions</h3>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {teamClusters.map((cluster, index) => (
            <Reveal key={cluster.title} delay={index * 0.08}>
              <article className="h-full space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-zinc-950 dark:text-zinc-100">{cluster.title}</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{cluster.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {cluster.roles.map((role) => (
                    <li key={role.title} className="border-l-2 border-blue-500 pl-3">
                      <p className="font-medium text-zinc-900 dark:text-zinc-100">{role.title}</p>
                      <p>{role.focus}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <Reveal>
          <h3 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100">How We Collaborate</h3>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {collaborationPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.06}>
              <article className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950/50">
                <h4 className="text-base font-semibold text-zinc-950 dark:text-zinc-100">{principle.title}</h4>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <Reveal>
          <h3 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100">Team in Action</h3>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamRoleHighlights.map((role, index) => (
            <Reveal key={role.title} delay={index * 0.06}>
              <article className="group overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950/50">
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 p-4">
                  <h4 className="text-base font-semibold text-zinc-950 dark:text-zinc-100">{role.title}</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{role.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900">
        <Reveal>
          <div className="mx-auto max-w-2xl space-y-4">
            <h3 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100">
              Ready to Join the Team?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              We're always looking for passionate individuals to help us build the Swarm Economy. Whether you're interested in facilitating, coordinating, or volunteering—let's talk!
            </p>
            <Button href="/contact" className="mt-4">Get in Touch</Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
