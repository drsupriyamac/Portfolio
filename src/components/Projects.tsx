import { CircleCheck, Target, Trophy } from "lucide-react";
import { projects, type Project } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Chip, Section } from "./ui";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <article
      aria-labelledby={`proj-${p.id}`}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 transition hover:border-accent/40 hover:shadow-[0_20px_50px_-24px_rgb(15_110_106/0.35)] sm:p-8 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-teal-300/30"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-400">{String(index + 1).padStart(2, "0")}</p>
          <h3 id={`proj-${p.id}`} className="mt-1 font-serif text-2xl font-medium tracking-tight text-ink dark:text-white">
            {p.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{p.role}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Chip tone="accent">{p.tag}</Chip>
          {p.status && <Chip>{p.status}</Chip>}
        </div>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
            <Target className="size-4" aria-hidden="true" /> Problem addressed
          </h4>
          <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">{p.problem}</p>

          <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
            Regulations & frameworks
          </h4>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {p.frameworks.map((f) => (
              <li key={f} className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[0.72rem] text-slate-600 dark:bg-white/5 dark:text-slate-400">
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
            My contributions
          </h4>
          <ul className="mt-3 space-y-2.5">
            {p.contributions.map((c) => (
              <li key={c} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-700 dark:text-slate-300">
                <CircleCheck className="mt-1 size-4 shrink-0 text-accent dark:text-teal-300" aria-hidden="true" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          {p.outcomes && (
            <div className="mt-6 rounded-2xl bg-accent-soft/70 p-4 dark:bg-teal-400/[0.07]">
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent dark:text-teal-300">
                <Trophy className="size-4" aria-hidden="true" /> Outcomes
              </h4>
              <ul className="mt-2 space-y-1.5">
                {p.outcomes.map((o) => (
                  <li key={o} className="text-[0.95rem] font-medium text-ink dark:text-slate-100">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Regulatory work, start to submission"
      intro="Device submissions, clinical protocols and global launch strategy, each built on real regulations, predicates and standards."
    >
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.id}>
            <ProjectCard p={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
