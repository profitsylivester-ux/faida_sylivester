/** Decorative engineering visuals — purely presentational, hidden from AT. */

export function CircuitTraces({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      className={`pointer-events-none absolute text-primary ${className}`}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M0 40h120l24 24h96" />
        <path d="M0 120h60l30-30h130l28 28h152" />
        <path d="M0 210h180l26 26h194" />
        <path d="M140 300V196l30-30h120" />
        <path d="M320 0v70l-26 26v80" />
      </g>
      <g fill="currentColor" opacity="0.7">
        <circle cx="144" cy="64" r="3" />
        <circle cx="90" cy="90" r="3" />
        <circle cx="206" cy="236" r="3" />
        <circle cx="294" cy="96" r="3" />
        <circle cx="170" cy="166" r="3" />
      </g>
    </svg>
  );
}

export function NodeNetwork({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute text-signal ${className}`}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="0.8" opacity="0.4">
        <path d="M20 40 100 100 180 30M20 160 100 100 180 170M100 100V10M100 100v90M20 40v120M180 30v140" />
      </g>
      <g fill="currentColor">
        <circle cx="100" cy="100" r="4" className="animate-pulse-glow" />
        <circle cx="20" cy="40" r="2.5" opacity="0.8" />
        <circle cx="180" cy="30" r="2.5" opacity="0.8" />
        <circle cx="20" cy="160" r="2.5" opacity="0.8" />
        <circle cx="180" cy="170" r="2.5" opacity="0.8" />
      </g>
    </svg>
  );
}

export function Waveform({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 60"
      className={`pointer-events-none text-primary ${className}`}
      fill="none"
    >
      <path
        d="M0 30h30l10-20 12 40 12-40 12 40 10-20h44l10-16 12 32 12-32 12 32 10-16h114"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[0.7rem] tracking-[0.18em] text-primary uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
      <div className="rule-line mt-6 w-40" />
    </div>
  );
}
