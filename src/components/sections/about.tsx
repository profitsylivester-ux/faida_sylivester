import { Cpu, GraduationCap, Lightbulb, Wrench } from "lucide-react";
import { SectionHeading, CircuitTraces } from "@/components/circuit-decor";
import { Reveal } from "@/components/reveal";

const pillars = [
  {
    icon: Wrench,
    title: "Hands-on first",
    text: "Ideas are proven on the bench — wired, measured, debugged and iterated until the hardware behaves.",
  },
  {
    icon: Cpu,
    title: "Systems thinking",
    text: "Sensor, firmware, power, enclosure and connectivity are designed as one system, not separate parts.",
  },
  {
    icon: Lightbulb,
    title: "Real-world problems",
    text: "Projects start from a problem someone actually has: climate in a poultry shed, water waste, road safety.",
  },
  {
    icon: GraduationCap,
    title: "Always learning",
    text: "University coursework, field experience and self-driven experiments feed each other continuously.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <CircuitTraces className="top-24 -right-24 hidden h-72 w-96 rotate-180 lg:block" />
      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering that leaves the workbench and does something useful"
          />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm Faida Sylivester Mosses, an electronics and embedded systems enthusiast currently in my{" "}
              <strong className="text-foreground">second year</strong> of a{" "}
              <strong className="text-foreground">
                BSc in Electronics and Telecommunication Engineering
              </strong>{" "}
              at the <strong className="text-foreground">Dar es Salaam Institute of Technology (DIT)</strong>.
            </p>
            <p>
              My engineering journey started with curiosity about how things work — pulling apart circuits,
              reading datasheets and trying to make a sensor respond the way I expected. That curiosity turned
              into a habit of building: microcontroller firmware, sensing circuits, monitoring systems and
              small automation ideas that solve a real inconvenience.
            </p>
            <p>
              I work across electronics, embedded systems, IoT, telecommunications, networking, software and
              AI. What connects them is a practical approach — I prefer a working prototype and honest
              measurements over a perfect diagram that was never built. Field exposure to fiber optics, GPON
              and access network infrastructure showed me how much of engineering happens in the details:
              labelling, measurement, discipline and documentation.
            </p>
            <p>
              My ambition is simple: to develop technological solutions that are genuinely useful in Tanzania
              and beyond, and to keep growing as an engineer through internships, collaboration and serious
              projects.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="card-elevated card-interactive h-full p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
