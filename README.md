# FardeDev — Store Header Prototype

An early React storefront interface focused on a reusable header. The current page renders a brand label, a Persian search placeholder, and account/cart icon buttons styled with Tailwind CSS.

**Stack:** React 19 · Vite 6 · Tailwind CSS 4

## Highlights

- Standalone header component rendered from `App.jsx`.
- Tailwind CSS 4 via the Vite plugin.
- Search-field layout with an embedded search icon.
- Account and shopping-cart icon buttons.
- Separate navigation data prepared in `src/data.js`.

## Run locally

Install Node.js and npm, then:

```sh
git clone https://github.com/itzhoman/FardeDev.git
cd FardeDev
npm ci
npm install react-icons
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173). 

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run lint` | Run the configured lint command |
| `npm run preview` | Preview the Vite production bundle |

No automated test script is currently defined in `package.json`.

## Project structure

| Path | Responsibility |
| --- | --- |
| `src/App.jsx` | Renders the Header component |
| `src/components/Header.jsx` | Brand, search field, and account/cart buttons |
| `src/data.js` | Navigation link definitions; not currently rendered |
| `src/main.jsx` | React entry point |
| `src/index.css` | Global styles and Tailwind setup |
| `vite.config.js` | React and Tailwind Vite plugins |

## Customize

- Update the brand and search placeholder in `Header.jsx`.
- Use `src/data.js` when adding navigation items.
- Connect search and the account/cart buttons to application state or routes.

## Current scope

This is a header prototype, not a completed store. Search and icon buttons have no handlers, and the navigation data is not used by the current header. `Header.jsx` imports `react-icons/fa`, but `react-icons` is missing from `package.json`; add it before running/building the app.

## Repository

[Source on GitHub](https://github.com/itzhoman/FardeDev) · [Hooman Hajimohamadi](https://github.com/itzhoman)

Documentation reviewed against source commit [`317af60`](https://github.com/itzhoman/FardeDev/commit/317af60750fad510af4cf32da7c7e0a5fd327a5c).
