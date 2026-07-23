# Original UI Guidelines Reference

Use this file for the original nine-chapter NYCU LIFE visual-system detail.

## Source precedence

1. `tokens.json` is canonical for production semantic colors and implementation.
2. Accessibility requirements override an original pairing whenever it misses the required contrast.
3. `legacy-figma-palette.json` and the specifications below preserve the Figma visual language for reference and migration, not as a second production token set.

## Nine chapters

1. Light palette: five blue, five green, five orange/gold, nine neutral, and four state primitives. See `legacy-figma-palette.json`.
2. Dark palette: five blue, five green, five orange/gold, shared neutrals, and four dark state primitives. Map production UI through semantic roles.
3. Contrast: normal text requires 4.5:1; large text and meaningful UI boundaries require 3:1. Original and commonly misused pairs are machine-checked.
4. Typography: Noto Sans TC 400/500/600/700. Original H1–H6 baseline is 36, 28, 20–24, 16, 14, and 12px. Body line-height is 1.75.
5. Grid: original canvas 1440×900px, 1200px content maximum, 12 columns, 24px gutters, navigation 60–100px, footer over 80px. Adapt to 4/8/12 responsive columns and 44×44px targets.
6. Buttons: horizontal padding about 1.5× font size, vertical padding about 1×, icon gap over 5px, icon size 16–20px. Cover rest, hover, pressed, focus-visible, disabled, and loading.
7. Spacing and radius: 4px base; spacing bands 8–16, 24–32, 32–64, and 64–96px. Original radii are 8, 12, 16, and 20px. Inner radius equals outer radius minus padding.
8. Shadows and materials: avoid pure black shadow. Original card reference is `0 12px 32px rgba(55, 65, 81, 0.10)`. Glass effects are accents only; long text stays on a solid high-contrast surface.
9. Icons: Material Symbols Rounded, outlined by default, 24px and weight 400, with 16/24/32/48/64px supported sizes. Meaningful icons need accessible names.

The public visual companion is `guidelines/index.html`.
