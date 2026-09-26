import { readFile } from 'node:fs/promises';
import { createDynabradeToolDraft } from './lib/dynabrade-catalog-import.mjs';
import { renderCpTechnicalCard } from './render-cp-catalog-cards.mjs';
const snapshot = JSON.parse(await readFile(new URL('../src/data/imports/dynabrade-reviewed-2026-09-26.json', import.meta.url)));
for (const row of snapshot.rows) {
	const product = createDynabradeToolDraft(snapshot, row);
	await renderCpTechnicalCard(product, { airflow: row.airflowBasis === 'maximum' ? 'DÉBIT MAX. PUBLIÉ' : 'DÉBIT PUBLIÉ', pressure: 'PRESSION PUBLIÉE', pressureUnit: 'bar, catalogue', hoseUnit: product.recommendedHose ? 'mm int. publiés' : 'non documenté' });
}
console.log(`${snapshot.rows.length} visuels techniques Dynabrade générés depuis les sources versionnées.`);
