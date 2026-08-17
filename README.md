# Tony Zou profile

Next.js 12 portfolio site (Pages Router) for local development.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Contact form email sending is optional. Leave `SMTP_USER` and `SMTP_PASS` empty to browse the site; submitting the form will return a configuration error until those values are set. Use a Gmail [app password](https://support.google.com/accounts/answer/185833), not your account password.

## Project layout

- `pages/` — home page and `/api/contactme`
- `components/` — page sections and layout
- `data/` — profile copy, projects, skills, testimonials
- `lib/init-template.js` — jQuery template bootstrap used by the existing theme
- `public/` — images, vendor CSS/JS, resume PDF
