# Nieta Frontend Replica

SvelteKit frontend for the Nieta Atelier site replica.

## Stack

- SvelteKit
- Svelte 5
- Vite
- TypeScript

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Run the project checks:

```bash
npm run check
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Notes

- Localized routes live under `src/routes/[lang=lang]/`.
- Shared content and navigation data live in `src/lib/content.ts`.
- Global styles live in `src/app.css`.
