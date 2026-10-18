import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

// Preserve the original transcriptions. Only these exact, separately reviewed
// references and fields receive the dated amendment after reconstruction.
const allowed = new Map([
 ["pistolet-peinture-hvlp-hymair-ash-03", ["editorial"]],
 ["pistolet-nettoyage-asturomec-n4-s-super-50171", ["editorial"]],
 ["pistolet-peinture-hvlp-astro-pneumatic-hvlp507", ["editorial"]],
 ["pistolet-peinture-hvlp-sata-jet-x-hvlp-1-3-o-basic-1200211", ["editorial"]],
 ["sableuse-asturomec-ps-es-50091", ["editorial"]],
 ["cle-a-chocs-taylor-pneumatic-t-6231l-1-2-hd-impact-wrench-2-extended-anvil-t-6231l", ["editorial"]],
 ["pistolet-peinture-hvlp-gav-z3000", ["editorial"]],
 ["pistolet-peinture-hvlp-prowin-k-528g-12", ["editorial"]],
 ["pistolet-peinture-hvlp-sagola-3300-gto-hvlp-buse-1-40-10141555", ["editorial"]],
 ["pistolet-nettoyage-yato-yt-2374", ["editorial"]],
 ["pistolet-peinture-hvlp-graco-airpro-gravity-289006-289006", ["editorial"]],
 ["pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-13-lvb-135-797-413", ["demandExplanation", "editorial"]],
 ["pistolet-peinture-hvlp-sip-02138", ["editorial"]],
 ["pistolet-peinture-hvlp-vorel-80903", ["editorial"]],
 ["pistolet-peinture-hvlp-yato-yt-2341", ["editorial"]],
 ["sableuse-yato-yt-2375", ["editorial", "specifications"]],
 ["pistolet-peinture-hvlp-binks-trophy-1465-10hv-c1p", ["editorial", "specifications"]],
 ["pistolet-peinture-hvlp-meiji-f410-g14hvlp", ["editorial"]],
 ["pistolet-nettoyage-anest-iwata-airgunsa-p6", ["editorial"]],
 ["pistolet-peinture-asturo-bbs-hvlp-art-00198-buse-1-4-mm", ["editorial"]],
 ["pistolet-peinture-hvlp-ani-black-s-hvlp-buse-1-4", ["editorial"]],
 ["pistolet-peinture-prona-r-430-hvlp-12-buse-1-2-hvlp-gravity", ["editorial", "specifications", "workingPressureBar"]],
 ["sableuse-anest-iwata-airgunsa-st-buse-6-mm", ["editorial"]],
 ["sableuse-schneider-airsystems-ssp-strahlfix-staubfrei", ["editorial"]],
 ["cleco-11pthh353", ["editorial"]],
 ["cleco-19pca03q", ["airflowBasis", "editorial", "fieldSources"]],
 ["cleco-19raa04am2", ["airflowBasis", "editorial", "fieldSources"]],
 ["cleco-wt-2119-12", ["airflowBasis", "editorial", "fieldSources"]],
 ["master-power-mp4400-35", ["airflowBasis", "editorial", "fieldSources"]],
 ["chicago-pneumatic-cp3340-salavele", ["editorial"]],
 ["dynabrade-52716", ["editorial"]],
 ["dynabrade-56890", ["airflowBasis", "editorial", "fieldSources"]],
 ["dynabrade-50211", ["editorial"]],
 ["dynabrade-57400", ["editorial", "specifications"]],
 ["shinano-si-1065", ["editorial"]],
 ["shinano-si-1200b", ["editorial"]],
 ["shinano-si-1315s", ["editorial"]],
 ["shinano-si-2002ex-6", ["editorial"]],
 ["shinano-si-2108ex", ["editorial"]],
 ["shinano-si-2110s", ["editorial"]],
 ["shinano-si-2221", ["editorial"]],
 ["shinano-si-2700ls", ["editorial"]],
 ["shinano-si-3003a", ["editorial"]],
 ["shinano-si-4710", ["editorial"]],
 ["shinano-si-5200a", ["editorial"]],
 ["dynabrade-52435", ["editorial"]],
 ["biax-be-1005", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "fieldSources", "specifications"]],
 ["biax-gaa-209", ["airflowBasis", "editorial", "fieldSources"]],
 ["biax-gmd-3", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "fieldSources", "specifications"]],
 ["biax-hb-12-s", ["airflowBasis", "editorial", "fieldSources", "specifications"]],
 ["biax-md-100", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "fieldSources", "specifications"]],
 ["biax-plf-90", ["airflowBasis", "editorial", "fieldSources"]],
 ["biax-sard-820", ["airflowBasis", "editorial", "fieldSources", "specifications"]],
 ["deprag-305-3257ul", ["airflowBasis", "editorial", "fieldSources", "specifications"]],
 ["fiam-11sm10d", ["airflowBasis", "editorial", "fieldSources"]],
 ["fiam-15c2a-2cs", ["airflowBasis", "editorial", "fieldSources"]],
 ["fiam-csi12", ["airflowBasis", "editorial", "fieldSources"]],
 ["fiam-fde26p", ["airflowBasis", "editorial", "fieldSources"]],
 ["abac-formula-e-11-8-400-50", ["dutyCycle", "editorial", "fieldSources", "specifications"]],
 ["fiac-ax-153bd-dry-13-400-50-ce", ["editorial"]],
 ["airpress-aps-10-basic-364808-13", ["editorial", "evidence", "specifications"]],
 ["gentilin-c330-03", ["editorial", "evidence"]],
 ["aircraft-airbau-652-100-b-pro", ["editorial"]],
 ["black-decker-bd-195-24v-nk", ["editorial"]],
 ["nuair-b2800-100-ct2", ["editorial", "specifications"]],
 ["prebena-orkan-420", ["editorial", "evidence", "specifications"]],
 ["stanley-b-251e-9-100", ["editorial", "specifications"]],
 ["almig-combi-xp-18-500d", ["dutyCycle", "editorial", "fieldSources"]],
 ["boge-s-221-3-13-bar-insonorisation-standard", ["editorial", "specifications"]],
 ["chicago-pneumatic-cpi100-50-hz-13-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe", ["editorial"]],
 ["ingersoll-rand-r45n-50-hz-vitesse-variable-nirvana-standard-groupe-fixe-au-sol-sans-secheur-vitesse-variable", ["editorial"]],
 ["worthington-creyssensac-rlr-1000-50-hz-10-bar-full-feature-sur-reservoir-500-l", ["editorial"]],
 ["airpol-22", ["editorial", "fieldSources", "phase", "voltage"]],
 ["alup-allegretto-14", ["editorial", "fadCurve", "fieldSources", "oilType", "specifications"]],
 ["bambi-bb24", ["editorial", "evidence", "fieldSources", "voltage"]],
 ["ekom-dk50-10z-m", ["editorial", "fieldSources", "specifications", "voltage"]],
 ["mark-msa-15", ["editorial", "fieldSources", "specifications"]],
 ["mattei-blade-e-12", ["editorial", "fieldSources", "phase", "specifications", "voltage"]],
 ["champion-fm132", ["editorial"]],
 ["dalgakiran-d-10-500", ["editorial"]],
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-18.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-18' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements éditoriaux non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement éditorial dupliqué.');
for (const row of rows.values()) {
 const fields = allowed.get(row.id);
 if (!fields || !['brand', 'model'].every(key => typeof row[key] === 'string' && row[key]) || !(row.mpn === null || (typeof row.mpn === 'string' && row.mpn))) throw new Error('Identité de revue absente.');
 for (const part of [row.before, row.after]) if (!part || typeof part !== 'object' || Array.isArray(part) || Object.keys(part).some(key => !fields.includes(key))) throw new Error('Champ hors du périmètre de revue.');
}

export function applyReviewedOctober18Amendment(product) {
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
