import { createHash } from 'node:crypto';
import { access, readFile, writeFile } from 'node:fs/promises';

const target = new URL('../src/data/evidence-history.snapshot.json', import.meta.url);
try {
	await access(target);
	throw new Error('La baseline existe déjà. Ajoutez un événement au lieu de la régénérer.');
} catch (error) {
	if (error.code !== 'ENOENT') throw error;
}

const catalog = JSON.parse(await readFile(new URL('../dist/data/catalog.json', import.meta.url), 'utf8'));
const startedAt = '2026-07-14';
const products = [
	...catalog.compressors.map((product) => ({ product, productType: 'compressor' })),
	...catalog.tools.map((product) => ({ product, productType: 'tool' })),
];
const events = products.flatMap(({ product, productType }) => product.evidence.map((evidence) => ({
	id: `baseline:${product.id}:${evidence.id}`,
	evidenceId: evidence.id,
	productId: product.id,
	productType,
	occurredAt: startedAt,
	kind: 'baseline',
	summary: 'Première version archivée lors de l’ouverture de l’historique public CompatAir.',
	fingerprint: createHash('sha256').update(JSON.stringify({ productId: product.id, evidence })).digest('hex'),
	snapshot: evidence,
})));
const unsigned = { schemaVersion: '1.0.0', startedAt, events };
const history = {
	...unsigned,
	historyVersion: createHash('sha256').update(JSON.stringify(unsigned)).digest('hex'),
};
await writeFile(target, `${JSON.stringify(history, null, 2)}\n`, { flag: 'wx' });
console.log(`Baseline créée : ${events.length} preuves archivées.`);
