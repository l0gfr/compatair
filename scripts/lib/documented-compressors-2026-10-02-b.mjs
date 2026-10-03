import { createHash } from 'node:crypto';

const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const fmt = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const sha = value => createHash('sha256').update(value).digest('hex');
const positive = value => { if (!Number.isFinite(value) || value <= 0) throw new Error('Valeur positive requise'); return value; };
const decimal = value => { if (typeof value !== 'string' || !/^\d+(?:[.,]\d+)?$/.test(value)) throw new Error('Cellule décimale attendue'); return Number(value.replace(',', '.')); };
const numbers = value => [...(value ?? '').matchAll(/\d+(?:[.,]\d+)?/g)].map(match => Number(match[0].replace(',', '.')));
const normalizeModel = value => value.replaceAll('*', '').replaceAll('(D)', '').replace(/\s+-\s+/g, '-').replace(/\s+/g, ' ').trim();
const flowFactors = { 'm3/min': 1000, 'm3/h': 1000 / 60, cfm: 28.316846592, 'l/min': 1 };
const pressureFactors = { bar: 1, 'bar(g)': 1, 'psi(g)': 0.06894757293168361 };
const layouts = {
 'boge-c': { pressure: 1, flow: 2, power: 3, weight: [7], brand: 'BOGE' },
 'boge-c2': { pressure: 1, flow: 2, power: 3, weight: [7], brand: 'BOGE' },
 'boge-e': { pressure: 1, minimum: 2, flow: 3, power: 4, weight: [8], brand: 'BOGE' },
 'boge-s3': { pressure: 1, flow: 2, power: 3, weight: [7, 8], brand: 'BOGE' },
 'boge-s4': { pressure: 1, flow: 2, power: 3, weight: [7], brand: 'BOGE' },
 'boge-so2': { pressure: 1, minimum: 2, flow: 3, power: 4, weight: [7, 8], brand: 'BOGE' },
 'boge-so3': { pressure: 1, minimum: 2, flow: 3, power: 4, weight: [7], brand: 'BOGE' },
 'elgi-en50': { pressure: 3, maximum: 5, flow: 7, power: 1, weight: [], brand: 'ELGi' },
 'elgi-en60': { pressure: 3, maximum: 4, flow: 5, power: 1, weight: [6], brand: 'ELGi' },
 'elgi-eg60': { pressure: 3, maximum: 5, flow: 7, power: 1, weight: [9], brand: 'ELGi' },
 'elgi-premium50': { pressure: 3, maximum: 5, flow: 7, power: 1, weight: [9], brand: 'ELGi' },
 'elgi-eg20050': { pressure: 3, maximum: 5, flow: 7, power: 1, weight: [9], brand: 'ELGi' },
 'cp-vsd': { maximum: 5, flow: 2, minimum: 1, power: 4, weight: [], brand: 'Chicago Pneumatic' },
 'cp-big': { brand: 'Chicago Pneumatic' }, 'cp-big-vsd': { brand: 'Chicago Pneumatic' }, 'ir-vsd': { brand: 'Ingersoll Rand' },
};
const correctionCells = { 7: ['0.55~1.20', '19.5~42.5'], 9: ['0.89~1.77', '31.5~62.5'], 11: ['1.01~2.05', '35.5~72.4'] };
const key = row => [row.brand, row.model, row.equipment, row.frequencyHz ?? 'unspecified', row.market, row.variableSpeed ? 'VFD' : row.maxPressureBar, row.tankLiters].join(':');

