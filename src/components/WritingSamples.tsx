import { ArrowUpRight, CircleCheck, FileText } from "lucide-react";
import { writingSamples } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Chip, Section } from "./ui";

export function WritingSamples() {
  return (
    <Section
      id="writing"
      eyebrow="Writing Samples"
      title="Regulatory writing you can read"
      intro="A global market-access strategy, a regulatory policy paper and a presentation slide."
      className="bg-white/60 dark:bg-white/[0.015]"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {writingSamples.map((w, i) => (
          <Reveal key={w.id} delay={i * 80}>
            <article
              aria-labelledby={`ws-${w.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition hover:border-accent/40 hover:shadow-[0_20px_50px_-24px_rgb(15_110_106/0.35)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-teal-300/30"
            >
              <a
                href={w.file}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="block aspect-[16/9] overflow-hidden border-b border-slate-200/80 bg-slate-100 dark:border-white/10 dark:bg-white/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.cover}
                  alt=""
                  width={900}
                  height={506}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
              </a>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap gap-2">
                  <Chip tone="accent">{w.type}</Chip>
                  <Chip>{w.credit}</Chip>
                </div>
                <h3 id={`ws-${w.id}`} className="mt-4 font-serif text-xl font-medium tracking-tight text-ink dark:text-white">
                  {w.title}
                </h3>
                <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">{w.subtitle}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{w.context}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-700 dark:text-slate-300">{w.summary}</p>
                <ul className="mt-4 space-y-2">
                  {w.demonstrates.map((d) => (
                    <li key={d} className="flex gap-2.5 text-[0.92rem] text-slate-700 dark:text-slate-300">
                      <CircleCheck className="mt-0.5 size-4 shrink-0 text-accent dark:text-teal-300" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-6">
                  <a
                    href={w.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full whitespace-nowrap bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-teal-400 dark:text-teal-950 dark:hover:bg-teal-300"
                  >
                    <FileText className="size-4" aria-hidden="true" />
                    {w.linkLabel}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{w.meta}</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
