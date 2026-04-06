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

#### Light Mode

**Brand (blue)** — titles, buttons, icons, cards: Primary `#0045F2` | Secondary 1 `#2462FF` | Secondary 2 `#4D7FFF` | Secondary 3 `#CCDBFF` | Secondary 4 `#2455A8`

**Accent Green** — category distinction: Primary `#80DA0A` | Secondary 1 `#98E236` | Secondary 2 `#AFED5E` | Secondary 3 `#D5F1B1` | Secondary 4 `#EDF0F5`

**Accent Orange** — category distinction: Primary `#F2A500` | Secondary 1 `#FFBA24` | Secondary 2 `#FFC64D` | Secondary 3 `#FFE5AD` | Secondary 4 `#6C4C08`

**Neutrals** — text (darker = more important), backgrounds, borders: Black `#000000` | Gray 1 `#333333` | Gray 2 `#374151` | Gray 3 `#4B5563` | Gray 4 `#6B7280` | Gray 5 `#9CA3AF` | Gray 6 `#D1D5DB` | Gray 7 `#F3F4F6` | White `#FFFFFF`

**State:** Info `#A0C3FF` | Success `#0FBD81` | Warning `#F5913D` | Error `#FC4C4D`

#### Dark Mode

Reduce saturation, increase brightness for comfort. Full values in [references/design-tokens.md](references/design-tokens.md).

**Brand (blue):** Primary `#2F60DA` | Secondary 1 `#527AE0` | Secondary 2 `#BECDF4` | Secondary 3 `#D9E3FC` | Secondary 4 `#EDF0F5`

**Accent Green:** Primary `#8BD22D` | Secondary 1 `#A3E052` | Secondary 2 `#D1F0A8` | Secondary 3 `#E3F6CB` | Secondary 4 `#EDF0F5`

**Accent Orange:** Primary `#E0A629` | Secondary 1 `#E5B54D` | Secondary 2 `#F5DBA3` | Secondary 3 `#F7ECD4` | Secondary 4 `#FFF7E5`

**Neutrals** — text, backgrounds, borders/stroke (描邊色): same gray scale as light mode (Black `#000000` → White `#FFFFFF`). In dark mode, lighter grays for text, darker grays for backgrounds.

**State:** Info `#A9C5F5` | Success `#11D491` | Warning `#E9A063` | Error `#ED5B5B`

#### WCAG Contrast Pairings

Light: `#0045F2` on `#FFFFFF` | `#4D7FFF` on `#FFFFFF` | `#2462FF` on `#CCDBFF` | `#2455A8` on `#CCDBFF`

Dark: `#2F60DA` on `#E5EBFA` | `#BECDF4` on `#2F60DA` | `#EDF0F5` on `#527AE0` | `#D9E3FC` on `#2F60DA`

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

**Concentric corners (同心圓角):** when nesting elements, inner radius = outer radius - padding. This ensures corners stay visually concentric. Example: outer 20px radius with 4px padding → inner 16px radius.

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
/* #374151, x:0 y:12, opacity 10%, blur 32 */
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
| Grid | 12 columns + 11 gutters, gutter 24px |
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
