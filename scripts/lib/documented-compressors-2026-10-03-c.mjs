import { createHash } from 'node:crypto';

const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const sha = value => createHash('sha256').update(value).digest('hex');
const fmt = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const parse = value => { if (typeof value !== 'string' || !/^\d+(?:[.,]\d+)?$/.test(value)) throw new Error('Cellule décimale requise'); return Number(value.replace(',', '.')); };
const quantum = value => 10 ** -(value.replace(',', '.').split('.')[1]?.length ?? 0);
const factors = { 'l/s': 60, 'm3/h': 1000 / 60, 'l/min': 1, cfm: 28.316846592, SCFM: 28.316846592 };
const units = { 'l/s': 'L/s', 'm3/h': 'm³/h', 'l/min': 'L/min', cfm: 'cfm', SCFM: 'SCFM' };
const psiToBar = 0.06894757293168361;
const fixedPressure = { 7.5: 7, 8.5: 8, 10: 9.5, 13: 12.5 };
const layouts = {
 'atlas-ga-small': { sourceId: 'atlas-ga5-11', brand: 'Atlas Copco', page: 6, table: 0, maximum: 1, flow: 3, unit: 'l/s', power: 6, frequency: 50, tanks: [0, 270, 500], variable: false, checks: [[4, 'm3/h'], [5, 'cfm']] },
 'atlas-ga-medium': { sourceId: 'atlas-ga15-30-2023', brand: 'Atlas Copco', page: 2, table: 0, maximum: 1, flow: 5, unit: 'l/s', power: 8, frequency: 50, tanks: [0, 500], variable: false, checks: [[6, 'm3/h'], [7, 'cfm']] },
 'atlas-g': { sourceId: 'atlas-ga11-37', brand: 'Atlas Copco', page: 10, table: 0, maximum: 1, flow: 5, unit: 'l/s', power: 8, frequency: 50, tanks: [0], variable: false, checks: [[6, 'm3/h'], [7, 'cfm']] },
 'wco-small-fixed': { sourceId: 'worthington-rollair300-850v', brand: 'Worthington Creyssensac', page: 7, table: 1, maximum: 1, pressure: 2, flow: 3, unit: 'm3/h', power: 6, frequency: null, tanks: [0, 200, 270, 500], variable: false, checks: [[4, 'l/min'], [5, 'cfm']] },
 'wco-small-vsd': { sourceId: 'worthington-rollair300-850v', brand: 'Worthington Creyssensac', page: 7, table: 0, maximum: 1, pressure: 2, flow: 3, unit: 'm3/h', power: 6, frequency: null, tanks: [0, 200], variable: true, checks: [[4, 'l/min'], [5, 'cfm']] },
 'wco-belt': { sourceId: 'worthington-rollair750-2000', brand: 'Worthington Creyssensac', page: 6, table: 1, maximum: 1, pressure: 2, flow: 4, unit: 'm3/h', power: 7, frequency: 50, tanks: [0, 270, 500], variable: false, checks: [[5, 'l/s'], [6, 'cfm']] },
 'wco-mid-fixed': { sourceId: 'worthington-rollair16-31', brand: 'Worthington Creyssensac', page: 10, table: 0, maximum: 1, pressure: 2, flow: 3, unit: 'm3/h', power: 6, frequency: null, tanks: [0, 500], variable: false, checks: [[4, 'l/s'], [5, 'cfm']] },
 'wco-mid-vsd': { sourceId: 'worthington-rollair16-31', brand: 'Worthington Creyssensac', page: 11, table: 0, maximum: 1, unit: 'm3/h', power: 14, frequency: null, tanks: [0, 500], variable: true },
};
const gaSmallPositions = [['GA 5', 3, 0], ['GA 5', 3, 1], ['GA 5', 3, 2], ['GA 5', 4, 0], ['GA 7', 4, 1], ['GA 7', 4, 2], ['GA 7', 4, 3], ['GA 7', 5], ['GA 11', 6], ['GA 11', 7], ['GA 11', 8], ['GA 11', 9]];
const mediumAnchors = { 'GA 15': 4, 'GA 18': 9, 'GA 22': 14, 'GA 26': 19, 'GA 30': 24 };
const gAnchors = { 'G 15': 4, 'G 18': 10, 'G 22': 13 };
const beltAnchors = { 'RLR 750': 3, 'RLR 1000': 6, 'RLR 1500': 9, 'RLR 2000': 12 };
const middleAnchors = { 'Rollair 16': 3, 'Rollair 21': 7, 'Rollair 26': 11, 'Rollair 31': 15 };
const middleVariableAnchors = { 'Rollair 16 V': 4, 'Rollair 21 V': 6, 'Rollair 26 V': 8, 'Rollair 31 V': 10 };
const key = row => [row.brand, row.model, row.frequencyHz ?? 'unspecified', row.maxPressureBar, row.equipment, row.tankLiters].join('|');

