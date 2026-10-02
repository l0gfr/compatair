import { createHash } from 'node:crypto';
const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const fmt = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const numbers = value => [...value.matchAll(/\d+(?:[.,]\d+)?/g)].map(match => Number(match[0].replace(',', '.')));
const positive = value => { if (!Number.isFinite(value) || value <= 0) throw new Error('Valeur positive requise'); return value; };

export function buildDocumentedCompressorsOctober2(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-compressors-2026-10-02' || snapshot.compressors.length !== 400) throw new Error('Lot documentaire non reconnu');
 const sources = new Map(snapshot.sources.map(source => [source.id, source]));
 if (sources.size !== snapshot.sources.length) throw new Error('Source dupliquée');
 for (const source of sources.values()) {
  const url = new URL(source.url);
  if (url.protocol !== 'https:' || url.username || url.password || !/^[a-f0-9]{64}$/.test(source.sha256) || !/^2026-10-01T/.test(source.observedAt) || !['original-response', 'web-text-extract'].includes(source.captureMethod)) throw new Error('Provenance invalide');
  if (source.captureMethod === 'web-text-extract' && (typeof source.extractedText !== 'string' || source.dutyQuote !== source.extractedText || createHash('sha256').update(source.extractedText).digest('hex') !== source.sha256)) throw new Error('Extrait versionné altéré');
 }
 const evidence = (sourceId, page) => {
  const source = sources.get(sourceId);
  if (!source || page !== undefined && (!Number.isInteger(page) || page < 1)) throw new Error('Localisation documentaire absente');
  return { id: `october2-${sourceId}${page ? `-p${page}` : ''}`, sourceUrl: source.url + (page ? `#page=${page}` : ''), sourceLabel: source.sourceLabel + (page ? `, page PDF ${page}` : ''), sourceType: source.contentType.includes('pdf') ? 'manual' : 'manufacturer', sourceRole: 'primary', retrievedAt: source.observedAt.slice(0, 10), confidence: 'B', notes: `SHA-256 ${source.sha256}${source.captureMethod === 'web-text-extract' ? ' de l’extrait textuel versionné, et non du HTML original' : ' de la réponse originale'}. Données fabricant ; aucun essai physique CompatAir.` };
 };
 const ids = new Set(), references = new Set();
 return snapshot.compressors.map(row => {
  if (!['KAESER', 'BroomWade'].includes(row.brand) || !row.points.length || row.tankLiters < 0 || !row.equipment) throw new Error('Configuration absente');
  const primary = evidence(row.sourceId, row.page);
  if (row.brand === 'BroomWade' && (!row.mpn || !row.sourceRows.some(line => line.startsWith('PART NO ') && (line.match(/RSCCP\d+(?:V\d+)?|CC\d+/g) ?? []).includes(row.mpn)))) throw new Error('Numéro d’article absent du tableau');
  const documentedPoints = row.points.map(point => {
   if (point.flowUnit !== 'm3/min' || point.pressureBar > row.maxPressureBar || point.flowMinimumOriginal !== null && point.flowMinimumOriginal > point.flowOriginal) throw new Error('Point FAD invalide');
   if (row.brand === 'KAESER') {
    const cells = point.expandedCells;
    if (!cells || cells[0] !== row.model || Number(cells[1]) !== point.pressureBar || Number(cells[3]) !== row.maxPressureBar || numbers(cells[2]).at(-1) !== point.flowOriginal || Number(cells[4]) !== row.powerKw || Number(cells.at(-1)) !== row.weightKg) throw new Error('Colonne KAESER altérée');
    if (row.model === 'DSDX 305' && point.pressureBar >= 10) throw new Error('Point suspect exclu du calcul');
   } else {
    const flow = row.sourceRows.find(line => /^(Capacity at|FAD\*)/.test(line));
    const pressure = row.sourceRows.find(line => /^(Maximum [pP]ressure|Max\. Pressure|Nominal pressure)/.test(line));
    if (!Number.isInteger(row.columnIndex) || numbers(flow?.split('m3/min')[1] ?? '')[row.columnIndex] !== point.flowOriginal || numbers(pressure?.split('bar')[1] ?? '')[row.columnIndex] !== point.pressureBar) throw new Error('Colonne BroomWade altérée');
    if (row.page === 26) {
     if (row.maximumPressureQuote !== 'Pressure Range: 5 to 10 bar' || row.maxPressureBar !== 10 || point.pressureBar !== 10) throw new Error('Limite de pression FM22+ non établie');
    } else if (row.maxPressureBar !== point.pressureBar) throw new Error('Pression maximale du tableau altérée');
   }
   return { pressureBar: positive(point.pressureBar), litersPerMinute: Number((positive(point.flowOriginal) * 1000).toFixed(3)) };
  }).sort((a, b) => a.pressureBar - b.pressureBar);
  if (new Set(documentedPoints.map(point => point.pressureBar)).size !== documentedPoints.length) throw new Error('Pression FAD dupliquée');
  const dpp = row.brand === 'BroomWade' && ['FM02 DPP', 'FM03 DPP'].includes(row.model);
  if (dpp !== Boolean(row.withholdFadReason)) throw new Error('Périmètre de divergence DPP altéré');
  const fadCurve = dpp ? [] : documentedPoints;
  const dutySource = row.dutySourceId ? sources.get(row.dutySourceId) : undefined;
  if (row.dutySourceId && (!dutySource || !/continuous|100% duty cycles/.test(dutySource.dutyQuote ?? ''))) throw new Error('Service continu non documenté');
  if (row.brand === 'KAESER' && row.dutySourceId && (row.model.includes('SFC') ? row.dutySourceId !== 'kaeser-sfc-duty-id' : !/^(ASD|BSD|CSD )/.test(row.model) || row.dutySourceId !== 'kaeser-duty-asd')) throw new Error('Service continu attribué hors de son périmètre');
  const duty = dutySource ? evidence(row.dutySourceId, row.dutyPage ?? dutySource.dutyPage) : undefined;
  const id = slug(`${row.brand}-${row.model}-${row.mpn ?? ''}-${row.maxPressureBar}-bar`);
  const reference = `${row.brand}:${row.mpn ?? `${row.model}:${row.maxPressureBar}`}`;
  if (ids.has(id) || references.has(reference)) throw new Error('Configuration dupliquée');
  ids.add(id); references.add(reference);
  const divergence = dpp ? evidence(row.sourceId, 8) : undefined;
  const productEvidence = [primary, ...(duty && duty.id !== primary.id ? [duty] : []), ...(divergence ? [divergence] : [])];
  const label = `${row.brand} ${row.model}${row.mpn ? `, réf. ${row.mpn}` : ''}, ${fmt(row.maxPressureBar)} bar`;
  const specification = (label, value) => ({ label, value, evidenceIds: [primary.id] });
  const specifications = [specification('Équipement', `${row.equipment} ; cuve intégrée ${row.tankLiters} L`), ...row.points.map(point => specification(`${dpp ? 'FAD amont publié, hors calcul' : 'Débit restitué'} à ${fmt(point.pressureBar)} bar`, `${point.flowMinimumOriginal !== null ? `${fmt(point.flowMinimumOriginal)} à ` : ''}${fmt(point.flowOriginal)} m³/min`)), ...(row.dimensionsMm ? [specification(row.brand === 'KAESER' ? 'Dimensions (largeur × profondeur × hauteur)' : 'Dimensions (longueur × largeur × hauteur)', `${row.dimensionsMm.join(' × ')} mm`)] : []), ...(row.connection ? [specification('Raccordement d’air', row.connection)] : []), ...(row.noiseOriginal ? [specification('Niveau sonore imprimé', `${row.noiseOriginal.replaceAll('\n', ' / ')} dB(A) ; voir les conditions et options de refroidissement du tableau`)] : [])];
  const fields = ['tankLiters', 'maxPressureBar', 'fadCurve', 'powerKw', ...(row.mpn ? ['mpn'] : []), ...(row.weightKg ? ['weightKg'] : []), ...(row.oilType !== 'unknown' ? ['oilType'] : [])];
  return { id, slug: id, brand: row.brand, model: row.model, ...(row.mpn ? { mpn: row.mpn } : {}), variant: { familyId: slug(`${row.brand}-${row.model}`), label: `${row.equipment}, ${row.tankLiters} L, ${fmt(row.maxPressureBar)} bar${row.mpn ? `, ${row.mpn}` : ''}`, distinguishingAttributes: { équipement: row.equipment, cuve: `${row.tankLiters} L`, pression: `${fmt(row.maxPressureBar)} bar`, ...(row.mpn ? { référence: row.mpn } : {}) } }, tankLiters: row.tankLiters, maxPressureBar: positive(row.maxPressureBar), fadCurve, ...(duty ? { dutyCycle: 1 } : {}), oilType: row.oilType, powerKw: positive(row.powerKw), ...(row.weightKg ? { weightKg: positive(row.weightKg) } : {}), mobility: 'fixed', confidence: 'B', status: 'unknown', image: { src: `/images/products/${id}.webp`, alt: `Repères techniques : ${label}`, sourceUrl: sources.get(row.sourceId).url, sourceLabel: 'Carte technique CompatAir, données déclarées par le fabricant' }, specifications, editorial: { overview: `${label}. ${dpp ? row.withholdFadReason : fadCurve.map(point => `${fmt(point.litersPerMinute)} L/min à ${fmt(point.pressureBar)} bar`).join(' ; ')}. Moteur ${fmt(row.powerKw)} kW ; ${row.equipment}.`, verifiedFacts: [dpp ? 'Les débits imprimés et leur localisation amont sont conservés hors du calcul de compatibilité.' : 'Débits restitués associés aux pressions du tableau de cette configuration.', `Cuve intégrée : ${row.tankLiters} L ; aucun volume de réservoir externe ajouté.`, ...(row.mpn ? [`Numéro d’article fabricant : ${row.mpn}.`] : [])], limitations: [...(dpp ? [row.withholdFadReason] : []), row.points.some(point => point.flowMinimumOriginal !== null) ? 'La plage SFC décrit le réglage de vitesse à une pression donnée ; seul son maximum publié est utilisé comme capacité disponible. La stabilité à faible charge et la régulation ne sont pas simulées.' : 'Les points FAD publiés ne constituent pas une mesure de toute la courbe ; aucune extrapolation au-dessus de la dernière pression documentée.', duty ? 'Service continu déclaré pour la série ; les conditions d’installation, de refroidissement et d’entretien restent applicables.' : 'Le cycle de service de cette série n’est pas établi par les sources retenues ; la tenue permanente reste indéterminée.', 'Documentation datée, disponibilité et équipement livré à confirmer sur le devis. Aucun avis d’utilisation ni essai CompatAir.', ...(row.oilType === 'unknown' ? ['Le fluide de refroidissement décrit ne permet pas d’affirmer une qualité d’air ou une lubrification particulière.'] : [])] }, evidence: productEvidence, fieldSources: { ...Object.fromEntries(fields.map(field => [field, [primary.id]])), ...(divergence ? { fadCurve: [primary.id, divergence.id] } : {}), ...(duty ? { dutyCycle: [duty.id] } : {}) }, notes: ['FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration.'] };
 });
}
