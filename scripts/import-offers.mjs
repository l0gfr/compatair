import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const args = new Map(process.argv.slice(2).map((value, index, values) => value.startsWith('--') ? [value.slice(2), values[index + 1]] : []).filter(Boolean));
const input = args.get('input'); const merchantId = args.get('merchant'); const format = args.get('format') ?? 'json'; const output = args.get('output') ?? 'src/data/offers.snapshot.json';
if (!input || !merchantId) throw new Error('Usage: node scripts/import-offers.mjs --input feed.json --merchant amazon-fr [--format json|csv]');
if (!['amazon-fr', 'manomano-fr'].includes(merchantId)) throw new Error('Marchand non autorisé.');
if (!['json', 'csv'].includes(format)) throw new Error('Format non pris en charge. Un connecteur XML sera ajouté uniquement avec le schéma officiel du flux partenaire.');
const bytes = await readFile(resolve(input)); if (bytes.length > 50 * 1024 * 1024) throw new Error('Flux supérieur à 50 Mio.');
const checksum = createHash('sha256').update(bytes).digest('hex'); const text = bytes.toString('utf8');
function csvRows(value) {
	const rows = []; let row = [], cell = '', quoted = false; const input = value.replace(/^\uFEFF/, '');
	for (let index = 0; index < input.length; index++) { const char = input[index]; if (quoted) { if (char === '"' && input[index + 1] === '"') { cell += '"'; index++; } else if (char === '"') quoted = false; else cell += char; } else if (char === '"') quoted = true; else if (char === ',') { row.push(cell); cell = ''; } else if (char === '\n') { row.push(cell.replace(/\r$/, '')); if (row.some((item) => item !== '')) rows.push(row); row = []; cell = ''; } else cell += char; }
	if (quoted) throw new Error('Guillemet CSV non fermé.'); if (cell || row.length) { row.push(cell.replace(/\r$/, '')); rows.push(row); }
	const headers = (rows.shift() ?? []).map((item) => item.trim()); const required = ['id', 'productId', 'url', 'priceEur', 'availability', 'collectedAt']; for (const field of required) if (!headers.includes(field)) throw new Error(`Colonne CSV absente : ${field}`);
	return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, (values[index] ?? '').trim()])));
}
const records = format === 'json' ? JSON.parse(text) : csvRows(text); const source = Array.isArray(records) ? records : records.offers;
if (!Array.isArray(source)) throw new Error('Le flux doit contenir un tableau offers.');
const offers = source.map((row) => ({ id: String(row.id), productId: String(row.productId), merchantId, url: String(row.url), priceEur: Number(row.priceEur), ...(row.shippingEur === undefined || row.shippingEur === '' ? {} : { shippingEur: Number(row.shippingEur) }), availability: String(row.availability ?? 'unknown'), collectedAt: String(row.collectedAt), sourceId: `${merchantId}:${resolve(input).split('/').at(-1)}`, sourceChecksum: checksum, identifiers: { ...(row.ean ? { ean: String(row.ean) } : {}), ...(row.gtin ? { gtin: String(row.gtin) } : {}), ...(row.mpn ? { mpn: String(row.mpn) } : {}) } }));
const ids = new Set(); for (const offer of offers) { if (ids.has(offer.id)) throw new Error(`Offre dupliquée : ${offer.id}`); ids.add(offer.id); if (!offer.url.startsWith('https://')) throw new Error(`URL non HTTPS : ${offer.id}`); if (!Number.isFinite(offer.priceEur) || offer.priceEur < 0) throw new Error(`Prix invalide : ${offer.id}`); if (!Object.keys(offer.identifiers).length) throw new Error(`EAN, GTIN ou MPN absent : ${offer.id}`); }
await writeFile(resolve(output), `${JSON.stringify({ generatedAt: new Date().toISOString(), sourceChecksum: checksum, offers }, null, 2)}\n`, { mode: 0o600 });
console.log(`${offers.length} offres importées, checksum ${checksum}`);
