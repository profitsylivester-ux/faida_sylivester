import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading, NodeNetwork } from "@/components/circuit-decor";
import { Reveal } from "@/components/reveal";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const honeypot = String(data.get("company") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Please enter a valid email address.";
    if (subject.length < 3) next.subject = "Please add a short subject.";
    if (message.length < 20) next.message = "Please write at least 20 characters.";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }
    if (honeypot) {
      // Spam bot filled the hidden field — silently succeed.
      setStatus("sent");
      return;
    }

    const mail = site.email && !site.email.includes("example.com") ? site.email : "";
    if (mail) {
      window.location.href = `mailto:${mail}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    }
    setStatus("sent");
    form.reset();
  }

  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: site.location, href: "" },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: site.github },
    { icon: Linkedin, label: "LinkedIn", href: site.linkedin },
  ];

  const field =
    "mt-1.5 w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25";

  return (
    <section id="contact" className="relative overflow-hidden bg-surface-2/60">
      <NodeNetwork className="-bottom-16 -left-16 hidden h-80 w-80 lg:block" />
      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Open to internships, collaboration and technical work"
            description="Whether it's an internship, an engineering project or a technical question — send a message and I'll reply."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="card-elevated p-6">
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input id="name" name="name" className={field} placeholder="Your full name" />
                  {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={field}
                    placeholder="you@example.com"
                  />
                  {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input id="subject" name="subject" className={field} placeholder="What is this about?" />
                {errors.subject ? <p className="mt-1 text-xs text-destructive">{errors.subject}</p> : null}
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={field}
                  placeholder="Tell me about the opportunity or project…"
                />
                {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message}</p> : null}
              </div>

              {/* Honeypot — hidden from humans, catches basic bots. */}
              <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" aria-hidden="true" /> Send message
              </button>

              <p aria-live="polite" className="text-sm">
                {status === "sent" ? (
                  <span className="text-signal">
                    Thanks — your message is ready to send from your email client.
                  </span>
                ) : status === "error" ? (
                  <span className="text-destructive">Please fix the highlighted fields and try again.</span>
                ) : null}
              </p>
            </form>
          </Reveal>

          <Reveal delay={100} className="space-y-4">
            <div className="card-elevated p-6">
              <h3 className="font-display text-lg font-semibold">Direct details</h3>
              <ul className="mt-4 space-y-3">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                      <d.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                        {d.label}
                      </span>
                      {d.href ? (
                        <a href={d.href} className="text-sm break-words hover:text-primary">
                          {d.value}
                        </a>
                      ) : (
                        <span className="text-sm">{d.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Contact values are editable placeholders until real details are provided.
              </p>
            </div>

            <div className="card-elevated p-6">
              <h3 className="font-display text-lg font-semibold">Profiles</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((s) =>
                  s.href ? (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm hover:border-primary/50"
                    >
                      <s.icon className="h-4 w-4" aria-hidden="true" /> {s.label}
                    </a>
                  ) : (
                    <span
                      key={s.label}
                      className="inline-flex items-center gap-2 rounded-md border border-dashed border-border px-4 py-2 text-sm text-muted-foreground"
                    >
                      <s.icon className="h-4 w-4" aria-hidden="true" /> {s.label} — link pending
                    </span>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
