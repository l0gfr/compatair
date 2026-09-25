import { readFile } from 'node:fs/promises';
import { createFujiToolDraft } from './lib/fuji-catalog-import.mjs';
import { renderCpTechnicalCard } from './render-cp-catalog-cards.mjs';

const snapshot = JSON.parse(await readFile(new URL('../src/data/imports/fuji-reviewed-2026-09-25.json', import.meta.url)));
for (const row of snapshot.rows) await renderCpTechnicalCard(createFujiToolDraft(snapshot, row), { pressure: 'PRESSION DE TRAVAIL', pressureUnit: 'bar, selon notice' });
console.log(`${snapshot.rows.length} visuels techniques Fuji générés depuis les sources versionnées.`);
