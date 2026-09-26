import { createMultiBrandCompressor, createMultiBrandTool } from './multi-brand-catalog-import.mjs';

const equal = (a, b, message) => { if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(message); };
const number = (value) => {
 const match = /^\s*(\d+(?:[.,]\d+)?)/.exec(String(value));
 if (!match) throw new Error('Valeur numérique source absente');
 return Number(match[1].replace(',', '.'));
};
function validateCompressor(row) {
 const raw = JSON.parse(row.rawLine), f = raw.fields;
 equal(row.mpn, raw.mpn, 'Référence différente de la transcription');
 if (row.brand === 'ABAC') {
  equal(row.maxPressureBar, number(f['Max Working Pressure (bar)']), 'Pression ABAC différente');
  equal(row.tankLiters, number(f['Vessel size (lt)']), 'Cuve ABAC différente');
  equal(row.fadCurve, f['FAD capacity (l/min)'] ? [{ pressureBar: row.maxPressureBar, litersPerMinute: number(f['FAD capacity (l/min)']) }] : [], 'FAD ABAC non documenté');
  if (row.oilType !== 'oil' || !(number(f['Oil capacity']) > 0)) throw new Error('Lubrification ABAC absente');
 } else if (row.brand === 'Airpress') {
  equal(row.maxPressureBar, number(f['Pression maximale (bar)']), 'Pression Airpress différente');
  equal(row.tankLiters, f['Capacité de la cuve (L)'] ? number(f['Capacité de la cuve (L)']) : f["Réservoir d'air"] === 'Non' ? 0 : null, 'Cuve Airpress non établie');
  equal(row.fadCurve, [], 'La pression du débit Airpress n’est pas documentée');
  equal(row.oilType, f['Sans huile'] === 'Oui' ? 'oil-free' : f['Sans huile'] === 'Non' ? 'oil' : null, 'Lubrification Airpress non établie');
 } else if (row.brand === 'Gentilin') {
  equal(row.maxPressureBar, number(f['Maximum pressure (bar)']), 'Pression Gentilin différente');
  equal(row.tankLiters, number(f['Tank capacity (lt)']), 'Cuve Gentilin différente');
  const curve = Object.entries(f).flatMap(([k, v]) => {
   const m = /^Air Delivery \(L\/min @(\d+) bar\)$/.exec(k);
   return m && v !== '-' ? [{ pressureBar: Number(m[1]), litersPerMinute: number(v) }] : [];
  }).sort((a, b) => a.pressureBar - b.pressureBar);
  equal(row.fadCurve, curve, 'FAD Gentilin différent des pressions publiées');
  if (row.oilType !== 'oil-free' || !row.fieldEvidence?.oilType?.length) throw new Error('Preuve de lubrification Gentilin absente');
 } else throw new Error('Fabricant compresseur hors lot');
 if (row.dutyCycle !== undefined) {
  const duty = row.brand === 'Gentilin' ? number(f['Duty cycle'].split(' ')[1]) / 100 : number(f['Cycle de service (% marche/arrêt)'].split('/')[0]) / 100;
  equal(row.dutyCycle, duty, 'Taux de marche différent de la source');
 }
}
function validateTool(row) {
 if (!row.specifications || row.specifications.length < 2) throw new Error('Caractéristiques distinctives insuffisantes');
 const raw = row.rawLine.startsWith('{') ? JSON.parse(row.rawLine) : null;
 let flow, pressure;
 if (row.brand === 'Fiam') {
  pressure = 6.3;
  if (raw) {
   equal(row.mpn, raw.fields.Code, 'Référence Fiam différente');
   equal(row.model, raw.fields.Model, 'Modèle Fiam différent');
   flow = number(raw.fields['Air consumption (l/s)']) * 60;
  } else {
   const reviewed = { '116514109': 600, '114820112': 360, '114820522': 360, '114814590': 420 };
   flow = reviewed[row.mpn];
   if (!row.rawLine.startsWith(`${row.model} ${row.mpn} `)) throw new Error('Ligne Fiam différente');
  }
 } else if (row.brand === 'DEPRAG') {
  equal(row.mpn, raw.mpn, 'Référence DEPRAG différente');
  const parts = raw.rawTable.partNumber.split('Part no.')[1].trim().split(/\s+/);
  const index = parts.indexOf(row.mpn);
  const flows = [...raw.rawTable.airConsumption.split('cfm')[1].matchAll(/([\d.]+)\s*\/\s*([\d.]+)/g)];
  if (index < 0 || !flows[index]) throw new Error('Colonne DEPRAG absente');
  flow = Number(flows[index][1]) * 1000; pressure = 6.3;
 } else if (['Yokota', 'Toku', 'Red Rooster'].includes(row.brand)) {
  equal(row.mpn, raw.mpn, 'Référence Yokota différente');
  flow = Math.max(...(raw.flowValuesLs ?? [raw.flowLs])) * 60;
  pressure = raw.flowRegime === 'max-load-free' ? 6 : 6.3;
  if (raw.flowRegime === 'max-load-free' && (row.workingPressureBar.min !== 5 || raw.page !== 17)) throw new Error('Plage Yokota non revue');
 } else if (row.brand === 'RUPES') {
  equal(row.mpn, raw.models[raw.modelIndex], 'Colonne RUPES différente');
  flow = Number(raw.flowLpm[raw.modelIndex]); pressure = 6.2;
 } else if (row.brand === 'Nitto Kohki') {
  equal(row.mpn, raw.model, 'Référence Nitto différente');
  flow = raw.airConsumptionM3Min * 1000; pressure = 6;
 } else if (row.brand === 'BIAX') {
  pressure = 6;
  if (raw.fields) {
   equal(row.mpn, raw.fields['Order number'], 'Référence BIAX différente');
   flow = number(raw.fields['Air consumption [l/min]']);
  } else {
   if (!raw.mpns.map(x => x.replaceAll(' ', '')).includes(row.mpn)) throw new Error('MPN BIAX absent du tableau');
   flow = Number(raw.airflowLpm[raw.columnIndex]);
  }
 } else if (row.brand === 'Ingersoll Rand') {
  pressure = 6.2;
  flow = row.model.startsWith('M2') ? Math.max(...row.rawLine.match(/(19\.8)\s*\/\s*([\d.]+)/).slice(1).map(Number)) * 60 : Number(row.rawLine.trim().split(/\s+/).at(-1)) * 28.316846592;
 } else throw new Error('Fabricant outil hors lot');
 equal(row.airflowLpm, Math.round(flow * 1000) / 1000, 'Conversion de débit différente de la transcription');
 equal(row.workingPressureBar.typical, pressure, 'Pression de comparaison non documentée');
 equal(row.workingPressureBar.max, pressure, 'Pression maximale du profil différente');
 equal(row.workingPressureBar.min, raw?.flowRegime === 'max-load-free' ? 5 : pressure, 'Pression minimale du profil différente');
}
export function buildTechnicalExpansion(compressorSnapshot, toolSnapshot) {
 if (compressorSnapshot.rows.length !== 500 || toolSnapshot.rows.length !== 1500) throw new Error('Périmètre du lot technique modifié');
 const compressors = compressorSnapshot.rows.map(row => {
  validateCompressor(row);
  const product = createMultiBrandCompressor(compressorSnapshot, row);
  if (!product.fadCurve.length) product.confidence = 'B';
  product.editorial.verifiedFacts = product.editorial.verifiedFacts.map(fact => fact.replace('Masse nette publiée', 'Masse publiée'));
  if (row.brand === 'Airpress') product.specifications = product.specifications.map(spec => spec.label === 'Poids' ? { ...spec, label: 'Masse publiée (base non précisée)' } : spec);
  if (row.idSuffix) product.variant = { familyId: product.id.slice(0, -row.idSuffix.length - 1), label: `Référence ${row.mpn}`, distinguishingAttributes: { reference: row.mpn } };
  return product;
 });
 const tools = toolSnapshot.rows.map(row => { validateTool(row); const product = createMultiBrandTool(toolSnapshot, row);
  const hose = row.specifications.find(spec => spec.label === 'Diamètre intérieur de flexible conseillé');
  if (hose) {
   const match = /^(\d+(?:[.,]\d+)?) mm$/.exec(hose.value);
   if (!match) throw new Error('Diamètre intérieur de flexible non reconnu');
   product.recommendedHose = { innerDiameterMm: Number(match[1].replace(',', '.')) };
   product.fieldSources.recommendedHose = [product.evidence[0].id];
  }
  const connector = row.specifications.find(spec => spec.label === 'Raccord pneumatique');
  if (connector) { product.connectorSize = connector.value; product.fieldSources.connectorSize = [product.evidence[0].id]; }
  return product; });
 const products = [...compressors, ...tools];
 for (const key of [p => p.id, p => p.slug, p => `${p.brand}|${p.mpn}`]) if (new Set(products.map(key)).size !== products.length) throw new Error('Référence en double dans le lot technique');
 return { compressors, tools };
}
