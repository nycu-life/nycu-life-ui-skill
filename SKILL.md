---
name: nycu-life-ui
description: Build, restyle, or review NYCU LIFE websites, apps, UI components, brand pages, and presentation-aligned digital experiences. Use when a task involves NYCU LIFE branding, official fox logos, design tokens, responsive layouts, dark mode, campus product patterns, accessibility, Figma handoff, or consistency with the NYCU LIFE brand and Canva presentation system.
---

# NYCU LIFE UI

Create warm, clear, connected campus experiences with the official NYCU LIFE identity. Treat this skill as a workflow, not a color palette.

## Work in this order

1. Identify the surface, audience, primary task, states, and delivery framework.
2. Read only the references required for the task:
   - Brand story, tone, color roles, or typography: [references/brand-foundations.md](references/brand-foundations.md)
   - Logo selection, background treatment, sizing, or downloads: [references/logo-usage.md](references/logo-usage.md)
   - Tokens and implementation formats: [references/design-tokens.md](references/design-tokens.md)
   - Original nine-chapter palette, type, grid, button, spacing, radius, shadow, material, or icon specifications: [references/original-ui-guidelines.md](references/original-ui-guidelines.md)
   - Components, campus patterns, responsive behavior, or motion: [references/component-patterns.md](references/component-patterns.md)
   - Contrast, keyboard, focus, forms, or review work: [references/accessibility.md](references/accessibility.md)
   - Slides or Canva-aligned visual work: [references/presentation-guidelines.md](references/presentation-guidelines.md)
   - Figma node lookup: [references/figma-nodes.md](references/figma-nodes.md)
3. Use semantic tokens before primitive colors. Import generated artifacts instead of copying values by hand.
4. Select an official logo from [assets/brand/manifest.json](assets/brand/manifest.json). Never redraw it or recolor the source paths.
5. Build mobile-first behavior and complete every relevant state: rest, hover, pressed, focus-visible, disabled, loading, empty, error, and success.
6. Verify the result against the checklist below before delivery.

## Non-negotiable brand decisions

- Preserve official Logo Blue `#0922E7` for brand marks.
- Use Action Blue `#0045F2` for primary light-theme controls; do not replace Logo Blue with it inside logo files.
- Use green and orange for category distinction or focused emphasis, not general decoration.
- Prefer clear hierarchy, generous whitespace, rounded geometry, and direct language.
- Use the fox/book/C-tail/pencil story only when it helps users understand the identity; do not turn the mark into an unapproved mascot illustration.
- Use official SVG assets for web and product work. Use white logos only on sufficiently dark, uncluttered backgrounds.

## Implementation sources

Treat [references/tokens.json](references/tokens.json) as the canonical token source.

Treat [references/legacy-figma-palette.json](references/legacy-figma-palette.json) only as an original-design reference. If an original pairing conflicts with accessibility, use the accessible semantic token and document the adaptation.

- CSS: import [references/tokens.css](references/tokens.css)
- TypeScript: import [references/tokens.ts](references/tokens.ts)
- Tailwind: extend with [references/tailwind-preset.js](references/tailwind-preset.js)
- Website and brand assets: use [assets/brand/](assets/brand/)

Do not add a second handwritten token set. If a project needs an alias, map it to a semantic token and document the exception.

## Design defaults

- Build with a 4px spacing base and responsive composition, not fixed desktop canvases.
- Use `surface`, `text`, `border`, `action`, `focus`, `category`, `info`, `success`, `warning`, `danger`, and disabled semantic roles.
- Keep interaction targets at least 44 by 44 CSS pixels, even when the visible control is smaller.
- Use Noto Sans TC as the primary website and UI typeface, with system sans-serif and PingFang TC fallbacks. Reserve alternative display faces for separately approved campaign work.
- Keep motion between 140–220ms for ordinary feedback and respect `prefers-reduced-motion`.
- Separate visual type roles from HTML heading levels. Preserve a logical heading outline.

## Delivery checklist

- Use an official logo variant appropriate to the background and available width.
- Use canonical semantic tokens in both light and dark themes.
- Keep normal text contrast at 4.5:1 or better and large text/UI boundaries at 3:1 or better.
- Provide keyboard operation, visible focus, native disabled semantics, and accessible status announcements.
- Verify 320, 375, 768, 1024, and 1440px widths without horizontal overflow.
- Handle long Traditional Chinese text, English labels, 200% zoom, and reduced motion.
- Explain any intentional deviation from the system in the handoff.

Run `npm run check` in this skill repository after changing canonical tokens or the brand site.
