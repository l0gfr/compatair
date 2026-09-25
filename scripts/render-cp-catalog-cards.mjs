import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';
import { createCpToolDraft } from './lib/cp-catalog-import.mjs';

const root = resolve(import.meta.dirname, '..');
const xml = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
const number = (value) => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
export async function renderCpTechnicalCard(product, labels = {}) {
	const columns = [
		{ x: 82, label: 'EN CHARGE', value: number(product.airflowLpm.typical), unit: 'L/min' },
		{ x: 460, label: labels.pressure ?? 'PRESSION MAX.', value: number(product.workingPressureBar.max), unit: labels.pressureUnit ?? 'bar dynamiques' },
		{ x: 830, label: 'FLEXIBLE', value: number(product.recommendedHose.innerDiameterMm), unit: labels.hoseUnit ?? 'mm int. sur 5 m' },
	];
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
<rect width="1200" height="800" fill="#f0f1e9"/><rect x="44" y="44" width="1112" height="712" rx="18" fill="#fffef9" stroke="#c7d0c6" stroke-width="2"/>
<g font-family="Arial, sans-serif" fill="#11251c"><rect x="82" y="90" width="8" height="32" fill="#166b4b"/>
<text x="108" y="117" font-size="26" letter-spacing="2">CHICAGO PNEUMATIC</text>
<text x="82" y="210" font-size="${product.model.length > 26 ? 42 : 54}" font-weight="700">${xml(product.model)}</text>
<text x="82" y="262" font-size="24" fill="#53665b">Référence fabricant ${xml(product.mpn)}</text>
<line x1="82" y1="306" x2="1118" y2="306" stroke="#c7d0c6" stroke-width="2"/>
${columns.map(c => `<text x="${c.x}" y="374" font-size="22" font-weight="700" fill="#53665b">${xml(c.label)}</text><text x="${c.x}" y="474" font-size="76" font-weight="700">${xml(c.value)}</text><text x="${c.x}" y="524" font-size="27">${xml(c.unit)}</text>`).join('')}
<rect x="82" y="600" width="1036" height="62" rx="8" fill="#edf5bd"/><text x="108" y="640" font-size="25" fill="#073d2b">Valeurs déclarées par le fabricant</text>
<text x="82" y="715" font-size="21" fill="#53665b">REPÈRES TECHNIQUES</text><text x="1118" y="716" text-anchor="end" font-size="28" font-weight="700" fill="#166b4b">CompatAir</text></g></svg>`;
	await sharp(Buffer.from(svg)).webp({ quality: 85 }).toFile(resolve(root, 'public', product.image.src.slice(1)));
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
	const records = JSON.parse(await readFile(resolve(root, 'src/data/imports/chicago-pneumatic-2026-09-25.json')));
	for (const record of records) await renderCpTechnicalCard(createCpToolDraft(record));
	console.log(`${records.length} visuels techniques générés depuis les valeurs sourcées.`);
}
