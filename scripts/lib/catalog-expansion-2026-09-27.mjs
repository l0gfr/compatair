import { createMultiBrandCompressor, createMultiBrandTool } from './multi-brand-catalog-import.mjs';

const same = (a, b, label) => { if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(`Transcription différente : ${label}`); };
const number = value => {
 const match = /^\s*(\d+(?:[.,]\d+)?)\s*$/.exec(String(value));
 if (!match) throw new Error('Nombre source absent ou ambigu');
 return Number(match[1].replace(',', '.'));
};
const unit = (value, suffix) => {
 if (typeof value !== 'string' || !value.endsWith(suffix)) throw new Error('Unité source absente');
 return number(value.slice(0, -suffix.length));
};
function rawRow(row) {
 const raw = JSON.parse(row.rawLine);
 same(row.mpn, raw.mpn, 'référence'); same(row.model, raw.model, 'modèle');
 if (!row.specifications || row.specifications.length < 2) throw new Error('Détails propres insuffisants');
 return raw;
}
function compressor(row) {
 const raw = rawRow(row), f = raw.fields;
 let tank, pressure, oil, intake, power;
 if (row.brand === 'Aircraft') {
  tank = unit(f['Pressure vessel capacity'], 'l'); pressure = unit(f['Maximum pressure'], 'bar');
  oil = { 'Oil-free': 'oil-free', 'Oil lubricated': 'oil' }[f['Oil-free / oil-lubricated']];
  intake = unit(f['Suction capacity approx.'], 'l/min');
  const motor = f['Motor power'] ?? f['Power output'];
  if (motor) power = unit(motor, 'kW');
 } else if (['Nuair', 'Stanley'].includes(row.brand)) {
  const c = raw.columns;
  if (!raw.tableRow.includes(row.mpn)) throw new Error('Référence absente de la ligne PDF');
  tank = c.tank === '-' ? 0 : number(c.tank); pressure = number(c.maxPressureBar);
  oil = c.lubricated === 'NO' ? 'oil-free' : ['YES', 'TAK / YES'].includes(c.lubricated) ? 'oil' : undefined;
  intake = number(c.intakeFlowLpm); power = number(c.powerKw);
  if (row.weightKg !== undefined || row.dimensions !== undefined) throw new Error('Emballage présenté comme machine nue');
 } else if (row.brand === 'Black+Decker') {
  same(row.mpn, f.Kod, 'code Black+Decker');
  tank = f.Zbiornik === '-' ? 0 : unit(f.Zbiornik, 'l'); pressure = number(f['Ciśnienie maks.'].split(' bar')[0]);
  oil = f.Smarowanie === 'NIE' ? 'oil-free' : undefined;
  power = unit(f.Moc.split('/')[1], 'kW');
  if (row.intakeFlowLpm !== undefined) throw new Error('Débit non qualifié transformé en aspiration');
 } else if (row.brand === 'PREBENA') {
  tank = number(f['Kessel (l)']); pressure = number(f['max. Druck (bar)']);
  oil = f.oilStatement === 'Ölfrei' ? 'oil-free' : undefined;
  intake = number(f['Ansaugleistung (l/min)']);
  if (f['Motor (V / W)'] && row.model !== 'VITAS 100-AKKU') power = number(f['Motor (V / W)'].split('/')[1]) / 1000;
 } else throw new Error('Marque compresseur hors lot');
 same(row.tankLiters, tank, 'cuve'); same(row.maxPressureBar, pressure, 'pression maximale');
 if (!oil) throw new Error('Lubrification non documentée');
 same(row.oilType, oil, 'lubrification'); same(row.intakeFlowLpm, intake, 'débit aspiré'); same(row.powerKw, power, 'puissance');
 same(row.fadCurve, [], 'aucune équivalence silencieuse entre remplissage et FAD');
 if (row.dutyCycle !== undefined || row.weightKg !== undefined || row.phase !== undefined) throw new Error('Caractéristique non revue');
}
function tool(row) {
 const raw = rawRow(row), f = raw.fields;
 let flow, pressure;
 if (row.brand === 'Bostitch') {
  const table = Object.fromEntries(raw.tables[1].filter(r => r[0]).map(r => [r[0], r.slice(1)]));
  const range = /^([\d.]+) - ([\d.]+) BAR$/.exec(table['Pression d’utilisation'][0]);
  if (!range) throw new Error('Plage Bostitch absente');
  same(row.demandModel, 'per-action', 'consommation par coup');
  same(row.airPerActionLiters, number(table['Consommation d’air, litres au coup à 5,6 bar'][0]), 'litres par coup');
  same(row.workingPressureBar, { min: number(range[1]), typical: 5.6, max: number(range[2]) }, 'pression par coup');
  if (row.airflowLpm !== undefined) throw new Error('Cadence implicite interdite');
  return;
 }
 if (row.brand === 'M7') {
  const air = /^[\d.]+ \(CFM\) \/ ([\d.]+) \(L\/min\)$/.exec(f['Avg. Air Consumption']);
  const bar = /^[\d.]+ \(PSI\) \/ ([\d.]+) \(bar\)$/.exec(f['Air Pressure']);
  if (!air || !bar) throw new Error('Conditions M7 absentes');
  flow = number(air[1]); pressure = number(bar[1]);
 } else if (row.brand === 'Aircraft') {
  flow = unit(f['Air requirement average, approx.'], 'l/min'); pressure = unit(f['Working pressure'], 'bar');
 } else if (row.brand === 'Mirka') {
  flow = number(f['Air consumption (l/min)']); pressure = number(f['Work pressure (bar)']);
 } else throw new Error('Marque outil hors lot');
 same(row.demandModel, 'fixed-flow', 'modèle de demande');
 same(row.airflowLpm, flow, 'consommation');
 same(row.workingPressureBar, { min: pressure, typical: pressure, max: pressure }, 'pression publiée');
 if (['M7', 'Aircraft'].includes(row.brand) && (!row.flowBasis.includes('moyenne') || !row.limitations.some(s => s.includes('usage continu')))) throw new Error('Régime moyen non explicité');
}
export function buildCatalogExpansion(compressorSnapshot, toolSnapshot) {
 for (const [snapshot, expected] of [[compressorSnapshot, 200], [toolSnapshot, 500]]) {
  if (snapshot.observedAt !== '2026-09-27' || snapshot.schemaVersion !== 1 || snapshot.rows.length !== expected) throw new Error('Périmètre du lot non revu');
  if (new Set(snapshot.sources.map(s => s.id)).size !== snapshot.sources.length) throw new Error('Source dupliquée');
 }
 const compressors = compressorSnapshot.rows.map(row => {
  compressor(row);
  const p = createMultiBrandCompressor(compressorSnapshot, row);
  p.confidence = 'B';
  p.editorial.overview = p.editorial.overview.replace('Aucun débit restitué relié à une pression de mesure n’est documenté', 'Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues');
  p.editorial.verifiedFacts[0] = 'Débit FAD exploitable pour un verdict : non établi dans les sources retenues.';
  p.editorial.verifiedFacts.push(...row.specifications.slice(0, 3).map(s => `${s.label} : ${s.value}.`));
  p.editorial.overview += ` ${row.specifications.slice(0, 2).map(s => `${s.label} : ${s.value}.`).join(' ')}`;
  return p;
 });
 const tools = toolSnapshot.rows.map(row => {
  tool(row);
  const p = createMultiBrandTool(toolSnapshot, row);
  if (row.demandModel === 'fixed-flow' && ['M7', 'Aircraft'].includes(row.brand)) {
   p.airflowBasis = 'average';
   p.fieldSources.airflowBasis = [p.evidence[0].id];
  }
  if (row.demandModel === 'fixed-flow') p.editorial.overview = `${row.brand} ${row.model}, référence ${row.mpn}. ${row.flowBasis} ${row.pressureBasis} ${row.specifications.slice(0, 2).map(s => `${s.label} : ${s.value}.`).join(' ')}`;
  return p;
 });
 const products = [...compressors, ...tools];
 const normalize = s => s.normalize('NFKD').replaceAll(/\p{Diacritic}/gu, '').toLowerCase().replaceAll(/[^a-z0-9]/g, '');
 for (const key of [p => p.id, p => `${normalize(p.brand)}:${normalize(p.mpn)}`, p => `${normalize(p.brand)}:${normalize(p.model)}`]) if (new Set(products.map(key)).size !== 700) throw new Error('Référence en double');
 return { compressors, tools };
}
