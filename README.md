# JharERA Portal UI Revamp

An end-to-end prototype for the Jharkhand Real Estate Regulatory Authority
portal, backed by a small mock Node/Express API. All data is synthetic — no
real government system is connected.

## Run locally

One process — the Express server serves the frontend, its assets, and the
API all from the same origin.

```sh
cd server
npm install   # first time only
npm start
```

Then open [http://localhost:5175](http://localhost:5175). Data is kept in
`server/data.json`, written on every filing/registration so it survives a
restart. Delete that file to reset the demo back to its seed data.

The frontend can technically still be opened from a plain static server (e.g.
`python3 -m http.server`) — it falls back to its built-in seed data with no
backend reachable — but filing a complaint, tracking a case, signing in, and
registering as a promoter or agent all need the Express server to actually
work, so running it that way is not recommended.

## Routes

The portal uses real, clean URLs (no `#`) — e.g. `/projects`, `/projects/p1`,
`/complaints/new`, `/complaints/track`, `/agents`, `/orders`, `/dashboard`.
Direct navigation, bookmarking, and refreshing on any of these paths all work:
the server falls back to the app shell for any path that isn't an API route
or a known static asset, and the app's own router picks the right screen from
`location.pathname`.

## Deploying (frontend and backend on separate hosts)

Netlify (and most static hosts) only serve static files — they don't run
`node server.js` as a persistent process. If you deploy the frontend to a
static host, you need to deploy `server/` separately to somewhere that runs a
real Node process (e.g. [Render](https://render.com) or
[Railway](https://railway.app), both have free tiers), then point the
frontend at it:

1. **Backend**: create a new Node web service from this repo, with root
   directory `server`, build command `npm install`, start command
   `npm start`. Note the URL it gives you (e.g.
   `https://jharera-mock-backend.onrender.com`) — data still persists to
   `data.json` there, though most of these platforms use ephemeral disks, so
   don't rely on it surviving a redeploy in production the way it does
   locally.
2. **Frontend**: edit `config.js` at the project root —
   ```js
   window.JHARERA_API_BASE = 'https://jharera-mock-backend.onrender.com/api';
   ```
   Commit that change, then deploy the repo root to Netlify as a static site
   (no build command needed). The `_redirects` file already in the repo
   makes Netlify serve the app shell for any client-side route (`/dashboard`,
   `/complaints/new`, etc.) instead of 404ing on direct navigation or refresh.

Without step 2, the frontend still renders (it falls back to built-in seed
data) but every feature that talks to the backend — sign-in, filing a
complaint, tracking, promoter/agent registration — will silently fail,
since it has nowhere to send the request.

If you'd rather not manage two services, run everything as the single
Express process described above and deploy *that* wherever you can run a
persistent Node server — `config.js` can stay at its default in that case.

## Included flows

- Project and agent search, including registration status and filtering, served from the mock API
- Detailed project verification pages
- Five-step complaint filing flow — files a real complaint against the mock backend, returns a generated case number, and that case is immediately trackable and shows up on the citizen's dashboard and the officer's queue
- Complaint tracking by case number, including a "not found" state for unknown numbers
- Sign-in (mock OTP — any value is accepted), citizen dashboard backed by the signed-in device's filed complaints
- Promoter project registration (Form A) and agent registration, both posting to the backend and returning a reference number
- Officer view showing a live case queue (seeded cases plus anything filed through the site)
- Accessibility controls: Hindi/English, text size, contrast mode, plain-language mode, and accent themes

## Mock backend

`server/` is a small Express app (`server/server.js`) seeded from
`server/seed.js`. Every complaint, promoter application and agent application
filed through the site is persisted to `server/data.json`. Nothing here talks
to any real government system, payment gateway or SMS/OTP provider — payment
references, OTPs and registration numbers are all fabricated.

The branding assets in `assets/official/` are public images sourced from the
official JharERA website and are used here only for this prototype.
