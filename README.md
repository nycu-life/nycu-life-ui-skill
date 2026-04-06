# NYCU LIFE UI Skill

[NYCU LIFE UI Style Guidelines](https://www.figma.com/design/eshYmSn9jeEEti38tO1GGU/NYCU-LIFE-UI-Style-Guidelines?node-id=2635-102&m=dev) as an AI agent skill. Colors, typography, spacing, components — WCAG 2.1 AA.

## Install

### All Agents (Recommended)

Install via [`npx skills`](https://skills.sh) — installs to `~/.agents/skills/` and creates symlinks for all detected agents:

```bash
npx skills add nycu-life/nycu-life-ui-skill
```

Supports Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot, and [40+ other agents](https://skills.sh).

### Per-Agent Manual Install

<details>
<summary><strong>Claude Code</strong></summary>

Skills directory: `~/.claude/skills/` (global) or `.claude/skills/` (project)

```bash
git clone https://github.com/nycu-life/nycu-life-ui-skill.git ~/.agents/skills/nycu-life-ui
ln -s ~/.agents/skills/nycu-life-ui ~/.claude/skills/nycu-life-ui
```

Claude Code reads `SKILL.md` frontmatter (`name` + `description`) to decide when to trigger the skill. The body is loaded on demand. No additional config needed.
</details>

<details>
<summary><strong>Codex (OpenAI)</strong></summary>

Skills directory: `~/.codex/skills/` (global) or `.agents/skills/` (project)

```bash
git clone https://github.com/nycu-life/nycu-life-ui-skill.git ~/.codex/skills/nycu-life-ui
```

Codex reads `SKILL.md` for skill content and optionally `agents/openai.yaml` for UI metadata (display name, default prompt). Both are included in this repo.
</details>

<details>
<summary><strong>Cursor</strong></summary>

Skills directory: `~/.cursor/skills/` (global) or `.agents/skills/` (project)

```bash
# Global
git clone https://github.com/nycu-life/nycu-life-ui-skill.git ~/.agents/skills/nycu-life-ui
ln -s ~/.agents/skills/nycu-life-ui ~/.cursor/skills/nycu-life-ui

# Project-level
git clone https://github.com/nycu-life/nycu-life-ui-skill.git .agents/skills/nycu-life-ui
```

Cursor reads `SKILL.md` from `.agents/skills/` (project) or `~/.cursor/skills/` (global). This is separate from Cursor's native `.cursor/rules/*.mdc` system.
</details>

<details>
<summary><strong>Gemini CLI</strong></summary>

Skills directory: `~/.gemini/skills/` + `~/.agents/skills/` (global) or `.gemini/skills/` + `.agents/skills/` (project)

```bash
git clone https://github.com/nycu-life/nycu-life-ui-skill.git ~/.agents/skills/nycu-life-ui
```

Gemini CLI natively reads from both `~/.agents/skills/` and `~/.gemini/skills/` with workspace skills taking precedence over global.
</details>

<details>
<summary><strong>Other Agents</strong></summary>

Any agent that reads `SKILL.md` files can use this skill:

```bash
git clone https://github.com/nycu-life/nycu-life-ui-skill.git <agent-skills-dir>/nycu-life-ui
```
</details>

## What's Included

| File | Description |
|------|-------------|
| `SKILL.md` | Core skill — quick reference for colors, typography, spacing, buttons, layout |
| `references/tokens.css` | CSS custom properties (light + dark mode), ready to `@import` |
| `references/tokens.ts` | TypeScript token objects, ready to `import` |
| `references/tailwind-preset.js` | Tailwind CSS preset, ready for `presets: [...]` |
| `references/design-tokens.md` | Full human-readable token documentation |
| `references/figma-nodes.md` | Figma node IDs for programmatic access |
| `agents/openai.yaml` | Codex UI metadata (display name, default prompt) |
| `index.html` | Visual spec page — open in browser to preview all design tokens |

## Design System Overview

- **Colors:** Brand blue + green/orange accents, 9-step neutral scale, 4 state colors (light & dark)
- **Typography:** 6-level type scale (H1 36px Bold → H6 12px Regular), system fonts
- **Spacing:** 4px base grid (xs/sm/md/lg/xl)
- **Border Radius:** 4-step scale (8/12/16/20px)
- **Buttons:** 3 variants x 4 states x 3 sizes
- **Icons:** Google Material Symbols (Rounded), 24px default
- **Layout:** 1200px content, 12-col grid, 24px gutter
- **Accessibility:** WCAG 2.1 AA, verified contrast pairings, 44px min tap target

## Source of Truth

All tokens derive from the official Figma file. When in doubt, reference the Figma directly via the node IDs in `references/figma-nodes.md`.

## License

MIT
