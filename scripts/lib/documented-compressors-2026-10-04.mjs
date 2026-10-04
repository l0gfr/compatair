import { createHash } from 'node:crypto';
const sha = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const identity = value => slug(value).replaceAll('-', '');
const norm = value => value.replace(/\s+/g, ' ').trim();
const fmt = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const rounded = value => Number(value.toFixed(3));
// Immutable review manifest: changing a transcription or a configuration requires a fresh documentary review.
const reviewedManifest = {
  "recordsSha256": "16a1a4727b9192c923f94b4640282dcc61faca5071f8f0e5c469120b509a3c80",
  "sources": {
    "hertz-catalog": {
      "sha256": "e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339",
      "extractedPagesSha256": "f8ac974b4c627a2317de89d17aa869b25301d8bc4424e7b20184309e8f477d90",
      "provenanceSha256": "8b5ab5f89a8cdcde97f0d3fe9a54fab33a10eca31500152315b7c71c33599d4e"
    },
    "dalgakiran-catalog": {
      "sha256": "aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b",
      "extractedPagesSha256": "faa0d453080433bc4a73e90b216055dc16f44c040fbad161ae3c05a17361fd34",
      "provenanceSha256": "0336411d6a7736317c1be66481449808a7ac0eb178abeb9c5a180f38ae7cb1d5"
    },
    "lupamat-current-catalog": {
      "sha256": "3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978",
      "extractedPagesSha256": "2721bbf297bc8b24fa73a74887ad84234911bdfcaaa4ee6c715e30983b78f61e",
      "provenanceSha256": "4e373cab3b6d92571b320a50b3f487d5e2517c6e3c3c54fb8a450ddb2f656709"
    },
    "ktc-download-4": {
      "sha256": "90262fa5be288a704088e70f800049ab76cec4331e237b1b7d65d338ea95d4ac",
      "extractedPagesSha256": "af21ea03d35ae5690f90acd80eb58d85b3026132a8b2b23dc01340bdcf0896cf",
      "provenanceSha256": "cec9a806642f297a30184120c7e223abad32ffbbce04f1b40266cd7bc7ff5b47"
    },
    "ktc-download-0": {
      "sha256": "fb8e9e3d886333a85e6b0fd720cf06c451a2fc0826c8f816c536109d9bcb06ea",
      "extractedPagesSha256": "e51e468622a6f2a14ab33a2f2a4424404fc7560a1a8371be0ac49c23bd0badb0",
      "provenanceSha256": "9c427a6d1218570350d830e9656ef32274e7ef18c18314c882d9d01ac4dc1eca"
    },
    "silair-current-catalog": {
      "sha256": "d93f1024b6fa89f01eaacc77c199f3d2f5deb296b92dedf6081ab8568854468a",
      "extractedPagesSha256": "70fe2573263e527fb74594544ee8916c7d4a39ff18a70b3c93e030f4f628e3f2",
      "provenanceSha256": "1734ac21e6625713e214923252a48e108c70953c71c6949453a1e1f3f6cfd352"
    },
    "junair-current": {
      "sha256": "bf181f216ef2ae982f14f8c9e9d979e76c97b1fdefedd4a0b691b06556d406f9",
      "extractedPagesSha256": "324840f55033d3633f5f533d4ec351c131e8e5fccaefff9a3fd6efb4df5ff632",
      "provenanceSha256": "63edd7d83b7ef713e6e87287b0b49afa9cf893ee5cd2dbc2c42f19bd77235360"
    },
    "champion-fm90-132": {
      "sha256": "7c1ed2902c7e748d4f6631e2dbe9619da7ca922ef9a2ec3bad4f8ee4648bf3b9",
      "extractedPagesSha256": "f65815e99097d5362660f6621b831c3f2ac69b942a35237f86e820d78b8aee8a",
      "provenanceSha256": "93c63de44b2be8dd5ec9d2c182f65988e7c9e5809c5da18094e7997ea1e446e5"
    }
  }
};
const allowedHosts = new Set(['www.hertz-kompressoren.com', 'www.dalgakiran.com', 'lupamat.com', 'www.ktc-air.com', 'cdn.prod.website-files.com', 'azure-na-assets.contentstack.com', 'gastmfg.com']);
export function buildDocumentedCompressorsOctober4(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-compressors-2026-10-04' || snapshot.observedDate !== '2026-10-04' || !Array.isArray(snapshot.compressors) || snapshot.compressors.length !== 200 || sha(snapshot.compressors) !== reviewedManifest.recordsSha256) throw new Error('Lot ou transcriptions documentaires non reconnus');
 const sources = new Map(snapshot.sources.map(s => [s.id, s]));
 if (sources.size !== snapshot.sources.length || sources.size !== Object.keys(reviewedManifest.sources).length) throw new Error('Sources documentaires dupliquées ou manquantes');
 for (const source of sources.values()) {
  const reviewed = reviewedManifest.sources[source.id];
  if (!reviewed || sha(Object.fromEntries(Object.entries(source).filter(([key]) => !['extractedPages', 'extractedPagesSha256'].includes(key)))) !== reviewed.provenanceSha256 || source.sha256 !== reviewed.sha256 || source.status !== 200 || source.captureMethod !== 'original-response' || !/^2026-10-04T/.test(source.observedAt) || !Number.isInteger(source.bytes) || source.bytes < 1 || !source.contentType.includes('pdf')) throw new Error('Provenance primaire invalide');
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
 const number = ref => { const raw = original(ref), values = raw.match(/\d+(?:[.,]\d+)?/g), index = ref.numberIndex ?? 0; if (!Number.isInteger(index) || index < 0 || !values?.[index]) throw new Error('Valeur primaire absente'); return Number(values[index].replace(',', '.')); };
 const numeric = (claim, expectedUnit) => { if (!claim || claim.unit !== expectedUnit || !Number.isFinite(claim.value) || claim.value !== number(claim.ref)) throw new Error('Caractéristique chiffrée altérée'); return claim.value; };
 const flow = claim => { if (!['L/min', 'm3/min'].includes(claim?.unit)) throw new Error('Unité de débit non qualifiée'); return rounded(numeric(claim, claim.unit) * (claim.unit === 'm3/min' ? 1000 : 1)); };
 const seen = new Set();
 return snapshot.compressors.map(row => {
  const id = slug(`${row.brand} ${row.model}`), key = identity(`${row.brand} ${row.model}`);
  if (row.id !== id || seen.has(key) || !identity(original(row.modelProof)).includes(identity(row.model))) throw new Error('Identité primaire altérée ou dupliquée'); seen.add(key);
  const evidence = [], fieldSources = {};
  const add = ref => { original(ref); const source = sources.get(ref.sourceId), eid = `october4-${slug(source.id)}-p${ref.page}`; if (!evidence.some(e => e.id === eid)) evidence.push({ id: eid, sourceUrl: `${source.url}#page=${ref.page}`, sourceLabel: `${source.sourceLabel}, page PDF ${ref.page}`, sourceType: 'manual', sourceRole: 'primary', retrievedAt: '2026-10-04', confidence: 'B', notes: `SHA-256 ${source.sha256} de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir.` }); return eid; };
  const link = (field, refs) => { fieldSources[field] = [...new Set(refs.filter(Boolean).map(add))]; return fieldSources[field]; };
  link('model', [row.modelProof]);
  const maximum = numeric(row.maximum, 'bar');
  if (maximum <= 0 || !['explicit-maximum-pressure', 'explicit-maximum-working-pressure', 'selected-working-pressure-ceiling'].includes(row.maxPressureBasis)) throw new Error('Pression de configuration non qualifiée');
  link('maxPressureBar', [row.maximum.ref]);
  let tank;
  if (row.tank.unit === 'absent-receiver') {
   const raw = original(row.tank.ref), mount = original(row.tank.mountProof);
   const explicitBase = /Base\s*Mounted/i.test(raw) && /Base/i.test(mount);
   const explicitFloor = raw === 'FLOOR' && /REC FLOOR/.test(mount);
   const groundedWithoutReceiver = row.brand === 'KTC' && raw.includes('/') && /grounded/.test(mount) && row.tank.configuration.includes('grounded');
   const explicitExclusion = row.brand === 'Lupamat' && raw === '-' && /Air receiver is not included in enclosure type models/.test(mount) && row.tank.configuration === 'Cabinet Type';
   if (row.tank.value !== 0 || !(explicitBase || explicitFloor || groundedWithoutReceiver || explicitExclusion)) throw new Error('Absence de cuve non démontrée');
   tank = 0; link('tankLiters', [row.tank.ref, row.tank.mountProof]);
  } else { tank = numeric(row.tank, 'L'); if (tank <= 0) throw new Error('Cuve inconnue convertie en zéro'); link('tankLiters', [row.tank.ref]); }
  const conditions = row.conditionProofs.map(ref => { add(ref); return original(ref); });
  let points = [];
  if (row.flow) {
   const measurementPressure = numeric(row.flow.pressure, 'bar'), delivered = flow(row.flow);
   if (measurementPressure < 0 || measurementPressure > maximum || delivered <= 0 || row.sourceClaimScope !== 'FAD-pressure-qualified' || !conditions.some(text => /FAD|free air delivery|ISO 1217/i.test(text))) throw new Error('FAD ou pression de mesure non qualifiés');
   points = [{ pressureBar: measurementPressure, litersPerMinute: delivered }];
   link('fadCurve', [row.flow.ref, row.flow.pressure.ref, ...row.conditionProofs]);
  } else {
   if (row.sourceClaimScope !== (row.intake ? 'piston-displacement-only' : 'capacity-at-pressure-method-unqualified')) throw new Error('Portée du débit non qualifiée');
   link('fadCurve', row.conditionProofs);
  }
  let intake;
  if (row.intake) { intake = flow(row.intake); link('intakeFlowLpm', [row.intake.ref]); }
  let unqualified;
  if (row.unqualifiedCapacity) { if (row.flow || row.sourceClaimScope !== 'capacity-at-pressure-method-unqualified') throw new Error('Capacité non qualifiée promue en FAD'); unqualified = flow(row.unqualifiedCapacity); add(row.unqualifiedCapacity.ref); }
  let power;
  if (row.power) { if (!['W', 'kW'].includes(row.power.unit)) throw new Error('Unité de puissance inconnue'); power = rounded(numeric(row.power, row.power.unit) * (row.power.unit === 'W' ? .001 : 1)); if (power <= 0) throw new Error('Puissance invalide'); link('powerKw', [row.power.ref]); }
  if (!['oil', 'oil-free', 'unknown'].includes(row.oilType)) throw new Error('Lubrification inconnue');
  if (row.oilType !== 'unknown') { const q = original(row.oilProof); if (!(row.oilType === 'oil-free' ? /oil[ -]?free/i : /Oil Injected|Oil -injected|oil-lubricated|oil splash|flooded/i).test(q)) throw new Error('Lubrification non documentée'); link('oilType', [row.oilProof]); } else if (row.oilProof) throw new Error('Lubrification ambiguë');
  let duty;
  if (row.dutyCycle !== null) {
   const q = original(row.dutyProof); duty = row.dutyCycle;
   if (!(duty === 1 && (/Designed for continuous operation/.test(q) || /100%/.test(q)) || duty === .5 && /50%/.test(q))) throw new Error('Cycle non documenté'); link('dutyCycle', [row.dutyProof]);
  } else if (row.dutyProof) throw new Error('Cycle inconnu requalifié');
  if (row.electrical) { original(row.electrical); if (row.electrical.frequencyHz !== 50) throw new Error('Fréquence de configuration altérée'); add(row.electrical); }
  const limits = [...row.limitations, 'Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.'];
  if (!duty) limits.push('Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.');
  if (row.maxPressureBasis === 'selected-working-pressure-ceiling') limits.push('Le plafond CompatAir correspond à la pression de travail de la version retenue. Il ne décrit ni la soupape ni le maximum de toutes les versions de la famille.');
  const specs = [{ label: 'Configuration constructeur', value: row.equipment, evidenceIds: fieldSources.tankLiters }, { label: row.maxPressureBasis === 'selected-working-pressure-ceiling' ? 'Pression de la configuration retenue' : 'Pression maximale de fonctionnement publiée', value: `${fmt(maximum)} bar`, evidenceIds: fieldSources.maxPressureBar }, { label: 'Cuve de stockage', value: tank === 0 ? 'Stockage intégré absent, montage constructeur documenté' : `${fmt(tank)} L`, evidenceIds: fieldSources.tankLiters }];
  if (points.length) specs.push({ label: `Air livré à ${fmt(points[0].pressureBar)} bar`, value: `${fmt(points[0].litersPerMinute)} L/min`, evidenceIds: fieldSources.fadCurve });
  else specs.push({ label: 'FAD sous pression', value: 'Non qualifié par la source retenue', evidenceIds: fieldSources.fadCurve });
  if (intake) specs.push({ label: 'Débit aspiré / déplacement publié, distinct du FAD', value: `${fmt(intake)} L/min`, evidenceIds: fieldSources.intakeFlowLpm });
  if (unqualified) specs.push({ label: 'Capacité publiée sous pression, méthode FAD non qualifiée', value: `${fmt(unqualified)} L/min à ${fmt(maximum)} bar`, evidenceIds: [add(row.unqualifiedCapacity.ref)] });
  if (power) specs.push({ label: 'Puissance publiée', value: `${fmt(power)} kW`, evidenceIds: fieldSources.powerKw });
  if (duty) specs.push({ label: 'Cycle de service déclaré', value: `${fmt(duty * 100)} %`, evidenceIds: fieldSources.dutyCycle });
  if (row.electrical) specs.push({ label: 'Fréquence de la configuration retenue', value: '50 Hz', evidenceIds: [add(row.electrical)] });
  if (row.mpn) { if (!norm(sources.get(row.sourceId).extractedPages.map(p => p.text).join(' ')).includes(row.mpn)) throw new Error('Code constructeur non documenté'); link('mpn', [row.modelProof]); }
  const deliveredText = points.length ? `${fmt(points[0].litersPerMinute)} L/min déclarés à ${fmt(points[0].pressureBar)} bar.` : 'Le débit restitué sous pression reste non qualifié.';
  return { id, slug: id, brand: row.brand, model: row.model, ...(row.mpn ? { mpn: row.mpn } : {}), variant: { familyId: id, label: row.equipment, distinguishingAttributes: { équipement: row.equipment, pressionDeConfiguration: `${fmt(maximum)} bar`, cuve: `${fmt(tank)} L`, ...(row.electrical ? { fréquence: '50 Hz' } : {}) } }, tankLiters: tank, maxPressureBar: maximum, fadCurve: points, ...(intake ? { intakeFlowLpm: intake } : {}), ...(duty ? { dutyCycle: duty } : {}), ...(power ? { powerKw: power } : {}), oilType: row.oilType, confidence: 'B', status: 'unknown', image: { src: `/images/products/${id}.svg`, alt: `Repères techniques : ${row.brand} ${row.model}`, sourceUrl: sources.get(row.sourceId).url, sourceLabel: 'Carte technique CompatAir, données déclarées par le constructeur' }, specifications: specs, editorial: { overview: `${row.brand} ${row.model}. ${deliveredText} ${row.equipment}.`, verifiedFacts: [`Configuration de pression documentée : ${fmt(maximum)} bar.`, tank === 0 ? 'Montage sans réservoir de stockage intégré explicitement documenté.' : `Cuve de stockage documentée : ${fmt(tank)} L.`, ...(points.length ? [`FAD sous pression identifié séparément des valeurs d’aspiration : ${deliveredText}`] : [])], limitations: limits }, evidence, fieldSources, notes: [`Portée de la source : ${row.sourceClaimScope}.`, 'Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.'] };
 });
}
