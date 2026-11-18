# CaptaEarn — Demo Landing Page

Static demo landing page for **CaptaEarn** (solve captcha, earn USD).
White + light blue + blue theme, Bootstrap 5, Font Awesome 6, Icons8 3D icons.

## What's on the page

- Hero with live-rotating captcha mock + real app rates ($0.002/solve free, $0.004 VIP)
- How it works (3 steps), trust strip, earnings tables
- **Interactive demo captcha widget** — play money only, clearly labeled
- Earnings calculator (slider + VIP toggle, estimates from the real rates)
- VIP section ($9.99 / 30 days, 2x + 7% referral unlock)
- Referral section (7% lifetime, VIP-gated) with copy-link demo
- Withdrawals (USDT BSC, PayPal, Bank Card), support banner, FAQ, CTA

## Demo vs real app

This page is a **preview only**. The demo captcha pays play money and the
signup/CTA buttons are placeholders. The full CaptaEarn app (PHP + MySQL,
cPanel-ready) has real accounts, server-verified captchas, real balances
and withdrawals.

## Deploy (GitHub Pages)

Push this folder to a public repo (e.g. `captaearn`), then enable Pages:
repo Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`.
Site appears at `https://<user>.github.io/captaearn/`.

## Files

- `index.html` — the page
- `styles.css` — theme
- `script.js` — demo captcha, calculator, copy-link (client-side only)
- `ATTRIBUTION.md` — icon credits
