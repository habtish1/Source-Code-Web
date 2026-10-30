# Source Code IT Solutions — website

Marketing site for [sourcecodeet.com](https://www.sourcecodeet.com). Next.js 14 (App Router), Tailwind CSS, deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

## Content lives in `components/data/`

| File | What it drives |
| --- | --- |
| `site.ts` | Name, phone, email, address, social links, primary nav |
| `services.ts` | The nine service lines → `/services` and `/services/[id]` |
| `work.ts` | Portfolio projects → `/work`, `/work/[slug]`, home showcase, logo marquee |
| `posts.ts` | Articles → `/blogs` and `/blogs/[slug]` |

Add an entry to the relevant array and the pages, sitemap and navigation update automatically.

## Contact form delivery

`app/api/contact/route.ts` delivers enquiries through whichever channels are configured in
Vercel → Project → Settings → Environment Variables:

| Variable | Purpose |
| --- | --- |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Post each enquiry to a Telegram chat or group |
| `RESEND_API_KEY` | Email via [Resend](https://resend.com). Optional `CONTACT_TO`, `CONTACT_FROM` |

With nothing configured the form falls back to opening the visitor's email client with the message pre-filled.

## Live chat

Tawk.to is loaded lazily from `components/providers/tawk.tsx`.
