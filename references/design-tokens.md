# NYCU LIFE Design Tokens

Complete token definitions from the [Figma source of truth](https://www.figma.com/design/eshYmSn9jeEEti38tO1GGU/NYCU-LIFE-UI-Style-Guidelines?node-id=2635-102&m=dev).

## Table of Contents

- [Color Tokens — Light Mode](#color-tokens--light-mode)
- [Color Tokens — Dark Mode](#color-tokens--dark-mode)
- [WCAG Contrast Pairings](#wcag-contrast-pairings)
- [Typography Tokens](#typography-tokens)
- [Spacing Tokens](#spacing-tokens)
- [Border Radius Tokens](#border-radius-tokens)
- [Shadow Tokens](#shadow-tokens)
- [Button Tokens](#button-tokens)
- [Layout Tokens](#layout-tokens)
- [Icon Tokens](#icon-tokens)
- [CSS Custom Properties Template](#css-custom-properties-template)

---

## Color Tokens — Light Mode

### Brand Colors (Blue)

Used for: titles, buttons, icons, card blocks.

| Token | Hex | RGB |
|-------|-----|-----|
| `--color-brand-primary` | `#0045F2` | `0, 69, 242` |
| `--color-brand-secondary-1` | `#2462FF` | `36, 98, 255` |
| `--color-brand-secondary-2` | `#4D7FFF` | `77, 127, 255` |
| `--color-brand-secondary-3` | `#CCDBFF` | `204, 219, 255` |
| `--color-brand-secondary-4` | `#2455A8` | `36, 85, 168` |

### Accent Colors — Green

Used for: category distinction (auxiliary).

| Token | Hex | RGB |
|-------|-----|-----|
| `--color-accent-green-primary` | `#80DA0A` | `128, 218, 10` |
| `--color-accent-green-secondary-1` | `#98E236` | `152, 226, 54` |
| `--color-accent-green-secondary-2` | `#AFED5E` | `175, 237, 94` |
| `--color-accent-green-secondary-3` | `#D5F1B1` | `213, 241, 177` |
| `--color-accent-green-secondary-4` | `#EDF0F5` | `237, 240, 245` |

### Accent Colors — Orange/Gold

Used for: category distinction (auxiliary).

| Token | Hex | RGB |
|-------|-----|-----|
| `--color-accent-orange-primary` | `#F2A500` | `242, 165, 0` |
| `--color-accent-orange-secondary-1` | `#FFBA24` | `255, 186, 36` |
| `--color-accent-orange-secondary-2` | `#FFC64D` | `255, 198, 77` |
| `--color-accent-orange-secondary-3` | `#FFE5AD` | `255, 229, 173` |
| `--color-accent-orange-secondary-4` | `#6C4C08` | `108, 76, 8` |

### Neutral Colors

Used for: text (importance correlates with darkness), backgrounds, borders/stroke (描邊色). In light mode, use dark grays (Black–Gray 4) for borders; in dark mode, use light grays (Gray 5–White).

| Token | Hex | RGB |
|-------|-----|-----|
| `--color-black` | `#000000` | `0, 0, 0` |
| `--color-gray-1` | `#333333` | `51, 51, 51` |
| `--color-gray-2` | `#374151` | `55, 65, 81` |
| `--color-gray-3` | `#4B5563` | `75, 85, 99` |
| `--color-gray-4` | `#6B7280` | `107, 114, 128` |
| `--color-gray-5` | `#9CA3AF` | `156, 163, 175` |
| `--color-gray-6` | `#D1D5DB` | `209, 213, 219` |
| `--color-gray-7` | `#F3F4F6` | `243, 244, 246` |
| `--color-white` | `#FFFFFF` | `255, 255, 255` |

### State Colors

| Token | Hex | RGB |
|-------|-----|-----|
| `--color-info` | `#A0C3FF` | `160, 195, 255` |
| `--color-success` | `#0FBD81` | `15, 189, 129` |
| `--color-warning` | `#F5913D` | `245, 145, 61` |
| `--color-error` | `#FC4C4D` | `252, 76, 77` |

---

## Color Tokens — Dark Mode

Design principle: reduce overall saturation, moderately increase brightness for comfortable visuals.

### Brand Colors (Blue) — Dark

| Token | Hex | RGB |
|-------|-----|-----|
| `--color-brand-primary` | `#2F60DA` | `47, 96, 218` |
| `--color-brand-secondary-1` | `#527AE0` | `82, 122, 224` |
| `--color-brand-secondary-2` | `#BECDF4` | `190, 205, 244` |
| `--color-brand-secondary-3` | `#D9E3FC` | `217, 227, 252` |
| `--color-brand-secondary-4` | `#EDF0F5` | `237, 240, 245` |

### Accent Colors — Green — Dark

| Token | Hex | RGB |
|-------|-----|-----|
| `--color-accent-green-primary` | `#8BD22D` | `139, 210, 45` |
| `--color-accent-green-secondary-1` | `#A3E052` | `163, 224, 82` |
| `--color-accent-green-secondary-2` | `#D1F0A8` | `209, 240, 168` |
| `--color-accent-green-secondary-3` | `#E3F6CB` | `227, 246, 203` |
| `--color-accent-green-secondary-4` | `#EDF0F5` | `237, 240, 245` |

### Accent Colors — Orange/Gold — Dark

| Token | Hex | RGB |
|-------|-----|-----|
| `--color-accent-orange-primary` | `#E0A629` | `224, 166, 41` |
| `--color-accent-orange-secondary-1` | `#E5B54D` | `229, 181, 77` |
| `--color-accent-orange-secondary-2` | `#F5DBA3` | `245, 219, 163` |
| `--color-accent-orange-secondary-3` | `#F7ECD4` | `247, 236, 212` |
| `--color-accent-orange-secondary-4` | `#FFF7E5` | `255, 247, 229` |

### Neutral Colors — Dark

Same scale as light mode (inverted usage — lighter values for text on dark backgrounds). Borders/stroke use lighter grays (Gray 5–White) on dark backgrounds.

| Token | Hex |
|-------|-----|
| `--color-black` | `#000000` |
| `--color-gray-1` | `#333333` |
| `--color-gray-2` | `#374151` |
| `--color-gray-3` | `#4B5563` |
| `--color-gray-4` | `#6B7280` |
| `--color-gray-5` | `#9CA3AF` |
| `--color-gray-6` | `#D1D5DB` |
| `--color-gray-7` | `#F3F4F6` |
| `--color-white` | `#FFFFFF` |

### State Colors — Dark

| Token | Hex | RGB |
|-------|-----|-----|
| `--color-info` | `#A9C5F5` | `169, 197, 245` |
| `--color-success` | `#11D491` | `17, 212, 145` |
| `--color-warning` | `#E9A063` | `233, 160, 99` |
| `--color-error` | `#ED5B5B` | `237, 91, 91` |

---

## WCAG Contrast Pairings

Verified foreground/background combinations meeting WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text).

### Light Mode

| Background | Foreground | Usage |
|------------|-----------|-------|
| `#0045F2` (Primary) | `#FFFFFF` (White) | Primary buttons, badges |
| `#4D7FFF` (Secondary 2) | `#FFFFFF` (White) | Secondary buttons |
| `#CCDBFF` (Secondary 3) | `#2462FF` (Secondary 1) | Light badges, tags |
| `#CCDBFF` (Secondary 3) | `#2455A8` (Secondary 4) | Light badges, tags |

### Dark Mode

| Background | Foreground | Usage |
|------------|-----------|-------|
| `#E5EBFA` (Secondary 3) | `#2F60DA` (Primary) | Light surfaces |
| `#2F60DA` (Primary) | `#BECDF4` (Secondary 2) | Secondary 2 on Primary |
| `#527AE0` (Secondary 1) | `#EDF0F5` (Secondary 4) | Secondary buttons |
| `#2F60DA` (Primary) | `#D9E3FC` (Secondary 3) | Primary buttons |

Brand colors other than blue can also reference these pairing patterns.

---

## Typography Tokens

### Font Stack

```css
--font-family-sans: system-ui, -apple-system, "PingFang TC", "PingFang SC",
  "SF Pro Text", "Source Han Sans TC", "Noto Sans CJK TC",
  "Roboto", "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-h1` | 36px | 700 (Bold) | 1.2-1.5em | Page title |
| `--text-h2` | 28px | 600 (Semibold) | 1.2-1.5em | Section title |
| `--text-h3` | 20-24px | 500 (Medium) | 1.2-1.5em | Subsection title |
| `--text-body` | 16px | 400 (Regular) | 1.2-1.5em | Body text |
| `--text-aux` | 14px | 400 (Regular) | 1.2-1.5em | Auxiliary text |
| `--text-small` | 12px | 400 (Regular) | 1.2-1.5em | Labels, copyright |

### Text Color Rules

- Body / headings / buttons: `#333333` (Gray 1) — deep gray
- Body text by hierarchy: `#333333` to `#666666`
- Annotations / auxiliary: `#9CA3AF` (Gray 5) — light gray
- Avoid pure black (`#000000`) for text

---

## Spacing Tokens

Base unit: 4px. All spacing values should be multiples of 4.

| Token | Range | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Minimal gap |
| `--space-sm` | 8-16px | Small elements (buttons), closely related text |
| `--space-md` | 24-32px | Small modules, grouped elements |
| `--space-lg` | 32-64px | Large modules, page sections |
| `--space-xl` | 64-96px | Page-to-module separation |

---

## Border Radius Tokens

Rule: larger components use larger radius. Never exceed 1/4 of element height.

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Buttons, input fields, small tags |
| `--radius-md` | 12px | Cards, small widgets |
| `--radius-lg` | 16px | Large widgets |
| `--radius-xl` | 20px | Rounded containers |

---

## Shadow Tokens

Do not use pure black. Keep shadows soft and tonally coordinated.

| Token | Value |
|-------|-------|
| `--shadow-card` | `0px 12px 32px rgba(55, 65, 81, 0.1)` |

Shadow color: `#374151` (Gray 2) at 10% opacity.

---

## Button Tokens

### Sizes

| Token | Height | Horizontal Padding | Vertical Padding |
|-------|--------|-------------------|-----------------|
| `--btn-sm` | 28-32px | 1.5x font size | 1x font size |
| `--btn-md` | 36-40px | 1.5x font size | 1x font size |
| `--btn-lg` | 40-48px | 1.5x font size | 1x font size |

### Variants

- **Normal (solid):** filled background, white text
- **Icon+Text:** icon (16-20px) on left, gap > 5px
- **Outline:** border only, transparent background

### States

- **Rest:** default appearance
- **Hover:** visual feedback on cursor hover
- **Pressed:** depressed/active state
- **Disabled:** reduced opacity, no interaction

---

## Layout Tokens

| Token | Value |
|-------|-------|
| `--layout-page-width` | 1440px |
| `--layout-content-max-width` | 1200px |
| `--layout-above-fold` | 900px |
| `--layout-grid-columns` | 12 |
| `--layout-grid-gutter` | 24px |
| `--layout-nav-height` | 60-100px |
| `--layout-footer-min-height` | 80px |
| `--layout-min-tap-target` | 44px |

### Grid Patterns

- 2-column: 50% / 50%
- 3-column: 33.3% / 33.3% / 33.3%
- 4-column: 25% / 25% / 25% / 25%
- Full-width: 100%

---

## Icon Tokens

| Token | Value |
|-------|-------|
| `--icon-size` | 24px |
| `--icon-margin` | 2px |
| `--icon-stroke` | 2px |
| `--icon-btn-size` | 16-20px |

- Source: [Google Material Symbols — Rounded](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded)
- Default style: Outlined
- Alternative: Filled

---

## CSS Custom Properties Template

Ready-to-use CSS custom properties for project setup:

```css
:root {
  /* Brand — Blue */
  --color-brand-primary: #0045F2;
  --color-brand-secondary-1: #2462FF;
  --color-brand-secondary-2: #4D7FFF;
  --color-brand-secondary-3: #CCDBFF;
  --color-brand-secondary-4: #2455A8;

  /* Accent — Green */
  --color-accent-green-primary: #80DA0A;
  --color-accent-green-secondary-1: #98E236;
  --color-accent-green-secondary-2: #AFED5E;
  --color-accent-green-secondary-3: #D5F1B1;
  --color-accent-green-secondary-4: #EDF0F5;

  /* Accent — Orange */
  --color-accent-orange-primary: #F2A500;
  --color-accent-orange-secondary-1: #FFBA24;
  --color-accent-orange-secondary-2: #FFC64D;
  --color-accent-orange-secondary-3: #FFE5AD;
  --color-accent-orange-secondary-4: #6C4C08;

  /* Neutrals */
  --color-black: #000000;
  --color-gray-1: #333333;
  --color-gray-2: #374151;
  --color-gray-3: #4B5563;
  --color-gray-4: #6B7280;
  --color-gray-5: #9CA3AF;
  --color-gray-6: #D1D5DB;
  --color-gray-7: #F3F4F6;
  --color-white: #FFFFFF;

  /* State */
  --color-info: #A0C3FF;
  --color-success: #0FBD81;
  --color-warning: #F5913D;
  --color-error: #FC4C4D;

  /* Typography */
  --font-family-sans: system-ui, -apple-system, "PingFang TC", "PingFang SC",
    "SF Pro Text", "Source Han Sans TC", "Noto Sans CJK TC",
    "Roboto", "Helvetica Neue", Arial, sans-serif;
  --text-h1: 36px;
  --text-h2: 28px;
  --text-h3: 22px;
  --text-body: 16px;
  --text-aux: 14px;
  --text-small: 12px;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 80px;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;

  /* Shadow */
  --shadow-card: 0px 12px 32px rgba(55, 65, 81, 0.1);

  /* Layout */
  --layout-content-max-width: 1200px;
  --layout-grid-columns: 12;
  --layout-grid-gutter: 24px;
  --layout-nav-height: 80px;
  --layout-footer-min-height: 80px;
  --layout-min-tap-target: 44px;

  /* Icons */
  --icon-size: 24px;
  --icon-margin: 2px;
  --icon-stroke: 2px;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --color-brand-primary: #2F60DA;
    --color-brand-secondary-1: #527AE0;
    --color-brand-secondary-2: #BECDF4;
    --color-brand-secondary-3: #D9E3FC;
    --color-brand-secondary-4: #EDF0F5;

    --color-accent-green-primary: #8BD22D;
    --color-accent-green-secondary-1: #A3E052;
    --color-accent-green-secondary-2: #D1F0A8;
    --color-accent-green-secondary-3: #E3F6CB;
    --color-accent-green-secondary-4: #EDF0F5;

    --color-accent-orange-primary: #E0A629;
    --color-accent-orange-secondary-1: #E5B54D;
    --color-accent-orange-secondary-2: #F5DBA3;
    --color-accent-orange-secondary-3: #F7ECD4;
    --color-accent-orange-secondary-4: #FFF7E5;

    --color-info: #A9C5F5;
    --color-success: #11D491;
    --color-warning: #E9A063;
    --color-error: #ED5B5B;
  }
}
```
