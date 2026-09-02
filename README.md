# Mesa Alta

Landing page for Mesa Alta, a proposed six-cabin lodge and bar in Chinchero, Peru.

## Run locally

Requires Node 22 or newer. If you use `nvm`, run `nvm use` first.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy with Vercel

1. Create a new GitHub repository and push this folder as the repository root.
2. In Vercel, select **Add New → Project** and import that GitHub repository.
3. Vercel will detect Next.js automatically. Keep the defaults:
   - Build command: `npm run build`
   - Install command: `npm install`
   - Node.js: 22.x
4. Deploy.

Copy `.env.example` to `.env.local` for local work. After Vercel gives you a final domain, set `NEXT_PUBLIC_SITE_URL` in **Vercel → Project Settings → Environment Variables** so social previews resolve to the correct domain. The waitlist form is a polished front-end state only; connect a form provider or API endpoint before collecting real addresses.

## Project structure

- `app/` — page routes, layout and styles
- `public/images/` — final visual assets used by the landing
- `app/invest/` — investor-facing route
- `app/not-found.tsx` — custom 404 page

## Before public launch

- Replace all `[CONFIRMAR]` placeholders with verified details.
- Connect the waitlist to your chosen email platform.
- Confirm image/photography rights and final project facts.
