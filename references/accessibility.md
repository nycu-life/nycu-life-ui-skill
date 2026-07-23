# Accessibility review

Target WCAG 2.1 AA as the minimum.

## Color and contrast

- Keep normal text at 4.5:1 or higher.
- Keep large text and meaningful UI boundaries/icons at 3:1 or higher.
- Use the semantic token pairs tested by `scripts/validate.mjs`.
- Never communicate category, status, selection, or error by color alone.

The legacy palette contains combinations in the 3.48–4.29:1 range that are suitable only for large text or decoration. Do not repeat the old claim that all legacy contrast examples pass normal-text AA.

## Keyboard and focus

- Use native interactive elements before ARIA.
- Preserve logical tab order and avoid positive `tabindex`.
- Show `:focus-visible` with a 3:1 boundary contrast.
- Make menus, dialogs, tabs, disclosure controls, and composite widgets follow their expected keyboard pattern.

## Targets and states

- Keep interactive targets at least 44 by 44 CSS pixels.
- Use the native `disabled` attribute where supported; do not simulate disabled state with a class alone.
- Keep disabled meaning visible without relying only on low opacity.
- Announce copy, save, form, filter, and async results with an appropriate live region.

## Structure and content

- Provide a skip link, one primary `main`, named navigation, and a logical heading outline.
- Give images useful alternative text or empty `alt` when decorative.
- Label external/new-window behavior when it may surprise the user.
- Keep Traditional Chinese copy readable at 200% zoom and with browser text spacing overrides.

## Forms

- Associate visible labels with fields.
- Describe requirements before submission.
- Connect error text with `aria-describedby` and set `aria-invalid` only when invalid.
- Focus the first invalid field or an error summary after failed submission.

## Review checklist

1. Navigate without a pointer.
2. Verify focus is never clipped or hidden.
3. Test light and dark themes.
4. Test 320px width and 200% zoom without two-dimensional scrolling.
5. Test reduced motion and forced colors.
6. Verify accessible names, native states, and live announcements.
7. Run the repository validation and an automated accessibility scan when available.
