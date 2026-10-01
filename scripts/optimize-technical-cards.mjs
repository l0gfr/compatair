import { readFile, writeFile, rename, unlink } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';
import { loadCatalogProducts } from './lib/catalog-tooling.mjs';
import { TECHNICAL_CARD_WIDTH, technicalCardSvg } from './lib/technical-card.mjs';

const args = process.argv.slice(2);
if (args.length && (args.length !== 1 || args[0] !== '--apply')) throw new Error('Use --apply to write optimized cards.');
const apply = args.includes('--apply');
const root = resolve(import.meta.dirname, '..');
const totals = { eligible: 0, changed: 0, beforeBytes: 0, afterBytes: 0, apply };
sharp.concurrency(2);
for (const kind of ['compressors', 'tools']) {
	const { products } = await loadCatalogProducts(root, kind);
	const candidates = products.map(({ product }) => product).filter(p => p.image.sourceLabel.startsWith('Carte technique CompatAir'));
	let cursor = 0;
	await Promise.all(Array.from({ length: 2 }, async () => {
		while (cursor < candidates.length) {
			const p = candidates[cursor++];
			if (!/^\/images\/products\/[a-z0-9][a-z0-9._-]*\.webp$/.test(p.image.src)) throw new Error(`Invalid card path: ${p.id}`);
			const path = resolve(root, 'public', p.image.src.slice(1));
			const original = await readFile(path);
			const metadata = await sharp(original).metadata();
			totals.eligible++;
			totals.beforeBytes += original.length;
			// Re-render only our own known layouts, directly from their source SVG.
			const knownLayout = (metadata.width === 1200 && metadata.height === 800)
				|| (metadata.width === 900 && metadata.height === 600);
			if (!knownLayout) { totals.afterBytes += original.length; continue; }
			const optimized = await sharp(Buffer.from(technicalCardSvg(p, kind)))
				.resize({ width: TECHNICAL_CARD_WIDTH }).webp({ quality: 85, effort: 6 }).toBuffer();
			if (optimized.length >= original.length) { totals.afterBytes += original.length; continue; }
			totals.afterBytes += optimized.length;
			totals.changed++;
			if (apply) {
				const temporary = `${path}.optimize-${process.pid}`;
				try { await writeFile(temporary, optimized, { flag: 'wx' }); await rename(temporary, path); }
				catch (error) { await unlink(temporary).catch(() => {}); throw error; }
			}
		}
	}));
}
console.log(JSON.stringify({ ...totals, savedBytes: totals.beforeBytes - totals.afterBytes }));
