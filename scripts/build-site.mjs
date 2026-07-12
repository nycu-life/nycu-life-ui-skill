import { cp, mkdir, rm } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await mkdir(new URL('../dist/references/', import.meta.url), { recursive: true });

await Promise.all([
  cp(new URL('../index.html', import.meta.url), new URL('../dist/index.html', import.meta.url)),
  cp(new URL('../site/', import.meta.url), new URL('../dist/site/', import.meta.url), { recursive: true }),
  cp(new URL('../guidelines/', import.meta.url), new URL('../dist/guidelines/', import.meta.url), { recursive: true }),
  cp(new URL('../assets/', import.meta.url), new URL('../dist/assets/', import.meta.url), { recursive: true }),
  cp(new URL('../references/tokens.css', import.meta.url), new URL('../dist/references/tokens.css', import.meta.url)),
  cp(new URL('../references/tokens.json', import.meta.url), new URL('../dist/references/tokens.json', import.meta.url)),
  cp(new URL('../SKILL.md', import.meta.url), new URL('../dist/SKILL.md', import.meta.url)),
]);

console.log('Built static brand site in dist/.');
