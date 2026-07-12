/** Generated from references/tokens.json v2.0.0. Do not edit by hand. */
const tokens = require('./tokens.json');

const kebab = (value) => value
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .replace(/([a-zA-Z])([0-9]+)/g, '$1-$2')
  .toLowerCase();
const semanticColors = Object.fromEntries(
  Object.keys(tokens.semantic.light).map((name) => [name, `var(--color-${kebab(name)})`]),
);

module.exports = {
  theme: {
    extend: {
      colors: semanticColors,
      spacing: tokens.space,
      borderRadius: tokens.radius,
      boxShadow: tokens.shadow,
      maxWidth: { content: tokens.layout.content, reading: tokens.layout.reading },
      minHeight: { tap: tokens.layout.tapTarget },
      minWidth: { tap: tokens.layout.tapTarget },
    },
  },
};
