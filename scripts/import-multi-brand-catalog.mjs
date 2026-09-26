import { readFile, writeFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';
import { createMultiBrandCompressor, createMultiBrandTool } from './lib/multi-brand-catalog-import.mjs';

const root = resolve(import.meta.dirname, '..');
const snapshot = JSON.parse(await readFile(resolve(root, 'src/data/imports/multi-brand-reviewed-2026-09-26.json')));
const xml = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
const format = (n) => n.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const titles = {}, usage = {};
for (const [kind, rows, factory] of [['compressors', snapshot.rows, createMultiBrandCompressor], ['tools', snapshot.toolRows, createMultiBrandTool]]) {
	for (const row of rows) {
		const p = factory(snapshot, row);
		const file = resolve(root, `src/data/products/${kind}/${p.id}.ts`);
		const content = `const product = ${JSON.stringify(p, null, '\t')};\n\nexport default product;\n`;
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
		const compressor = kind === 'compressors';
		const point = compressor ? p.fadCurve.at(-1) : null;
		const columns = compressor ? [
			['DÉBIT RESTITUÉ', format(point.litersPerMinute), `L/min à ${format(point.pressureBar)} bar`],
			['CUVE', format(p.tankLiters), 'litres'], ['PRESSION MAX.', format(p.maxPressureBar), 'bar'],
		] : [
			[p.demandModel === 'per-action' ? 'AIR PAR COUP' : 'CONSOMMATION', format(p.airPerActionLiters ?? p.airflowLpm.typical), p.demandModel === 'per-action' ? 'litres / coup' : 'L/min publiés'],
			['PRESSION RETENUE', format(p.workingPressureBar.typical), 'bar'], ['RÉFÉRENCE', p.mpn, 'fabricant'],
		];
		const nameLines = p.model.match(/.{1,35}(?:\s|$)|.{1,35}/g).map(s => s.trim());
		const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#f0f1e9"/><rect x="44" y="44" width="1112" height="712" rx="18" fill="#fffef9" stroke="#c7d0c6" stroke-width="2"/><g font-family="Arial,sans-serif" fill="#11251c"><text x="82" y="115" font-size="27" fill="#166b4b">${xml(p.brand.toUpperCase())}</text>${nameLines.map((line, i) => `<text x="82" y="${190 + i * 48}" font-size="42" font-weight="700">${xml(line)}</text>`).join('')}<text x="82" y="292" font-size="22" fill="#53665b">Référence ${xml(p.mpn)}</text><line x1="82" y1="320" x2="1118" y2="320" stroke="#c7d0c6"/>${columns.map((c, i) => `<text x="${82 + i * 350}" y="382" font-size="21" fill="#53665b">${xml(c[0])}</text><text x="${82 + i * 350}" y="475" font-size="${c[1].length > 7 ? 30 : 64}" font-weight="700">${xml(c[1])}</text><text x="${82 + i * 350}" y="528" font-size="25">${xml(c[2])}</text>`).join('')}<rect x="82" y="600" width="1036" height="62" rx="8" fill="#edf5bd"/><text x="108" y="640" font-size="25" fill="#073d2b">Valeurs déclarées par le fabricant</text><text x="82" y="715" font-size="21" fill="#53665b">REPÈRES TECHNIQUES</text><text x="1118" y="716" text-anchor="end" font-size="28" fill="#166b4b">CompatAir</text></g></svg>`;
		await sharp(Buffer.from(svg)).webp({ quality: 85 }).toFile(resolve(root, 'public', p.image.src.slice(1)));
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
