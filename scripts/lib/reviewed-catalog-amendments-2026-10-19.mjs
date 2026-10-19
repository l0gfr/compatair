import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

// Preserve the original transcriptions. Only these exact, separately reviewed
// references and fields receive the dated amendment after reconstruction.
const allowed = new Map([
 ["pistolet-peinture-hvlp-hymair-h891", ["editorial", "evidence"]],
 ["pistolet-nettoyage-asturomec-ne-50085", ["editorial"]],
 ["pistolet-peinture-hvlp-astro-pneumatic-hvlp509", ["editorial", "evidence"]],
 ["pistolet-peinture-hvlp-sata-jet-x-hvlp-1-4-i-basic-1200534", ["editorial", "evidence"]],
 ["sableuse-asturomec-ps-i-50314", ["editorial"]],
 ["cle-a-chocs-taylor-pneumatic-t-6749-1-2-sd-impact-wrench-t-6749", ["editorial", "evidence"]],
 ["pistolet-peinture-hvlp-prowin-k-528g-14", ["editorial"]],
 ["pistolet-peinture-hvlp-sagola-3300-gto-hvlp-buse-1-60-10141556", ["editorial"]],
 ["pistolet-peinture-hvlp-graco-airpro-pressure-288935-288935", ["editorial"]],
 ["pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-14-lvb-135-797-414", ["demandExplanation", "editorial"]],
 ["pistolet-peinture-hvlp-yato-yt-2346", ["editorial", "evidence"]],
 ["sableuse-yato-yt-2376", ["editorial", "evidence"]],
 ["pistolet-peinture-hvlp-binks-trophy-1465-10hv-c1s", ["editorial"]],
 ["pistolet-peinture-hvlp-meiji-f410-g15hvlp", ["editorial"]],
 ["pistolet-nettoyage-anest-iwata-airgunsa-pl6", ["editorial"]],
 ["pistolet-peinture-asturo-bbs-hvlp-art-00198-buse-1-7-mm", ["editorial"]],
 ["pistolet-peinture-hvlp-ani-black-s-hvlp-buse-1-5", ["editorial"]],
 ["pistolet-peinture-prona-r-430-hvlp-13-buse-1-3-hvlp-gravity", ["editorial"]],
 ["sableuse-anest-iwata-airgunsa-st1", ["editorial"]],
 ["sableuse-schneider-airsystems-ssp-strahlfix", ["editorial"]],
 ["cleco-11pthh35q", ["editorial", "evidence"]],
 ["cleco-19pca04q", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["cleco-19raa05am2", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["cleco-wt-2120-12", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["master-power-mp4403-05", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["chicago-pneumatic-cp3340-salavet", ["editorial", "evidence"]],
 ["dynabrade-52717", ["editorial", "evidence"]],
 ["dynabrade-56894", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["dynabrade-50561", ["editorial", "evidence"]],
 ["dynabrade-58500", ["editorial", "evidence"]],
 ["shinano-si-1070", ["editorial", "evidence"]],
 ["shinano-si-1205b", ["editorial", "evidence"]],
 ["shinano-si-1355", ["editorial", "evidence"]],
 ["shinano-si-2002ex", ["editorial", "evidence"]],
 ["shinano-si-2201-2", ["editorial", "evidence"]],
 ["shinano-si-2224s", ["editorial", "evidence"]],
 ["shinano-si-2740", ["editorial", "evidence"]],
 ["shinano-si-3003am", ["editorial", "evidence"]],
 ["shinano-si-3004rm", ["editorial", "evidence"]],
 ["shinano-si-4730", ["editorial", "evidence"]],
 ["shinano-si-5300a", ["editorial", "evidence"]],
 ["dynabrade-52439", ["editorial", "evidence"]],
 ["biax-be-309", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["biax-gaa-305", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["biax-hb-15-1", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["biax-mp-300", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["biax-ps-2-plus", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["biax-sard-830", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["deprag-305-4257ul", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["fiam-15c2a-ft", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-9sm03dt", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-csi12p1", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-fde26pa", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-len17", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-mas8", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-pm1", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-tfs60", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-tls12", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-0-5-mm", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "fieldSources", "specifications"]],
 ["pistolet-peinture-anest-iwata-airgunsa-az3-hte2-hvlp-buse-1-3-hvlp", ["demandExplanation", "editorial", "specifications", "workingPressureBar"]],
 ["abac-formula-e-5-5-10-400-50", ["dutyCycle", "editorial", "fieldSources", "specifications"]],
 ["fiac-ax-153bd-dry-8-400-50-ce", ["editorial"]],
 ["airpress-aps-10-basic-364808-8", ["editorial", "evidence", "specifications"]],
 ["gentilin-c330-100", ["editorial", "evidence"]],
 ["aircraft-airboy-131-of-e", ["editorial", "evidence", "specifications"]],
 ["black-decker-bd-195-5-my-t", ["editorial"]],
 ["nuair-b2800-150-cm2", ["editorial", "specifications"]],
 ["prebena-pioneer-210", ["editorial", "specifications"]],
 ["stanley-b-251e-9-50", ["editorial", "specifications"]],
 ["almig-combi-xp-22-500d", ["dutyCycle", "editorial", "fieldSources"]],
 ["boge-s-221-3-7-5-bar-insonorisation-standard", ["editorial", "specifications"]],
 ["chicago-pneumatic-cpi100-50-hz-7-5-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe", ["editorial"]],
 ["worthington-creyssensac-rlr-1000-50-hz-10-bar-pack-au-sol", ["editorial"]],
 ["airpol-30", ["editorial", "fieldSources", "phase", "voltage"]],
 ["alup-allegretto-15", ["editorial", "fadCurve", "fieldSources", "oilType", "specifications"]],
 ["bambi-bb24d", ["editorial", "evidence", "fieldSources", "specifications", "variant", "voltage"]],
 ["ekom-dk50-10z", ["editorial", "fieldSources", "specifications", "voltage"]],
 ["mark-msa-5-5", ["editorial", "fieldSources", "specifications"]],
 ["mattei-blade-e-8", ["editorial", "fieldSources", "phase", "specifications", "voltage"]],
 ["champion-fm90", ["editorial", "fieldSources", "voltage"]],
 ["dalgakiran-d-15-500", ["editorial"]],
 ["hertz-frecon-plus-pm-11", ["editorial", "fadCurve", "specifications"]],
 ["jun-air-6-25", ["editorial", "evidence", "fieldSources", "variant", "voltage"]],
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-19.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-19' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements éditoriaux non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement éditorial dupliqué.');
for (const row of rows.values()) {
 const fields = allowed.get(row.id);
 if (!fields || !['brand', 'model'].every(key => typeof row[key] === 'string' && row[key]) || !(row.mpn === null || (typeof row.mpn === 'string' && row.mpn))) throw new Error('Identité de revue absente.');
 for (const part of [row.before, row.after]) if (!part || typeof part !== 'object' || Array.isArray(part) || Object.keys(part).some(key => !fields.includes(key))) throw new Error('Champ hors du périmètre de revue.');
}

export function applyReviewedOctober19Amendment(product) {
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
