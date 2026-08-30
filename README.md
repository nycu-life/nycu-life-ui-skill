# NYCU LIFE UI Skill

The NYCU LIFE brand system packaged as an agent skill, a generated token library, and a bilingual-ready brand website.

The system connects the bamboo fox identity with production UI decisions: logo selection, semantic color roles, typography, campus patterns, responsive behavior, dark mode, and WCAG 2.2 AA review.

## Use the Skill

```bash
npx skills add nycu-life/nycu-life-ui-skill
```

Example prompt:

```text
Use $nycu-life-ui to brand and review this event page for mobile, dark mode, and accessibility.
```

## Open the Brand Website

Open `index.html` directly, or serve the repository with any static server. The homepage covers the brand story, official logo downloads, foundations, component examples, and Skill installation. The complete nine-chapter specification lives at `guidelines/index.html`.

## Work with Tokens

`references/tokens.json` is the only editable token source. Generated artifacts are:

- `references/tokens.css`
- `references/tokens.ts`
- `references/tailwind-preset.js`

After changing the canonical file, run:

```bash
npm run check
```

This regenerates all formats, verifies normal-text contrast pairs, and builds the static site into `dist/`.

## Repository Map

| Path | Purpose |
|---|---|
| `SKILL.md` | Task-oriented workflow for agents |
| `agents/openai.yaml` | Skill UI metadata and official brand assets |
| `assets/brand/` | Official web-ready SVG logo set and manifest |
| `references/` | Brand, logo, UI, accessibility, presentation, and Figma guidance |
| `scripts/` | Token generation, validation, and static site build |
| `site/` | Brand website styles and behavior |
| `guidelines/` | Complete nine-chapter visual UI guidelines |
| `index.html` | Brand website entry point |

## Brand Sources

- [NYCU LIFE UI Style Guidelines on Figma](https://www.figma.com/design/eshYmSn9jeEEti38tO1GGU/NYCU-LIFE-UI-Style-Guidelines?node-id=2635-102&m=dev)
- [NYCU LIFE Canva presentation link](https://canva.link/0waapqiiuxdixt7) — sign-in may be required
- Official NYCU LIFE logo SVG package supplied by the project owner
- January 2026 brand vision proposal supplied by the project owner

## License

Code and Skill instructions are MIT licensed. Brand asset usage remains subject to NYCU LIFE brand ownership and approval.
