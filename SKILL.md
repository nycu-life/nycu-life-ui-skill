---
name: nycu-life-ui
description: NYCU LIFE UI Style Guidelines for frontend development. Use when building, styling, or reviewing UI components for the NYCU LIFE project. Enforces design tokens (colors, typography, spacing, shadows) and WCAG 2.1 AA accessibility standards from the official Figma design system.
---

# NYCU LIFE UI Style Guidelines

Official design system for NYCU LIFE frontend. All tokens and rules derive from the Figma source of truth.

**Standard:** WCAG 2.1 AA | **Version:** v1.0 (2026.02.14)

**Figma:** https://www.figma.com/design/eshYmSn9jeEEti38tO1GGU/NYCU-LIFE-UI-Style-Guidelines?node-id=2635-102&m=dev

## When to Use

- Building any NYCU LIFE frontend page or component
- Choosing colors, font sizes, spacing, or border radius
- Reviewing UI code for design consistency
- Setting up CSS variables or design tokens in a new project

## Quick Reference

### Colors

Full token list with dark mode: [references/design-tokens.md](references/design-tokens.md)

**Light brand (blue):** Primary `#0045F2` | Secondary 1 `#2462FF` | Secondary 2 `#4D7FFF` | Secondary 3 `#CCDBFF` | Secondary 4 `#2455A8`

**Neutrals:** Black `#000000` | Gray 1 `#333333` | Gray 2 `#374151` | Gray 3 `#4B5563` | Gray 4 `#6B7280` | Gray 5 `#9CA3AF` | Gray 6 `#D1D5DB` | Gray 7 `#F3F4F6` | White `#FFFFFF`

**State:** Info `#A0C3FF` | Success `#0FBD81` | Warning `#F5913D` | Error `#FC4C4D`

### Typography

System fonts: PingFang + SF Pro (Apple) / Source Han Sans + Roboto (Windows/Android).

| Level | Weight | Size | Usage |
|-------|--------|------|-------|
| H1 | Bold | 36px | Page title |
| H2 | Semibold | 28px | Section title |
| H3 | Medium | 20-24px | Subsection / content title |
| H4 (body) | Regular | 16px | Body text |
| H5 | Regular | 14px | Auxiliary / description |
| H6 | Regular | 12px | Label / copyright / smallest |

- **Line height:** 1.2x - 1.5x font size
- **Paragraph spacing:** 2x - 2.5x font size
- **Body text color:** `#333333` to `#666666` by hierarchy. Avoid pure black.
- **Auxiliary text:** `#9CA3AF` (Gray 5)

### Spacing (4px base system)

| Range | Usage |
|-------|-------|
| 8-16px | Small elements, related text, buttons |
| 24-32px | Small modules, grouped elements |
| 32-64px | Large modules, page sections |
| 64-96px | Page-to-module separation |

### Border Radius

Larger components use larger radius. Never exceed 1/4 of element height.

| Value | Usage |
|-------|-------|
| 8px | Buttons, inputs, small tags |
| 12px | Cards, small widgets |
| 16px | Large widgets |
| 20px | Rounded containers |

### Buttons

Variants: **Normal** (solid), **Icon+Text**, **Outline**.
States: Rest, Hover, Pressed, Disabled.

| Size | Height |
|------|--------|
| Small | 28-32px |
| Normal | 36-40px |
| Medium | 40-48px |

- Horizontal padding: 1.5x font size
- Vertical padding: 1x font size
- Icon-to-text gap: > 5px
- Icon size: 16-20px

### Shadow

```css
box-shadow: 0px 12px 32px rgba(55, 65, 81, 0.1);
```
No pure black shadows. Keep soft and coordinated.

### Material Effects

- **Frosted glass:** `backdrop-filter: blur(...)` with semi-transparent background
- **Liquid glass:** subtle transparency with border highlights

### Icons

- Source: [Google Material Symbols (Rounded)](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded)
- Default size: 24px, margin: 2px, stroke: 2px
- Styles: Outlined (default), Filled (alternative)
- **Style:** use rounded icons with soft corners, not sharp-edged icons
- **Weight:** icon weight should match accompanying text weight
- **Recommended sizes:** 16px, 24px, 32px, 48px, 64px

### Layout

| Property | Value |
|----------|-------|
| Page width | 1440px |
| Content max-width | 1200px |
| Above-the-fold | 900px |
| Grid | 12 columns, 24px gutter |
| Nav height | 60-100px |
| Footer min-height | 80px |
| Min tap target | 44px (WCAG) |

## Implementation Checklist

When building a component, verify:
1. Colors match design tokens (light AND dark mode)
2. Typography uses correct level (H1-H6)
3. Spacing follows 4px base system
4. Border radius follows size rules
5. Buttons have all 4 states
6. Color contrast meets WCAG 2.1 AA
7. Tap targets >= 44px

## Resources

| File | Purpose |
|------|---------|
| [references/tokens.css](references/tokens.css) | CSS custom properties — copy or `@import` into project |
| [references/tokens.ts](references/tokens.ts) | TypeScript token objects — `import { colors, typography }` |
| [references/tailwind-preset.js](references/tailwind-preset.js) | Tailwind CSS preset — `presets: [require('./tailwind-preset')]` |
| [references/design-tokens.md](references/design-tokens.md) | Human-readable full token documentation |
| [references/figma-nodes.md](references/figma-nodes.md) | Figma file key and node IDs for programmatic ground truth access |
