# JBFE Sea to Sea website

Astro static site for seatosea.co.za, hosted on Vercel. Same setup as the Tour de Addo site.
Built on the Sea to Sea design system (Night theme, Frutiger LT Pro, Sun/Sky palette).

## Edit
    npm install
    npm run dev        # preview at http://localhost:4321

- Dates, hotels, prices, entry link, day-by-day text, grades, sponsors: `src/data/site.ts`
- Pages: `src/pages/` · Shared pieces: `src/components/` · Colours/fonts: `src/styles/global.css`
- Photos: `public/img/<name>-800.webp` and `<name>-1600.webp` (pulled from the old WordPress site)
- Old WordPress addresses are redirected in `vercel.json`.

## Contact form
`/contact-us/` posts to the Cherry Rider Hub (`https://riderhub.redcherryevents.co.za/api/public/s2s-enquiry`), the same way
Tour de Addo does. Each enquiry is saved in the Rider Hub admin, emailed to team@redcherryevents.co.za and gets an auto-reply.
Ticking the news box adds the rider to Everlytic ("Enquiry - Sea to Sea" and "Motorbikes"); picking North or Both also logs
North interest. A new domain for this site must be added to the endpoint's allow-list in the Rider Hub (ask Lovable).
If the endpoint is down, the form opens the visitor's email app instead. No Formspree.

## Getting changes live (no Terminal needed)
Every commit to `main` deploys to seatosea.co.za automatically (Vercel, Red Cherry Events team). Any of these work:
- **Claude task with the repo attached:** start the task with `Red-Cherry-Events/sea-to-sea` selected and Claude pushes directly.
- **Claude in Chrome:** Claude commits through GitHub's web editor / "Add file → Upload files" in your signed-in Chrome.
- **By hand on github.com:** open a file → pencil icon → edit → Commit changes. Or "Add file → Upload files" for photos.
- **Terminal / GitHub Desktop:** still works if you prefer it.

A green tick next to a commit on GitHub means Vercel picked it up. No tick after a minute or two: in Vercel open the project →
Settings → Git, disconnect and reconnect `Red-Cherry-Events/sea-to-sea`, then Deployments → ⋯ → Create Deployment → `main`.

## Two editions
`src/data/site.ts` holds both rides under `editions`: `south` (7–11 May 2027, Trennerys and Kob Inn) and `north`
(Ocean View and The Haven). `next` is the one the home page leads with. To open entries, set `entriesOpen: true`
and `enterUrl` on that edition: every "Get on the list" button becomes "Enter your team".

## Still to confirm
- Entry links and opening dates for South 2027 and the next North (`entriesOpen`, `enterUrl`)
- North dates (`dates`, `datesLong`, `dayDates`): shows "Dates to be confirmed" while null
- South day distances, route write-up and hotel photos (Trennerys, Kob Inn)
- Race-pack deadline (`racePackCloses`) and South refund cut-off dates (`refunds`)
- Prices carried from the current site: Rider R12 650, Supporter R11 450, deposit R5 000
- Rider names for the testimonials
- Frutiger LT Pro web font licence (self-hosted from the design system)
