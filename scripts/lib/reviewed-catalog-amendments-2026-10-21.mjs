import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

// Preserve the original transcriptions. Only these exact, separately reviewed
// references and fields receive the dated amendment after reconstruction.
const allowed = new Map([
 ["pistolet-peinture-hvlp-hymair-s970g", ["editorial", "evidence"]],
 ["pistolet-nettoyage-asturomec-profi-50005", ["editorial", "evidence"]],
 ["pistolet-peinture-hvlp-astro-pneumatic-hvlpd510", ["editorial", "evidence"]],
 ["pistolet-peinture-hvlp-sata-satajet-100-b-f-hvlp-1-4-146373", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "fieldSources", "notes"]],
 ["sableuse-asturomec-ps-s-50212", ["editorial"]],
 ["cle-a-chocs-taylor-pneumatic-t-7231nl-1-2-hd-impact-wrench-2-extended-anvil-t-7231nl", ["editorial", "evidence"]],
 ["pistolet-peinture-hvlp-prowin-k-528g-20", ["editorial"]],
 ["pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-20-10142504", ["editorial"]],
 ["pistolet-peinture-hvlp-graco-airpro-pressure-288937-288937", ["editorial", "evidence"]],
 ["pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-18-lvb-135-797-418", ["demandExplanation", "editorial"]],
 ["pistolet-peinture-hvlp-binks-trophy-1465-14hv-c1p", ["editorial"]],
 ["pistolet-peinture-hvlp-ani-black-s-hvlp-buse-1-9", ["editorial"]],
 ["cleco-120pthh304", ["editorial", "evidence"]],
 ["cleco-19pca06q", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["cleco-19raa06ah3", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["chicago-pneumatic-cp3349-salavade", ["editorial", "evidence"]],
 ["dynabrade-53783", ["editorial", "evidence", "specifications"]],
 ["dynabrade-58460", ["editorial", "evidence"]],
 ["dynabrade-52518", ["editorial", "evidence"]],
 ["dynabrade-58502", ["editorial", "evidence"]],
 ["shinano-si-1161", ["editorial", "evidence"]],
 ["shinano-si-1218ex", ["editorial", "evidence"]],
 ["shinano-si-1365", ["editorial", "evidence"]],
 ["shinano-si-2005hd", ["editorial", "evidence"]],
 ["shinano-si-2202-2", ["editorial", "evidence"]],
 ["shinano-si-2405", ["editorial", "evidence"]],
 ["shinano-si-2800", ["editorial", "evidence"]],
 ["shinano-si-3003bm", ["editorial", "evidence"]],
 ["shinano-si-3100m", ["editorial", "evidence"]],
 ["shinano-si-5305a", ["editorial", "evidence", "specifications"]],
 ["biax-be-805", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["biax-gaa-313", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["biax-hbh-200", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["biax-sarh-830", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["deprag-344-140-31", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-15c2a30-2cs", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-fde33p", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-len42", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["fiam-smles135", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-ach-16", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-adr-65", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-al-55a", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-aps-125", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-b-10d", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-jc-16", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-ls-10", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["nitto-kohki-mys-20l", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["nitto-kohki-ssw-110", ["airflowBasis", "editorial", "evidence", "fieldSources", "specifications"]],
 ["red-rooster-10rds-2500", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["red-rooster-rr-02sc", ["airflowBasis", "editorial", "evidence", "fieldSources"]],
 ["ingersoll-rand-170pg-cs", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "evidence", "fieldSources", "image", "specifications", "workingPressureBar"]],
 ["ingersoll-rand-170pg", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "evidence", "fieldSources", "image", "specifications", "workingPressureBar"]],
 ["ingersoll-rand-312ac4a", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "evidence", "fieldSources", "image", "specifications", "workingPressureBar"]],
 ["ingersoll-rand-77a25f107", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "evidence", "fieldSources", "image", "specifications", "workingPressureBar"]],
 ["ingersoll-rand-7p24l", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "evidence", "fieldSources", "image", "specifications", "workingPressureBar"]],
 ["abac-formula-e-7-5-10-400-50", ["dutyCycle", "editorial", "fieldSources", "specifications"]],
 ["fiac-ax-203bd-13-400-50-ce", ["editorial", "evidence"]],
 ["airpress-aps-10-basic-combi-10-bar-10-ch-7-5-kw-996l-min-500-l", ["editorial", "evidence", "specifications"]],
 ["gentilin-c330-50", ["editorial", "evidence"]],
 ["aircraft-airboy-262-e", ["editorial", "evidence", "voltage"]],
 ["black-decker-bd-195-6-nk", ["editorial"]],
 ["nuair-b2800-30-ct2", ["editorial", "specifications"]],
 ["prebena-vitas-45", ["editorial", "specifications"]],
 ["stanley-b-345e-9-50", ["editorial", "specifications"]],
 ["almig-combi-xp-6-270d", ["dutyCycle", "editorial", "fieldSources"]],
 ["boge-s-271-3-7-5-bar-insonorisation-standard", ["editorial", "specifications"]],
 ["chicago-pneumatic-cpi100-60-hz-10-3-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe", ["editorial"]],
 ["worthington-creyssensac-rlr-1000-50-hz-13-bar-full-feature-sur-reservoir-500-l", ["editorial"]],
 ["airpol-45", ["editorial", "fieldSources", "phase", "voltage"]],
 ["alup-allegretto-2", ["editorial", "specifications"]],
 ["bambi-bb50d", ["editorial", "evidence", "fieldSources", "specifications", "variant", "voltage"]],
 ["ekom-dk50-2v-50", ["editorial", "fieldSources", "specifications", "voltage"]],
 ["mark-msm-2-2-ivr", ["editorial", "fieldSources"]],
 ["mattei-blade-s-8", ["editorial", "fieldSources", "phase", "specifications", "voltage"]],
 ["dalgakiran-d-3-200-d", ["editorial"]],
 ["hertz-frecon-plus-pm-18", ["editorial", "fadCurve", "specifications"]],
 ["ktc-compack-2-270l-vertical", ["editorial", "fieldSources", "phase", "specifications", "voltage"]],
 ["lupamat-lkd-62-553-a", ["editorial", "specifications"]],
 ["sil-air-100-24-v", ["editorial", "fieldSources", "voltage"]],
 ["ingersoll-rand-g1a120rs418", ["airflowLpm", "demandExplanation", "demandModel", "editorial", "evidence", "fieldSources", "image", "specifications", "workingPressureBar"]],
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-21.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-21' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements éditoriaux non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement éditorial dupliqué.');
for (const row of rows.values()) {
 const fields = allowed.get(row.id);
 if (!fields || !['brand', 'model'].every(key => typeof row[key] === 'string' && row[key]) || !(row.mpn === null || (typeof row.mpn === 'string' && row.mpn))) throw new Error('Identité de revue absente.');
 for (const part of [row.before, row.after]) if (!part || typeof part !== 'object' || Array.isArray(part) || Object.keys(part).some(key => !fields.includes(key))) throw new Error('Champ hors du périmètre de revue.');
}

export function applyReviewedOctober21Amendment(product) {
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