export function buildDocumentedCompressorsOctober3C(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-compressors-2026-10-03-c' || snapshot.compressors.length !== 200) throw new Error('Lot documentaire non reconnu');
 const sources = new Map(snapshot.sources.map(source => [source.id, source]));
 const proofIds = new Set();
 if (sources.size !== snapshot.sources.length) throw new Error('Source dupliquée');
 for (const source of sources.values()) {
  const proof = slug(source.id);
  if (!proof || proofIds.has(proof)) throw new Error('Identifiant de preuve normalisé dupliqué');
  proofIds.add(proof);
  for (const address of [source.url, source.resolvedUrl]) {
   const url = new URL(address);
   if (url.protocol !== 'https:' || url.username || url.password || !['www.atlascopco.com', 'www.worthington-creyssensac.com', 'www.rolair.com'].includes(url.hostname)) throw new Error('Source primaire non autorisée');
  }
  if (source.status !== 200 || source.captureMethod !== 'original-response' || !/^2026-10-03T/.test(source.observedAt) || !/^[a-f0-9]{64}$/.test(source.sha256) || !Number.isInteger(source.bytes) || source.bytes <= 0) throw new Error('Provenance invalide');
  if (source.extractedPages && sha(JSON.stringify(source.extractedPages)) !== source.extractedPagesSha256 || source.extractedText && sha(source.extractedText) !== source.extractedTextSha256) throw new Error('Extrait documentaire altéré');
 }
 const page = (sid, p) => { const pg = sources.get(sid)?.extractedPages?.find(pg => pg.page === p); if (!pg || !Number.isInteger(p) || p < 1) throw new Error('Page primaire absente'); return pg; };
 const text = (sid, p) => p ? page(sid, p).text : sources.get(sid)?.extractedText;
 const cell = (sid, ref) => {
  const value = page(sid, ref?.page).tables[ref.tableIndex]?.[ref.rowIndex]?.[ref.columnIndex];
  if (typeof value !== 'string' || ref.lineInCell !== undefined && (!Number.isInteger(ref.lineInCell) || ref.lineInCell < 0)) throw new Error('Cellule primaire absente');
  const selected = ref.lineInCell === undefined ? value : value.split('\n')[ref.lineInCell];
  if (typeof selected !== 'string') throw new Error('Sous-ligne primaire absente');
  return selected;
 };
 const proof = (sid, p) => {
  const source = sources.get(sid);
  if (!source || p && !source.extractedPages?.some(pg => pg.page === p)) throw new Error('Localisation de preuve absente');
  return { id: `october3c-${slug(sid)}${p ? `-p${p}` : ''}`, sourceUrl: source.url + (p ? `#page=${p}` : ''), sourceLabel: source.sourceLabel + (p ? `, page PDF ${p}` : ''), sourceType: source.contentType.includes('pdf') ? 'manual' : 'manufacturer', sourceRole: 'primary', retrievedAt: '2026-10-03', confidence: 'B', notes: `SHA-256 ${source.sha256} de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir.` };
 };
 const identities = new Set(), configurationKeys = new Set();
 return snapshot.compressors.map(row => {
  if (!row.equipment || key(row) !== row.configurationKey || row.dutyCycle !== undefined || row.weightKg !== undefined || row.voltage !== undefined) throw new Error('Configuration ou donnée non documentée');
  const evidence = [], fields = {}, addEvidence = (sid, p) => { const value = proof(sid, p); if (!evidence.some(item => item.id === value.id)) evidence.push(value); return value.id; };
  let maximum, power, points;
  const layout = layouts[row.dataset];
  const expectedEquipment = row.dataset === 'atlas-ga-small' ? (row.tankLiters ? `Pack sur réservoir ${row.tankLiters} L` : 'Pack au sol') : row.dataset === 'atlas-ga-medium' ? (row.tankLiters ? 'WorkPlace sur réservoir 500 L' : 'WorkPlace au sol') : row.dataset === 'atlas-g' ? 'Pack au sol' : row.dataset.startsWith('wco-small') ? (row.tankLiters ? `Groupe sur réservoir ${row.tankLiters} L` : 'Groupe sur socle') : row.dataset === 'wco-belt' ? (row.tankLiters ? `Full Feature sur réservoir ${row.tankLiters} L` : 'Pack au sol') : row.dataset.startsWith('wco-mid') ? (row.tankLiters ? 'Plus sur réservoir 500 L avec sécheur' : 'Groupe au sol') : row.dataset === 'rolair-manual' ? 'Groupe mobile avec réservoir intégré' : null;
  if (row.equipment !== expectedEquipment) throw new Error('Équipement non commercialisé dans le périmètre retenu');
  if (layout) {
   const mr = row.maxPressureRef;
   if (row.sourceId !== layout.sourceId || row.brand !== layout.brand || row.frequencyHz !== layout.frequency || row.variableSpeed !== layout.variable || row.oilType !== 'oil' || !layout.tanks.includes(row.tankLiters) || mr?.page !== layout.page || mr.tableIndex !== layout.table || mr.columnIndex !== layout.maximum) throw new Error('Périmètre de tableau altéré');
   const pg = page(row.sourceId, layout.page), table = pg.tables[layout.table];
   if (!/Max|Maximum/.test(table[0][layout.maximum]) || !table[0].filter(Boolean).join(' ').match(/FAD|Free Air Delivery/)) throw new Error('En-tête maximum ou FAD absent');
   maximum = parse(cell(row.sourceId, mr));
   let anchor;
   if (row.dataset === 'atlas-ga-small') {
    if (!gaSmallPositions.some(([model, r, i]) => model === row.model && r === mr.rowIndex && i === mr.lineInCell)) throw new Error('Identité GA5-11 altérée');
    anchor = mr.rowIndex;
   } else if (row.dataset === 'atlas-ga-medium') {
    anchor = mediumAnchors[row.model];
    if (!anchor || mr.rowIndex <= anchor || mr.rowIndex > anchor + 4 || row.model === 'GA 30' && row.tankLiters !== 0 || row.model === 'GA 18' && mr.rowIndex === 12) throw new Error('Identité GA15-30 ou point contradictoire');
   } else if (row.dataset === 'atlas-g') {
    anchor = gAnchors[row.model];
    if (!anchor || mr.rowIndex < anchor || mr.rowIndex > anchor + 2) throw new Error('Identité G15-22 altérée');
   } else if (row.dataset.startsWith('wco-small')) {
    anchor = [3, 5, 7, 9, 11].find(r => table[r][0] === row.model);
    if (!anchor || mr.rowIndex < anchor || mr.rowIndex > anchor + 1 || row.variableSpeed && mr.rowIndex !== anchor + 1) throw new Error('Identité RLR300-850 altérée');
   } else if (row.dataset === 'wco-belt') {
    anchor = beltAnchors[row.model];
    if (!anchor || mr.rowIndex < anchor || mr.rowIndex > anchor + 2 || !pg.text.includes(row.model)) throw new Error('Identité RLR750-2000 altérée');
   } else {
    anchor = (row.variableSpeed ? middleVariableAnchors : middleAnchors)[row.model];
    if (!anchor || mr.rowIndex < anchor || mr.rowIndex > anchor + (row.variableSpeed ? 1 : 3)) throw new Error('Identité ROLLAIR16-31 altérée');
   }
   if (row.modelRef && (row.modelRef.page !== layout.page || row.modelRef.tableIndex !== layout.table || row.modelRef.rowIndex !== anchor || row.modelRef.columnIndex !== 0 || cell(row.sourceId, row.modelRef) !== row.model)) throw new Error('Ancrage modèle altéré');
   if (!row.modelRef && (row.modelQuote !== row.model || !pg.text.includes(row.model))) throw new Error('Modèle absent du document');
   const pr = row.powerRef;
   const expectedPowerRow = row.dataset.startsWith('atlas-') ? mr.rowIndex : anchor;
   if (pr?.page !== layout.page || pr.tableIndex !== layout.table || pr.columnIndex !== layout.power || pr.rowIndex !== expectedPowerRow || pr.lineInCell !== (row.dataset === 'atlas-ga-small' ? mr.lineInCell : undefined)) throw new Error('Référence de puissance altérée');
   power = parse(cell(row.sourceId, pr));
   const expectedCoordinates = row.dataset === 'wco-mid-vsd' ? [4, 6, 8, 10, 12].filter(c => !['n.a.', 'n.a', '-'].includes(table[mr.rowIndex][c])).map(c => [mr.rowIndex, c]) : row.dataset === 'wco-small-vsd' ? [[anchor, layout.flow], [anchor + 1, layout.flow]] : [[mr.rowIndex, layout.flow]];
   if (row.points.length !== expectedCoordinates.length) throw new Error('Courbe incomplète ou points artificiels');
   points = row.points.map((point, index) => {
    const fr = point.flowRef, [r, c] = expectedCoordinates[index];
    if (fr?.page !== layout.page || fr.tableIndex !== layout.table || fr.rowIndex !== r || fr.columnIndex !== c || fr.lineInCell !== mr.lineInCell || point.flowUnit !== layout.unit || point.pressureUnit !== 'bar(g)') throw new Error('Localisation FAD altérée');
    const flowText = cell(row.sourceId, fr), flow = parse(flowText);
    let pressure;
    if (layout.pressure !== undefined) {
     if (point.pressureRef?.page !== layout.page || point.pressureRef.tableIndex !== layout.table || point.pressureRef.rowIndex !== r || point.pressureRef.columnIndex !== layout.pressure) throw new Error('Pression de référence altérée');
     pressure = parse(cell(row.sourceId, point.pressureRef));
    } else if (row.dataset === 'wco-mid-vsd') {
     if (point.pressureRef !== undefined || table[3][c] !== `${{4:'5,5',6:'7',8:'8',10:'9,5',12:'12,5'}[c]} bar`) throw new Error('Pression de colonne VSD altérée');
     pressure = {4:5.5,6:7,8:8,10:9.5,12:12.5}[c];
    } else {
     pressure = fixedPressure[maximum];
     const wording = row.dataset === 'atlas-ga-small' ? `${maximum} bar versions at ${pressure} bar(e).` : row.dataset === 'atlas-g' ? '7 bar(e), 9.5 bar(e), 12.5 bar(e)' : '- 7 bar(e) - 8 bar(e) - 9.5 bar(e) - 12.5 bar(e)';
     if (!pressure || point.pressureRef !== undefined || !pg.text.includes('FAD is measured at the following') || !pg.text.includes(wording) || !pg.text.includes('50 Hz')) throw new Error('Pression FAD nominale non établie');
    }
    const checks = layout.checks ?? [[c + 1, 'l/s']];
    if (point.unitChecks.length !== checks.length) throw new Error('Corroboration des unités absente');
    checks.forEach(([cc, unit], k) => {
     const check = point.unitChecks[k];
     if (check.ref?.page !== layout.page || check.ref.tableIndex !== layout.table || check.ref.rowIndex !== r || check.ref.columnIndex !== cc || check.ref.lineInCell !== mr.lineInCell || check.unit !== unit) throw new Error('Colonne d’unité altérée');
     const other = cell(row.sourceId, check.ref);
     if (check.value !== parse(other) || Math.abs(flow * factors[layout.unit] - parse(other) * factors[unit]) > quantum(flowText) * factors[layout.unit] / 2 + quantum(other) * factors[unit] / 2 + 1e-8) throw new Error('Unités FAD contradictoires');
    });
    if (point.flowOriginal !== flow || point.pressureOriginal !== pressure || pressure > maximum) throw new Error('Valeur ou pression FAD altérée');
    return { pressureBar: pressure, litersPerMinute: Number((flow * factors[layout.unit]).toFixed(3)) };
   });
   if (row.maxPressureUnit !== 'bar(g)' || row.powerKw !== power) throw new Error('Unité maximale ou puissance altérée');
   const mount = row.mountProof;
   const expectedMount = row.dataset === 'atlas-ga-small' ? { sourceId: row.sourceId, page: row.tankLiters ? 3 : 6, quote: row.tankLiters ? '270L or 500L receiver.' : 'Floor-mounted' } : row.dataset === 'atlas-ga-medium' ? { sourceId: row.tankLiters ? 'atlas-ga11-37' : row.sourceId, page: row.tankLiters ? 4 : 2, quote: row.tankLiters ? 'factory-mounted 500L receiver.' : 'FM: Floor-mounted' } : row.dataset === 'atlas-g' ? { sourceId: row.sourceId, page: 10, quote: 'FM: Floor-mounted' } : row.dataset.startsWith('wco-small') ? { sourceId: row.sourceId, page: 7, quote: row.tankLiters ? `Tank-mounted ${row.tankLiters} L.` : 'Base-mounted' } : row.dataset === 'wco-belt' ? { sourceId: row.sourceId, page: 6, quote: row.tankLiters ? `Tank Mounted ${row.tankLiters}L+Dryer` : 'Floor Mounted' } : { sourceId: row.sourceId, page: 11, quote: row.tankLiters ? 'Tank Mounted units (500L) with dryer (plus)' : 'Floor Mounted units' };
   if (JSON.stringify(mount) !== JSON.stringify(expectedMount) || !text(mount.sourceId, mount.page).includes(mount.quote)) throw new Error('Montage ou réservoir sans preuve constructeur');
   fields.tankLiters = [addEvidence(mount.sourceId, mount.page)];
   if (row.dataset === 'atlas-ga-medium' && row.tankLiters === 500) {
    const corroborationRow = { 'GA 15': 4, 'GA 18': 8, 'GA 22': 12, 'GA 26': 16 }[row.model] + mr.rowIndex - anchor - 1;
    const corroboration = page('atlas-ga11-37', 11).tables[0][corroborationRow];
    if (parse(corroboration[2]) !== maximum || parse(corroboration[6]) !== row.points[0].flowOriginal || parse(corroboration[9]) !== power) throw new Error('Montage GA 500 L rattaché à une autre fiche technique');
    fields.tankLiters.push(addEvidence('atlas-ga11-37', 11));
   }
   fields.maxPressureBar = [addEvidence(row.sourceId, layout.page)];
   fields.fadCurve = [...fields.maxPressureBar]; fields.powerKw = [...fields.maxPressureBar];
   const oilPage = row.sourceId === 'worthington-rollair16-31' ? 5 : 1;
   if (!(oilPage === 5 ? page(row.sourceId, 5).text.includes('oil separation system') : /oil\W*injected/i.test(page(row.sourceId, 1).text))) throw new Error('Lubrification absente de la source retenue');
   fields.oilType = [addEvidence(row.sourceId, oilPage)];
  } else if (row.dataset === 'rolair-manual') {
   const expected = row.model === 'FC229MK103' ? { sid: 'rolair-fc229mk103-manual', max: 150, tank: 109.8, oil: 'oil', page: 36, points: [[40,6.6],[90,5.5]] } : row.model === 'FCOL22LS6' ? { sid: 'rolair-fcol22ls6-manual', max: 175, tank: 20.8, oil: 'oil-free', page: 32, points: [[90,5]] } : null;
   if (!expected || row.sourceId !== expected.sid || row.brand !== 'Rolair' || row.variableSpeed || row.frequencyHz !== 60 || row.tankLiters !== expected.tank || row.oilType !== expected.oil || row.maxPressureUnit !== 'psi(g)' || row.maxPressureQuote !== `${expected.max} PSI max.` || !page(row.sourceId, 10).text.includes(row.maxPressureQuote) || row.powerKw !== undefined || row.points.length !== expected.points.length) throw new Error('Configuration Rolair altérée');
   maximum = expected.max;
   points = row.points.map((point, index) => {
    const pg = page(row.sourceId, 10), line = pg.text.split('\n')[point.lineIndex];
    const match = line?.match(/(\d+(?:\.\d+)?) SCFM @ (\d+) PSI/);
    const [pressure, flow] = expected.points[index];
    if (!match || point.page !== 10 || point.sourceLine !== line || point.flowUnit !== 'SCFM' || point.pressureUnit !== 'psi(g)' || Number(match[1]) !== flow || Number(match[2]) !== pressure || point.flowOriginal !== flow || point.pressureOriginal !== pressure) throw new Error('Air livré SCFM ou pression altérés');
    return { pressureBar: Number((pressure * psiToBar).toFixed(6)), litersPerMinute: Number((flow * factors.SCFM).toFixed(3)) };
   });
   const tankText = page(row.sourceId, expected.page).text;
   if (row.mountProof?.sourceId !== row.sourceId || row.mountProof.page !== expected.page || row.mountProof.quote !== 'Contenance du réservoir d’air' || !tankText.includes(`${expected.tank.toString().replace('.', ',')} L`)) throw new Error('Volume SI Rolair absent');
   fields.tankLiters = [addEvidence(row.sourceId, expected.page)];
   fields.maxPressureBar = [addEvidence(row.sourceId, 10)]; fields.fadCurve = [...fields.maxPressureBar]; fields.oilType = [...fields.maxPressureBar];
   if (!text('rolair-fad-definition').includes('Free air delivery is what actually reaches your equipment.')) throw new Error('Définition du débit livré Rolair absente');
   fields.fadCurve.push(addEvidence('rolair-fad-definition'));
  } else throw new Error('Tableau documentaire inconnu');
  const maxBar = row.maxPressureUnit === 'psi(g)' ? Number((maximum * psiToBar).toFixed(6)) : maximum;
  if (row.maxPressureOriginal !== maximum || row.maxPressureBar !== maxBar || maximum <= 0 || points.some(point => point.pressureBar > maxBar || point.litersPerMinute <= 0) || new Set(points.map(point => point.pressureBar)).size !== points.length) throw new Error('Maximum ou courbe invalides');
  let duty;
  if (row.dataset.startsWith('atlas-ga')) {
   const expectedDuty = row.dataset === 'atlas-ga-medium' ? { sourceId: row.sourceId, page: 1, quote: '100% continuous duty' } : { sourceId: 'atlas-ga-duty', quote: '100% Duty Cycle The GA Series is designed for nonstop operation' };
   if (JSON.stringify(row.dutyProof) !== JSON.stringify(expectedDuty) || !text(expectedDuty.sourceId, expectedDuty.page).includes(expectedDuty.quote)) throw new Error('Service continu GA hors périmètre');
   duty = 1; fields.dutyCycle = [addEvidence(expectedDuty.sourceId, expectedDuty.page)];
  } else if (row.dataset.startsWith('wco-small')) {
   if (row.dutyProof?.sourceId !== row.sourceId || row.dutyProof.page !== 2 || row.dutyProof.quote !== 'Continuous duty Continuous duty' || !page(row.sourceId, 2).text.includes(row.dutyProof.quote) || !page(row.sourceId, 4).text.includes('continuous operation.')) throw new Error('Service continu RLR300-850 hors périmètre');
   duty = 1; fields.dutyCycle = [addEvidence(row.sourceId, 2), addEvidence(row.sourceId, 4)];
  } else if (row.model === 'FCOL22LS6') {
   if (row.dutyProof?.sourceId !== row.sourceId || row.dutyProof.page !== 10 || row.dutyProof.value !== 0.5 || row.dutyProof.quote !== 'S3 50% - 5 minutes ON and 5 minutes OFF' || !page(row.sourceId, 10).text.includes(row.dutyProof.quote)) throw new Error('Cycle S3 Rolair altéré');
   duty = 0.5; fields.dutyCycle = [addEvidence(row.sourceId, 10)];
  } else if (row.dutyProof !== undefined) throw new Error('Service continu non documenté');
  const id = slug(`${row.brand}-${row.model}-${row.frequencyHz ? `${row.frequencyHz}-hz` : 'frequence-non-precisee'}-${maxBar}-bar-${row.equipment}`);
  if (identities.has(id) || configurationKeys.has(row.configurationKey)) throw new Error('Configuration dupliquée');
  identities.add(id); configurationKeys.add(row.configurationKey);
  const mainId = fields.maxPressureBar[0], spec = (label,value,ids=[mainId]) => ({label,value,evidenceIds:ids});
  const label = `${row.brand} ${row.model}, ${row.equipment}, ${fmt(maxBar)} bar`;
  const limitations = [...row.limitations, ...(duty === undefined ? ['Cycle de service du groupe complet non établi ; la tenue permanente reste indéterminée.'] : duty === 0.5 ? ['Régime S3 déclaré : cinq minutes de marche suivies de cinq minutes d’arrêt. La limite 50% ne représente pas un service continu.'] : ['Service continu déclaré pour cette famille ; installation, refroidissement et entretien conformes au constructeur restent nécessaires.']), ...(row.variableSpeed ? ['Les points de vitesse variable sont regroupés dans une courbe. Le maximum publié à chaque pression est conservé ; le comportement à faible charge n’est pas simulé.'] : []), ...(row.frequencyHz === null ? ['Fréquence de ces performances non précisée par la source retenue ; aucune transposition 50/60 Hz.'] : row.frequencyHz === 60 ? ['Version américaine 120 V 60 Hz ; performances et alimentation non transposées à la version européenne 50 Hz.'] : []), 'Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.', 'Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer.'];
  if (row.sourceId === 'atlas-ga15-30-2023') limitations.push('Le point de la configuration GA 18 à 10 bar est exclu de ce lot : 49,5 L/s et 178,5 m³/h ne concordent pas aux arrondis imprimés.');
  if (row.model === 'FCOL22LS6') limitations.push('La page espagnole 54 de la notice comporte des valeurs contradictoires pour pression et lubrification ; seules les spécifications anglaises page 10, corroborées en français page 32, sont retenues.');
  return { id,slug:id,brand:row.brand,model:row.model,variant:{ familyId:slug(`${row.brand}-${row.model}`),label:`${row.equipment}, ${fmt(maxBar)} bar`,distinguishingAttributes:{équipement:row.equipment,pressionMaximale:`${fmt(maxBar)} bar`,cuve:`${fmt(row.tankLiters)} L`,régulation:row.variableSpeed?'vitesse variable':'vitesse fixe',...(row.frequencyHz?{fréquence:`${row.frequencyHz} Hz`}:{})}},tankLiters:row.tankLiters,maxPressureBar:maxBar,fadCurve:points.sort((a,b)=>a.pressureBar-b.pressureBar),...(duty!==undefined?{dutyCycle:duty}:{}),oilType:row.oilType,...(power?{powerKw:power}:{}),mobility:row.brand==='Rolair'?'portable':'fixed',confidence:'B',status:'unknown',image:{src:`/images/products/${id}.webp`,alt:`Repères techniques : ${label}`,sourceUrl:sources.get(row.sourceId).url,sourceLabel:'Carte technique CompatAir, données déclarées par le constructeur'},specifications:[spec('Configuration constructeur',row.equipment,fields.tankLiters),spec('Pression maximale de fonctionnement',`${fmt(row.maxPressureOriginal)} ${row.maxPressureUnit==='psi(g)'?'PSI relatifs':'bar relatifs'}`),...row.points.map(point=>spec(`Air livré à ${fmt(point.pressureOriginal)} ${point.pressureUnit==='psi(g)'?'PSI':'bar'}`,`${fmt(point.flowOriginal)} ${units[point.flowUnit]}`)),spec('Cuve de stockage',row.tankLiters?`${fmt(row.tankLiters)} L intégrés à cette configuration`:'Groupe au sol ; réservoir externe exclu',fields.tankLiters),...(duty!==undefined?[spec('Cycle de service déclaré',duty===0.5?'S3/50%, cinq minutes ON et cinq minutes OFF':'100%, famille constructeur citée',fields.dutyCycle)]:[]),spec('Périmètre documentaire',row.market)],editorial:{overview:`${label}. ${points.map(point=>`${fmt(point.litersPerMinute)} L/min à ${fmt(point.pressureBar)} bar`).join(' ; ')}.`,verifiedFacts:['Air livré rattaché à une pression et aux unités originales du constructeur.',`Configuration de stockage documentée : ${row.tankLiters?`${fmt(row.tankLiters)} L`:'groupe au sol sans réservoir de stockage intégré'}.`,`Pression maximale de fonctionnement publiée : ${fmt(maxBar)} bar.`],limitations},evidence,fieldSources:fields,notes:['Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent.'] };
 });
}
