# Logo usage

Read [../assets/brand/manifest.json](../assets/brand/manifest.json) before selecting a file.

The branding site includes `assets/brand/logo-construction.svg` as an explanatory vector construction drawing; the supplied PNG remains a source reference. The construction drawing is not a production logo asset. Always use the official SVG files below in interfaces and exported brand materials.

## Choose a variant

| Need | Preferred asset |
|---|---|
| Website header, partner lockup, horizontal banner | `lockup-horizontal-{blue,white}.svg` |
| App icon, favicon, compact avatar | `mark-{blue,white}.svg` |
| Large brand title with integrated letterform | `lockup-integrated-{blue,white}.svg` |
| URL-led campaign or digital entry point | `lockup-url-{blue,white}.svg` |
| Centered poster, narrow panel, slide cover | `lockup-vertical-{blue,white}.svg` |
| Social avatar, sticker, square merchandise | `lockup-badge-{blue,white}.svg` |

Use SVG for web and product UI. Use raster formats only when the target does not support SVG.
For every variant, select the blue file for light mode and the white file for dark mode; do not recolor either source at runtime.

## Clear space and minimum size

The proposal includes construction guides but no numeric production rule. Until the brand owner publishes a master rule:

- Keep clear space of at least one quarter of the basic mark width on every side.
- Keep the basic mark at least 32 CSS pixels wide.
- Keep the primary horizontal lockup at least 140 CSS pixels wide.
- Increase size when the book-page or tail-tip detail becomes indistinct.

Treat these as interim digital rules, not a replacement for a future formal master specification.

## Backgrounds

- Use blue assets on white, off-white, or very light uncluttered surfaces.
- Use `#1B41C5` as the required dark-mode preview background for white logo assets. On other brand applications, use a separately approved dark surface with tested contrast.
- Place a logo over photography only when a quiet area or opaque brand field preserves contrast and silhouette detail.
- Never place a white logo on the proposal's auxiliary blue `#6E86DD` for small text lockups; that pairing is about 3.43:1.

## Never

- Stretch, rotate, skew, crop, outline, shadow, or apply gradients.
- Replace the outlined logo text with a live font.
- Recolor source paths with Action Blue or category colors.
- Separate or rearrange parts of a lockup.
- Use the integrated `C` variant at sizes where it can read as `NYOU`.
- Use a JPG as the primary transparent UI asset.

## Asset governance

The source package contains blue and white pairs whose path coordinates differ slightly. Do not assume they share identical master geometry. Preserve the delivered files and plan a future brand-owner review to consolidate one master geometry and generated color variants.
