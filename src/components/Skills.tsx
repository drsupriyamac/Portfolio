import { ClipboardList, FileCheck2, Globe2, Microscope, ShieldCheck, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Card, Section } from "./ui";

const icons: Record<string, LucideIcon> = {
  fileCheck: FileCheck2,
  shield: ShieldCheck,
  clipboard: ClipboardList,
  globe: Globe2,
  microscope: Microscope,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Expertise"
      title="Regulations and frameworks I work in"
      intro="Applied through coursework, product development plans and clinical practice."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon] ?? FileCheck2;
          return (
            <Reveal key={g.title} delay={i * 60} className={i === 0 ? "lg:col-span-1" : ""}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent dark:bg-teal-400/10 dark:text-teal-300">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-ink dark:text-white">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-[0.8rem] text-slate-700 dark:bg-white/5 dark:text-slate-300"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
