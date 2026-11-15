"use client";

import { useState } from "react";
import { Download, Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { btn, LinkedInIcon, Section } from "./ui";

/**
 * The form has no backend: on submit it opens the visitor's email app with the
 * message pre-filled. To receive messages directly instead, point the form at a
 * service such as Formspree (see README).
 */
export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const from = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n${name}${from ? ` (${from})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-teal-300";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk regulatory affairs"
      intro="Hiring for regulatory affairs, quality, risk management or clinical roles? I'd be glad to hear from you."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 transition hover:border-accent/40 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <Mail className="size-5 text-accent dark:text-teal-300" aria-hidden="true" />
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Email</span>
              <span className="font-medium break-all text-ink dark:text-white">{profile.email}</span>
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 transition hover:border-accent/40 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <LinkedInIcon className="size-5 text-accent dark:text-teal-300" />
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">LinkedIn</span>
              <span className="font-medium text-ink dark:text-white">dr-supriya-macherla</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <MapPin className="size-5 text-accent dark:text-teal-300" aria-hidden="true" />
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Location</span>
              <span className="font-medium text-ink dark:text-white">{profile.location}</span>
            </span>
          </div>
          <a href={profile.resumePath} download className={`${btn.primary} w-full`}>
            <Download className="size-4" aria-hidden="true" /> Download Resume (PDF)
          </a>
        </Reveal>

        <Reveal delay={80}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
                <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
              </label>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
                <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
              <textarea name="message" required rows={5} className={field} placeholder="Tell me about the role or opportunity…" />
            </label>
            <button type="submit" className={`${btn.primary} mt-6 w-full sm:w-auto`}>
              <Send className="size-4" aria-hidden="true" /> Send message
            </button>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400" role="status" aria-live="polite">
              {sent
                ? "Your email app should now be open with the message ready to send."
                : "Opens your email app with the message pre-filled."}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
