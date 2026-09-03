import { ArrowRight, Download, Mail } from "lucide-react";
import profile from "@/assets/faida-profile.jpg";
import { site } from "@/data/site";
import { CircuitTraces, NodeNetwork, Waveform } from "@/components/circuit-decor";

const stats = [
  { value: "BSc", label: "Electronics & Telecom Eng." },
  { value: "Year 2", label: "DIT, Dar es Salaam" },
  { value: "10+", label: "Engineering projects" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="hero-aura pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-circuit pointer-events-none absolute inset-0" aria-hidden="true" />
      <CircuitTraces className="top-10 -left-20 hidden h-72 w-96 lg:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 font-mono text-[0.7rem] tracking-[0.18em] text-primary uppercase">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-primary" />
            Electronics & Embedded Systems
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl">
            Faida Sylivester <span className="gradient-text">Mosses</span>
          </h1>

          <p className="mt-4 font-mono text-sm tracking-[0.12em] text-primary uppercase sm:text-base">
            {site.title}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A creative and innovative engineering student passionate about building practical technology
            solutions. An electronics and embedded systems enthusiast focused on IoT, automation,
            telecommunications, networking, software and AI — and on solving real-world problems through
            technology.
          </p>

          <Waveform className="mt-6 h-10 w-full max-w-sm" />

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              View My Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#resume"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-surface px-5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-transparent px-5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0 border-l border-border pl-3">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-xl font-bold text-primary">{s.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted-foreground">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="animate-pulse-glow absolute -inset-6 rounded-[2rem] bg-[var(--gradient-primary)] opacity-25 blur-3xl"
            aria-hidden="true"
          />
          <NodeNetwork className="-top-10 -right-8 hidden h-40 w-40 lg:block" />
          <div className="glass-panel relative overflow-hidden rounded-[1.75rem] p-3">
            <div
              className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-primary/30"
              aria-hidden="true"
            />
            <img
              src={profile}
              alt="Portrait of Faida Sylivester Mosses"
              width={891}
              height={1188}
              fetchPriority="high"
              className="aspect-4/5 w-full rounded-[1.35rem] object-cover object-top"
            />
            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-xl border border-border bg-background/85 px-3 py-2 backdrop-blur">
              <span className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
                {site.location}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.14em] text-primary uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Open to work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
