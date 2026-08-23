# JharERA Portal UI Revamp

An end-to-end, mock-data prototype for the Jharkhand Real Estate Regulatory Authority portal.

## Run locally

From this folder, start any static server. For example:

```sh
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Routes

The portal uses static-host-safe hash routing. For example, use `#/projects`,
`#/projects/p1`, `#/complaints/new`, `#/complaints/track`, `#/agents`,
`#/orders`, or `#/dashboard` after the local URL.

## Included flows

- Project and agent search, including registration status and filtering
- Detailed project verification pages
- Four-step complaint filing flow and complaint tracking
- Promoter registration, sign-in/dashboard, officer view, orders, acts, and forms
- Accessibility controls: Hindi/English, text size, contrast mode, plain-language mode, and accent themes

All records and outcomes are mock data only; no live government systems are connected.
The branding assets in `assets/official/` are public images sourced from the
official JharERA website and are used here only for this prototype.
