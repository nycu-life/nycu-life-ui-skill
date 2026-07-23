# Design tokens

## Source of truth

Use [tokens.json](tokens.json) as the canonical source. Run `npm run generate` after editing it; do not edit `tokens.css`, `tokens.ts`, or `tailwind-preset.js` manually.

The system separates two blues that previously drifted across assets:

| Role | Value | Use |
|---|---:|---|
| Logo Blue | `#0922E7` | Official logo geometry and brand-led surfaces |
| Logo Dark Background | `#1B41C5` | Required dark-mode background behind white logo assets |
| Action Blue | `#0045F2` | Primary light-theme controls and interactive emphasis |

Do not recolor an official SVG to switch between these roles.

## Semantic roles

Prefer these roles in product code:

- `canvas`, `surface`, `surfaceRaised`, `surfaceBrand`, `surfaceSoft`
- `textPrimary`, `textSecondary`, `textMuted`, `textInverse`, `textOnBrand`, `textBrand`
- `borderSubtle`, `borderStrong`
- `actionPrimary`, `actionPrimaryHover`, `actionPrimaryPressed`, `actionOnPrimary`
- `focusRing`
- `categoryGreenSurface`, `categoryGreenText`
- `categoryOrangeSurface`, `categoryOrangeText`
- `infoSurface`, `infoText`
- `successSurface`, `successText`
- `warningSurface`, `warningText`
- `dangerSurface`, `dangerText`
- `actionDisabledSurface`, `actionDisabledText`

Each role has an explicit light and dark value. Use primitives only when defining or extending semantic roles.

The dark theme uses true black `#000000` for both canvas and primary surface. Raised and soft surfaces use restrained neutral grays; blue remains reserved for brand and interaction roles. The site footer uses the same semantic surface as the page, so it is white in light mode and black in dark mode.

Disabled controls use dedicated surface/text roles and still meet 4.5:1 in this system, even though WCAG exempts inactive controls. Never reuse disabled roles for ordinary status or supporting text.

## Typography

Use type roles instead of mapping visual size to HTML heading level.

| Role | Size | Typical use |
|---|---|---|
| Display | `clamp(2.625rem, 5.5vw, 4.75rem)` | Brand hero, short campaigns |
| Title | `clamp(1.875rem, 3.2vw, 3rem)` | Page and section titles |
| Heading | `clamp(1.25rem, 2vw, 1.875rem)` | Card groups, feature headings |
| Body | `1rem` with `1.75` line height | Product copy and long text |
| Small | `0.875rem` | Labels, metadata, support text |

Default to Noto Sans TC for website and UI work, followed by system sans-serif and PingFang TC fallbacks. Use only 400, 500, 600, and 700 in production interfaces. Treat alternative display faces as campaign-only exceptions requiring approval.

## Spacing, shape, and motion

- Space: `4, 8, 12, 16, 24, 32, 48, 64, 96px`
- Radius: `8, 12, 16, 24px`, with pill only for chips and compact actions
- Tap target: minimum `44px`
- Motion: `140ms` fast, `220ms` normal, with the canonical easing curve
- Content width: `1200px`; reading width: `720px`

## Contrast policy

The previous palette labeled several 3.x:1 combinations as normal-text AA. Do not reuse those claims. The canonical file now contains tested normal-text pairs and `scripts/validate.mjs` fails below 4.5:1.

Use accent primitives as decorative/category fills only until a tested on-color is assigned. Use the paired category and danger semantic tokens for readable labels and notices.

## Generated formats

```css
@import "./references/tokens.css";

.primary-action {
  color: var(--color-action-on-primary);
  background: var(--color-action-primary);
}
```

```ts
import { colors, spacing } from './references/tokens';

const lightAction = colors.light.actionPrimary;
```

```js
// tailwind.config.js
module.exports = {
  presets: [require('./references/tailwind-preset')],
};
```

The Tailwind semantic color utilities resolve through the CSS custom properties in `tokens.css`. Import that stylesheet once, then set `data-theme="light"` or `data-theme="dark"` on the root element. For example, `bg-actionPrimary` and `text-textPrimary` keep the same class names while their values follow the active theme.
