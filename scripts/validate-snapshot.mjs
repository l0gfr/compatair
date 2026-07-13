import { readFile } from 'node:fs/promises';

const [file = 'dist/data/catalog.json'] = process.argv.slice(2);
const snapshot = JSON.parse(await readFile(file, 'utf8'));
const errors = [];
if (!/^\d+\.\d+\.\d+$/.test(snapshot.schemaVersion ?? '')) errors.push('schemaVersion invalide');
if (!/^[a-f0-9]{64}$/.test(snapshot.catalogVersion ?? snapshot.snapshotVersion ?? '')) errors.push('version de snapshot absente');
if (snapshot.compressors) {
	const ids = new Set();
	for (const item of snapshot.compressors) {
		if (ids.has(item.id)) errors.push(`compresseur dupliqué : ${item.id}`); ids.add(item.id);
		if (item.tankLiters < 0 || item.maxPressureBar <= 0 || item.maxPressureBar > 50) errors.push(`caractéristique impossible : ${item.id}`);
		for (const point of item.fadCurve ?? []) if (point.pressureBar < 0 || point.litersPerMinute <= 0 || point.litersPerMinute > 20_000) errors.push(`point FAD impossible : ${item.id}`);
	}
}
if (snapshot.tools) {
	const ids = new Set();
	for (const item of snapshot.tools) { if (ids.has(item.id)) errors.push(`outil dupliqué : ${item.id}`); ids.add(item.id); if (item.airflowLpm?.typical <= 0 || item.workingPressureBar?.typical <= 0) errors.push(`profil impossible : ${item.id}`); }
}
if (snapshot.offers) {
	const now = Date.now();
	for (const offer of snapshot.offers) { if (now - Date.parse(offer.collectedAt) > 48 * 3_600_000) errors.push(`offre périmée : ${offer.id}`); if (!offer.url.startsWith('https://')) errors.push(`URL non HTTPS : ${offer.id}`); }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Snapshot valide : ${file}`);
