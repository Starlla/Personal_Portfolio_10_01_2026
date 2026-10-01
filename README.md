# Claire Tong · Portfolio

Personal portfolio for Claire Tong, a frontend engineer in San Francisco. Built with React and Vite.

## Features

- **Hero card deck** with an illustrated avatar whose eye follows the cursor; tap to shuffle through project cards
- **Featured Work** with category filters and a slide-in case study for each project
- **Bento grid**: links, what I'm shipping, what roles I'm looking for, focus areas and a build log
- **Now / Off Screen / Playground**, including toggles and accent swatches that recolor the whole page
- **Digital Twin**: an embedded chat with my AI twin (Hugging Face Space), loaded on demand
- **Contact** with copy-to-clipboard email, résumé link, and a floating dock nav

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Editing content

Almost everything you'd want to change lives in [`src/data/content.js`](src/data/content.js):

- `PROFILE`: name, email, GitHub, LinkedIn, Instagram, résumé and digital-twin links
- `PROJECTS`: featured projects and their case studies
- `TWIN_ASKS`: sample questions shown in the Digital Twin section

The avatar image is `src/assets/claire-avatar.webp`. Colors and fonts are CSS tokens at the top of `src/styles.css`.

## Project structure

```
src/
  App.jsx                 page layout and footer
  main.jsx                entry point
  styles.css              design tokens and all styles
  data/content.js         profile, projects, twin questions
  assets/                 avatar image
  components/
    Hero.jsx  Deck.jsx  Avatar.jsx      hero, card deck, eye-tracking avatar
    FeaturedWork.jsx  ProjectArt.jsx  ProjectDrawer.jsx
    Bento.jsx  NowSection.jsx  DigitalTwin.jsx  Contact.jsx
    Dock.jsx  MailPopover.jsx  Icons.jsx
```

## Deploy

Works on Vercel or Netlify with zero config: import the repo, keep the Vite defaults (build `npm run build`, output `dist`).
