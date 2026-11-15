import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const title = `${profile.name} — Medical Device Regulatory Affairs`;
const description =
  "Regulatory affairs MS candidate (University of Washington, GPA 3.93) and licensed dentist. FDA 510(k), design controls (21 CFR 820.30), ISO 14971, ISO 13485, ICH E6 GCP and international market access.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Regulatory Affairs",
    "Medical Device Regulatory Affairs",
    "510(k)",
    "Design Controls",
    "21 CFR 820.30",
    "ISO 14971",
    "ISO 13485",
    "QMSR",
    "ICH E6 GCP",
    "Clinical Trial Operations",
    "Regulatory Affairs Specialist",
    "University of Washington",
    "Supriya Macherla",
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description,
    siteName: profile.name,
  },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1417" },
  ],
};

// Runs before paint: applies the saved/system theme and enables reveal animations.
const bootScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}document.documentElement.classList.add('js');})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Regulatory Affairs MS Candidate",
  url: siteUrl,
  sameAs: [profile.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Washington" },
    { "@type": "CollegeOrUniversity", name: "Mamata Dental College & Hospital" },
  ],
  knowsAbout: ["FDA 510(k)", "Design controls", "ISO 14971", "ISO 13485", "ICH E6 GCP"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
