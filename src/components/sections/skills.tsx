import { useState } from "react";
import {
  Binary,
  Brain,
  CircuitBoard,
  Cpu,
  Code2,
  Network,
  Radio,
  Signal,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/circuit-decor";
import { Reveal } from "@/components/reveal";

const icons: Record<string, typeof Cpu> = {
  cpu: Cpu,
  chip: Binary,
  radio: Radio,
  code: Code2,
  board: CircuitBoard,
  signal: Signal,
  network: Network,
  brain: Brain,
};

export function Skills() {
  const [openId, setOpenId] = useState<string | null>(skillCategories[0]?.id ?? null);

  return (
    <section id="skills" className="relative bg-surface-2/60">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Technical skills"
            title="Tools, platforms and domains I work with"
            description="Grouped by discipline. Proficiency indicators are intentionally left as editable self-assessments rather than invented percentages."
          />
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon] ?? Cpu;
            const open = openId === cat.id;
            return (
              <Reveal as="li" key={cat.id} delay={i * 60}>
                <article
                  className={`card-elevated card-interactive h-full overflow-hidden ${
                    open ? "border-primary/50" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : cat.id)}
                    aria-expanded={open}
                    className="flex w-full items-start gap-3 p-5 text-left"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-base font-semibold">{cat.title}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{cat.blurb}</span>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-400 ease-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="flex flex-wrap gap-2 px-5 pb-5">
                        {cat.skills.map((s) => (
                          <li
                            key={s.name}
                            className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                          >
                            {s.name}
                            {typeof s.level === "number" ? (
                              <span className="ml-1.5 text-primary">{s.level}%</span>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
