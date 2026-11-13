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
Create a free form at formspree.io using team@redcherryevents.co.za, then in Vercel add the
environment variable `PUBLIC_FORMSPREE_ID` (the code after /f/) and redeploy.
Until then, the form opens the visitor's email app.

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
