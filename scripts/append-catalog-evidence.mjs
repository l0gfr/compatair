import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { loadCatalogProducts } from './lib/catalog-tooling.mjs';

const root = resolve(import.meta.dirname, '..');
const requestedDate = process.argv.find((argument) => argument.startsWith('--date='))?.slice('--date='.length);
const correctChanged = process.argv.includes('--correct-changed');
const correctionSummary = process.argv.find((argument) => argument.startsWith('--correction-summary='))?.slice('--correction-summary='.length).trim();
const occurredAt = requestedDate ?? new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(occurredAt)) throw new Error('La date doit suivre le format AAAA-MM-JJ.');
if (correctChanged && !correctionSummary) throw new Error('--correct-changed exige --correction-summary=<motif précis>.');

const historyPath = resolve(root, 'src/data/evidence-history.snapshot.json');
const history = JSON.parse(await readFile(historyPath, 'utf8'));
const existingEventIds = new Set(history.events.map((event) => event.id));
const products = [];
for (const [kind, productType] of [['compressors', 'compressor'], ['tools', 'tool']]) {
	const loaded = await loadCatalogProducts(root, kind);
	for (const { product } of loaded.products) products.push({ product, productType });
}

let added = 0;
for (const { product, productType } of products.sort((a, b) => a.product.id.localeCompare(b.product.id))) {
	for (const evidence of [...product.evidence].sort((a, b) => a.id.localeCompare(b.id))) {
		const versions = history.events.filter((event) => event.productId === product.id && event.evidenceId === evidence.id);
		const latest = versions.at(-1);
		if (latest && JSON.stringify(latest.snapshot) === JSON.stringify(evidence)) continue;
		if (latest && !correctChanged) throw new Error(`La preuve ${product.id}/${evidence.id} a changé : relancez avec --correct-changed après revue explicite.`);
		const kind = latest ? 'corrected' : 'added';
		const id = `${kind}:${product.id}:${evidence.id}:${occurredAt}`;
		if (existingEventIds.has(id)) throw new Error(`Événement historique déjà présent : ${id}`);
		const fingerprint = createHash('sha256').update(JSON.stringify({ productId: product.id, evidence })).digest('hex');
		history.events.push({
			id,
			evidenceId: evidence.id,
			productId: product.id,
			productType,
			occurredAt,
			kind,
			summary: latest
				? correctionSummary
				: 'Source officielle ajoutée lors de l’extension du catalogue technique.',
			fingerprint,
			snapshot: evidence,
		});
		existingEventIds.add(id);
		added += 1;
	}
}

const unsigned = { schemaVersion: history.schemaVersion, startedAt: history.startedAt, events: history.events };
history.historyVersion = createHash('sha256').update(JSON.stringify(unsigned)).digest('hex');
await writeFile(historyPath, `${JSON.stringify(history, null, 2)}\n`);
console.log(`${added} nouvelle(s) preuve(s) ajoutée(s) à l’historique.`);
