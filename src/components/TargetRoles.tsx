import { ClipboardList, FileCheck2, ShieldCheck, type LucideIcon } from "lucide-react";
import { targetRoles } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./ui";

const icons: LucideIcon[] = [FileCheck2, ShieldCheck, ClipboardList];

export function TargetRoles() {
  return (
    <Section
      id="roles"
      eyebrow="Roles I'm targeting"
      title="Where I can contribute"
      intro={targetRoles.summary}
      className="bg-white/60 dark:bg-white/[0.015]"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {targetRoles.groups.map((g, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={g.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <h3 className="flex items-center gap-2 font-semibold text-ink dark:text-white">
                  <Icon className="size-5 text-accent dark:text-teal-300" aria-hidden="true" />
                  {g.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {g.roles.map((r) => (
                    <li key={r} className="flex gap-2.5 text-[0.95rem] text-slate-700 dark:text-slate-300">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent dark:bg-teal-300" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
