import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-teal-300">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl dark:text-white"
          >
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Chip({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "accent" }) {
  const styles =
    tone === "accent"
      ? "bg-accent-soft text-accent border-accent/15 dark:bg-teal-400/10 dark:text-teal-200 dark:border-teal-300/20"
      : "bg-white text-slate-700 border-slate-200 dark:bg-white/5 dark:text-slate-300 dark:border-white/10";
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.8rem] font-medium ${styles}`}>
      {children}
    </span>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgb(15_29_36/0.04)] transition-shadow hover:shadow-[0_12px_32px_-12px_rgb(15_29_36/0.18)] sm:p-7 dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-none dark:hover:border-white/20 ${className}`}
    >
      {children}
    </div>
  );
}

export function LinkedInIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export const btn = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-teal-400 dark:text-teal-950 dark:hover:bg-teal-300",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:border-slate-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-slate-700 transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-slate-300 dark:hover:text-teal-300",
};
