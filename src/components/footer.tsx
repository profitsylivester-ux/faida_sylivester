import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="grid-circuit pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-display font-bold text-primary">
              FM
            </span>
            <div className="min-w-0">
              <p className="font-display text-base font-bold">{site.name}</p>
              <p className="text-sm text-muted-foreground">{site.title}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Building practical electronics, embedded and IoT solutions — supported by the{" "}
            <span className="font-semibold text-primary">{site.brand}</span> technology brand.
          </p>
          <div className="mt-5 flex gap-2">
            <SocialLink href={site.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={site.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold tracking-wide uppercase">Quick links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-1">
            {navItems.map((item) =>
              item.href.startsWith("/#") ? (
                <li key={item.label}>
                  <a className="text-muted-foreground transition-colors hover:text-primary" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.label}>
                  <Link className="text-muted-foreground transition-colors hover:text-primary" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-wide uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="break-all">{site.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{site.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{site.location}</span>
            </li>
          </ul>
          <p className="mt-3 font-mono text-[0.7rem] text-muted-foreground/70">
            Contact details are placeholders — update in src/data/site.ts
          </p>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="font-mono tracking-[0.14em] uppercase">{site.brand}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const cls =
    "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary";
  if (!href) {
    return (
      <span className={`${cls} cursor-not-allowed opacity-60`} title={`${label} link not added yet`}>
        <span className="sr-only">{label} (link not added yet)</span>
        {children}
      </span>
    );
  }
  return (
    <a className={cls} href={href} target="_blank" rel="noreferrer noopener" aria-label={label}>
      {children}
    </a>
  );
}
