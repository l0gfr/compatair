import { createHash } from 'node:crypto';
const sha = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const documentedCompressorIdentity = value => value.replaceAll('+', ' Plus').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/(?<=\d)[.,](?=\d)/g, 'd').replace(/[^a-z0-9]/g, '');
const norm = value => value.replace(/\s+/g, ' ').trim();
const fmt = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const rounded = value => Number(value.toFixed(3));
export function parseSourceNumbers(raw) {
 if (typeof raw !== 'string') throw new Error('Cellule numérique primaire absente');
 return (raw.match(/\d+(?:[.,]\d+)*/g) ?? []).map(token => {
  if (!/^\d+(?:[.,]\d+)?$/.test(token)) throw new Error('Séparateurs numériques primaires ambigus');
  const value = Number(token.replace(',', '.'));
  if (!Number.isFinite(value)) throw new Error('Valeur numérique primaire invalide');
  return value;
 });
}
// NIST SP811 B.8: psi = 6894.757 Pa; ft3/min = .4719474 L/s.
const PSI_TO_BAR = .06894757;
const CFM_TO_LPM = .4719474 * 60;
const reviewedSnapshotSha256 = '59b1d4e69cef47fcca25ad511f081808582372a97ed142c37ac2b262ac079cbb';
const allowedHosts = new Set(['www.rolair.com', 'www.sullivan-palatek.com', 'www.airman.co.jp', 'anest-iwata.com.au', 'www.nist.gov']);

