import { about } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./ui";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="From the dental chair to the regulatory dossier">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {about.strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="border-l-2 border-accent/60 pl-4 dark:border-teal-300/50">
                <h3 className="font-semibold text-ink dark:text-white">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
