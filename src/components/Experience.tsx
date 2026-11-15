import { experience } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./ui";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Compliance in practice, not just on paper"
      intro="Research and clinical roles where device handling, sterilization and documentation were held to regulatory standards every day."
      className="bg-white/60 dark:bg-white/[0.015]"
    >
      <ol className="relative space-y-10 border-l border-slate-200 pl-6 sm:pl-10 dark:border-white/10">
        {experience.map((r, i) => (
          <li key={r.title + r.dates} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[31px] top-1.5 size-3.5 rounded-full border-2 sm:-left-[47px] ${
                i === 0
                  ? "border-accent bg-accent dark:border-teal-300 dark:bg-teal-300"
                  : "border-slate-300 bg-paper dark:border-slate-600 dark:bg-[#0b1417]"
              }`}
            />
            <Reveal>
              <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-ink dark:text-white">{r.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {r.org} · <span className="text-slate-500 dark:text-slate-400">{r.location}</span>
                  </p>
                </div>
                <p className="text-sm font-medium whitespace-nowrap text-accent sm:text-right dark:text-teal-300">{r.dates}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {r.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed text-slate-700 dark:text-slate-300">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <ul aria-label="Skills used" className="mt-4 flex flex-wrap gap-1.5">
                {r.tags.map((t) => (
                  <li key={t} className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-400">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
