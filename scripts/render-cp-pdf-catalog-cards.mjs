import { readFile } from 'node:fs/promises';
import { createCpPdfToolDraft } from './lib/cp-pdf-catalog-import.mjs';
import { renderCpTechnicalCard } from './render-cp-catalog-cards.mjs';

const snapshot = JSON.parse(await readFile(new URL('../src/data/imports/chicago-pneumatic-industrial-2026-08-reviewed-2026-09-25.json', import.meta.url)));
for (const row of snapshot.rows) await renderCpTechnicalCard(createCpPdfToolDraft(snapshot, row), { pressure: 'POINT PUBLIÉ', pressureUnit: 'bar', hoseUnit: 'mm intérieurs' });
console.log(`${snapshot.rows.length} visuels techniques générés depuis le catalogue industriel versionné.`);
