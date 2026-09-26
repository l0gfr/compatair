import { readFile } from 'node:fs/promises';
import { createAtlasCopcoToolDraft } from './lib/atlas-copco-catalog-import.mjs';
import { createDesoutterToolDraft } from './lib/desoutter-catalog-import.mjs';
import { renderCpTechnicalCard } from './render-cp-catalog-cards.mjs';
for (const [maker, factory] of [['atlas-copco', createAtlasCopcoToolDraft], ['desoutter', createDesoutterToolDraft]]) {
	const snapshot = JSON.parse(await readFile(new URL(`../src/data/imports/${maker}-reviewed-2026-09-26.json`, import.meta.url)));
	for (const row of snapshot.rows) {
		const product = factory(snapshot, row);
		await renderCpTechnicalCard(product, { airflow: maker === 'desoutter' ? 'À VIDE' : 'DÉBIT RETENU', pressure: 'RÉFÉRENCE', pressureValue: product.workingPressureBar.typical, pressureUnit: 'bar', hoseUnit: maker === 'desoutter' ? 'mm int. sur 5 m' : 'mm int. publiés' });
	}
	console.log(`${snapshot.rows.length} cartes ${maker} générées.`);
}
