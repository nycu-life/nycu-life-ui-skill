import { access, readFile } from 'node:fs/promises';

const source = JSON.parse(await readFile(new URL('../references/tokens.json', import.meta.url), 'utf8'));
const legacy = JSON.parse(await readFile(new URL('../references/legacy-figma-palette.json', import.meta.url), 'utf8'));

function luminance(hex) {
  const values = hex.slice(1).match(/.{2}/g).map((value) => parseInt(value, 16) / 255);
  const linear = values.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrast(a, b) {
  const [bright, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (bright + 0.05) / (dark + 0.05);
}

function resolve(path) {
  const [theme, token] = path.split('.');
  if (theme === 'primitive') return source.primitive.color[token];
  return source.semantic[theme][token];
}

const failures = [];
for (const [foregroundPath, backgroundPath] of source.contrastTests.normalText) {
  const ratio = contrast(resolve(foregroundPath), resolve(backgroundPath));
  if (ratio < 4.5) failures.push(`${foregroundPath} on ${backgroundPath}: ${ratio.toFixed(2)}:1`);
}

if (source.primitive.color.logoBlue !== '#0922E7') {
  failures.push('Official logo blue must remain #0922E7.');
}

for (const file of ['tokens.css', 'tokens.ts', 'tailwind-preset.js']) {
  const body = await readFile(new URL(`../references/${file}`, import.meta.url), 'utf8');
  if (!body.includes(source.meta.version)) failures.push(`${file} is not generated from v${source.meta.version}.`);
}
const tailwindPreset = await readFile(new URL('../references/tailwind-preset.js', import.meta.url), 'utf8');
if (tailwindPreset.includes('colors: tokens.semantic.light')) failures.push('Tailwind colors must follow theme-aware CSS variables, not fixed light values.');
if (!tailwindPreset.includes('var(--color-')) failures.push('Tailwind semantic colors must resolve through generated CSS variables.');

const generatedCss = await readFile(new URL('../references/tokens.css', import.meta.url), 'utf8');
const siteCssFiles = ['styles.css', 'guidelines.css'];
const siteCss = (await Promise.all(siteCssFiles.map((file) => readFile(new URL(`../site/${file}`, import.meta.url), 'utf8')))).join('\n');
const declaredVariables = new Set([...generatedCss.matchAll(/--([a-z0-9-]+)\s*:/g)].map((match) => match[1]));
for (const match of siteCss.matchAll(/--([a-z0-9-]+)\s*:/g)) declaredVariables.add(match[1]);
for (const localVariable of ['status', 'fg', 'bg', 'dot', 'r', 'w']) declaredVariables.add(localVariable);
const usedVariables = new Set([...siteCss.matchAll(/var\(--([a-z0-9-]+)/g)].map((match) => match[1]));
for (const variable of usedVariables) if (!declaredVariables.has(variable)) failures.push(`Site CSS uses undefined --${variable}.`);

const manifest = JSON.parse(await readFile(new URL('../assets/brand/manifest.json', import.meta.url), 'utf8'));
const indexHtml = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const guidelinesHtml = await readFile(new URL('../guidelines/index.html', import.meta.url), 'utf8');

if (!indexHtml.includes('href="guidelines/')) failures.push('Homepage must link to the complete guidelines.');
for (const id of ['color-light', 'color-dark', 'contrast', 'typography', 'grid', 'buttons', 'components', 'materials', 'icons']) {
  if (!guidelinesHtml.includes(`id="${id}"`)) failures.push(`Guidelines are missing #${id}.`);
}

const paletteValues = new Set(Object.values(legacy.palette).flatMap((theme) => Object.values(theme).flat()));
for (const value of paletteValues) {
  if (!guidelinesHtml.includes(value)) failures.push(`Guidelines do not show legacy palette value ${value}.`);
}

for (const pair of [...legacy.contrastPairs, ...legacy.commonMisusePairs]) {
  const actual = contrast(pair.foreground, pair.background);
  const expectedClass = actual >= 4.5 ? 'normal' : actual >= 3 ? 'limited' : 'decorative';
  if (Math.abs(actual - pair.ratio) > 0.01) failures.push(`Stored ratio for ${pair.foreground} on ${pair.background} should be ${actual.toFixed(2)}, not ${pair.ratio.toFixed(2)}.`);
  if (pair.classification !== expectedClass) failures.push(`${pair.foreground} on ${pair.background} should be classified ${expectedClass}.`);
  if (!guidelinesHtml.includes(`${pair.ratio.toFixed(2)}:1`)) failures.push(`Guidelines do not show ${pair.ratio.toFixed(2)}:1 for ${pair.foreground} on ${pair.background}.`);
}
const variantModes = new Map();
const manifestFiles = new Set();
for (const asset of manifest.assets) {
  if (manifestFiles.has(asset.file)) failures.push(`Duplicate brand asset in manifest: ${asset.file}.`);
  manifestFiles.add(asset.file);
  try {
    await access(new URL(`../assets/brand/${asset.file}`, import.meta.url));
  } catch {
    failures.push(`Missing brand asset: ${asset.file}.`);
  }
  if (!indexHtml.includes(`assets/brand/${asset.file}`)) failures.push(`Identity library does not show ${asset.file}.`);
  if (!variantModes.has(asset.variant)) variantModes.set(asset.variant, new Set());
  variantModes.get(asset.variant).add(asset.mode);
}
for (const [variant, modes] of variantModes) {
  if (!modes.has('light') || !modes.has('dark')) failures.push(`${variant} must include light and dark assets.`);
}

if (failures.length) {
  console.error(`Validation failed:\n- ${failures.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log(`${source.contrastTests.normalText.length} normal-text contrast pairs pass WCAG AA.`);
  console.log('Generated token artifacts match the canonical version.');
  console.log(`${usedVariables.size} site token references resolve to generated variables.`);
  console.log(`${paletteValues.size} original palette values and ${legacy.contrastPairs.length + legacy.commonMisusePairs.length} reference contrast pairs are documented.`);
  console.log(`${manifestFiles.size} logo assets appear in paired light/dark identity previews.`);
}
