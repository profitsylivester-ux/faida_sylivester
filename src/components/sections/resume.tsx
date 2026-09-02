import { Download, FileText, ExternalLink } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading, Waveform } from "@/components/circuit-decor";
import { Reveal } from "@/components/reveal";

const highlights = [
  "BSc in Electronics and Telecommunication Engineering — DIT (second year)",
  "Embedded systems: Arduino, ESP32, ESP8266, C/C++ firmware",
  "Electronics: circuit design, sensors, measurement and instrumentation",
  "Telecommunications: fiber optics, GPON, ODF, OTDR field exposure",
  "Networking: Cisco Packet Tracer, VLANs, network configuration",
  "PCB & simulation: Proteus, EasyEDA",
];

export function Resume() {
  const hasCv = Boolean(site.cvUrl);

  return (
    <section id="resume" className="relative overflow-hidden">
      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Resume"
            title="Curriculum vitae"
            description="A concise summary of academic background, technical skills and practical engineering work."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <Reveal className="card-elevated overflow-hidden">
            <div className="flex items-center justify-between border-b border-border bg-surface-2/70 px-5 py-3">
              <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                <FileText className="h-4 w-4 text-primary" aria-hidden="true" />
                Resume preview
              </span>
              <span className="font-mono text-[0.65rem] text-muted-foreground">PDF</span>
            </div>
            <div className="p-6">
              <p className="font-display text-xl font-semibold">{site.name}</p>
              <p className="text-sm text-primary">{site.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{site.location}</p>
              <div className="rule-line mt-5 w-full" />
              <ul className="mt-5 space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
              <Waveform className="mt-6 h-10 w-full opacity-40" />
            </div>
          </Reveal>

          <Reveal delay={100} className="card-elevated flex flex-col justify-center p-6">
            <h3 className="font-display text-lg font-semibold">Get the full document</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {hasCv
                ? "View the CV in your browser or download a copy as a PDF."
                : "The downloadable CV file has not been uploaded yet. Add its URL in the site data file and both buttons below will activate automatically."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={hasCv ? site.cvUrl : undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!hasCv}
                className={`inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 ${
                  hasCv ? "" : "pointer-events-none opacity-50"
                }`}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> View resume
              </a>
              <a
                href={hasCv ? site.cvUrl : undefined}
                download
                aria-disabled={!hasCv}
                className={`inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 ${
                  hasCv ? "" : "pointer-events-none opacity-50"
                }`}
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Download CV
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No employment history or qualifications beyond current study are listed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
