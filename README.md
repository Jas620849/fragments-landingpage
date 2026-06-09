# Fragments Landing Page

Next.js marketing site for Fragment Trails.

## Prerequisites

- Node.js 20+
- npm (or yarn / pnpm)

## Local setup

1. Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd fragments-landingpage
npm install
```

2. Copy the environment template and fill in your values:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment variables

All public variables use the `NEXT_PUBLIC_` prefix. See `.env.example` for the full template.

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Canonical site URL, no trailing slash (e.g. `https://fragmenttrails.com`). Used for SEO, sitemap, and canonical links. |
| `NEXT_PUBLIC_API_BASE_URL` | Yes | Backend API base URL for the contact form. |
| `NEXT_PUBLIC_FRONTEND_APP_URL` | No | Main app URL for sign-up links. Defaults to `https://app.fragmenttrails.com`. |
| `NEXT_PUBLIC_FRONTEND_APP_BASE_URL` | No | Base URL for auth links when the app runs on a separate origin. Leave unset for same-origin `/auth/*` paths. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID. |
| `NEXT_PUBLIC_GTM_ID` | No | Google Tag Manager container ID. |
| `NEXT_PUBLIC_CLARITY_ID` | No | Microsoft Clarity project ID. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification code. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | No | Bing Webmaster Tools verification code. |
| `NEXT_PUBLIC_HOMEPAGE_DEMO_VIDEO_URL` | No | Demo video URL shown on the homepage. |
| `NEXT_PUBLIC_HOMEPAGE_DEMO_VIDEO_TITLE` | No | Title for the demo video section. |
| `NEXT_PUBLIC_WEB_VITALS_ENDPOINT` | No | Optional endpoint to POST web vitals metrics. |

For local development, `.env.local` is loaded automatically and is gitignored.

## Build and run locally

```bash
npm run build
npm run start
```

Lint the project:

```bash
npm run lint
```

## Deploy to Vercel

This project includes a `vercel.json` with security headers and cache rules. Vercel is the recommended deployment target.

1. Import the repository in [Vercel](https://vercel.com/new).
2. Set the framework preset to **Next.js** (auto-detected).
3. Add all required environment variables from the table above under **Settings → Environment Variables**.
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://fragmenttrails.com`).
5. Deploy.

Vercel runs `npm run build` and serves the app automatically. Each push to the connected branch triggers a new deployment.

### Post-deploy checks

- Confirm the site loads at your production URL.
- Verify `/sitemap.xml` and `/robots.txt` are reachable.
- Test the contact form against your production API (`NEXT_PUBLIC_API_BASE_URL`).
- Confirm sign-up links point to the correct app URL.

## Deploy elsewhere

Any Node.js host that supports Next.js 15 works:

```bash
npm install
npm run build
npm run start
```

Set the same environment variables in your hosting provider's dashboard. The app listens on port `3000` by default; configure `PORT` if your platform requires it.
