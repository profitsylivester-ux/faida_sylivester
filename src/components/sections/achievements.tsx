import { Award } from "lucide-react";
import { achievements } from "@/data/experience";
import { SectionHeading, CircuitTraces } from "@/components/circuit-decor";
import { Reveal } from "@/components/reveal";

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-surface-2/60">
      <CircuitTraces className="-bottom-10 -left-20 hidden h-72 w-96 lg:block" />
      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Engineering Achievements & Practical Experience"
            description="Practical, verifiable engineering work rather than formal certificates. Certifications will be listed here once earned."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 80} as="article" className="h-full">
              <div className="card-elevated card-interactive h-full p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                    {a.category}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
