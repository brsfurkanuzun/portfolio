# Portfolio — Furkan Uzun

Interactive resume built with React, Vite, Swiper, and GSAP.

## Local development

```bash
npm install
npm run dev      # or: npm start
```

Open [http://localhost:5173/](http://localhost:5173/)

## Netlify deploy

1. Push the repo to GitHub.
2. In Netlify: **Add new site → Import from Git** → select this repo.
3. Build settings are read from `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. The site is served at the site root (`/`), e.g. `https://your-site.netlify.app/`.

No subpath (`/resume`, `/portfolio`) is required.

## PowerShell

```powershell
Set-Location path\to\portfolio; npm install
```
