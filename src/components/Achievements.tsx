import { ArrowUpRight, BookOpen, Presentation } from "lucide-react";
import { publications, recognition } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./ui";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Publications & Recognition"
      title="Research and presentations"
      className="bg-white/60 dark:bg-white/[0.015]"
    >
      <div className="grid gap-4">
        {publications.map((p, i) => (
          <Reveal key={p.url} delay={i * 60}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 transition hover:border-accent/40 sm:p-6 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-teal-300/30"
            >
              <BookOpen className="mt-1 size-5 shrink-0 text-accent dark:text-teal-300" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Publication · {p.date}</p>
                <h3 className="mt-1 font-serif text-lg font-medium text-ink group-hover:text-accent dark:text-white dark:group-hover:text-teal-300">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  <em>{p.venue}</em>
                  {p.note && <> · {p.note}</>}
                </p>
              </div>
              <ArrowUpRight
                className="size-5 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        ))}
        {recognition.map((r) => (
          <Reveal key={r.title}>
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <Presentation className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Presentation</p>
                <h3 className="mt-1 font-serif text-lg font-medium text-ink dark:text-white">{r.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{r.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