export function buildDocumentedCompressorsOctober8(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-compressors-2026-10-08' || snapshot.observedDate !== '2026-10-08' || snapshot.baseline?.sha !== 'cf46ffaac88d9a4c05c4cda47573175bfbe7cdf3' || snapshot.baseline.compressors !== 4959 || !Array.isArray(snapshot.compressors) || snapshot.compressors.length !== 200 || sha(snapshot) !== reviewedSnapshotSha256) throw new Error('Lot ou transcriptions documentaires non reconnus');
 const sources = new Map(snapshot.sources.map(s => [s.id, s]));
 if (sources.size !== snapshot.sources.length || sources.size !== 108) throw new Error('Sources documentaires dupliquées ou absentes');
 for (const source of sources.values()) {
  if (source.status !== 200 || source.captureMethod !== 'original-response' || !/^2026-10-08T/.test(source.observedAt) || !Number.isInteger(source.bytes) || source.bytes < 1 || !/^[a-f0-9]{64}$/.test(source.sha256) || !(source.contentType.includes('pdf') || source.contentType.includes('html')) || !Array.isArray(source.extractedPages) || sha(source.extractedPages) !== source.extractedPagesSha256) throw new Error('Provenance primaire invalide');
  for (const address of [source.url, source.resolvedUrl]) {
   const url = new URL(address);
   if (url.protocol !== 'https:' || url.username || url.password || !allowedHosts.has(url.hostname)) throw new Error('Adresse primaire non autorisée');
  }
 }
 const page = ref => { const pg = sources.get(ref?.sourceId)?.extractedPages.find(p => p.page === ref.page); if (!pg || !Number.isInteger(ref.page) || ref.page < 1) throw new Error('Page primaire absente'); return pg; };
 const original = ref => {
  const pg = page(ref);
  if (ref.visualQuote) {
   if (pg.visualReview?.method !== 'manual-transcription-from-current-original-PDF-render' || !/^[a-f0-9]{64}$/.test(pg.visualReview.pageImageSha256) || !pg.visualReview.transcribedLabels.includes(ref.visualQuote)) throw new Error('Transcription visuelle non qualifiée');
   return norm(ref.visualQuote);
  }
  if (ref.quote) { if (!norm(pg.text).includes(norm(ref.quote))) throw new Error('Citation primaire absente'); return norm(ref.quote); }
  const cell = pg.tables[ref.tableIndex]?.[ref.rowIndex]?.[ref.columnIndex];
  if (typeof cell !== 'string' || ref.raw !== cell) throw new Error('Cellule primaire absente ou altérée');
  return norm(cell);
 };
 const number = ref => { const values = parseSourceNumbers(original(ref)), index = ref.numberIndex ?? 0; if (!Number.isInteger(index) || index < 0 || values[index] === undefined) throw new Error('Valeur primaire absente'); return values[index]; };
 const numeric = (claim, units) => { if (!claim || !units.includes(claim.unit) || !Number.isFinite(claim.value) || claim.value !== number(claim.ref)) throw new Error('Caractéristique chiffrée altérée'); return claim.value; };
 const pressure = claim => rounded(numeric(claim, ['bar', 'psi', 'MPa']) * (claim.unit === 'psi' ? PSI_TO_BAR : claim.unit === 'MPa' ? 10 : 1));
 const flow = claim => rounded(numeric(claim, ['L/min', 'm3/min', 'cfm']) * (claim.unit === 'm3/min' ? 1000 : claim.unit === 'cfm' ? CFM_TO_LPM : 1));
 const seen = new Set(), ids = new Set();
 return snapshot.compressors.map(row => {
  const id = slug(`${row.brand} ${row.model}`), key = documentedCompressorIdentity(`${row.brand} ${row.model}`);
  if (row.id !== id || row.normalizedIdentity !== key || seen.has(key) || ids.has(id) || !documentedCompressorIdentity(original(row.modelProof)).includes(documentedCompressorIdentity(row.model))) throw new Error('Identité primaire altérée ou dupliquée');
  seen.add(key); ids.add(id);
  const evidence = [], fieldSources = {};
  const add = ref => {
   original(ref);
   const source = sources.get(ref.sourceId), pdf = source.contentType.includes('pdf'), eid = `october8-${slug(source.id)}-p${ref.page}`;
   if (!evidence.some(e => e.id === eid)) evidence.push({ id: eid, sourceUrl: `${source.url}${pdf ? `#page=${ref.page}` : ''}`, sourceLabel: `${source.sourceLabel}${pdf ? `, page PDF ${ref.page}` : source.id === 'nist-conversions' ? ', référence institutionnelle' : ', document constructeur'}`, sourceType: source.id === 'nist-conversions' ? 'manual' : 'manufacturer', sourceRole: 'primary', retrievedAt: source.observedAt.slice(0, 10), confidence: 'B', notes: `SHA-256 ${source.sha256} de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir.` });
   return eid;
  };
  const link = (field, refs) => { fieldSources[field] = [...new Set(refs.filter(Boolean).map(add))]; return fieldSources[field]; };
  link('model', [row.modelProof]);
  const maximum = pressure(row.maximum), measurementPressure = pressure(row.flow?.pressure), delivered = flow(row.flow);
  if (maximum <= 0 || measurementPressure < 0 || measurementPressure > maximum || delivered <= 0 || !['explicit-maximum-working-pressure', 'selected-working-pressure-ceiling'].includes(row.maxPressureBasis)) throw new Error('Pression ou capacité non qualifiée');
  const conditions = row.conditionProofs.map(ref => { add(ref); return original(ref); });
  const rolairDelivered = row.brand === 'Rolair' && row.flowTerminology?.published === 'CFM Delivered' && original(row.flowTerminology.ref) === 'CFM Delivered' && conditions.includes('CFM Delivered is an actual airflow amount rated at a specific pressure and should always be used when sizing an air compressor.');
  if (row.sourceClaimScope !== 'FAD-pressure-qualified' || row.capacityBasis !== 'published-pressure-qualified-output' || !(rolairDelivered || conditions.some(q => /F\.?A\.?D\.?|free air delivery|ISO\s*1217/i.test(q)))) throw new Error('Débit restitué non qualifié');
  if (row.maxPressureBasis === 'explicit-maximum-working-pressure' && !/Max\. Working Pressure \(bar\)|200 PSI Max\. Pressure/i.test(original(row.maxPressureBasisProof))) throw new Error('Maximum physique non démontré');
  if (row.maxPressureBasis === 'selected-working-pressure-ceiling' && maximum !== measurementPressure) throw new Error('Plafond documentaire déplacé hors de la mesure');
  link('maxPressureBar', [row.maximum.ref, row.maximum.unit === 'psi' ? snapshot.conversionRefs.pressure : null]);
  link('maxPressureBasis', [row.maxPressureBasisProof, row.maximum.ref]);
  link('fadCurve', [row.flow.ref, row.flow.pressure.ref, ...row.conditionProofs, row.flow.unit === 'cfm' ? snapshot.conversionRefs.flow : null, row.flow.pressure.unit === 'psi' ? snapshot.conversionRefs.pressure : null]);
  let tank;
  if (row.tank !== null) {
   tank = numeric(row.tank, ['L']);
   if (tank <= 0 || original(row.tankScopeProof) !== row.model || row.tank.ref.sourceId !== row.tankScopeProof.sourceId || !/LITERS|Tank capacity \(L\)/i.test(`${original(row.tank.ref)} ${row.brand === 'Anest Iwata' ? page(row.tank.ref).tables[0][0][6] : ''}`)) throw new Error('Cuve non qualifiée en litres pour ce modèle');
   link('tankLiters', [row.tank.ref, row.tankScopeProof]);
  } else if (row.tankUnqualifiedRaw) add(row.tankUnqualifiedRaw);
  let power, weight, noise;
  if (row.power) { power = numeric(row.power, ['kW']); if (power <= 0) throw new Error('Puissance native invalide'); link('powerKw', [row.power.ref]); }
  if (row.weight) { weight = numeric(row.weight, ['kg']); if (weight <= 0 || row.brand === 'AIRMAN' && row.weight.ref.numberIndex !== 1) throw new Error('Masse en service non qualifiée'); link('weightKg', [row.weight.ref]); }
  if (row.noise) { noise = numeric(row.noise, ['dB(A)']); if (noise <= 0 || !/distance of 1M according to ISO11201/.test(original(row.noiseConditionProof))) throw new Error('Conditions acoustiques absentes'); link('noiseDb', [row.noise.ref, row.noiseConditionProof]); }
  if (!['oil', 'oil-free', 'unknown'].includes(row.oilType)) throw new Error('Type de lubrification invalide');
  if (row.oilType !== 'unknown') {
   const raw = original(row.oilProof);
   if (!(row.oilType === 'oil-free' ? /oil[ -]?(?:free|less)/i : /oil[ -]?injected|splash lubricat(?:ion|ed)/i).test(raw)) throw new Error('Lubrification non documentée');
   link('oilType', [row.oilProof]);
  } else if (row.oilProof) throw new Error('Lubrification inconnue requalifiée');
  let duty, voltage, phase, mobility;
  if (row.dutyCycle !== null) {
   duty = row.dutyCycle;
   if (duty !== 1 || row.brand !== 'Rolair' || !['3095K18','5230K30CS','5715MK103'].includes(row.model) || original(row.dutyProof) !== 'DUTY CYCLE % 100%' || original(row.dutyScopeProof) !== row.model || row.dutyProof.sourceId !== row.dutyScopeProof.sourceId || row.dutyProof.page !== row.dutyScopeProof.page) throw new Error('Cycle hors portée de la référence exacte');
   link('dutyCycle', [row.dutyProof, row.dutyScopeProof]);
  } else if (row.dutyProof || row.dutyScopeProof) throw new Error('Cycle inconnu requalifié');
  if (row.electrical) {
   const q = original(row.electrical.ref), e = row.electrical;
   if (![50,60].includes(e.frequencyHz) || !(new RegExp(`(?:^|[^0-9])${e.frequencyHz}\\s*Hz\\b`, 'i').test(q) || q.split('/')[1] === String(e.frequencyHz))) throw new Error('Fréquence non documentée');
   add(e.ref);
   if (e.voltage) { if (e.voltage !== `${q.split(' Volt')[0]} V` && e.voltage !== `${q.split('/')[0]} V`) throw new Error('Tension non documentée'); voltage = e.voltage; link('voltage', [e.ref]); }
   if (e.phase) { if (e.phase !== (q.endsWith('/1') ? 'single-phase' : q.endsWith('/3') ? 'three-phase' : '')) throw new Error('Phase non documentée'); phase = e.phase; link('phase', [e.ref]); }
  }
  if (row.phase) { if (row.phase.value !== ({ single: 'single-phase', three: 'three-phase' })[original(row.phase.ref).toLowerCase()]) throw new Error('Phase non documentée'); phase = row.phase.value; link('phase', [row.phase.ref]); }
  if (row.mobility) { const q = original(row.mobility.ref); if (!(row.mobility.value === 'fixed' && /Stationary Electric Air Compressors/.test(q) || row.mobility.value === 'mobile' && /Trailer/.test(q))) throw new Error('Mobilité non documentée'); mobility = row.mobility.value; link('mobility', [row.mobility.ref]); }
  const limits = [...row.limitations, 'Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.'];
  if (!duty) limits.push('Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.');
  if (!row.electrical && row.brand !== 'AIRMAN' && row.model !== 'GD5000PV5H') limits.push('Fréquence électrique de cette configuration non documentée.');
  if (tank === undefined) limits.push('Cuve non qualifiée en litres : l’autonomie ne peut pas être conclue à partir de ce profil.');
  if (row.maxPressureBasis === 'selected-working-pressure-ceiling') limits.push('Le point de pression ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes.');
  const specs = [
   { label: 'Configuration constructeur', value: row.equipment, evidenceIds: fieldSources.model },
   { label: row.maxPressureBasis === 'selected-working-pressure-ceiling' ? 'Pression du point documentaire' : 'Pression maximale publiée', value: `${fmt(maximum)} bar`, evidenceIds: fieldSources.maxPressureBar },
   { label: `Débit restitué déclaré à ${fmt(measurementPressure)} bar`, value: `${fmt(delivered)} L/min (${fmt(row.flow.value)} ${row.flow.unit} publiés)`, evidenceIds: fieldSources.fadCurve },
   { label: 'Cuve de stockage', value: tank === undefined ? 'Non qualifiée en litres' : `${fmt(tank)} L`, evidenceIds: fieldSources.tankLiters ?? fieldSources.model },
  ];
  for (const f of row.additionalFacts) {
   if (f.unit && (f.unit !== '°C' || original(f.unitProof) !== 'Dryer pressure dew point (°C)')) throw new Error('Unité du point de rosée non documentée');
   specs.push({ label: f.label, value: `${original(f.ref)}${f.unit ? ` ${f.unit}` : ''}`, evidenceIds: [...new Set([add(f.ref), ...(f.unit ? [add(f.unitProof)] : [])])] });
  }
  if (power) specs.push({ label: 'Puissance native publiée', value: `${fmt(power)} kW`, evidenceIds: fieldSources.powerKw });
  if (weight) specs.push({ label: 'Masse en service ou nette publiée', value: `${fmt(weight)} kg`, evidenceIds: fieldSources.weightKg });
  if (duty) specs.push({ label: 'Cycle de service déclaré pour ce modèle', value: '100 %', evidenceIds: fieldSources.dutyCycle });
  if (row.electrical) specs.push({ label: 'Fréquence de la configuration publiée', value: `${row.electrical.frequencyHz} Hz`, evidenceIds: [add(row.electrical.ref)] });
  const deliveredText = `${fmt(delivered)} L/min déclarés à ${fmt(measurementPressure)} bar.`;
  return {
   id, slug: id, brand: row.brand, model: row.model,
   variant: { familyId: id, label: row.equipment, distinguishingAttributes: { équipement: row.equipment, pointDocumentaire: `${fmt(measurementPressure)} bar`, cuve: tank === undefined ? 'Non qualifiée en litres' : `${fmt(tank)} L`, ...(row.electrical ? { fréquence: `${row.electrical.frequencyHz} Hz` } : {}), ...(phase ? { phase } : {}) } },
   ...(tank === undefined ? {} : { tankLiters: tank }), maxPressureBar: maximum, maxPressureBasis: row.maxPressureBasis, fadCurve: [{ pressureBar: measurementPressure, litersPerMinute: delivered }],
   ...(duty ? { dutyCycle: duty } : {}), ...(power ? { powerKw: power } : {}), ...(weight ? { weightKg: weight } : {}), ...(noise ? { noiseDb: noise } : {}), ...(phase ? { phase } : {}), ...(voltage ? { voltage } : {}), ...(mobility ? { mobility } : {}),
   oilType: row.oilType, confidence: 'B', status: 'unknown',
   image: { src: `/images/products/${id}.svg`, alt: `Repères techniques : ${row.brand} ${row.model}`, sourceUrl: sources.get(row.sourceId).url, sourceLabel: 'Carte technique CompatAir, données déclarées par le constructeur' },
   specifications: specs,
   editorial: { overview: `${row.brand} ${row.model}. ${deliveredText} Configuration publiée : ${row.equipment}.`, verifiedFacts: [`Débit réellement livré identifié séparément du déplacement : ${deliveredText}`, `${row.maxPressureBasis === 'explicit-maximum-working-pressure' ? 'Maximum de travail publié' : 'Plafond documentaire du point retenu'} : ${fmt(maximum)} bar.`, ...(tank === undefined ? [] : [`Cuve documentée : ${fmt(tank)} L.`]), ...(phase ? [`Phase électrique documentée : ${phase === 'single-phase' ? 'monophasée' : 'triphasée'}.`] : [])], limitations: limits },
   evidence, fieldSources,
   notes: ['Portée de la source : FAD-pressure-qualified.', 'Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.', 'Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé.'],
  };
 });
}
