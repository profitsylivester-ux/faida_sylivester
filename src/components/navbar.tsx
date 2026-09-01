import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { navItems, sectionIds, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

  const isActive = (href: string) => {
    if (href === "/blog") return pathname.startsWith("/blog");
    return onHome && href === `/#${active}`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel border-x-0 border-t-0 shadow-sm" : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8"
      >
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${site.name} — home`}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-display text-sm font-bold text-primary">
            FM
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-bold">{site.shortName}</span>
            <span className="block truncate font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
              {site.brand}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavAnchor href={item.href} active={isActive(item.href)}>
                  {item.label}
                </NavAnchor>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href="/#contact"
            className="hidden h-9 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground xl:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="glass-panel border-x-0 border-b-0 xl:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 pb-5">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavAnchor href={item.href} active={isActive(item.href)} block onClick={() => setOpen(false)}>
                  {item.label}
                </NavAnchor>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

function NavAnchor({
  href,
  active,
  children,
  block,
  onClick,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  block?: boolean;
  onClick?: () => void;
}) {
  const cls = `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    block ? "block" : "inline-block"
  } ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`;

  const inner = (
    <>
      {children}
      {active ? (
        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" aria-hidden="true" />
      ) : null}
    </>
  );

  if (href.startsWith("/#")) {
    return (
      <a href={href} className={cls} onClick={onClick} aria-current={active ? "true" : undefined}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={href as "/blog"} className={cls} onClick={onClick} aria-current={active ? "page" : undefined}>
      {inner}
    </Link>
  );
}
