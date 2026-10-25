import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';

// Follow-up corrections preserve both the initial October 25 review and all
// manufacturer transcriptions. Only these exact identities and fields apply.
const allowed = new Map([
  [
    "pistolet-peinture-hvlp-astro-pneumatic-hvlpd512",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "pistolet-peinture-hvlp-sata-satajet-100-b-f-hvlp-1-7-145722",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "pistolet-peinture-hvlp-prowin-k-528g-28",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-0-5-mm",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "pistolet-peinture-asturo-bbs-hvlp-art-00198-buse-1-9-mm",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "pistolet-peinture-hvlp-ani-f1-n-super-i-hvlp-buse-1-2",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "shinano-si-2006s",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "shinano-si-3007",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "shinano-si-3101-6m",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "red-rooster-rrg-3611",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "ingersoll-rand-312ac4a",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "ingersoll-rand-77a25f107",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "ingersoll-rand-7p24l",
    [
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "pistolet-peinture-hvlp-sata-satajet-100-b-f-hvlp-1-9-145730",
    [
      "airflowLpm",
      "demandExplanation",
      "demandModel",
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-1-0-mm",
    [
      "airflowLpm",
      "demandExplanation",
      "demandModel",
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "shinano-si-3007m",
    [
      "airflowLpm",
      "demandExplanation",
      "demandModel",
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "red-rooster-rrg-3617k",
    [
      "airflowBasis",
      "editorial",
      "evidence",
      "fieldSources"
    ]
  ],
  [
    "almig-combi-xp-11-standalone",
    [
      "editorial",
      "evidence",
      "fadCurve",
      "fieldSources",
      "notes",
      "specifications"
    ]
  ],
  [
    "fiac-ax-203bd-dry-10-400-50-ce",
    [
      "editorial",
      "evidence",
      "specifications"
    ]
  ],
  [
    "fini-cube-4-0-10-270-es-z",
    [
      "evidence",
      "specifications"
    ]
  ],
  [
    "biax-bew-309-e",
    [
      "airflowBasis",
      "editorial",
      "evidence",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "biax-sbrd-820",
    [
      "editorial",
      "evidence",
      "specifications"
    ]
  ],
  [
    "dynabrade-53783",
    [
      "connectorSize",
      "demandExplanation",
      "editorial",
      "evidence",
      "fieldSources",
      "image",
      "recommendedHose",
      "specifications",
      "variant"
    ]
  ],
  [
    "dynabrade-58460",
    [
      "airflowLpm",
      "connectorSize",
      "demandExplanation",
      "demandModel",
      "editorial",
      "evidence",
      "fieldSources",
      "image",
      "recommendedHose",
      "specifications",
      "workingPressureBar"
    ]
  ],
  [
    "dynabrade-52518",
    [
      "airflowLpm",
      "demandExplanation",
      "demandModel",
      "editorial",
      "evidence",
      "fieldSources",
      "image",
      "specifications",
      "workingPressureBar"
    ]
  ],
  [
    "dynabrade-58502",
    [
      "demandExplanation",
      "editorial",
      "evidence",
      "fieldSources",
      "image",
      "specifications",
      "variant"
    ]
  ],
  [
    "fiac-ax-203bd-dry-13-400-50-ce",
    [
      "editorial",
      "evidence",
      "fadCurve",
      "fieldSources",
      "specifications"
    ]
  ],
  [
    "biax-bew-605",
    [
      "airflowBasis",
      "editorial",
      "evidence",
      "fieldSources"
    ]
  ]
]);
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-25-b.json', import.meta.url), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.reviewedAt !== '2026-10-25' || !Array.isArray(snapshot.rows) || snapshot.rows.length !== allowed.size) throw new Error('Amendements de suivi non reconnus.');
const rows = new Map(snapshot.rows.map(row => [row.id, row]));
if (rows.size !== allowed.size) throw new Error('Amendement de suivi dupliqué.');
for (const row of rows.values()) {
 const fields = allowed.get(row.id);
 if (!fields || !isDeepStrictEqual(row.fields, fields) || !['brand', 'model'].every(key => typeof row[key] === 'string' && row[key]) || !(row.mpn === null || (typeof row.mpn === 'string' && row.mpn))) throw new Error('Identité de suivi absente.');
 for (const part of [row.before, row.after]) if (!part || typeof part !== 'object' || Array.isArray(part) || Object.keys(part).some(key => !fields.includes(key))) throw new Error('Champ hors du périmètre du suivi.');
 if (!isDeepStrictEqual([...new Set([...Object.keys(row.before), ...Object.keys(row.after)])].sort(), [...fields].sort())) throw new Error('Champs de suivi incomplets.');
}
function matches(product, row, state) {
 return ['brand', 'model', 'mpn'].every(key => (product[key] ?? null) === row[key]) && row.fields.every(key => Object.hasOwn(product, key) === Object.hasOwn(row[state], key) && (!Object.hasOwn(row[state], key) || isDeepStrictEqual(product[key], row[state][key])));
}
function project(product, row, state) {
 for (const key of row.fields) {
  if (Object.hasOwn(row[state], key)) product[key] = structuredClone(row[state][key]);
  else delete product[key];
 }
 return product;
}
export function applyReviewedOctober25FollowupAmendment(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (!['brand', 'model', 'mpn'].every(key => (product[key] ?? null) === row[key])) throw new Error('Identité différente du suivi.');
 if (matches(product, row, 'after')) return product;
 if (!matches(product, row, 'before')) throw new Error('Base différente du suivi ; comparaison nécessaire.');
 return project(product, row, 'after');
}
// Historical tests retain their original assertions. Current records, runtime
// projections and this exact reversible boundary have their own follow-up tests.
export function beforeOctober25Followup(product) {
 const row = rows.get(product.id);
 if (!row) return product;
 if (!matches(product, row, 'after')) throw new Error('Historical follow-up field drift: ' + product.id);
 return project(structuredClone(product), row, 'before');
}
