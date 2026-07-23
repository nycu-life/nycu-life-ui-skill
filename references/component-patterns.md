# Component and product patterns

## Build every component from semantic roles

Map component decisions to `surface`, `text`, `border`, `action`, `focus`, `category`, `info`, `success`, `warning`, `danger`, and disabled roles. Do not embed primitive hex values in component code.

## Campus-first patterns

### Event and announcement cards

- Lead with date, category, title, location, and time.
- Make the full card or one explicit action keyboard accessible; do not create nested links.
- Provide saved, sold-out, cancelled, and past states.
- Use success only for the transient "saved" confirmation. For the persistent saved toggle, set `aria-pressed="true"` and use `surfaceSoft`, `textBrand`, and an `actionPrimary` border with a visible saved icon and label.
- For sold-out events, use `surfaceSoft` and `textSecondary` for the explicit `已額滿` label. Apply disabled roles only to the unavailable action and use its native `disabled` state.
- Use danger roles plus an explicit `已取消` label for cancelled events.
- Use `surfaceSoft` and `textSecondary` plus an explicit `已結束` label for past events.
- Use info roles for loading or nonblocking sync feedback and warning roles for time-sensitive, recoverable attention.
- Keep ordinary product cards logo-free when the NYCU LIFE shell already identifies the product. Use a symbol only for a standalone share card or campaign asset; use a full lockup only when the brand name would otherwise be absent.

### Search and filters

- Keep the query visible after submit.
- Announce result counts and filter changes.
- Make active filters removable without reopening a panel.
- Provide empty, offline, and loading results that explain the next step.

### Navigation

- Keep the current destination perceivable beyond color alone.
- Use a mobile menu or bottom navigation only for the most frequent student tasks.
- Preserve a 44px target and visible focus for every item.

### Notices and service status

- Pair color with a label or icon.
- Explain what happened, what it affects, and what the user can do.
- Reserve danger styling for destructive or blocking problems.

## Responsive composition

Verify at 320, 375, 768, 1024, and 1440px. Use:

- 4-column logic on small screens, 8 columns on tablet, and 12 columns on desktop.
- 16px small-screen gutters and 24px at tablet/desktop.
- `min-width: 0` on flexible children.
- Card or labeled horizontal-scroll treatment for wide tables.
- `clamp()` for display type; avoid fixed desktop-only type sizes.

## Motion

- Use 140ms for hover/focus feedback and up to 220ms for expansion or state transition.
- Animate opacity and transform when possible.
- Avoid motion that blocks reading or implies false progress.
- Disable nonessential motion under `prefers-reduced-motion: reduce`.

## Dark mode

Switch semantic roles, not raw palette values. Verify surfaces, text, borders, focus, disabled states, imagery, and all status messages. Do not invert official logo colors; select the delivered blue or white variant.
