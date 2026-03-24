---
name: duplicate-app
description: Duplicate this project to create a new agency site with a different branding
argument-hint: "<new-agency-name>"
---

# Duplicate this project for a new agency

Clone this entire project into a sibling directory to create a new agency website. The user provides the new agency name via `$ARGUMENTS` (e.g. `mon-agence-reims`).

## Prerequisites

Before starting, confirm with the user:
1. The **new agency name** — must be lowercase, kebab-case (e.g. `agence-dupont`)
2. Ask if they have agency info: agency name, city, phone, email, address, logo, team photo

Parse `$ARGUMENTS` to extract the name. If empty, ask for it.

## Step 1: Copy the project

```bash
cp -r . ../<new-agency-name>
```

Remove git history and node_modules from the copy:

```bash
rm -rf ../<new-agency-name>/.git ../<new-agency-name>/node_modules
```

## Step 2: Initialize a fresh git repo

```bash
cd ../<new-agency-name> && git init && git add -A && git commit -m "Initial commit: cloned from immo-vend-et-bien-clone"
```

## Step 3: Update package.json

In `../<new-agency-name>/package.json`, change the `name` field:
```json
"name": "<new-agency-name>"
```

## Step 4: Update layout metadata

In `app/layout.tsx`, update:
- `title` — new agency name and city
- `description` — adapted to the new agency

## Step 5: Install dependencies

```bash
cd ../<new-agency-name> && npm install
```

## Step 6: Verify the build

```bash
cd ../<new-agency-name> && npm run build
```

All pages must generate without errors. If the build fails, fix the issue before continuing.

## Step 7: Update .servers

If the new agency will be deployed on a different server, add a new entry to `../<new-agency-name>/.servers`:

```
# <Agency Display Name>
<PREFIX>_HOST=<IP>
<PREFIX>_USER=root
<PREFIX>_PASSWORD=<PASSWORD>
<PREFIX>_PORT=22
```

Ask the user for the server details. Update the `deploy-app` skill accordingly.

## Step 8: Remind the user of remaining customization

After the clone + build is successful, remind the user they need to customize these files with the agency's real content:

**Layout & metadata:**
- `app/layout.tsx` — title, description, OpenGraph metadata, favicon

**Components to customize:**
- `components/Navbar/` — logo, navigation links
- `components/Footer/` — logo, phone, email, address, copyright
- `components/HeroSection/` — headline, CTA text, background
- `components/TestimonialsSection/` — client reviews
- `components/TeamSection/` — team photo, agency presentation
- `components/StatsBar/` — key numbers
- `components/FAQSection/` — FAQ content

**Legal pages (if they exist):**
- `app/mentions-legales/` — company name, address, publication director
- `app/cookies/` — agency name
- `app/donnees-personnelles/` — agency name, contact email

**Colors** (`app/globals.css`):
- Update CSS custom properties / Tailwind theme to match the new agency's branding

**Images:**
- Logo → `public/` (update references in Navbar and Footer)
- Team photo → `public/images/`
- Favicon → `public/favicon.ico`, `app/favicon.ico`

## Important notes

- The new project is created as a **sibling directory** (`../<new-agency-name>/`), not inside this project.
- Do NOT modify the source project.
- If the user provides agency info (name, colors, content), proceed to customize the files listed in Step 8 right away.
- The `next.config.ts` rewrites/proxy to immovendetbien.com should be removed or updated for the new agency.
