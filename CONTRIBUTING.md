# Contributing

Thanks for your interest in improving the Free HR Friendly Dev Portfolio. This project is MIT licensed and free to fork, rebrand, and ship as your own — but if you'd like to contribute back to the template itself, here's how.

## Getting started

```bash
npm install
npm run dev        # start the dev server at localhost:3000
```

Before opening a PR, make sure these all pass:

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
npm run build       # next build (static export)
```

## Project structure

```text
src/
  app/            # routes: home, projects, about, writing, contact
  components/     # reusable UI and page sections
  lib/data/       # typed content — projects, testimonials, clients, skills, etc.
public/           # static assets and placeholder media
```

Most content edits belong in `src/lib/data/*` rather than the components themselves — components render structured data, they shouldn't hold copy.

## Making changes

- Keep PRs focused. One feature or fix per PR is easier to review than a bundle of unrelated changes.
- Match the existing code style — TypeScript, Tailwind utility classes, and the design tokens already defined in `src/app/globals.css` (colors, spacing, motion easing). Avoid introducing a new one-off color or font when an existing token covers it.
- If you touch visual/UI code, actually run the dev server and look at the change in a browser (light and dark mode) before opening the PR — type-checking and linting don't catch a broken layout.
- Don't add dependencies for something a few lines of code can do.
- Write commit messages that explain *why*, not just *what*.

## Reporting issues

Open a GitHub issue with:

- what you expected to happen vs. what actually happened
- steps to reproduce
- your Node version and OS, if it looks environment-related

## Code of conduct

Be respectful and constructive. Assume good faith, disagree on substance not tone, and keep feedback focused on the code.
