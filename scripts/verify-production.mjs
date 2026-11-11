const target = 'https://hyochae-wedding-270327.pages.dev/';
const response = await fetch(target, { signal: AbortSignal.timeout(20000), redirect: 'error' });
if (!response.ok) throw new Error(`Production returned HTTP ${response.status}`);
const html = await response.text();
if (!html.includes('HYO &amp; CHAE') && !html.includes('HYO & CHAE')) throw new Error('Unexpected site title');
const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^" ]+)"/g)].map(match => match[1]);
if (!assets.some(path => path.endsWith('.js'))) throw new Error('Built JavaScript is missing');
for (const path of assets) {
  const asset = await fetch(new URL(path, target), { signal: AbortSignal.timeout(20000), redirect: 'error' });
  if (!asset.ok) throw new Error(`${path}: HTTP ${asset.status}`);
}
console.log(`Verified production HTML and ${assets.length} assets: ${target}`);
