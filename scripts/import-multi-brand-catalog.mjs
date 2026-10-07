import { buildCatalogProductSource } from './lib/catalog-tooling.mjs';
import { readFile, writeFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';
import { TECHNICAL_CARD_WIDTH, technicalCardSvg } from './lib/technical-card.mjs';
import { createMultiBrandCompressor, createMultiBrandTool } from './lib/multi-brand-catalog-import.mjs';

const root = resolve(import.meta.dirname, '..');
const snapshot = JSON.parse(await readFile(resolve(root, 'src/data/imports/multi-brand-reviewed-2026-09-26.json')));
const titles = {}, usage = {};
for (const [kind, rows, factory] of [['compressors', snapshot.rows, createMultiBrandCompressor], ['tools', snapshot.toolRows, createMultiBrandTool]]) {
	for (const row of rows) {
		const p = factory(snapshot, row);
		const file = resolve(root, `src/data/products/${kind}/${p.id}.ts`);
		const content = buildCatalogProductSource(kind, p, '\t');
		try { await access(file); if (await readFile(file, 'utf8') !== content) throw new Error(`Référence existante différente : ${p.id}`); }
		catch (error) { if (error.code !== 'ENOENT') throw error; await writeFile(file, content); }
		const name = `${p.brand} ${p.model}`;
		let title = `${name} : débit et compatibilité`;
		if (title.length > 60) title = `${name} : fiche technique`;
		if (title.length > 60) title = `${p.brand} ${p.mpn} : débit et compatibilité`;
		titles[p.id] = title;
		if (kind === 'tools') {
			let selection = `Quel compresseur pour ${name} ?`;
			if (selection.length > 60) selection = `Quel compresseur pour ${p.brand} ${p.mpn} ?`;
			usage[p.id] = selection;
		}
		const svg = technicalCardSvg(p, kind);
		await sharp(Buffer.from(svg)).resize({ width: TECHNICAL_CARD_WIDTH }).webp({ quality: 85, effort: 6 }).toFile(resolve(root, 'public', p.image.src.slice(1)));
	}
}
const seoPath = resolve(root, 'src/data/product-seo-titles.ts');
let seo = await readFile(seoPath, 'utf8');
for (const [variable, additions] of [['productSeoTitles', titles], ['toolUseSeoTitles', usage]]) {
	const marker = `export const ${variable}: Record<string, string> = {`;
	if (!seo.includes(marker)) throw new Error(`Carte SEO absente : ${variable}`);
	const missing = Object.entries(additions).filter(([id]) => !seo.split(marker)[1].split('\n};')[0].includes(`"${id}":`));
	if (missing.length) seo = seo.replace(marker, `${marker}\n${missing.map(([id, title]) => `\t${JSON.stringify(id)}: ${JSON.stringify(title)},`).join('\n')}`);
}
await writeFile(seoPath, seo);
console.log(`${snapshot.rows.length} compresseurs et ${snapshot.toolRows.length} outils importés, avec cartes techniques et titres explicites.`);
