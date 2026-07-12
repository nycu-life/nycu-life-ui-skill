import { readFile, writeFile } from 'node:fs/promises';

const sourceUrl = new URL('../references/tokens.json', import.meta.url);
const source = JSON.parse(await readFile(sourceUrl, 'utf8'));

const kebab = (value) => value
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .replace(/([a-zA-Z])([0-9]+)/g, '$1-$2')
  .toLowerCase();
const cssVars = (group, prefix = '') => Object.entries(group)
  .map(([key, value]) => `  --${prefix}${kebab(key)}: ${value};`)
  .join('\n');

const primitive = cssVars(source.primitive.color, 'color-');
const light = cssVars(source.semantic.light, 'color-');
const dark = cssVars(source.semantic.dark, 'color-');
const spaces = cssVars(source.space, 'space-');
const radius = cssVars(source.radius, 'radius-');
const shadow = cssVars(source.shadow, 'shadow-');
const motion = cssVars(source.motion, 'motion-');
const layout = cssVars(source.layout, 'layout-');

const css = `/**
 * Generated from references/tokens.json. Do not edit by hand.
 * NYCU LIFE Design Tokens v${source.meta.version}
 */
:root {
${primitive}
${light}
${spaces}
${radius}
${shadow}
${motion}
${layout}
  --font-sans: ${source.typography.fontSans};
  --font-display: ${source.typography.fontDisplay};
  --text-display: ${source.typography.size.display};
  --text-title: ${source.typography.size.title};
  --text-heading: ${source.typography.size.heading};
  --text-body: ${source.typography.size.body};
  --text-small: ${source.typography.size.small};
}

:root[data-theme="dark"] {
${dark}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
${dark.split('\n').map((line) => `  ${line}`).join('\n')}
  }
}
`;

const ts = `/** Generated from references/tokens.json. Do not edit by hand. */\nexport const tokens = ${JSON.stringify(source, null, 2)} as const;\n\nexport const colors = tokens.semantic;\nexport const typography = tokens.typography;\nexport const spacing = tokens.space;\nexport const radius = tokens.radius;\nexport const shadow = tokens.shadow;\nexport const motion = tokens.motion;\nexport const layout = tokens.layout;\n`;

const tailwind = `/** Generated from references/tokens.json v${source.meta.version}. Do not edit by hand. */\nconst tokens = require('./tokens.json');\n\nconst kebab = (value) => value\n  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')\n  .replace(/([a-zA-Z])([0-9]+)/g, '$1-$2')\n  .toLowerCase();\nconst semanticColors = Object.fromEntries(\n  Object.keys(tokens.semantic.light).map((name) => [name, \`var(--color-\${kebab(name)})\`]),\n);\n\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: semanticColors,\n      spacing: tokens.space,\n      borderRadius: tokens.radius,\n      boxShadow: tokens.shadow,\n      maxWidth: { content: tokens.layout.content, reading: tokens.layout.reading },\n      minHeight: { tap: tokens.layout.tapTarget },\n      minWidth: { tap: tokens.layout.tapTarget },\n    },\n  },\n};\n`;

await Promise.all([
  writeFile(new URL('../references/tokens.css', import.meta.url), css),
  writeFile(new URL('../references/tokens.ts', import.meta.url), ts),
  writeFile(new URL('../references/tailwind-preset.js', import.meta.url), tailwind),
]);

console.log(`Generated CSS, TypeScript and Tailwind tokens from v${source.meta.version}.`);
