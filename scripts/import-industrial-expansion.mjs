import { readFile, writeFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';
import { TECHNICAL_CARD_WIDTH, technicalCardSvg } from './lib/technical-card.mjs';
import { buildIndustrialExpansion } from './lib/industrial-expansion-2026.mjs';
import { buildCatalogProductSource, loadCatalogProducts } from './lib/catalog-tooling.mjs';

const root = resolve(import.meta.dirname, '..');
const readSnapshot = async name => JSON.parse(await readFile(resolve(root, `src/data/imports/${name}-additional-2026-09-26.json`)));
const inputs = { industrial: await readSnapshot('industrial'), cp: await readSnapshot('chicago-pneumatic'), dynabrade: await readSnapshot('dynabrade') };
const expansion = buildIndustrialExpansion(inputs);
// Check the complete batch before writing any file. Re-running an identical import is allowed.
for (const kind of ['compressors', 'tools']) {
 const { products } = await loadCatalogProducts(root, kind);
 for (const product of expansion[kind]) {
  const existing = products.find(x => x.product.id === product.id || (x.product.brand === product.brand && x.product.mpn === product.mpn));
  if (existing && JSON.stringify(existing.product) !== JSON.stringify(product)) throw new Error(`Référence existante différente : ${product.id}`);
 }
}
const titles = {}, usage = {};
for (const kind of ['compressors', 'tools']) {
	for (const p of expansion[kind]) {
		const file = resolve(root, `src/data/products/${kind}/${p.slug}.ts`);
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
console.log(`${expansion.compressors.length} compresseurs et ${expansion.tools.length} outils importés, avec cartes techniques et titres explicites.`);
