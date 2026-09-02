import { useMemo, useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projects, projectCategories, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/circuit-decor";
import { Reveal } from "@/components/reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function StatusTag({ status }: { status: Project["status"] }) {
  return (
    <span className="rounded-full border border-signal/40 bg-signal/10 px-2.5 py-0.5 font-mono text-[0.65rem] tracking-widest text-signal uppercase">
      {status}
    </span>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const list = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => (p.categories as string[]).includes(filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative bg-surface-2/60">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Things I have designed, built and tested"
            description="Filter by discipline and open any project for the full engineering breakdown. Project artwork is illustrative — real photographs will replace it as builds are documented."
          />
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90} as="article" className="h-full">
              <div className="card-elevated card-interactive group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <StatusTag status={p.status} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[0.68rem] tracking-[0.16em] text-primary uppercase">
                    {p.categories[0]}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                  {p.subtitle ? (
                    <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
                  ) : null}
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setActive(p)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      View details
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" /> Code
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto">
          {active ? (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <StatusTag status={active.status} />
                  {active.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <DialogTitle className="mt-2 font-display text-2xl">{active.title}</DialogTitle>
                <DialogDescription>{active.subtitle ?? active.summary}</DialogDescription>
              </DialogHeader>

              <img
                src={active.image}
                alt={active.imageAlt}
                loading="lazy"
                className="mt-2 w-full rounded-lg border border-border object-cover"
              />

              <div className="mt-5 space-y-5 text-sm leading-relaxed">
                <div>
                  <h4 className="font-display text-base font-semibold">Problem</h4>
                  <p className="mt-1 text-muted-foreground">{active.problem}</p>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold">Solution</h4>
                  <p className="mt-1 text-muted-foreground">{active.solution}</p>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold">Key features</h4>
                  <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                    {active.features.map((f) => (
                      <li key={f} className="flex gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold">Technologies</h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold">My role</h4>
                  <p className="mt-1 text-muted-foreground">{active.role}</p>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold">Results &amp; impact</h4>
                  {active.results.length ? (
                    <ul className="mt-2 space-y-1.5">
                      {active.results.map((r) => (
                        <li key={r} className="flex gap-2 text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-1 text-muted-foreground">
                      Measured outcomes will be published here once the build has been formally tested and
                      documented.
                    </p>
                  )}
                </div>
                {active.github ? (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 font-medium hover:border-primary/50"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" /> View repository
                  </a>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    <X className="mr-1 inline h-3 w-3" aria-hidden="true" />
                    No public repository linked yet.
                  </p>
                )}
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
