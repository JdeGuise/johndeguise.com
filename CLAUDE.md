# CLAUDE.md

Hey Claude. This is my personal site and the home base for my freelance work, so the
writing and the code both matter to me. Here's how I like things done. Treat this as a
starting point, we'll keep adding to it as we go.

## Voice and writing

- **No em-dashes. Ever.** I don't use them. Rewrite with a comma, a colon, parentheses,
  or just split it into two sentences. If you find yourself reaching for a "—", that's the
  signal to restructure the sentence instead.
- Keep it casual but sharp. Write like I'm talking to a smart friend, not filling out a
  form. Contractions are good. Corporate buzzwords and hype are not.
- Understated beats salesy. The whole brand is "make complicated things feel simple," so
  the copy should read calm and confident, never like a billboard.
- Say the honest thing. If something's overhyped (looking at you, half the AI stuff), I'd
  rather call it out than oversell it.

## Content

- The words people actually read live in the JSON data files under
  `vite-project/src/data/` (about.json, jobs.json, services.json). Edit copy there, not
  hardcoded inside components.
- If you change the pitch on the page, keep the `<title>` and the OG/Twitter meta in
  `vite-project/index.html` in sync so link previews and search results say the same thing.

## Code

- Match the style of the file you're already in. JSX is 2 spaces, the CSS files use tabs,
  that kind of thing. Don't reformat stuff you weren't asked to touch.
- Components are small and data-driven (see About, Services, Job). Follow that pattern
  instead of inventing a new one.
- Colors and spacing come from the CSS variables in `index.css` (--bg, --text, --link, and
  friends). Use those so light and dark mode both keep working. Don't hardcode hex values.
- Keep lint clean. Run `yarn lint` in `vite-project/` before you call something done. It
  runs with --max-warnings 0, so warnings count as failures.
- Leave node_modules, dist, and the /artie page alone unless I specifically ask.
