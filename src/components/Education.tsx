import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import { credentials, education } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Card, Section } from "./ui";

export function Education() {
  return (
    <Section id="education" eyebrow="Education & Credentials" title="Trained as a clinician, specializing in regulation">
      <div className="grid gap-5 lg:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 80}>
            <Card className="h-full">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent dark:bg-teal-400/10 dark:text-teal-300">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-ink dark:text-white">{e.degree}</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {e.school} · {e.location}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {e.dates} · <span className="font-semibold text-accent dark:text-teal-300">GPA {e.gpa}</span>
                  </p>
                </div>
              </div>
              {e.distinctions.length > 0 && (
                <div className="mt-5">
                  <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#8a5a14] dark:text-amber-300">
                    <Award className="size-4" aria-hidden="true" /> Distinctions
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {e.distinctions.map((d) => (
                      <li
                        key={d}
                        className="rounded-md border border-gold/30 bg-gold/10 px-2.5 py-1 text-[0.8rem] font-medium text-[#7a5418] dark:text-amber-200"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {e.highlights.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-[0.92rem] leading-relaxed text-slate-700 dark:text-slate-300">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent dark:bg-teal-300" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              {e.coursework.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                    Relevant coursework
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {e.coursework.map((c) => (
                      <li key={c} className="rounded-md bg-slate-100 px-2.5 py-1 text-[0.8rem] text-slate-700 dark:bg-white/5 dark:text-slate-300">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-5 grid gap-5 sm:grid-cols-3">
        {credentials.map((c) => (
          <div
            key={c.title}
            className="flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 p-5 dark:border-white/15"
          >
            <BadgeCheck className="size-6 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <p className="font-semibold text-ink dark:text-white">{c.title}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{c.detail}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
