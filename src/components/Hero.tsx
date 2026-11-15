import { ArrowRight, Download, Mail, MapPin, GraduationCap, Stethoscope, FileCheck2 } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { btn, LinkedInIcon } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-36 sm:pb-24">
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-teal-200/50 via-emerald-100/30 to-transparent blur-3xl dark:from-teal-500/15 dark:via-emerald-500/5"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft/70 px-3 py-1.5 text-xs font-semibold text-accent dark:border-teal-300/20 dark:bg-teal-400/10 dark:text-teal-200">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50 motion-reduce:hidden dark:bg-teal-300" />
              <span className="relative inline-flex size-2 rounded-full bg-accent dark:bg-teal-300" />
            </span>
            {profile.availability}
          </p>

          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-medium tracking-tight text-ink sm:text-6xl dark:text-white">
            {profile.name}
            <span className="text-slate-400 dark:text-slate-500">, {profile.credentials}</span>
          </h1>
          <p className="mt-3 font-serif text-2xl text-accent italic sm:mt-4 sm:text-3xl dark:text-teal-300">
            {profile.headline}
          </p>
          <p className="mt-2 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
            {profile.subheadline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg text-slate-700 dark:text-slate-300">{profile.intro}</p>

          <ul aria-label="Core skills" className="mt-6 flex flex-wrap gap-2">
            {profile.topSkills.map((s) => (
              <li
                key={s}
                className="rounded-md border border-slate-200 bg-white/80 px-2.5 py-1 text-[0.8rem] font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className={btn.primary}>
              View Projects <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href={profile.resumePath} download className={btn.secondary}>
              <Download className="size-4" aria-hidden="true" /> Download Resume
            </a>
            <a href="#contact" className={btn.ghost}>
              <Mail className="size-4" aria-hidden="true" /> Contact Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="grid size-11 place-items-center rounded-full border border-slate-300 text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/15 dark:text-slate-300 dark:hover:text-teal-300"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* At-a-glance card for recruiters */}
        <aside
          aria-label="At a glance"
          className="relative rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_24px_60px_-28px_rgb(15_29_36/0.35)] backdrop-blur sm:p-8 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">At a glance</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <GraduationCap className="mt-0.5 size-5 shrink-0 text-accent dark:text-teal-300" aria-hidden="true" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong className="font-semibold text-ink dark:text-white">MS, Biomedical Regulatory Affairs</strong>
                <br />University of Washington · expected Jun 2027
              </span>
            </li>
            <li className="flex gap-3">
              <FileCheck2 className="mt-0.5 size-5 shrink-0 text-accent dark:text-teal-300" aria-hidden="true" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong className="font-semibold text-ink dark:text-white">Building a 510(k) plan</strong>
                <br />Iris™, a self-originated Class II dental device
              </span>
            </li>
            <li className="flex gap-3">
              <Stethoscope className="mt-0.5 size-5 shrink-0 text-accent dark:text-teal-300" aria-hidden="true" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong className="font-semibold text-ink dark:text-white">Licensed dentist (BDS)</strong>
                <br />2+ years clinical practice, CDSCO & NABH compliance
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent dark:text-teal-300" aria-hidden="true" />
              <span className="text-slate-700 dark:text-slate-300">{profile.location}</span>
            </li>
          </ul>
          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper p-4 dark:bg-[#0f1b1f]">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-serif text-2xl font-semibold text-ink dark:text-white">{s.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-slate-500 dark:text-slate-400" aria-hidden="true">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
