import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

// Preserve the original transcriptions. Only these exact, separately reviewed
// references and fields receive the dated amendment after reconstruction.
const allowed = new Map([
 ["abac-formula-e-11-13-400-50", ["dutyCycle", "editorial", "fieldSources", "specifications"]],
 ["fiac-ax-153bd-dry-10-400-50-ce", ["editorial"]],
 ["airpress-24v-pour-camion-dc-24-225-15", ["editorial", "evidence", "specifications"]],
 ["gentilin-ac600-40", ["dutyCycle", "editorial", "evidence", "fieldSources", "specifications"]],
 ["aircraft-airbau-480-90-b", ["editorial"]],
 ["black-decker-bd-195-12-nk", ["editorial"]],
 ["nuair-b2800-100-cm2", ["editorial"]],
 ["stanley-b-251-10-50", ["editorial"]],
 ["prebena-orkan-250", ["editorial", "evidence", "fieldSources", "noiseDb", "specifications"]],
 ["almig-combi-xp-15-270d", ["dutyCycle", "editorial", "fieldSources"]],
 ["boge-s-221-3-10-bar-insonorisation-standard", ["editorial", "specifications"]],
 ["broomwade-elite-11-rsccp1141v4-10-bar", ["dutyCycle", "editorial", "fieldSources", "specifications"]],
 ["chicago-pneumatic-cpi100-50-hz-10-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe", ["editorial"]],
 ["ingersoll-rand-r37ne-50-hz-vitesse-variable-nirvana-standard-groupe-fixe-au-sol-sans-secheur-vitesse-variable", ["editorial"]],
 ["worthington-creyssensac-rlr-1000-50-hz-10-bar-full-feature-sur-reservoir-270-l", ["editorial"]],
 ["airpol-18", ["editorial", "fieldSources", "phase", "voltage"]],
 ["alup-allegretto-11", ["editorial", "fadCurve", "fieldSources", "oilType", "specifications"]],
 ["bambi-bb15v", ["editorial", "evidence", "fieldSources", "voltage"]],
 ["ekom-dk50-10s", ["editorial", "fieldSources", "specifications", "voltage"]],
 ["mark-msa-11", ["editorial", "fieldSources", "specifications"]],
 ["mattei-blade-8", ["editorial", "fieldSources", "phase", "specifications", "voltage"]],
 ["champion-fm110", ["editorial"]],
 ["dalgakiran-d-10-500-t", ["editorial"]],
 ["cleco-11pthh352", ["editorial"]],
 ["cleco-19pca02q", ["editorial"]],
 ["cleco-19raa03am2", ["editorial"]],
 ["cleco-wt-2110-8", ["editorial"]],
 ["master-power-mp4400-15", ["editorial"]],
 ["dynabrade-52715", ["editorial"]],
 ["dynabrade-49135", ["editorial"]],
 ["dynabrade-53415", ["editorial"]],
 ["dynabrade-50210", ["editorial"]],
 ["dynabrade-51350", ["editorial"]],
 ["dynabrade-52418", ["editorial"]],
 ["shinano-si-1062", ["editorial"]],
 ["shinano-si-1108b", ["editorial"]],
 ["shinano-si-1310s", ["editorial"]],
 ["shinano-si-2001s", ["editorial"]],
 ["shinano-si-2009ex", ["editorial"]],
 ["shinano-si-2026", ["editorial"]],
 ["shinano-si-2108ex-2", ["editorial"]],
 ["shinano-si-2700l", ["editorial"]],
 ["shinano-si-3001am", ["editorial"]],
 ["shinano-si-4120a", ["editorial"]],
 ["shinano-si-4700b", ["editorial"]],
 ["shinano-si-5100a", ["editorial"]],
 ["pistolet-nettoyage-sip-02143", ["editorial"]],
 ["pistolet-nettoyage-vorel-81647", ["editorial"]],
 ["pistolet-nettoyage-yato-yt-23640", ["editorial"]],
 ["pistolet-peinture-hvlp-sip-02136", ["editorial"]],
 ["pistolet-peinture-hvlp-vorel-80902", ["editorial"]],
 ["pistolet-peinture-hvlp-yato-yt-2340", ["editorial"]],
 ["sableuse-sip-03868", ["editorial"]],
 ["chicago-pneumatic-cp3340-salavel", ["editorial"]],
 ["sableuse-schneider-airsystems-ssp-sav", ["editorial"]],
 ["pistolet-nettoyage-schneider-airsystems-spp-sm", ["editorial"]],
 ["biax-gaa-205", ["airflowBasis", "editorial", "fieldSources"]],
 ["pistolet-peinture-hvlp-hymair-ash-02", ["editorial", "specifications"]],
 ["pistolet-peinture-hvlp-draper-28367", ["connectorSize", "editorial", "evidence", "fieldSources", "specifications"]],
 ["pistolet-nettoyage-asturomec-n4-s-50172", ["editorial"]],
 ["sableuse-asturomec-ps-e-50090", ["editorial"]],
 ["pistolet-peinture-hvlp-astro-pneumatic-hvlp505", ["connectorSize", "editorial", "evidence", "fieldSources"]],
 ["pistolet-peinture-hvlp-sata-jet-x-hvlp-1-2-o-basic-1200138", ["editorial", "specifications"]],
 ["cle-a-chocs-taylor-pneumatic-t-6231-1-2-hd-impact-wrench-t-6231", ["connectorSize", "editorial", "evidence", "fieldSources"]],
 ["pistolet-peinture-hvlp-gav-record-2200-1-hvlp", ["demandExplanation", "editorial", "evidence", "specifications"]],
 ["pistolet-peinture-hvlp-prowin-k-528g-10", ["editorial"]],
 ["pistolet-peinture-hvlp-sagola-3300-gto-hvlp-buse-1-30-10141570", ["editorial"]],
 ["pistolet-peinture-hvlp-graco-airpro-gravity-289005-289005", ["editorial", "specifications"]],
 ["pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-12-lvb-135-797-412", ["demandExplanation", "editorial"]],
 ["pistolet-peinture-hvlp-binks-trophy-1465-08hv-c1s", ["demandExplanation", "editorial", "specifications"]],
 ["pistolet-nettoyage-anest-iwata-airgunsa-ae7", ["editorial"]],
 ["sableuse-anest-iwata-airgunsa-st-buse-5-mm", ["editorial"]],
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-17.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-17' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements éditoriaux non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement éditorial dupliqué.');
for (const row of rows.values()) {
 const fields = allowed.get(row.id);
 if (!fields || !['brand', 'model'].every(key => typeof row[key] === 'string' && row[key]) || !(row.mpn === null || (typeof row.mpn === 'string' && row.mpn))) throw new Error('Identité de revue absente.');
 for (const part of [row.before, row.after]) if (!part || typeof part !== 'object' || Array.isArray(part) || Object.keys(part).some(key => !fields.includes(key))) throw new Error('Champ hors du périmètre de revue.');
}

export function applyReviewedOctober17Amendment(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (!['brand', 'model', 'mpn'].every(key => (product[key] ?? null) === row[key])) throw new Error('Identité différente de la revue éditoriale.');
 const fields = allowed.get(product.id);
 const current = Object.fromEntries(fields.filter(key => Object.hasOwn(product, key)).map(key => [key, product[key]]));
 if (isDeepStrictEqual(current, row.after)) return product;
 if (!isDeepStrictEqual(current, row.before)) throw new Error('Base différente de la revue éditoriale ; comparaison nécessaire.');
 for (const key of fields) {
  if (Object.hasOwn(row.after, key)) product[key] = structuredClone(row.after[key]);
  else delete product[key];
 }
 return product;
}
