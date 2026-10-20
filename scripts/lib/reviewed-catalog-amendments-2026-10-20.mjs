import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

// Preserve the original transcriptions. Only these exact, separately reviewed
// references and fields receive the dated amendment after reconstruction.
const allowed = new Map([
 ["pistolet-peinture-hvlp-hymair-h897", ["editorial", "evidence"]],
 ["pistolet-nettoyage-asturomec-ne-s-50086", ["editorial"]],
 ["pistolet-peinture-hvlp-astro-pneumatic-hvlpd508", ["editorial", "evidence"]],
 ["pistolet-peinture-hvlp-sata-jet-x-hvlp-1-4-o-basic-1200253", ["editorial", "evidence"]],
 ["sableuse-asturomec-ps-is-50316", ["editorial"]],
 ["cle-a-chocs-taylor-pneumatic-t-7231n-1-2-hd-impact-wrench-t-7231n", ["editorial", "evidence"]],
 ["pistolet-peinture-hvlp-prowin-k-528g-17", ["editorial"]],
 ["pistolet-peinture-hvlp-sagola-3300-gto-hvlp-buse-1-80-10141557", ["editorial"]],
 ["pistolet-peinture-hvlp-graco-airpro-pressure-288936-288936", ["editorial"]],
 ["pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-15-lvb-135-797-415", ["demandExplanation", "editorial"]],
 ["pistolet-peinture-hvlp-yato-yt-2357", ["editorial", "evidence"]],
 ["pistolet-peinture-hvlp-binks-trophy-1465-12hv-c1s", ["editorial"]],
 ["pistolet-peinture-hvlp-ani-black-s-hvlp-buse-1-7", ["editorial"]],
 ["sableuse-anest-iwata-airgunsa-st1s", ["editorial"]],
 ["cleco-120phh554", ["editorial", "evidence"]],
 ["cleco-19pca05q", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["cleco-19raa06ah2", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["master-power-mp4403-06", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["chicago-pneumatic-cp3349-salabele", ["editorial", "evidence"]],
 ["dynabrade-52718", ["editorial", "evidence"]],
 ["dynabrade-58435", ["editorial", "evidence"]],
 ["dynabrade-50570", ["editorial", "evidence"]],
 ["dynabrade-58501", ["editorial", "evidence"]],
 ["shinano-si-1140", ["editorial", "evidence"]],
 ["shinano-si-1217ex", ["editorial", "evidence"]],
 ["shinano-si-1357", ["editorial", "evidence"]],
 ["shinano-si-2005hd-6", ["editorial", "evidence"]],
 ["shinano-si-2201", ["editorial", "evidence"]],
 ["shinano-si-2400", ["editorial", "evidence"]],
 ["shinano-si-2741", ["editorial", "evidence"]],
 ["shinano-si-3003b", ["editorial", "evidence"]],
 ["shinano-si-3100", ["editorial", "evidence"]],
 ["shinano-si-4740", ["editorial", "evidence"]],
 ["shinano-si-5305-8a", ["editorial", "evidence"]],
 ["dynabrade-52538", ["editorial", "evidence"]],
 ["biax-be-805-h", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["biax-gaa-309", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["biax-hb-3", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["biax-mp-450", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["biax-ps-3", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["biax-sarh-820", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["deprag-325-3258ul", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["fiam-15c2a", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-fde26pc", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-len17u", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-len22", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-tly20-2", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-a-300", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-adr-100", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-ajc-16", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["abac-formula-e-5-5-8-400-50", ["dutyCycle", "editorial", "fieldSources", "specifications"]],
 ["fiac-ax-203bd-10-400-50-ce", ["editorial", "evidence"]],
 ["airpress-aps-10-basic-364808", ["editorial", "evidence", "specifications"]],
 ["gentilin-c330-24", ["editorial", "evidence"]],
 ["aircraft-airboy-186-of-e", ["editorial", "evidence", "specifications"]],
 ["black-decker-bd-195-5-my", ["editorial"]],
 ["nuair-b2800-30-cm2", ["editorial", "specifications"]],
 ["prebena-vitas-100-akku", ["editorial", "specifications"]],
 ["stanley-b-345e-9-100", ["editorial", "specifications"]],
 ["almig-combi-xp-4-270d", ["dutyCycle", "editorial", "fieldSources"]],
 ["boge-s-271-3-10-bar-insonorisation-standard", ["editorial", "specifications"]],
 ["chicago-pneumatic-cpi100-50-hz-8-5-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe", ["editorial"]],
 ["worthington-creyssensac-rlr-1000-50-hz-13-bar-full-feature-sur-reservoir-270-l", ["editorial"]],
 ["airpol-37", ["editorial", "fieldSources", "phase", "voltage"]],
 ["alup-allegretto-18", ["editorial", "fadCurve", "fieldSources", "oilType", "powerKw", "specifications"]],
 ["bambi-bb24v", ["editorial", "evidence", "fieldSources", "voltage"]],
 ["ekom-dk50-2v-50-m", ["editorial", "fieldSources", "specifications", "voltage"]],
 ["mark-msa-7-5", ["editorial", "fieldSources", "specifications"]],
 ["mattei-blade-s-12", ["editorial", "fieldSources", "phase", "specifications", "voltage"]],
 ["dalgakiran-d-2-100-d", ["editorial"]],
 ["hertz-frecon-plus-pm-15", ["editorial", "fadCurve", "specifications"]],
 ["ktc-compack-2-2-5l-trolley", ["editorial", "fieldSources", "phase", "specifications", "voltage"]],
 ["lupamat-lkd-61-555", ["editorial", "specifications"]],
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-20.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-20' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements éditoriaux non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement éditorial dupliqué.');
for (const row of rows.values()) {
 const fields = allowed.get(row.id);
 if (!fields || !['brand', 'model'].every(key => typeof row[key] === 'string' && row[key]) || !(row.mpn === null || (typeof row.mpn === 'string' && row.mpn))) throw new Error('Identité de revue absente.');
 for (const part of [row.before, row.after]) if (!part || typeof part !== 'object' || Array.isArray(part) || Object.keys(part).some(key => !fields.includes(key))) throw new Error('Champ hors du périmètre de revue.');
}

export function applyReviewedOctober20Amendment(product) {
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
