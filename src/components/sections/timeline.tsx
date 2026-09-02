import { BriefcaseBusiness, GraduationCap, Wrench } from "lucide-react";
import { experienceTimeline, educationTimeline, type TimelineItem } from "@/data/experience";
import { SectionHeading } from "@/components/circuit-decor";
import { Reveal } from "@/components/reveal";

const kindIcon = {
  education: GraduationCap,
  experience: BriefcaseBusiness,
  project: Wrench,
} as const;

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative mt-10 space-y-6 border-l border-border pl-6 sm:pl-8">
      {items.map((item, i) => {
        const Icon = kindIcon[item.kind];
        return (
          <Reveal key={item.title} as="li" delay={i * 80} className="relative">
            <span
              className="absolute top-5 -left-[calc(1.5rem+9px)] grid h-[18px] w-[18px] place-items-center rounded-full border border-primary/50 bg-background sm:-left-[calc(2rem+9px)]"
              aria-hidden="true"
            >
              <span
                className={`h-2 w-2 rounded-full bg-primary ${item.ongoing ? "animate-pulse-glow" : ""}`}
              />
            </span>
            <article className="card-elevated card-interactive p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[0.65rem] tracking-widest text-primary uppercase">
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  {item.period}
                </span>
                {item.ongoing ? (
                  <span className="rounded-full border border-signal/40 bg-signal/10 px-2.5 py-0.5 text-[0.65rem] font-medium tracking-widest text-signal uppercase">
                    Ongoing
                  </span>
                ) : null}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-primary">{item.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        );
      })}
    </ol>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative bg-surface-2/60">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="An engineering journey in progress"
            description="University study, field exposure and self-driven builds — each entry is editable as the journey develops."
          />
        </Reveal>
        <Timeline items={experienceTimeline} />
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic background"
            description="Currently a second-year student. No grades, GPA or graduation dates are claimed — future milestones will be added here."
          />
        </Reveal>
        <Timeline items={educationTimeline} />
      </div>
    </section>
  );
}
