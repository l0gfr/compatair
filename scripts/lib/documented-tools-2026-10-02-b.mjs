const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const rounded = value => Number(value.toFixed(3));
const format = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const factors = { 'L/min': 1, 'L/s': 60, 'm3/min': 1000, cfm: 28.316846592, 'L/cycle': 1, 'ft3/cycle': 28.316846592 };
const positive = value => { if (!Number.isFinite(value) || value <= 0) throw new Error('Valeur technique positive requise'); return value; };
const pressureInBar = (value, unit) => unit === 'psi' ? rounded(value * .0689475729) : unit === 'MPa' ? rounded(value * 10) : unit === 'bar' ? value : NaN;

export function documentedConnectionFacts(row, source) {
 const facts = { specifications: [], limitations: [] };
 if (!source.contentType?.startsWith('text/html')) return facts;
 const cells = row.sourceTechnicalCells ?? [];
 const inlet = cells.filter(([label]) => /^airinlet(?:nptbsp|nptin|in)?$/.test(label.toLowerCase().replace(/[^a-z]/g, '')));
 const hoses = cells.filter(([label]) => /hose/i.test(label));
 const nominal = /^(?:\d+(?:\/\d+)?|[¼½¾])(?:\s*NPT|\s*BSP|[- ]?in[.]?|["”˝])?$/i;
 for (const [label, value] of [...inlet, ...hoses]) {
  if (!row.rawLine.includes(`${label}: ${value}`)) throw new Error('Cellule de raccordement absente de la ligne source');
  facts.specifications.push({ label: `Champ fabricant : ${label}`, value });
 }
 const inletValue = inlet[0]?.[1].trim();
 const inletFraction = inletValue?.match(/^(\d+)\/(\d+)/);
 const validInlet = nominal.test(inletValue ?? '') && (inletFraction ? Number(inletFraction[1]) > 0 && Number(inletFraction[2]) > 0 : !/^0(?:\D|$)/.test(inletValue));
 if (inlet.length === 1 && validInlet) facts.connectorSize = `${inlet[0][1]} (${inlet[0][0]})`;
 else if (inlet.length) facts.limitations.push('L’entrée d’air publiée ne fournit pas une dimension de raccordement interprétable sans clarification fabricant. Le libellé original reste visible.');
 const diameters = [];
 for (const [label, value] of hoses) {
  const normalized = label.toLowerCase().replace(/[^a-z]/g, '');
  // "Hose size" alone does not establish an inner diameter.
  if (!/hose.*(?:id|innerdiameter)/.test(normalized)) continue;
  let diameter;
  if (/mm$/.test(normalized) && /^\d+(?:\.\d+)?$/.test(value.trim())) diameter = Number(value);
  else if (/in$/.test(normalized)) {
   const match = value.trim().match(/^(\d+(?:\.\d+)?)(?:\/(\d+))?(?:[- ]?in[.]?|["”˝])?$/i);
   if (match && (match[2] === undefined || Number(match[2]) > 0)) diameter = rounded(Number(match[1]) / (match[2] === undefined ? 1 : Number(match[2])) * 25.4);
  }
  if (Number.isFinite(diameter) && diameter > 0 && diameter <= 100) diameters.push(diameter);
  else facts.limitations.push(`Le diamètre intérieur publié « ${value} » (${label}) n’est pas converti en une valeur de calcul.`);
 }
 if (diameters.length && diameters.every(value => value === diameters[0])) facts.recommendedHose = { innerDiameterMm: diameters[0] };
 else if (diameters.length) facts.limitations.push('Les diamètres intérieurs publiés diffèrent après conversion ; aucune valeur unique n’est retenue sans clarification.');
 return facts;
}

// The six measurement points below were checked against their exact primary documents.
// Global supply ceilings and average/free-speed conventions cannot create another point.
const reviewedMeasurementContracts = [
  {
    "sourceId": "oct2b-metabohpt-nr90-manual-pdf",
    "sourceHash": "57defa88fed01f027ef22ca41d56ffd67867d9e7cce0a381d48d3c39a906a86a",
    "mpn": "NR90AD(S1)",
    "page": 11,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "2.5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "oct2b-metabohpt-nr90-manual-pdf",
    "sourceHash": "57defa88fed01f027ef22ca41d56ffd67867d9e7cce0a381d48d3c39a906a86a",
    "mpn": "NR90AE(S1)",
    "page": 11,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "2.5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "oct2b-sealey-sa9231-html",
    "sourceHash": "9b4ea2231c20ced96e23b7cbf28f7f0efc279fb745f62f84953a7d00b678544d",
    "mpn": "SA9231",
    "page": 1,
    "pressureBar": 8.0,
    "pressureOriginal": 8.0,
    "pressureUnit": "bar",
    "flowOriginal": "380",
    "flowUnit": "L/min",
    "flowBasis": "unqualified"
  },
  {
    "sourceId": "oct2b-sealey-sa9232-html",
    "sourceHash": "cc65102d643c6ea129364c65e8e98c5c04440b77071572883bbaa831c584fea9",
    "mpn": "SA9232",
    "page": 1,
    "pressureBar": 8.0,
    "pressureOriginal": 8.0,
    "pressureUnit": "bar",
    "flowOriginal": "380",
    "flowUnit": "L/min",
    "flowBasis": "unqualified"
  },
  {
    "sourceId": "oct2b-sealey-sa9233-html",
    "sourceHash": "cbdcdcbb717657ef11d9ff5ff92fa4644342443b22c86bfd405c915e27b72bc2",
    "mpn": "SA9233",
    "page": 1,
    "pressureBar": 8.0,
    "pressureOriginal": 8.0,
    "pressureUnit": "bar",
    "flowOriginal": "380",
    "flowUnit": "L/min",
    "flowBasis": "unqualified"
  },
  {
    "sourceId": "oct2b-sealey-sa9252-html",
    "sourceHash": "247db288c6d2ad4e22b81d390b4385f7a0e1dfcb26e9aa196079e45bfdecc83b",
    "mpn": "SA9252",
    "page": 1,
    "pressureBar": 8.0,
    "pressureOriginal": 8.0,
    "pressureUnit": "bar",
    "flowOriginal": "580",
    "flowUnit": "L/min",
    "flowBasis": "unqualified"
  }
];

export function buildDocumentedToolsOctober2B(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-tools-2026-10-02-b' || snapshot.reviewedAt !== '2026-10-02' || snapshot.tools.length !== snapshot.toolCount || snapshot.toolCount !== 2000) throw new Error('Lot documentaire non reconnu');
 const sources = new Map(snapshot.sources.map(source => [source.id, source]));
 if (sources.size !== snapshot.sources.length) throw new Error('Source dupliquée');
 for (const source of sources.values()) {
  const url = new URL(source.url);
  const resolved = new URL(source.resolvedUrl);
  if (resolved.protocol !== 'https:' || resolved.username || resolved.password || !Number.isInteger(source.bytes) || source.bytes <= 0) throw new Error('Réponse source invalide');
  if (url.protocol !== 'https:' || url.username || url.password || !/^[a-f0-9]{64}$/.test(source.sha256) || !Number.isFinite(Date.parse(source.observedAt)) || !source.brands?.length) throw new Error('Provenance invalide');
 }
 const tables = new Map((snapshot.tables ?? []).map(table => [table.id, table]));
 const htmlTables = new Map((snapshot.htmlTables ?? []).map(table => [table.id, table]));
 const documentRows = new Map([...(snapshot.pdfRows ?? []), ...(snapshot.imageRows ?? []), ...(snapshot.technicalRows ?? [])].map(row => [row.pdfRowId ?? row.imageRowId ?? row.documentRowId, row]));
 const identities = new Set();
 return snapshot.tools.map(row => {
  const source = sources.get(row.sourceId);
  if (!source?.brands.includes(row.brand) || !source.allowedPressureScopes?.includes(row.pressureScope) || !source.allowedFlowBases?.includes(row.flowBasis) || !row.model || !row.mpn || !row.rawLine?.includes(row.mpnOriginal ?? row.mpn) || row.details.length < 2 || !Number.isInteger(row.page) || row.page < 1 || !['load', 'maximum', 'average', 'unqualified', 'free-speed', 'per-action', 'missing'].includes(row.flowBasis) || !['measurement', 'power-and-speed', 'not-established', 'operating-only'].includes(row.pressureScope)) throw new Error('Référence, page ou régime non revu');
  const identity = `${row.brand.toLowerCase()}:${row.mpn.toLowerCase()}`;
  if (identities.has(identity)) throw new Error('Référence fabricant dupliquée');
  identities.add(identity);
  if (row.pdfRowId || row.imageRowId || row.documentRowId) {
   const original = documentRows.get(row.pdfRowId ?? row.imageRowId ?? row.documentRowId);
   if (!original || ['sourceId', 'page', 'model', 'mpn', 'mpnOriginal', 'categoryId', 'pressureBar', 'pressureOriginal', 'pressureUnit', 'knownOperatingPressureBar', 'operatingPressureBasis', 'operatingPressureRange', 'flowOriginal', 'flowUnit', 'flowBasis', 'flowQuote', 'pressureScope', 'pressureQuote', 'rawLine', 'details', 'tableRowBox', 'secondarySources', 'sourceTechnicalCells', 'sourceTitle', 'sourceLimitations', 'withheldFlowReason'].some(key => JSON.stringify(original[key]) !== JSON.stringify(row[key]))) throw new Error('Ligne documentaire altérée');
  }
  if (row.tableId) {
   const table = tables.get(row.tableId), cell = table?.consumptionCells[row.column], identity = table?.identities[row.tableIdentityIndex];
   if (!table || table.sourceId !== row.sourceId || table.page !== row.page || !table.identityHeader.includes(row.mpn) || identity?.mpn !== row.mpn || identity?.model !== row.model || identity?.column !== row.column || row.column < 0 || cell?.replace('/', '|').split('|').at(-1).trim() !== row.flowOriginal || table.unit !== row.flowUnit || table.pressureScope !== row.pressureScope || table.pressureQuote !== row.pressureQuote || table.flowBasis !== row.flowBasis) throw new Error('Colonne technique ou portée documentaire altérée');
  }
  if (row.sourceTableId) {
   const table = htmlTables.get(row.sourceTableId), cells = table?.rows[row.sourceRowIndex];
   if (!table || JSON.stringify(table.headers) !== JSON.stringify(row.sourceColumns) || JSON.stringify(cells) !== JSON.stringify(row.sourceCells) || cells[0] !== row.mpn || cells.join(' ; ') !== row.rawLine || !table.headers.some((header, index) => header === row.flowQuote && cells[index] === row.flowOriginal)) throw new Error('Ligne ou colonne HTML altérée');
  }
  if (row.flowBasis === 'load' && !/loaded|under load|maximum|at max (?:power )?output|max[.]?\s*air|負荷時|Last/i.test(row.flowQuote) && !(row.categoryId === 'pistolet-peinture' && /gun inlet pressure during spraying/i.test(row.flowQuote))) throw new Error('Débit en charge non documenté');
  if (row.flowBasis === 'maximum' && !/maximum|maximale/i.test(row.flowQuote)) throw new Error('Consommation maximale non documentée');
  if (row.flowBasis === 'average' && !/average|avg[.]?|moyenne/i.test(row.flowQuote)) throw new Error('Moyenne non documentée');
  if (row.flowBasis === 'free-speed' && !/idling|free speed|no[ -]load|à vide/i.test(row.flowQuote)) throw new Error('Débit à vide non documenté');
  if (row.flowBasis === 'per-action' && (!['L/cycle', 'ft3/cycle'].includes(row.flowUnit) || !/cycle|shot|coup/i.test(row.flowQuote))) throw new Error('Volume par action non documenté');
  if (source.id === 'oct2b-rodcraft-catalog-pdf' && (source.sha256 !== 'c10fd37c2e1adf9ac34431eb523b1933644b83f1cec85b376d30cd77aab01ef3' || row.pressureScope !== 'operating-only' || row.operatingPressureBasis !== 'maximum' || row.knownOperatingPressureBar !== 6.3 || row.operatingPressureRange !== undefined || !row.pressureQuote.includes('incoming pressure of max. 6.3 bar'))) throw new Error('Convention Rodcraft : plafond d’entrée, point de mesure non établi');
  const measured = row.pressureScope === 'measurement' && row.pressureBar !== null;
  if (measured) {
   const reviewed = reviewedMeasurementContracts.find(point => point.sourceId === row.sourceId && point.mpn === row.mpn && point.page === row.page);
   if (!reviewed || reviewed.sourceHash !== source.sha256 || ['pressureBar','pressureOriginal','pressureUnit','flowOriginal','flowUnit','flowBasis'].some(key => JSON.stringify(reviewed[key]) !== JSON.stringify(row[key]))) throw new Error('Point de consommation non confirmé dans le document primaire revu');
   const declared = source.measurementRecords?.find(record => record.mpn === row.mpn && record.page === row.page);
   if (!declared || ['pressureOriginal','pressureUnit','pressureBar','flowOriginal','flowUnit','flowBasis','flowQuote','pressureQuote'].some(key => JSON.stringify(declared[key]) !== JSON.stringify(row[key]))) throw new Error('Point de mesure absent des déclarations revues de la source');
   positive(row.pressureBar);
   if (!/\d[\d.,]*\s*(?:bar|psi|MPa)/i.test(row.pressureQuote)) throw new Error('Pression numérique non documentée');
   if (row.pressureOriginal !== undefined) {
    const pressure = pressureInBar(row.pressureOriginal, row.pressureUnit);
    if (row.pressureBar !== pressure) throw new Error('Conversion de pression altérée');
   }
  } else if (row.pressureBar !== null) throw new Error('Pression de mesure non établie');
  if (!measured && row.knownOperatingPressureBar !== undefined) {
   if (/max/i.test(row.pressureQuote) && row.operatingPressureBasis !== 'maximum') throw new Error('Un plafond d’alimentation ne devient pas une pression nominale');
   const expected = row.pressureScope === 'power-and-speed' ? source.knownOperatingPressureBar : row.pressureScope === 'operating-only' ? pressureInBar(row.pressureOriginal, row.pressureUnit) : NaN;
   if (row.knownOperatingPressureBar !== expected) throw new Error('Pression de fonctionnement altérée');
  }
  let operatingRange;
  if (row.operatingPressureRange !== undefined) {
   const { min, max, unit } = row.operatingPressureRange;
   if (measured || row.pressureScope !== 'operating-only' || row.knownOperatingPressureBar !== undefined || !['bar', 'psi', 'MPa'].includes(unit) || min > max || !row.pressureQuote.includes(String(min)) || !row.pressureQuote.includes(String(max)) || !row.pressureQuote.toLowerCase().includes(unit.toLowerCase())) throw new Error('Plage de fonctionnement non documentée');
   operatingRange = { min: positive(pressureInBar(positive(min), unit)), max: positive(pressureInBar(positive(max), unit)) };
  }
  let flow = null;
  if (row.flowOriginal !== null) {
   if (!source.allowedFlowUnits?.includes(row.flowUnit) || !Object.hasOwn(factors, row.flowUnit) || !row.rawLine.includes(String(row.flowOriginal))) throw new Error('Consommation ou unité absente');
   flow = rounded(positive(Number(row.flowOriginal)) * factors[row.flowUnit]);
  } else if (row.flowBasis !== 'missing') throw new Error('Consommation absente');
  const primary = { id: `october2b-tools-${slug(source.id)}-p${row.page}`, sourceUrl: source.url + ((source.documentFormat === 'pdf' || source.contentType?.includes('pdf')) ? `#page=${row.page}` : ''), sourceLabel: source.sourceLabel + ((source.documentFormat === 'pdf' || source.contentType?.includes('pdf')) ? `, page PDF ${row.page}` : ''), sourceType: (source.documentFormat === 'pdf' || source.contentType?.includes('pdf')) ? 'manual' : 'manufacturer', sourceRole: 'primary', retrievedAt: source.observedAt.slice(0, 10), confidence: 'B', notes: `SHA-256 de la réponse source : ${source.sha256}. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir.` };
  const supplementary = (row.secondarySources ?? []).map(ref => {
   const secondary = sources.get(ref.sourceId);
   if (!secondary?.brands.includes(row.brand) || !Number.isInteger(ref.page) || ref.page < 1) throw new Error('Document complémentaire non identifié');
   return { ...primary, id: `october2b-tools-${slug(secondary.id)}-p${ref.page}`, sourceUrl: secondary.url + ((secondary.documentFormat === 'pdf' || secondary.contentType?.includes('pdf')) ? `#page=${ref.page}` : ''), sourceLabel: secondary.sourceLabel + ((secondary.documentFormat === 'pdf' || secondary.contentType?.includes('pdf')) ? `, page PDF ${ref.page}` : ''), sourceType: (secondary.documentFormat === 'pdf' || secondary.contentType?.includes('pdf')) ? 'manual' : 'manufacturer', retrievedAt: secondary.observedAt.slice(0, 10), notes: `SHA-256 de la réponse source : ${secondary.sha256}. Document complémentaire de la référence exacte, sans essai CompatAir.` };
  });
  const demandEvidenceIds = [primary.id, ...supplementary.map(evidence => evidence.id)];
  const connection = documentedConnectionFacts(row, source);
  const id = slug(`${row.categoryId}-${row.brand}-${row.model}${row.mpn !== row.model ? `-${row.mpn}` : ''}`), label = `${row.brand} ${row.model}${row.mpn !== row.model ? ` (réf. ${row.mpn})` : ''}`;
  const knownPressure = measured ? row.pressureBar : row.knownOperatingPressureBar;
  if (row.operatingPressureBasis !== undefined && (row.operatingPressureRange !== undefined || row.pressureScope !== 'operating-only' || !['maximum', 'nominal'].includes(row.operatingPressureBasis) || (row.operatingPressureBasis === 'maximum' && !/max/i.test(row.pressureQuote)))) throw new Error('Portée de pression d’alimentation non documentée');
  const range = operatingRange ?? (knownPressure ? measured ? { min: positive(knownPressure), typical: knownPressure, max: knownPressure } : row.operatingPressureBasis === 'maximum' ? { max: positive(knownPressure) } : { typical: positive(knownPressure) } : {});
  const missing = flow === null || !measured;
  const explanation = flow === null ? row.withheldFlowReason ?? 'Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.' : !measured ? 'La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.' : '';
  const demand = missing ? { demandModel: 'variable-volume', workingPressureBar: range, demandExplanation: explanation } : row.flowBasis === 'per-action' ? { demandModel: 'per-action', workingPressureBar: range, airPerActionLiters: flow, actionLabel: 'cycle de pose' } : { demandModel: 'fixed-flow', workingPressureBar: range, airflowLpm: { min: flow, typical: flow, max: flow }, ...(!['load', 'maximum'].includes(row.flowBasis) ? { airflowBasis: row.flowBasis } : {}) };
  const regime = { load: 'en charge', maximum: 'maximale', average: 'moyenne', unqualified: 'de régime non précisé', 'free-speed': 'à vide', 'per-action': 'par cycle' }[row.flowBasis];
  const summary = missing ? explanation : row.flowBasis === 'per-action' ? `Volume déclaré : ${format(flow)} L par cycle à ${format(row.pressureBar)} bar ; la cadence doit être renseignée.` : `Consommation ${regime} : ${format(flow)} L/min à ${format(row.pressureBar)} bar.`;
  const specifications = [...row.details.map(field => ({ ...field, evidenceIds: [primary.id] })), ...connection.specifications.map(field => ({ ...field, evidenceIds: [primary.id] })), { label: 'Portée de la pression dans la source', value: row.pressureQuote, evidenceIds: demandEvidenceIds }, ...(flow !== null ? [{ label: missing ? `Consommation ${regime}, hors calcul` : 'Consommation dans son unité originale', value: `${row.flowOriginal} ${row.flowUnit}`, evidenceIds: demandEvidenceIds }] : [])];
  return { id, slug: id, categoryId: row.categoryId, category: row.categoryId, label, brand: row.brand, model: row.model, mpn: row.mpn, ...demand, ...(connection.connectorSize ? { connectorSize: connection.connectorSize } : {}), ...(connection.recommendedHose ? { recommendedHose: connection.recommendedHose } : {}), confidence: 'B', image: { src: `/images/products/${id}.webp`, alt: `Repères techniques : ${label}`, sourceUrl: source.url, sourceLabel: 'Carte technique CompatAir, données déclarées par le fabricant' }, variant: { familyId: slug(`${row.brand}-${row.model}`), label: `Référence ${row.mpn}`, distinguishingAttributes: { reference: row.mpn, ...Object.fromEntries(row.details.slice(0, 2).map(field => [field.label, field.value])) } }, editorial: { overview: `${label}. ${summary} ${row.details.slice(0, 2).map(field => `${field.label} : ${field.value}.`).join(' ')}`, verifiedFacts: row.details.map(field => `${field.label} : ${field.value}.`), limitations: [missing ? explanation : row.flowBasis === 'maximum' ? 'La consommation maximale est déclarée dans les conventions du fabricant ; les exceptions explicites du modèle restent prioritaires.' : row.flowBasis === 'load' ? 'Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.' : row.flowBasis === 'per-action' ? 'Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.' : 'Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.', ...(row.pressureScope === 'power-and-speed' ? ['La pression de 6 bar est donnée pour la puissance et la vitesse ; son application à la consommation n’est pas supposée.'] : []), ...(row.sourceLimitations ?? []), ...connection.limitations, 'Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée.'] }, specifications, evidence: [primary, ...supplementary], fieldSources: { ...(connection.connectorSize ? { connectorSize: [primary.id] } : {}), ...(connection.recommendedHose ? { recommendedHose: [primary.id] } : {}), mpn: [primary.id], workingPressureBar: demandEvidenceIds, ...(missing ? { demandExplanation: [primary.id] } : row.flowBasis === 'per-action' ? { airPerActionLiters: demandEvidenceIds, actionLabel: demandEvidenceIds } : { airflowLpm: demandEvidenceIds, ...(demand.airflowBasis ? { airflowBasis: [primary.id] } : {}) }) }, notes: [summary] };
 });
}
