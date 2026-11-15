# Dr. Supriya Macherla — Portfolio

Personal portfolio site built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Lucide icons**.
It builds to a fully static site in `out/` and can be hosted for free anywhere.

## Update content

All text lives in **`src/data/profile.ts`**: profile, skills, projects, experience, education and publications.
Edit that file, then rebuild. To replace the resume, overwrite `public/Supriya-Macherla-Resume.pdf` and keep the same filename.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
```

## Deploy

**Vercel (recommended)**
1. Push this folder to a GitHub repository.
2. In Vercel, go to **Add New → Project**, import the repo and click **Deploy**. Vercel detects Next.js automatically.
3. Optional: under Settings → Environment Variables, set `NEXT_PUBLIC_SITE_URL` to your final URL (for example `https://supriyamacherla.com`) and redeploy. This keeps SEO metadata, the sitemap and canonical links correct.

**Netlify**: import the repo, set the build command to `npm run build` and the publish directory to `out`.

**Drag-and-drop (no Git)**: run `npm run build`, then drag the `out/` folder onto https://app.netlify.com/drop.

## Contact form

The form opens the visitor's email app with the message pre-filled (no server needed).
To receive submissions directly instead, create a free form at https://formspree.io and change the
`onSubmit` handler in `src/components/Contact.tsx` to `fetch` the Formspree endpoint.
