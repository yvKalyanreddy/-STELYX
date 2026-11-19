# STELYX — minimal starter

A minimal Next.js App Router + TypeScript starter for the STELYX scrapbook-style website.

## Requirements

- Node.js 20.9 or newer
- npm
- VS Code (recommended)

## Run locally

1. Extract the ZIP.
2. Open the extracted `STELYX` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open http://localhost:3000 in your browser.

Stop the development server with `Ctrl + C`.

## Useful commands

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Where to edit

- `src/app/page.tsx` — homepage sections and content
- `src/app/globals.css` — visual styling and responsive rules
- `src/app/layout.tsx` — site metadata and root layout
- `public/` — place generated images and textures here

## Asset folders

Create these folders as you generate assets:

```text
public/
  textures/
    paper/
    folds/
    grain/
  collage/
    hero/
    journey/
    services/
    stats/
    footer/
  illustrations/
  fonts/
```

The current homepage uses CSS placeholders so it runs before your generated images are ready. We will replace these placeholders with your real collage assets as we build each section.

## Notes

- The visual styling is a starting scaffold, not a finished recreation of the reference.
- Google Fonts are currently imported in CSS for convenience. We can move them to `next/font` during the performance pass.
- Contact links currently use `mailto:hello@stelyx.com` as a placeholder. Replace this with your actual contact address later.
