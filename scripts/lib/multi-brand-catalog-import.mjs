import { z } from 'zod';

const positive = z.number().finite().positive();
const pressure = z.object({ min: positive, typical: positive, max: positive });
const identity = z.object({
	brand: z.string().min(1), model: z.string().min(1), mpn: z.string().min(1),
	sourceId: z.string().min(1), page: z.number().int().positive().optional(), rawLine: z.string().min(10),
	flowBasis: z.string().min(10), limitations: z.array(z.string()),
});
const compressorRow = identity.extend({
	tankLiters: z.number().finite().nonnegative(), maxPressureBar: positive,
	fadCurve: z.array(z.object({ pressureBar: positive, litersPerMinute: positive })).min(1),
	oilType: z.enum(['oil', 'oil-free']), oilSourcePage: z.number().int().positive().optional(),
	intakeFlowLpm: positive.optional(), powerKw: positive.optional(), weightKg: positive.optional(),
	voltage: z.string().optional(), phase: z.enum(['single-phase', 'three-phase']).optional(),
	ean: z.string().regex(/^\d{13}$/).optional(), dimensions: z.string().optional(),
	technology: z.string().min(1), equipment: z.string(),
});
const toolRow = identity.extend({
	categoryId: z.string().min(1), demandModel: z.enum(['fixed-flow', 'per-action']),
	workingPressureBar: pressure, pressureBasis: z.string().min(10),
	airflowLpm: positive.optional(), airPerActionLiters: positive.optional(),
});
const hosts = new Set(['finicompressors.com', 'web.fiac.it', 's3.eu-west-1.amazonaws.com', 'www.senco.eu', 'shop.scheppach.com', 'www.mecafer.com', 'v3.pdf.bostitch.eu', 'bostitch.fr']);
const slug = (s) => s.normalize('NFD').replaceAll(/\p{Diacritic}/gu, '').toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const format = (n) => n.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
function context(snapshot, row) {
	if (snapshot.schemaVersion !== 1 || snapshot.observedAt !== '2026-09-26') throw new Error('Lot non revu');
	const source = snapshot.sources.find(s => s.id === row.sourceId);
	if (!source || !/^[a-f0-9]{64}$/.test(source.sha256) || source.observedAt !== snapshot.observedAt) throw new Error('Preuve versionnée absente');
	const url = new URL(source.url);
	if (url.protocol !== 'https:' || !hosts.has(url.hostname) || url.username || url.password || url.port || url.search || url.hash) throw new Error('Source officielle invalide');
	if (url.hostname === 's3.eu-west-1.amazonaws.com' && !url.pathname.startsWith('/s37.lacme.com/crm/Catalogues/')) throw new Error('Catalogue Lacmé non reconnu');
	const id = slug(`${row.brand}-${row.model}`);
	const evidenceId = slug(`${row.brand}-${row.mpn}-20260926`);
	const sourceUrl = `${source.url}${row.page ? `#page=${row.page}` : ''}`;
	const evidence = [{ id: evidenceId, sourceUrl, sourceLabel: `${source.label}${row.page ? `, p. ${row.page}` : ''}, réf. ${row.mpn}`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: row.flowBasis }];
	return { id, evidenceId, evidence, source, sourceUrl };
}
function imageFor(row, id, sourceUrl) {
	return { src: `/images/products/${id}.webp`, alt: `Repères techniques ${row.brand} ${row.model}, référence ${row.mpn}`, sourceUrl, sourceLabel: 'Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit' };
}
export function createMultiBrandCompressor(snapshot, input) {
	const r = compressorRow.parse(input);
	const { id, evidenceId, evidence, source, sourceUrl } = context(snapshot, r);
	const curve = [...r.fadCurve].sort((a, b) => a.pressureBar - b.pressureBar);
	if (new Set(curve.map(p => p.pressureBar)).size !== curve.length || curve.some(p => p.pressureBar > r.maxPressureBar) || curve.some((p, i) => i > 0 && p.litersPerMinute > curve[i - 1].litersPerMinute)) throw new Error('Courbe FAD incohérente');
	if (r.intakeFlowLpm && curve.some(p => p.litersPerMinute > r.intakeFlowLpm)) throw new Error('Restitution supérieure à l’aspiration');
	const oilEvidenceId = r.oilSourcePage ? `${evidenceId}-lubrification` : evidenceId;
	if (r.oilSourcePage) evidence.push({ id: oilEvidenceId, sourceUrl: `${source.url}#page=${r.oilSourcePage}`, sourceLabel: `${source.label}, lubrification, p. ${r.oilSourcePage}`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: 'Source du mode de lubrification uniquement.' });
	const points = curve.map(p => `${format(p.litersPerMinute)} L/min à ${format(p.pressureBar)} bar`);
	const last = curve.at(-1);
	const spec = (label, value) => ({ label, value, evidenceIds: [evidenceId] });
	const p = {
		id, slug: id, brand: r.brand, model: r.model, mpn: r.mpn,
		tankLiters: r.tankLiters, maxPressureBar: r.maxPressureBar, fadCurve: curve, oilType: r.oilType,
		confidence: 'A', status: 'unknown', image: imageFor(r, id, sourceUrl),
		editorial: {
			overview: `${r.brand} ${r.model}, référence ${r.mpn} : ${r.tankLiters ? `cuve de ${format(r.tankLiters)} L` : 'configuration sans cuve intégrée'}, pression maximale publiée de ${format(r.maxPressureBar)} bar. Le point documenté le plus élevé en pression fournit ${format(last.litersPerMinute)} L/min à ${format(last.pressureBar)} bar. ${r.equipment}`.trim(),
			verifiedFacts: [`Débit restitué publié : ${points.join(' ; ')}.`, `${r.technology}. ${r.powerKw ? `Puissance moteur publiée : ${format(r.powerKw)} kW.` : ''}`.trim(), ...(r.intakeFlowLpm ? [`Débit aspiré : ${format(r.intakeFlowLpm)} L/min, distinct du débit restitué.`] : []), ...(r.weightKg ? [`Masse nette publiée : ${format(r.weightKg)} kg.`] : []), ...(r.voltage ? [`Alimentation publiée : ${r.voltage}${r.phase === 'three-phase' ? ', triphasée' : r.phase === 'single-phase' ? ', monophasée' : ''}.`] : [])],
			limitations: [curve.length === 1 ? 'Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.' : 'Les points proviennent de la fiche fabricant, pas d’un essai physique réalisé par CompatAir.', 'Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.', ...r.limitations],
		},
		specifications: [spec('Conditions du débit', r.flowBasis), ...(r.equipment ? [spec('Équipement', r.equipment)] : []), ...(r.dimensions ? [spec('Dimensions publiées', r.dimensions)] : [])], evidence,
		fieldSources: Object.fromEntries(['mpn', 'tankLiters', 'maxPressureBar', 'fadCurve'].map(f => [f, [evidenceId]])),
		notes: ['Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées.'],
	};
	p.fieldSources.oilType = [oilEvidenceId];
	for (const field of ['intakeFlowLpm', 'powerKw', 'weightKg', 'voltage', 'phase', 'ean']) if (r[field] !== undefined) { p[field] = r[field]; p.fieldSources[field] = [evidenceId]; }
	return p;
}
export function createMultiBrandTool(snapshot, input) {
	const r = toolRow.parse(input);
	const { id, evidenceId, evidence, sourceUrl } = context(snapshot, r);
	const { min, typical, max } = r.workingPressureBar;
	if (min > typical || typical > max || (r.demandModel === 'fixed-flow' ? !r.airflowLpm || r.airPerActionLiters : !r.airPerActionLiters || r.airflowLpm)) throw new Error('Demande d’air incohérente');
	const perAction = r.demandModel === 'per-action';
	const p = {
		id, slug: id, brand: r.brand, model: r.model, mpn: r.mpn, categoryId: r.categoryId, category: r.categoryId,
		label: `${r.brand} ${r.model}`, demandModel: r.demandModel, workingPressureBar: r.workingPressureBar,
		confidence: perAction ? 'A' : 'B', image: imageFor(r, id, sourceUrl),
		editorial: {
			overview: `${r.brand} ${r.model}, référence ${r.mpn}. ${perAction ? `Le fabricant publie ${format(r.airPerActionLiters)} litre(s) d’air par coup à ${format(typical)} bar : la cadence est indispensable pour dimensionner le compresseur.` : `Le tableau fabricant publie ${format(r.airflowLpm)} L/min et une plage d’utilisation de ${format(min)} à ${format(max)} bar.`}`,
			verifiedFacts: [r.pressureBasis, r.flowBasis, `Référence fabricant : ${r.mpn}.`], limitations: r.limitations,
		},
		specifications: [{ label: 'Condition de pression', value: r.pressureBasis, evidenceIds: [evidenceId] }, { label: 'Condition de consommation', value: r.flowBasis, evidenceIds: [evidenceId] }],
		evidence, fieldSources: Object.fromEntries(['mpn', 'workingPressureBar', perAction ? 'airPerActionLiters' : 'airflowLpm'].map(f => [f, [evidenceId]])), notes: ['Données déclarées par le fabricant ; aucune mesure physique CompatAir.'],
	};
	if (perAction) { p.airPerActionLiters = r.airPerActionLiters; p.actionLabel = 'coup'; }
	else p.airflowLpm = { min: r.airflowLpm, typical: r.airflowLpm, max: r.airflowLpm };
	return p;
}