export function buildDocumentedCompressorsOctober2B(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-compressors-2026-10-02-b' || snapshot.compressors.length !== 400) throw new Error('Lot documentaire non reconnu');
 const sources = new Map(snapshot.sources.map(source => [source.id, source]));
 if (sources.size !== snapshot.sources.length) throw new Error('Source dupliquée');
 const proofSourceIds = new Set();
 for (const source of sources.values()) {
  const proofSourceId = slug(source.id);
  if (!proofSourceId || proofSourceIds.has(proofSourceId)) throw new Error('Identifiant de preuve normalisé vide ou dupliqué');
  proofSourceIds.add(proofSourceId);
  const url = new URL(source.url), resolved = new URL(source.resolvedUrl);
  if ([url, resolved].some(value => value.protocol !== 'https:' || value.username || value.password || !['www.boge.com', 'www.elgi.com', 'compressors.cp.com', 'azure-na-assets.contentstack.com'].includes(value.hostname)) || !/^[a-f0-9]{64}$/.test(source.sha256) || !Number.isInteger(source.bytes) || source.bytes <= 0 || !/^2026-10-02(?:T|$)/.test(source.observedAt) || source.captureMethod !== 'original-response') throw new Error('Provenance invalide');
  if (source.extractedPages && sha(JSON.stringify(source.extractedPages)) !== source.extractedPagesSha256 || source.extractedText && sha(source.extractedText) !== source.extractedTextSha256) throw new Error('Extrait documentaire altéré');
 }
 const page = (sourceId, number) => {
  const value = sources.get(sourceId)?.extractedPages?.find(value => value.page === number);
  if (!value || !Number.isInteger(number) || number < 1) throw new Error('Page documentaire absente');
  return value;
 };
 const cell = (sourceId, ref) => {
  const value = ref && page(sourceId, ref.page).tables[ref.tableIndex]?.[ref.rowIndex]?.[ref.columnIndex];
  if (typeof value !== 'string') throw new Error('Cellule source absente');
  return value;
 };
 const evidence = (sourceId, number) => {
  const source = sources.get(sourceId);
  if (!source || number !== undefined && (!Number.isInteger(number) || number < 1 || number > source.pages)) throw new Error('Localisation documentaire absente');
  return { id: `october2b-${slug(sourceId)}${number ? `-p${number}` : ''}`, sourceUrl: source.url + (number ? `#page=${number}` : ''), sourceLabel: source.sourceLabel + (number ? `, page PDF ${number}` : ''), sourceType: source.contentType.includes('pdf') ? 'manual' : 'manufacturer', sourceRole: 'primary', retrievedAt: source.observedAt.slice(0, 10), confidence: 'B', notes: `SHA-256 ${source.sha256} de la réponse originale. Données fabricant ; aucun essai physique CompatAir.` };
 };
 const ids = new Set(), configurations = new Set();
 return snapshot.compressors.map(row => {
  const layout = layouts[row.dataset], source = sources.get(row.sourceId);
  if (!layout || layout.brand !== row.brand || source?.layout !== (row.dataset === 'cp-big-vsd' ? 'cp-big' : row.dataset) || !row.points.length || !row.equipment || !row.market || row.tankLiters < 0 || key(row) !== row.configurationKey) throw new Error('Configuration non documentée');
  if (row.frequencyHz !== null && ![50, 60].includes(row.frequencyHz) || row.dutyCycle !== undefined) throw new Error('Condition non documentée');
  const basePage = row.points[0].page, primary = evidence(row.sourceId, basePage);
  const expectedFrequency = ['elgi-en50', 'elgi-premium50', 'elgi-eg20050', 'boge-so2', 'boge-so3', 'ir-vsd'].includes(row.dataset) ? 50 : ['elgi-en60', 'elgi-eg60'].includes(row.dataset) ? 60 : row.dataset === 'cp-vsd' && row.model === 'CPVSd 30' ? 50 : row.dataset === 'cp-big' ? Number([...page(row.sourceId, basePage).text.slice(0, page(row.sourceId, basePage).text.split('\n').slice(0, row.points[0].lineIndex).join('\n').length).matchAll(/(?:CPI|CPM) 75-120 \((50|60)HZ\)/g)].at(-1)?.[1]) : null;
  if (row.frequencyHz !== expectedFrequency || row.oilType !== (['boge-so2', 'boge-so3'].includes(row.dataset) ? 'oil-free' : row.dataset === 'ir-vsd' ? 'unknown' : 'oil') || !row.variableSpeed && row.points.length !== 1) throw new Error('Fréquence, lubrification ou configuration altérée');
  const pointPages = [...new Set(row.points.map(point => point.page))];
  const productEvidence = pointPages.map(number => evidence(row.sourceId, number));
  const pointByCell = row.points.map(point => {
   const documentPage = page(row.sourceId, point.page);
   const table = documentPage.tables[point.tableIndex];
   const cells = table?.[point.rowIndex];
   let flow, minimum, pressure;
   if (cells) {
    const hasFlowRange = numbers(cells[layout.flow]).length > 1 || layout.minimum !== undefined && numbers(cells[layout.minimum]).length > 0;
    if (row.variableSpeed !== hasFlowRange) throw new Error('Vitesse variable non documentée');
    const header = table.slice(0, row.dataset === 'elgi-eg60' ? 0 : 3).flat().filter(value => typeof value === 'string').join(' ');
    const maxHeader = row.dataset === 'elgi-eg60' ? documentPage.tables[0][0][5] : table[0][layout.maximum ?? layout.pressure];
    if (!/Max|Maximum|Höchst/.test(maxHeader ?? '') && row.dataset !== 'cp-vsd') throw new Error('En-tête de pression maximale absent');
    if (row.dataset === 'cp-vsd' && !header.includes('@7bar')) throw new Error('En-tête FAD absent');
    if (point.modelRef) {
     if (normalizeModel(cell(row.sourceId, point.modelRef)) !== row.model) throw new Error('Identité de modèle altérée');
     const anchor = page(row.sourceId, point.modelRef.page).tables[point.modelRef.tableIndex][point.modelRef.rowIndex];
     if (numbers(anchor[layout.power])[0] !== row.powerKw) throw new Error('Modèle attribué à une autre puissance');
    } else if (!point.modelQuote || !documentPage.text.includes(point.modelQuote) || !point.modelQuote.startsWith(row.model + ' ')) throw new Error('Modèle absent de la source');
    let flowCell = cells[layout.flow];
    if (point.extractionCorrection) {
     const corrected = correctionCells[point.rowIndex];
     if (row.dataset !== 'elgi-en50' || point.page !== 9 || point.tableIndex !== 0 || !corrected || point.extractionCorrection.flow !== corrected[0] || point.extractionCorrection.cfm !== corrected[1] || !flowCell.startsWith(corrected[0])) throw new Error('Correction d’extraction non revue');
     flowCell = corrected[0];
    }
    const values = numbers(flowCell);
    flow = values.at(-1);
    minimum = layout.minimum !== undefined ? numbers(cells[layout.minimum])[0] ?? null : values.length > 1 ? values[0] : null;
    if (row.dataset === 'cp-vsd') {
     if (table[1][2] !== 'max\n@7bar' || point.pressureHeaderQuote !== 'max\n@7bar') throw new Error('Pression de référence CPVSd absente');
     pressure = 7;
    } else if (row.dataset === 'elgi-en60' && row.variableSpeed) {
     if (table[1][5] !== 'cfm (@125 psi)' || point.pressureHeaderQuote !== table[1][5]) throw new Error('Pression de référence EN VFD absente');
     pressure = 125;
    } else pressure = decimal(cells[layout.pressure]);
    if (row.dataset === 'elgi-premium50' && row.model === 'EG 90-P' && pressure === 7 || row.dataset === 'elgi-eg20050' && row.model === 'EG 250' && !row.variableSpeed && pressure === 9.5) throw new Error('Point contradictoire exclu du calcul');
    if (row.brand === 'ELGi' && row.dataset !== 'elgi-en60') {
     const cfm = point.extractionCorrection?.cfm ?? cells[8];
     const printedFlow = [...flowCell.matchAll(/\d+(?:\.\d+)?/g)].map(match => match[0]);
     const printedCfm = [...cfm.matchAll(/\d+(?:\.\d+)?/g)].map(match => match[0]);
     const quantum = value => 10 ** -(value.includes('.') ? value.split('.')[1].length : 0);
     if (printedFlow.length !== printedCfm.length || printedFlow.some((value, index) => Math.abs(Number(value) - Number(printedCfm[index]) * 0.028316846592) > quantum(value) / 2 + quantum(printedCfm[index]) * 0.028316846592 / 2 + 1e-9)) throw new Error('Unités FAD contradictoires');
    }
   } else {
    if (row.variableSpeed !== ['cp-big-vsd', 'ir-vsd'].includes(row.dataset)) throw new Error('Régulation textuelle altérée');
    const line = documentPage.text.split('\n')[point.lineIndex];
    if (line !== point.sourceLine || !documentPage.text.includes(point.sourceBlock) || !point.sourceBlock.includes(row.model)) throw new Error('Ligne ou bloc constructeur altéré');
    const values = numbers(line.replace(new RegExp(`^${row.model} ?`), ''));
    if (row.dataset === 'cp-big') {
     if (!/^CPI\d+$|^CPM\d+$/.test(row.model)) throw new Error('Modèle CP hors tableau');
     pressure = values[1]; flow = values[2]; minimum = null;
     if (Math.abs(flow - values[4] * 1.69901079552) > .5 + .5 * 1.69901079552 + 1e-9 || Math.abs(flow - values[3] * 3.6) > .5 + .5 * 3.6 + 1e-9) throw new Error('Unités FAD contradictoires');
    } else if (row.dataset === 'cp-big-vsd') {
     if (!/^CPVSM(?:75|100|120)$/.test(row.model) || ![7, 9.5].includes(point.pressureOriginal) || point.flowTextValueIndex !== (point.pressureOriginal === 7 ? 7 : 10)) throw new Error('Point CPVSM hors tableau');
     pressure = point.pressureOriginal; flow = values[point.flowTextValueIndex]; minimum = point.pressureOriginal === 7 ? values[4] : null;
    } else if (row.dataset === 'ir-vsd') {
     if (!['R37ne', 'R45n'].includes(row.model) || !documentPage.text.includes(point.pressureHeaderQuote) || point.pressureHeaderQuote !== 'capacity range is measured at 7 bar g/100 psig.') throw new Error('Pression Nirvana absente');
     pressure = 7; flow = values[7]; minimum = values[6];
    } else throw new Error('Type de ligne inconnu');
   }
   if (point.flowOriginal !== flow || point.flowMinimumOriginal !== minimum || point.pressureOriginal !== pressure || !flowFactors[point.flowUnit] || !pressureFactors[point.pressureUnit] || minimum !== null && minimum > flow) throw new Error('Point FAD altéré');
   if ((row.brand === 'BOGE' || row.dataset === 'ir-vsd') && point.flowUnit !== 'm3/min' || row.brand === 'ELGi' && point.flowUnit !== (row.dataset === 'elgi-en60' ? 'cfm' : 'm3/min') || row.dataset.startsWith('cp-big') && point.flowUnit !== 'm3/h' || row.dataset === 'cp-vsd' && point.flowUnit !== 'l/min' || point.pressureUnit !== (row.dataset === 'elgi-en60' ? 'psi(g)' : row.brand === 'BOGE' || row.dataset === 'cp-vsd' ? 'bar' : 'bar(g)')) throw new Error('Unité source altérée');
   const pressureBar = Number((positive(pressure) * pressureFactors[point.pressureUnit]).toFixed(6));
   if (pressureBar > row.maxPressureBar) throw new Error('Pression FAD supérieure au maximum');
   return { pressureBar, litersPerMinute: Number((positive(flow) * flowFactors[point.flowUnit]).toFixed(3)) };
  }).sort((a, b) => a.pressureBar - b.pressureBar);
  if (new Set(pointByCell.map(point => point.pressureBar)).size !== pointByCell.length) throw new Error('Pression FAD dupliquée');
  let maximum, power, weight;
  if (row.maxPressureRef) {
   if (row.maxPressureRef.columnIndex !== (layout.maximum ?? layout.pressure)) throw new Error('Colonne maximum incorrecte');
   const value = cell(row.sourceId, row.maxPressureRef);
   maximum = row.dataset === 'cp-vsd' || row.dataset === 'elgi-en60' && row.variableSpeed ? numbers(value).at(-1) : decimal(value);
   if (row.powerRef?.columnIndex !== layout.power) throw new Error('Colonne puissance incorrecte');
   power = decimal(cell(row.sourceId, row.powerRef));
   if (row.weightRef) {
    if (!layout.weight.includes(row.weightRef.columnIndex)) throw new Error('Colonne masse incorrecte');
    const weightCell = cell(row.sourceId, row.weightRef);
    weight = row.dataset === 'boge-s4' ? numbers(weightCell.replaceAll(',', ''))[0] : numbers(weightCell)[0];
    if (row.dataset === 'elgi-en60') weight = Number((weight * 0.45359237).toFixed(3));
   }
  } else {
   const values = numbers(row.points[0].sourceLine.replace(new RegExp(`^${row.model} ?`), ''));
   maximum = values[row.dataset === 'cp-big' ? 0 : row.dataset === 'cp-big-vsd' ? 3 : 1];
   const expectedPowerIndex = row.dataset === 'cp-big' ? 5 : row.dataset === 'cp-big-vsd' ? 0 : 4;
   const expectedWeightIndex = row.dataset === 'cp-big' ? 9 : row.dataset === 'cp-big-vsd' ? 15 : values.length - 2;
   if (row.powerTextValueIndex !== expectedPowerIndex || row.weightTextValueIndex !== expectedWeightIndex) throw new Error('Colonne textuelle incorrecte');
   power = values[expectedPowerIndex]; weight = values[expectedWeightIndex];
  }
  if (maximum !== row.maxPressureOriginal || row.maxPressureUnit !== (row.dataset === 'elgi-en60' ? 'psi(g)' : row.brand === 'BOGE' || row.dataset === 'cp-vsd' ? 'bar' : 'bar(g)') || Number((maximum * pressureFactors[row.maxPressureUnit]).toFixed(6)) !== row.maxPressureBar || power !== row.powerKw || weight !== row.weightKg) throw new Error('Maximum, puissance ou masse altérés');
  if (row.tankLiters !== (row.dataset === 'boge-e' && row.model.includes('DR') ? 400 : 0)) throw new Error('Cuve ajoutée sans configuration constructeur');
  const tankEvidence = row.tankLiters ? evidence(row.tankSourceId, row.tankPage) : primary;
  if (row.tankLiters && !sources.get(row.tankSourceId)?.extractedText.includes(row.tankQuote) || row.tankLiters && row.tankQuote !== 'with a matching dryer and 400-litre tank') throw new Error('Volume de cuve absent de la source');
  if (tankEvidence.id !== primary.id) productEvidence.push(tankEvidence);
  const oilSource = row.oilSourceId ? sources.get(row.oilSourceId) : undefined;
  const oilSourceIds = { 'boge-c': 'boge-c-oil', 'boge-c2': 'boge-c2-oil', 'boge-e': 'boge-e-oil', 'boge-s3': 'boge-s3-oil', 'boge-s4': 'boge-s4-oil', 'elgi-en50': 'elgi-en50-oil', 'elgi-en60': 'elgi-en60-oil', 'elgi-premium50': 'elgi-premium50-oil', 'elgi-eg60': 'elgi-eg-duty', 'elgi-eg20050': 'elgi-eg-duty', 'cp-big': 'cp-big-oil', 'cp-big-vsd': 'cp-big-oil', 'cp-vsd': 'cp-vsd-oil' };
  if (oilSourceIds[row.dataset] && (!oilSource || row.oilSourceId !== oilSourceIds[row.dataset] || row.oilQuote !== oilSource.extractedText || !/Oil.lubricated|oil remains|oil circulation|Air.Oil Separation|Air \+ Oil Compression|air\/oil|oil-injected/i.test(row.oilQuote))) throw new Error('Lubrification attribuée hors périmètre');
  const oil = oilSource ? evidence(row.oilSourceId, row.oilPage) : primary;
  if (oilSource) productEvidence.push(oil);
  const dutySource = row.dutySourceId ? sources.get(row.dutySourceId) : undefined;
  if (dutySource) {
   const allowed = row.dataset === 'boge-c' && row.dutySourceId === 'boge-c-duty' || row.dataset === 'boge-s3' && row.powerKw >= 22 && row.powerKw <= 75 && !row.model.includes('bluekat') && row.dutySourceId === 'boge-s3-small-duty' || ['elgi-eg60', 'elgi-eg20050'].includes(row.dataset) && row.dutySourceId === 'elgi-eg-duty';
   if (!allowed || !dutySource.extractedText?.includes(row.dutyQuote) || !/continuous operation/i.test(row.dutyQuote)) throw new Error('Service continu attribué hors périmètre');
  } else if (row.dutySourceId) throw new Error('Source de cycle absente');
  const duty = dutySource ? evidence(row.dutySourceId, row.dutyPage) : undefined;
  if (duty) productEvidence.push(duty);
  const id = slug(`${row.brand}-${row.model}-${row.frequencyHz ? `${row.frequencyHz}-hz` : 'frequence-non-precisee'}-${row.variableSpeed ? 'vitesse-variable' : `${row.maxPressureBar}-bar`}-${row.equipment}`);
  if (ids.has(id) || configurations.has(row.configurationKey)) throw new Error('Configuration dupliquée');
  ids.add(id); configurations.add(row.configurationKey);
  const label = `${row.brand} ${row.model}${row.frequencyHz ? `, ${row.frequencyHz} Hz` : ''}, ${row.variableSpeed ? 'vitesse variable' : `${fmt(row.maxPressureBar)} bar`}`;
  const specification = (label, value, ids = [primary.id]) => ({ label, value, evidenceIds: ids });
  const units = { 'm3/min': 'm³/min', 'm3/h': 'm³/h', cfm: 'cfm', 'l/min': 'L/min' };
  const specifications = [specification('Équipement', row.equipment), specification(['cp-vsd', 'cp-big-vsd'].includes(row.dataset) ? 'Limite haute de la plage de fonctionnement' : 'Pression maximale du tableau constructeur', `${fmt(row.maxPressureOriginal)} ${row.maxPressureUnit === 'psi(g)' ? 'psig' : row.maxPressureUnit === 'bar(g)' ? 'bar relatifs' : 'bar'}${row.maxPressureUnit === 'psi(g)' ? `, soit ${fmt(row.maxPressureBar)} bar relatifs` : ''}`), ...row.points.map(point => specification(`FAD à ${fmt(point.pressureOriginal)} ${point.pressureUnit === 'psi(g)' ? 'psig' : 'bar'}`, `${point.flowMinimumOriginal !== null ? `${fmt(point.flowMinimumOriginal)} à ` : ''}${fmt(point.flowOriginal)} ${units[point.flowUnit]}`)), ...(row.frequencyHz ? [specification('Fréquence de la documentation', `${row.frequencyHz} Hz`)] : []), specification('Périmètre documentaire', row.market), specification('Cuve de stockage', row.tankLiters ? `${row.tankLiters} L, intégrée à cette station` : 'Groupe seul ; réservoir de stockage externe non inclus', [tankEvidence.id])];
  const fieldSources = { tankLiters: [tankEvidence.id], maxPressureBar: [evidence(row.sourceId, row.maxPressureRef?.page ?? basePage).id], fadCurve: pointPages.map(number => evidence(row.sourceId, number).id), powerKw: [evidence(row.sourceId, row.powerRef?.page ?? basePage).id], oilType: [oil.id], ...(row.weightKg ? { weightKg: [evidence(row.sourceId, row.weightRef?.page ?? basePage).id] } : {}), ...(duty ? { dutyCycle: [duty.id] } : {}), ...(row.model === 'CPVSd 30' ? { voltage: [primary.id] } : {}) };
  const contradictory = snapshot.exclusions.filter(value => value.sourceId === row.sourceId && value.model === row.model && !value.reason.startsWith('Modèle déjà')).map(value => `Page ${value.page}, ${value.reason}`);
  const limitations = [...new Set([...row.limitations, ...contradictory]), row.variableSpeed ? 'Les points de vitesse variable sont regroupés dans une seule courbe. Le maximum de chaque plage publié est retenu ; la stabilité à faible charge n’est pas simulée.' : 'Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.', duty ? 'Fonctionnement continu déclaré pour la série ; refroidissement, installation et entretien conditionnent ce service.' : 'Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.', ...(row.frequencyHz === null ? ['Fréquence du tableau non établie ; aucune transposition des débits entre 50 et 60 Hz.'] : row.frequencyHz === 60 ? ['Documentation à 60 Hz ; elle ne démontre pas les performances de la version 50 Hz. Alimentation et marché local à confirmer avant achat.'] : []), 'Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.', 'Documentation et disponibilité de la configuration à confirmer avec le constructeur.'];
  return { id, slug: id, brand: row.brand, model: row.model, variant: { familyId: slug(`${row.brand}-${row.model}`), label: `${row.equipment}, ${row.frequencyHz ? `${row.frequencyHz} Hz, ` : ''}${fmt(row.maxPressureBar)} bar`, distinguishingAttributes: { équipement: row.equipment, pressionMaximale: `${fmt(row.maxPressureBar)} bar`, cuve: `${row.tankLiters} L`, régulation: row.variableSpeed ? 'vitesse variable' : 'vitesse fixe', ...(row.frequencyHz ? { fréquence: `${row.frequencyHz} Hz` } : {}) } }, tankLiters: row.tankLiters, maxPressureBar: positive(row.maxPressureBar), fadCurve: pointByCell, ...(duty ? { dutyCycle: 1 } : {}), oilType: row.oilType, powerKw: positive(row.powerKw), ...(row.weightKg ? { weightKg: positive(row.weightKg) } : {}), ...(row.model === 'CPVSd 30' ? { voltage: '400 V' } : {}), mobility: 'fixed', confidence: 'B', status: 'unknown', image: { src: `/images/products/${id}.webp`, alt: `Repères techniques : ${label}`, sourceUrl: source.url, sourceLabel: 'Carte technique CompatAir, données déclarées par le fabricant' }, specifications, editorial: { overview: `${label}. ${pointByCell.map(point => `${fmt(point.litersPerMinute)} L/min à ${fmt(point.pressureBar)} bar`).join(' ; ')}. Moteur ${fmt(row.powerKw)} kW ; ${row.equipment}.`, verifiedFacts: ['Débit restitué relié à une pression et aux unités originales de la fiche fabricant.', `${row.tankLiters ? `Réservoir intégré : ${row.tankLiters} L.` : 'Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.'}`, `Limite de pression documentée : ${fmt(row.maxPressureBar)} bar ; le point FAD conserve sa pression publiée.`], limitations }, evidence: productEvidence, fieldSources, notes: ['Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur.'] };
 });
}
