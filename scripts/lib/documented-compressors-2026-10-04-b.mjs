import { createHash } from 'node:crypto';
const sha = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const documentedCompressorIdentity = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/(?<=\d)[.,](?=\d)/g, 'd').replace(/[^a-z0-9]/g, '');
const norm = value => value.replace(/\s+/g, ' ').trim();
const fmt = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const rounded = value => Number(value.toFixed(3));
// Separators are declared by source cell; a dot is never globally treated as a thousands separator.
export function parseSourceNumbers(raw, numberFormat = 'decimal') {
 if (typeof raw !== 'string' || !['decimal', 'spanish-thousands'].includes(numberFormat)) throw new Error('Format numérique primaire inconnu');
 const tokens = raw.match(/\d+(?:[.,]\d+)*/g) ?? [];
 return tokens.map(token => {
  const valid = numberFormat === 'spanish-thousands' ? /^\d+(?:\.\d{3})*(?:,\d+)?$/ : /^\d+(?:[.,]\d+)?$/;
  if (!valid.test(token)) throw new Error('Séparateurs numériques primaires ambigus');
  const value = Number(numberFormat === 'spanish-thousands' ? token.replaceAll('.', '').replace(',', '.') : token.replace(',', '.'));
  if (!Number.isFinite(value)) throw new Error('Nombre primaire invalide');
  return value;
 });
}
// NIST SP811 B.8: psi -> Pa = 6.894757E3; ft3/min -> L/s = 4.719474E-1.
const PSI_TO_BAR = .06894757;
const CFM_TO_LPM = .4719474 * 60;
// Immutable transcription, original HTTP provenance and extracted-page review seals.
const reviewedManifest = {
  "recordsSha256": "01971305ad901184d074db26cdaadac3e12a955c3c4e9f44965cdffe4b6f513b",
  "sources": {
    "hertz-catalog": {
      "sha256": "e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339",
      "extractedPagesSha256": "d6f41320f3dfffd63e2083b77201e5e55b42b68d18be44b121095c74de05f27d",
      "provenanceSha256": "8b5ab5f89a8cdcde97f0d3fe9a54fab33a10eca31500152315b7c71c33599d4e"
    },
    "dalgakiran-catalog": {
      "sha256": "aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b",
      "extractedPagesSha256": "43a12cb3a8bf41242eb23bf128bd2a47e5da3526bbecab677c87976388f568da",
      "provenanceSha256": "0336411d6a7736317c1be66481449808a7ac0eb178abeb9c5a180f38ae7cb1d5"
    },
    "lupamat-current-catalog": {
      "sha256": "3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978",
      "extractedPagesSha256": "ce43d88aeebca81a497581cac0a04a816ef9281f917f65918ae3ffc611c2ecdd",
      "provenanceSha256": "a2c54ab629d1082661827fbcf11528edbaef1f6f042e5a736729da3391645cc7"
    },
    "puska-catalog-2025": {
      "sha256": "62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454",
      "extractedPagesSha256": "be7a648ba65faabc8ba61f40cb80c0a009ad3260715ac543e3c1d0a59bc11cfb",
      "provenanceSha256": "ddfb244a71e073dbac4ba5cc1c6a48220c04018175be24d27c0d8cc8bd81c5af"
    },
    "fini-minicube": {
      "sha256": "ae9080bae3535de170f91db99852b2aa9cfd64c479340b249149724f40a08c4c",
      "extractedPagesSha256": "3fd434084288a14a2b562a64703e052986ba5c281d5650d9e673c1d2282bd679",
      "provenanceSha256": "d10c271aff932b0c6d2882bfc2468157ea1e97b822eab39e8ff118c0329e5b19"
    },
    "fini-cube": {
      "sha256": "270d2f554801e15883dd85b3f3b6089c641adf51dd59c15f31e0fd06c7b88e1a",
      "extractedPagesSha256": "967d0a810bee38b56d1dfebc10e3eb6d645168a4cdbabf354753fea7e3d1d470",
      "provenanceSha256": "394e7b9101968daab12c9d5ce73b4ceae0a678c8f0902e102f8cf211235b7606"
    },
    "nuair-mercury-sirio": {
      "sha256": "8bb805eb71b9abbbd8ebf0c77804627936254c8b8c227e0fe7673395e13c04b8",
      "extractedPagesSha256": "46b6ee897bb5c5e99805377e62a1d71e1ce52737e51d6201bed422be22008cfb",
      "provenanceSha256": "e208bc27c330f7e38f7e764c485751373fde64b16e34038db71f07cf358a195a"
    },
    "nuair-polar": {
      "sha256": "6f1dce9f0026ce320c9dbf5a77633d6ff8cda2d2f4e9cfef3f7591917a4ae0c4",
      "extractedPagesSha256": "c51a66b49f4b4dbd6894a646080407e5a55ae942990297a56e21498e6eea7b41",
      "provenanceSha256": "e30770add0629779fab65c82aff65d73c7bdc971ddc5eefe90650206e705bbf0"
    },
    "nuair-star-vega": {
      "sha256": "64ff835de391da58b7ae2870a5dc681fb577355b5ad0ba94e7f39b07a389bb78",
      "extractedPagesSha256": "d945ff5514eab4272f60e71676606d58962fa51f70b556749a98cc86d8030df4",
      "provenanceSha256": "4fd51bb49ec2d0034643c33868a9665594ad00b7ffb8aa58b40760ccc4342115"
    },
    "shamal-bora": {
      "sha256": "10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04",
      "extractedPagesSha256": "29f12accfdc24279bbe577bfc40ae12138fe80d6c7cbb02a954916c299c44e96",
      "provenanceSha256": "e79be28e9d23e1cb35db7086c6f16f5ed48833d6a3cd93ef83a26aaf7993f917"
    },
    "shamal-ghibli-storm": {
      "sha256": "1b5133ca855ed01c80f35e95347f5df15414a9ac7138dfe459137b4bca7c55c8",
      "extractedPagesSha256": "b45754ba144ccb850f74ad88e916fd6730e56b94dd57c77b291eefea767db74c",
      "provenanceSha256": "72d41ee23bb117227d4ab6a5c473caa5e24bd98d61f938eda5beef29f8e0c913"
    },
    "quincy-qgs-qgsv": {
      "sha256": "3846893a6d89c68cf8053db3ba68ff0fdc4a1b20e9f71940c73a2813bb8245f8",
      "extractedPagesSha256": "426d54177b31bac581cf99e1805e38f0234724b34153d521e834e69605126d63",
      "provenanceSha256": "e66ce1ee0a9839d09c5303f5f8119b2436434d91fb8b90d62b43e83696376fdd"
    },
    "nist-conversions": {
      "sha256": "d3ba38edef97bc380f20879b3c5b16067cc25bf230584cc7af67638b500c8c30",
      "extractedPagesSha256": "8b569a417df2a383d492e68c846bd9a6f492779c95c0ec9b59f0d5358fe58991",
      "provenanceSha256": "c33510e1654b7236ad6997c837e80dce49435a387a11b02cd187fe45db9bec4a"
    }
  }
};
const allowedHosts = new Set(['www.hertz-kompressoren.com', 'www.dalgakiran.com', 'lupamat.com', 'www.puska.com', 'www.quincycompressor.com', 'finicompressors.com', 'www.nuair.it', 'www.shamalcompressors.com', 'www.nist.gov']);
// These sealed Puska rows publish both FAD endpoints at 10 bar. The lower
// endpoint is retained separately and must not become the nominal capacity ceiling.
const puskaVariableRangeIds = new Set([
 'puska-pke-3-vf-10', 'puska-pke-4-vf-10', 'puska-pke-5-5-vf-10', 'puska-pke-7-5-vf-10', 'puska-pke-9-vf-10',
 'puska-pke-3-vf-10-200', 'puska-pke-4-vf-10-200', 'puska-pke-5-5-vf-10-200', 'puska-pke-7-5-vf-10-200', 'puska-pke-9-vf-10-200',
 'puska-pke-3-vf-dry-10-200', 'puska-pke-4-vf-dry-10-200', 'puska-pke-5-5-vf-dry-10-200', 'puska-pke-7-5-vf-dry-10-200', 'puska-pke-9-vf-dry-10-200',
]);
const previousPuskaMinimumLimitation = 'La plage de débit publiée est conservée en source ; seul son minimum est utilisé pour cette configuration. Le régime de vitesse associé n’est pas spécifié.';
export function buildDocumentedCompressorsOctober4B(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-compressors-2026-10-04-b' || snapshot.observedDate !== '2026-10-04' || snapshot.baseline?.sha !== 'dbfbe1fb72d5f9abb04bc9c7cb5ea48a33122f20' || !Array.isArray(snapshot.compressors) || snapshot.compressors.length !== 420 || sha(snapshot.compressors) !== reviewedManifest.recordsSha256) throw new Error('Lot ou transcriptions documentaires non reconnus');
 const sources = new Map(snapshot.sources.map(s => [s.id, s]));
 if (sources.size !== snapshot.sources.length || sources.size !== Object.keys(reviewedManifest.sources).length) throw new Error('Sources documentaires dupliquées ou manquantes');
 for (const source of sources.values()) {
  const reviewed = reviewedManifest.sources[source.id];
  if (!reviewed || sha(Object.fromEntries(Object.entries(source).filter(([key]) => !['extractedPages', 'extractedPagesSha256'].includes(key)))) !== reviewed.provenanceSha256 || source.sha256 !== reviewed.sha256 || source.status !== 200 || source.captureMethod !== 'original-response' || !/^2026-10-04T/.test(source.observedAt) || !Number.isInteger(source.bytes) || source.bytes < 1 || !(source.contentType.includes('pdf') || source.id === 'nist-conversions' && source.contentType.includes('html'))) throw new Error('Provenance primaire invalide');
  for (const address of [source.url, source.resolvedUrl]) { const url = new URL(address); if (url.protocol !== 'https:' || url.username || url.password || !allowedHosts.has(url.hostname)) throw new Error('Adresse primaire non autorisée'); }
  if (!Array.isArray(source.extractedPages) || sha(source.extractedPages) !== reviewed.extractedPagesSha256 || source.extractedPagesSha256 !== reviewed.extractedPagesSha256) throw new Error('Extrait de source primaire altéré');
 }
 const page = ref => { const pg = sources.get(ref?.sourceId)?.extractedPages.find(p => p.page === ref.page); if (!pg || !Number.isInteger(ref.page) || ref.page < 1) throw new Error('Page de preuve absente'); return pg; };
 const original = ref => {
  const pg = page(ref);
  if (ref.visualQuote) { if (pg.visualReview?.method !== 'manual-transcription-from-current-original-PDF-render' || !/^[a-f0-9]{64}$/.test(pg.visualReview.pageImageSha256) || !pg.visualReview.transcribedLabels.includes(ref.visualQuote)) throw new Error('Transcription visuelle absente'); return ref.visualQuote; }
  if (ref.quote) { if (!norm(pg.text).includes(norm(ref.quote))) throw new Error('Citation primaire absente'); return norm(ref.quote); }
  const cell = pg.tables[ref.tableIndex]?.[ref.rowIndex]?.[ref.columnIndex];
  if (typeof cell !== 'string' || ref.raw !== cell) throw new Error('Cellule primaire absente ou altérée');
  return norm(cell);
 };
 const number = ref => { const values = parseSourceNumbers(original(ref), ref.numberFormat), index = ref.numberIndex ?? 0; if (!Number.isInteger(index) || index < 0 || values[index] === undefined) throw new Error('Valeur primaire absente'); return values[index]; };
 const numeric = (claim, units) => { if (!claim || !units.includes(claim.unit) || !Number.isFinite(claim.value) || claim.value !== number(claim.ref)) throw new Error('Caractéristique chiffrée altérée'); if (claim.ref.numberFormat === 'spanish-thousands' && claim.unit !== 'L/min') throw new Error('Format espagnol hors cellule L/min'); return claim.value; };
 const pressure = claim => rounded(numeric(claim, ['bar', 'psig']) * (claim.unit === 'psig' ? PSI_TO_BAR : 1));
 const flow = claim => rounded(numeric(claim, ['L/min', 'm3/min', 'cfm']) * (claim.unit === 'm3/min' ? 1000 : claim.unit === 'cfm' ? CFM_TO_LPM : 1));
 const seen = new Set(), seenIds = new Set();
 return snapshot.compressors.map(row => {
  const id = slug(`${row.brand} ${row.model}`), key = documentedCompressorIdentity(`${row.brand} ${row.normalizedModel ?? row.model}`);
  if (row.id !== id || row.normalizedIdentity !== key || seen.has(key) || seenIds.has(id) || !documentedCompressorIdentity(original(row.modelProof)).includes(documentedCompressorIdentity(row.model))) throw new Error('Identité primaire altérée ou dupliquée'); seen.add(key); seenIds.add(id);
  const evidence = [], fieldSources = {};
  const add = ref => { original(ref); const source = sources.get(ref.sourceId), pdf = source.contentType.includes('pdf'), eid = `october4b-${slug(source.id)}-p${ref.page}`; if (!evidence.some(e => e.id === eid)) evidence.push({ id: eid, sourceUrl: `${source.url}${pdf ? `#page=${ref.page}` : ''}`, sourceLabel: `${source.sourceLabel}${pdf ? `, page PDF ${ref.page}` : ', table de conversion'}`, sourceType: 'manual', sourceRole: 'primary', retrievedAt: '2026-10-04', confidence: 'B', notes: `SHA-256 ${source.sha256} de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir.` }); return eid; };
  const conversion = { sourceId: 'nist-conversions', page: 1, quote: 'pound-force per square inch (psi) (lbf/in 2 ) pascal (Pa) 6.894 757 E+03' };
  const conversionFlow = { sourceId: 'nist-conversions', page: 1, quote: 'cubic foot per minute (ft 3 /min) liter per second (L/s) 4.719 474 E-01' };
  const link = (field, refs) => { fieldSources[field] = [...new Set(refs.filter(Boolean).map(add))]; return fieldSources[field]; };
  link('model', [row.modelProof]);
  const maximum = pressure(row.maximum);
  if (maximum <= 0 || !['explicit-maximum-pressure', 'explicit-maximum-working-pressure', 'selected-working-pressure-ceiling'].includes(row.maxPressureBasis)) throw new Error('Pression de configuration non qualifiée');
  link('maxPressureBar', [row.maximum.ref, row.maximum.unit === 'psig' ? conversion : null]);
  let tank;
  if (row.tank === null) { if (row.tankUnqualifiedRaw) add(row.tankUnqualifiedRaw); }
  else if (row.tank?.unit === 'absent-receiver') {
   const raw = original(row.tank.ref), mount = original(row.tank.mountProof);
   if (row.brand !== 'Fini' || row.tank.value !== 0 || !/^[–-]$/.test(raw) || !/^FLOOR MOUNTED$/.test(mount) || row.tank.configuration !== 'floor mounted') throw new Error('Absence de cuve non démontrée');
   tank = 0; link('tankLiters', [row.tank.ref, row.tank.mountProof]);
  } else { tank = numeric(row.tank, ['L']); if (tank <= 0) throw new Error('Cuve inconnue convertie en zéro'); link('tankLiters', [row.tank.ref]); }
  const conditions = row.conditionProofs.map(ref => { add(ref); return original(ref); });
  const measurementPressure = pressure(row.flow?.pressure);
  let delivered = flow(row.flow), rangeMinimum;
  if (measurementPressure < 0 || measurementPressure > maximum || delivered <= 0 || row.sourceClaimScope !== 'FAD-pressure-qualified' || !conditions.some(text => /FAD|free air delivery|ISO 1217/i.test(text))) throw new Error('FAD ou pression de mesure non qualifiés');
  if (puskaVariableRangeIds.has(id)) {
   const ref = row.flow.ref, table = page(ref).tables[ref.tableIndex];
   const sameRow = candidate => candidate.sourceId === ref.sourceId && candidate.page === ref.page && candidate.tableIndex === ref.tableIndex && candidate.rowIndex === ref.rowIndex;
   const endpoints = parseSourceNumbers(original(ref), ref.numberFormat);
   if (row.brand !== 'Puska' || row.sourceId !== 'puska-catalog-2025' || ref.sourceId !== row.sourceId || row.flow.unit !== 'L/min' || ref.numberIndex !== 0 || ref.numberFormat !== 'spanish-thousands'
    || !(ref.page === 31 && [2, 3].includes(ref.tableIndex) || ref.page === 32 && ref.tableIndex === 2)
    || !sameRow(row.modelProof) || !sameRow(row.flow.pressure.ref) || !sameRow(row.maximum.ref)
    || row.modelProof.columnIndex !== 1 || row.flow.pressure.ref.columnIndex !== 4 || row.maximum.ref.columnIndex !== 4 || ref.columnIndex !== 7
    || original(row.modelProof) !== row.model || table[0][1] !== 'Modelo' || table[0][4] !== 'bar' || table[0][7] !== 'l/min'
    || measurementPressure !== 10 || maximum !== 10 || endpoints.length !== 2 || endpoints[0] !== delivered || endpoints[1] <= endpoints[0]
    || !/^\d+(?:\.\d{3})*(?:,\d+)?\s*-\s*\d+(?:\.\d{3})*(?:,\d+)?$/.test(original(ref))) throw new Error('Plage Puska hors ligne modèle-pression qualifiée');
   rangeMinimum = delivered;
   delivered = flow({ ...row.flow, value: endpoints[1], ref: { ...ref, numberIndex: 1 } });
  }
  const points = [{ pressureBar: measurementPressure, litersPerMinute: delivered }];
  link('fadCurve', [row.flow.ref, row.flow.pressure.ref, ...row.conditionProofs, row.flow.unit === 'cfm' ? conversionFlow : null, row.flow.pressure.unit === 'psig' ? conversion : null]);
  let power;
  if (row.power) { power = rounded(numeric(row.power, ['W', 'kW']) * (row.power.unit === 'W' ? .001 : 1)); if (power <= 0) throw new Error('Puissance invalide'); link('powerKw', [row.power.ref]); }
  if (!['oil', 'oil-free', 'unknown'].includes(row.oilType)) throw new Error('Lubrification inconnue');
  if (row.oilType !== 'unknown') { const q = original(row.oilProof); if (!(row.oilType === 'oil-free' ? /oil[ -]?free|100% LIBRE DE ACEITE/i : /oil[ -]?injected|oil[ -]?lubricated|oil splash|flooded/i).test(q)) throw new Error('Lubrification non documentée'); link('oilType', [row.oilProof]); } else if (row.oilProof) throw new Error('Lubrification ambiguë');
  let duty;
  if (row.dutyCycle !== null) { const q = original(row.dutyProof); duty = row.dutyCycle; if (duty !== 1 || !/designed for continuous (?:operation|use)|designed to run continuously|non-stop operation 24\/7/i.test(q)) throw new Error('Cycle non documenté'); link('dutyCycle', [row.dutyProof]); } else if (row.dutyProof) throw new Error('Cycle inconnu requalifié');
  if (row.electrical) { const q = original(row.electrical); if (row.electrical.frequencyHz !== 50 || !/(?:\/|\s)50(?:\s|$)/.test(q)) throw new Error('Fréquence de configuration altérée'); add(row.electrical); }
  if (row.mpn) { if (!norm(sources.get(row.sourceId).extractedPages.map(p => p.text).join(' ')).includes(row.mpn)) throw new Error('Code constructeur non documenté'); link('mpn', [row.modelProof]); }
  const limits = [...row.limitations.filter(text => rangeMinimum === undefined || text !== previousPuskaMinimumLimitation), 'Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.'];
  if (rangeMinimum !== undefined) limits.push('Le FAD retenu est le maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de vitesse ni cycle de service n’est déduit.');
  if (!duty) limits.push('Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.');
  if (!row.electrical && !limits.some(text => /fréquence/.test(text))) limits.push('La fréquence électrique de cette configuration n’est pas documentée.');
  if (tank === undefined) limits.push('Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.');
  if (row.maxPressureBasis === 'selected-working-pressure-ceiling') limits.push('Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.');
  const specs = [{ label: 'Configuration constructeur', value: row.equipment, evidenceIds: fieldSources.model }, { label: row.maxPressureBasis === 'selected-working-pressure-ceiling' ? 'Pression de la configuration retenue' : 'Pression maximale publiée', value: `${fmt(maximum)} bar${row.maximum.unit === 'psig' ? ` (${fmt(row.maximum.value)} psig publiés)` : ''}`, evidenceIds: fieldSources.maxPressureBar }, { label: 'Cuve de stockage', value: tank === undefined ? 'Non documentée en litres' : tank === 0 ? 'Montage au sol sans stockage intégré documenté' : `${fmt(tank)} L`, evidenceIds: fieldSources.tankLiters ?? fieldSources.model }, { label: `${rangeMinimum === undefined ? 'Air livré' : 'FAD maximal déclaré'} à ${fmt(measurementPressure)} bar`, value: `${fmt(delivered)} L/min${row.flow.unit === 'cfm' ? ` (${fmt(row.flow.value)} cfm publiés)` : ''}`, evidenceIds: fieldSources.fadCurve }];
  if (rangeMinimum !== undefined) specs.push({ label: `FAD minimal déclaré à ${fmt(measurementPressure)} bar`, value: `${fmt(rangeMinimum)} L/min ; minimum de la plage publiée, distinct de la capacité maximale`, evidenceIds: fieldSources.fadCurve });
  if (row.originalReceiver) specs.push({ label: 'Colonne réservoir du document original', value: row.originalReceiver, evidenceIds: [add(row.tankUnqualifiedRaw)] });
  if (power) specs.push({ label: 'Puissance publiée', value: `${fmt(power)} kW`, evidenceIds: fieldSources.powerKw });
  if (row.unqualifiedPower) {
   const unqualified = numeric(row.unqualifiedPower, ['kW']), comparison = numeric(row.powerConflict, ['kW']);
   specs.push({ label: 'Puissance publiée à confirmer', value: `${fmt(unqualified)} kW dans cette ligne, ${fmt(comparison)} kW pour la version de base du même CNR 100`, evidenceIds: [add(row.unqualifiedPower.ref), add(row.powerConflict.ref)] });
  }
  if (duty) specs.push({ label: 'Cycle de service déclaré', value: '100 %', evidenceIds: fieldSources.dutyCycle });
  specs.push({ label: 'Fréquence de la configuration retenue', value: row.electrical ? '50 Hz' : 'Non documentée', evidenceIds: row.electrical ? [add(row.electrical)] : fieldSources.model });
  const deliveredText = `${fmt(delivered)} L/min déclarés à ${fmt(measurementPressure)} bar${rangeMinimum === undefined ? '' : ', maximum de la plage FAD publiée, sans qualification du régime moteur'}.`;
  return { id, slug: id, brand: row.brand, model: row.model, ...(row.mpn ? { mpn: row.mpn } : {}), variant: { familyId: slug(`${row.brand} ${row.normalizedModel ?? row.model}`), label: row.equipment, distinguishingAttributes: { équipement: row.equipment, pressionDeConfiguration: `${fmt(maximum)} bar`, cuve: tank === undefined ? 'Non documentée' : `${fmt(tank)} L`, ...(row.electrical ? { fréquence: '50 Hz' } : {}) } }, ...(tank === undefined ? {} : { tankLiters: tank }), maxPressureBar: maximum, fadCurve: points, ...(duty ? { dutyCycle: duty } : {}), ...(power ? { powerKw: power } : {}), oilType: row.oilType, confidence: 'B', status: 'unknown', image: { src: `/images/products/${id}.svg`, alt: `Repères techniques : ${row.brand} ${row.model}`, sourceUrl: sources.get(row.sourceId).url, sourceLabel: 'Carte technique CompatAir, données déclarées par le constructeur' }, specifications: specs, editorial: { overview: `${row.brand} ${row.model}. ${deliveredText} Configuration constructeur : ${row.equipment}.`, verifiedFacts: [`Pression de la configuration documentée : ${fmt(maximum)} bar.`, ...(tank === undefined ? [] : [tank === 0 ? 'Montage sans réservoir intégré explicitement documenté.' : `Cuve de stockage documentée : ${fmt(tank)} L.`]), `FAD sous pression identifié séparément des valeurs d’aspiration : ${deliveredText}`], limitations: limits }, evidence, fieldSources, notes: ['Portée de la source : FAD-pressure-qualified.', 'Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.', 'Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot.'] };
 });
}
