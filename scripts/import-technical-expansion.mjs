import { readFile, writeFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';
import { buildTechnicalExpansion } from './lib/technical-expansion-2026.mjs';
import { buildCatalogExpansion } from './lib/catalog-expansion-2026-09-27.mjs';
import { buildQualifiedTools } from './lib/qualified-tools-2026.mjs';
import { buildDocumentedExpansion } from './lib/documented-expansion-2026-09-30.mjs';
import { buildCatalogProductSource, loadCatalogProducts } from './lib/catalog-tooling.mjs';
import { TECHNICAL_CARD_WIDTH, technicalCardSvg } from './lib/technical-card.mjs';

const root = resolve(import.meta.dirname, '..');
const readSnapshot = async name => JSON.parse(await readFile(resolve(root, `src/data/imports/${name}-additional-2026-09-26.json`)));
const args = process.argv.slice(2);
if (args.length && (args.length !== 1 || !['--batch=2026-09-27', '--batch=qualified-tools-2026-09-27', '--batch=documented-2026-09-30'].includes(args[0]))) throw new Error('Lot non reconnu');
const expansion = args[0] === '--batch=documented-2026-09-30'
 ? buildDocumentedExpansion(JSON.parse(await readFile(resolve(root, 'src/data/imports/documented-expansion-2026-09-30.json'))))
 : args[0] === '--batch=qualified-tools-2026-09-27'
 ? buildQualifiedTools(JSON.parse(await readFile(resolve(root, 'src/data/imports/qualified-tools-2026-09-27.json'))))
 : args.length
 ? buildCatalogExpansion(...await Promise.all(['compressors', 'tools'].map(async kind => JSON.parse(await readFile(resolve(root, `src/data/imports/catalog-${kind}-2026-09-27.json`))))))
 : buildTechnicalExpansion(await readSnapshot('technical-compressors'), await readSnapshot('technical-tools'));
// Check the complete batch before writing any file. Re-running an identical import is allowed.
for (const kind of ['compressors', 'tools']) {
 const { products } = await loadCatalogProducts(root, kind);
 for (const product of expansion[kind]) {
  const existing = products.find(x => x.product.id === product.id || (product.mpn && x.product.brand === product.brand && x.product.mpn === product.mpn));
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
		const name = `${p.brand} ${p.model}${p.variant?.distinguishingAttributes.reference ? ` ${p.mpn}` : ''}`;
		let title = p.variant?.distinguishingAttributes.reference ? `${name} : débit` : `${name} : débit et compatibilité`;
		if (title.length > 60 && !p.variant?.distinguishingAttributes.reference) title = `${name} : fiche technique`;
		if (title.length > 60) title = `${p.brand} ${p.mpn} : débit et compatibilité`;
		titles[p.id] = title;
		if (kind === 'tools') {
			let selection = `Quel compresseur pour ${name} ?`;
			if (selection.length > 60) selection = `Quel compresseur pour ${p.brand} ${p.mpn} ?`;
			if (selection.length > 60) selection = `Compresseur pour ${p.brand} ${p.mpn}`;
			usage[p.id] = selection;
		}
		const svg = technicalCardSvg(p, kind);
		const imagePath = resolve(root, 'public', p.image.src.slice(1));
		try { await access(imagePath); } catch (error) {
			if (error.code !== 'ENOENT') throw error;
			await sharp(Buffer.from(svg)).resize({ width: TECHNICAL_CARD_WIDTH }).webp({ quality: 85, effort: 6 }).toFile(imagePath);
		}
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
const registryPath = resolve(root, 'src/data/reference-registry.ts');
let registry = await readFile(registryPath, 'utf8');
const registryMarker = "const laterObservations: Array<{ productId: string; mpn: string; observedAt: string; kind: 'added' | 'changed' }> = [";
if (!registry.includes(registryMarker)) throw new Error('Registre des références absent');
const newObservations = [...expansion.compressors, ...expansion.tools].filter(p => p.mpn && !registry.includes(`productId: ${JSON.stringify(p.id)},`));
if (newObservations.length) {
	const observedAt = args[0] === '--batch=documented-2026-09-30' ? '2026-09-30' : args.length ? '2026-09-27' : '2026-09-26';
	registry = registry.replace(registryMarker, `${registryMarker}\n${newObservations.map(p => `\t{ productId: ${JSON.stringify(p.id)}, mpn: ${JSON.stringify(p.mpn)}, observedAt: '${observedAt}', kind: 'added' },`).join('\n')}`);
	await writeFile(registryPath, registry);
}
console.log(`${expansion.compressors.length} compresseurs et ${expansion.tools.length} outils importés, avec cartes techniques et titres explicites.`);
