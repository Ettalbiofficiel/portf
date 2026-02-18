# StarlinkGlobal Marketing Website

Production-ready Next.js 14 marketing site for **starlinkglobal.ai** focused on lead conversion for Starlink-based connectivity solutions.

## Stack
- Next.js 14 (App Router) + TypeScript
- TailwindCSS
- shadcn-style UI components
- lucide-react icons
- react-hook-form + zod validation
- framer-motion animations

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Build
```bash
npm run build
npm run start
```

## Content editing
- Main page content: `app/page.tsx`
- Solutions/plans/devices/industries/about/contact/legal pages: `app/*/page.tsx`
- Shared nav and footer: `components/site-header.tsx`, `components/site-footer.tsx`
- Plan list and navigation data: `lib/site-data.ts`
- Placeholder images: `public/images/*`

## Form integration
Contact form currently validates and logs payload in the browser console.
Update `onSubmit` in `components/contact-form.tsx` to call your Email API / CRM webhook.

## Deploy on Vercel
1. Push repo to GitHub.
2. Import project in Vercel.
3. Framework preset: Next.js (auto-detected).
4. Deploy.

No special environment variables are required for this static version.
