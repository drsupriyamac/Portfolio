import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row dark:text-slate-400 sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}, {profile.credentials}
        </p>
        <nav aria-label="Footer" className="flex gap-6">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            Email
          </a>
          <a href={profile.resumePath} download className="hover:text-accent">
            Resume
          </a>
          <a href="#top" className="hover:text-accent">
            Back to top
          </a>
        </nav>
      </div>
    </footer>
  );
}
