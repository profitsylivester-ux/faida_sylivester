import { useState } from "react";
import { Cable, Eye, GraduationCap, Lightbulb, Radar } from "lucide-react";
import { ttclDetails } from "@/data/experience";
import { SectionHeading, NodeNetwork } from "@/components/circuit-decor";
import { Reveal } from "@/components/reveal";

const tabs = [
  { id: "observed", label: "What I observed", icon: Eye, items: ttclDetails.observed },
  { id: "learned", label: "What I learned", icon: GraduationCap, items: ttclDetails.learned },
  { id: "insights", label: "Engineering insights", icon: Lightbulb, items: ttclDetails.insights },
  { id: "exposure", label: "Practical exposure", icon: Radar, items: ttclDetails.exposure },
] as const;

export function Ttcl() {
  const [tab, setTab] = useState<string>(tabs[0].id);
  const current = tabs.find((t) => t.id === tab) ?? tabs[0];

  return (
    <section id="ttcl" className="relative overflow-hidden">
      <NodeNetwork className="-top-10 -right-16 hidden h-80 w-80 lg:block" />
      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Field experience"
            title="TTCL Field Experience"
            description="Practical telecommunications exposure gained in the field, observing and working alongside engineers. This was field exposure and practical learning — not employment."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="card-elevated p-6">
            <span className="grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Cable className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">Optical access networks, up close</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Time spent in transmission, switching and access-network environments connected classroom
              theory to live infrastructure — optical distribution frames, GPON equipment, measurement
              instruments and the power and cooling systems that keep it all running.
            </p>
            <h4 className="mt-6 font-mono text-[0.7rem] tracking-[0.18em] text-primary uppercase">
              Technologies encountered
            </h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ttclDetails.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="card-elevated p-6">
            <div role="tablist" aria-label="TTCL field experience details" className="flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors ${
                    tab === t.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <t.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.label}
                </button>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {current.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
