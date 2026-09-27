import { z } from 'zod';
import { applyReviewedCompressorDuty } from './reviewed-compressor-duty.mjs';

const positive = z.number().finite().positive();
const pressure = z.object({ min: positive, typical: positive, max: positive });
const identity = z.object({
	idSuffix: z.string().regex(/^[a-z0-9-]+$/).optional(),
	brand: z.string().min(1), model: z.string().min(1), mpn: z.string().min(1),
	sourceId: z.string().min(1), page: z.number().int().positive().optional(), rawLine: z.string().min(10),
	flowBasis: z.string().min(10), limitations: z.array(z.string()),
	specifications: z.array(z.object({ label: z.string().min(1), value: z.string().min(1) })).optional(),
	fieldEvidence: z.partialRecord(z.enum(['oilType', 'workingPressureBar']), z.array(z.object({
		sourceId: z.string().min(1), page: z.number().int().positive().optional(), notes: z.string().min(10),
	})).min(1)).optional(),
});
const compressorRow = identity.extend({
	tankLiters: z.number().finite().nonnegative(), maxPressureBar: positive,
	fadCurve: z.array(z.object({ pressureBar: positive, litersPerMinute: positive })),
	oilType: z.enum(['oil', 'oil-free']), oilSourcePage: z.number().int().positive().optional(),
	dutyCycle: z.number().positive().max(1).optional(),
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
const hosts = new Set(['finicompressors.com', 'web.fiac.it', 's3.eu-west-1.amazonaws.com', 'www.senco.eu', 'shop.scheppach.com', 'www.mecafer.com', 'v3.pdf.bostitch.eu', 'bostitch.fr', 'shop.fiac.it', 'shop.abacaircompressors.com', 'shinanoinc.com', 'www.clecotools.com', 'www.fiamgroup.com', 'www.deprag.com', 'www.rami-yokota.com', 'biax.de', 'airpress.fr', 'www.gentilinair.com', 'www.abacaircompressors.com', 'powertools.ingersollrand.com', 'ftp.salsify.com', 'www.rupes.com', 'www.nitto-kohki.eu']);
const slug = (s) => s.normalize('NFD').replaceAll(/\p{Diacritic}/gu, '').toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const format = (n) => n.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
function sourceFor(snapshot, sourceId) {
	if (snapshot.schemaVersion !== 1 || !['2026-09-26', '2026-09-27'].includes(snapshot.observedAt)) throw new Error('Lot non revu');
	const source = snapshot.sources.find(s => s.id === sourceId);
	if (!source || !/^[a-f0-9]{64}$/.test(source.sha256) || source.observedAt !== snapshot.observedAt) throw new Error('Preuve versionnée absente');
	const url = new URL(source.url);
	const additionalHost = snapshot.observedAt === '2026-09-27' && ['www.stuermer-machines.com', 'www.nuair.pl', 'prebena.de', 'www.mighty-seven.com', 'cms.mirka.com'].includes(url.hostname);
	if (url.protocol !== 'https:' || (!hosts.has(url.hostname) && !additionalHost) || url.username || url.password || url.port || url.search || url.hash) throw new Error('Source officielle invalide');
	if (url.hostname === 's3.eu-west-1.amazonaws.com' && !url.pathname.startsWith('/s37.lacme.com/crm/Catalogues/')) throw new Error('Catalogue Lacmé non reconnu');
	if (['shop.fiac.it', 'shop.abacaircompressors.com'].includes(url.hostname) && !/^\/en-(IT|INT|FR)\/products\/\d{10}(?:\/[a-z0-9-]+)?$/.test(url.pathname)) throw new Error('Fiche officielle non reconnue');
	if (url.hostname === 'shinanoinc.com' && !/^\/wp-content\/uploads\/SHINANO_(General-Catalog|Industrial-Air-Tools)_2025\.pdf$/.test(url.pathname)) throw new Error('Catalogue Shinano non revu');
	if (url.hostname === 'www.clecotools.com' && url.pathname !== '/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf') throw new Error('Catalogue Cleco non revu');
	return source;
}
function context(snapshot, row) {
	const source = sourceFor(snapshot, row.sourceId);
	const id = slug(`${row.brand}-${row.model}${row.idSuffix ? `-${row.idSuffix}` : ''}`);
	const evidenceId = slug(`${row.brand}-${row.mpn}-${snapshot.observedAt.replaceAll('-', '')}`);
	const sourceUrl = `${source.url}${row.page ? `#page=${row.page}` : ''}`;
	const evidence = [{ id: evidenceId, sourceUrl, sourceLabel: `${source.label}${row.page ? `, p. ${row.page}` : ''}, réf. ${row.mpn}`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: row.flowBasis }];
	return { id, evidenceId, evidence, source, sourceUrl };
}
function imageFor(row, id, sourceUrl) {
	return { src: `/images/products/${id}.webp`, alt: `Repères techniques ${row.brand} ${row.model}, référence ${row.mpn}`, sourceUrl, sourceLabel: 'Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit' };
}

function attachReviewedDetails(snapshot, row, product) {
	const mainEvidence = product.evidence[0].id;
	for (const [field, references] of Object.entries(row.fieldEvidence ?? {})) {
		if (!(field in product)) throw new Error('Preuve attribuée à un champ absent');
		const ids = references.map((reference, index) => {
			const source = sourceFor(snapshot, reference.sourceId);
			const id = `${mainEvidence}-${slug(field)}-${index + 1}`;
			product.evidence.push({ id, sourceUrl: `${source.url}${reference.page ? `#page=${reference.page}` : ''}`, sourceLabel: `${source.label}${reference.page ? `, p. ${reference.page}` : ''}`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: reference.notes });
			return id;
		});
		product.fieldSources[field] = ids;
		if (field === 'workingPressureBar') product.specifications.find(spec => spec.label === 'Condition de pression').evidenceIds = ids;
	}
	for (const spec of row.specifications ?? []) product.specifications.push({ ...spec, evidenceIds: [mainEvidence] });
	if (row.specifications?.length && 'demandModel' in product) {
		const facts = row.specifications.slice(0, 3).map(spec => `${spec.label} : ${spec.value.replace(/[.!?]$/, "")}.`);
		product.editorial.overview += ` ${facts.slice(0, 2).join(' ')}`;
		product.editorial.verifiedFacts.push(...facts);
	}
	return product;
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
			overview: `${r.brand} ${r.model}, référence ${r.mpn} : ${r.tankLiters ? `cuve de ${format(r.tankLiters)} L` : 'configuration sans cuve intégrée'}, pression maximale publiée de ${format(r.maxPressureBar)} bar. ${last ? `Le point documenté le plus élevé en pression fournit ${format(last.litersPerMinute)} L/min à ${format(last.pressureBar)} bar.` : 'Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.'} ${r.equipment}`.trim(),
			verifiedFacts: [last ? `Débit restitué publié : ${points.join(' ; ')}.` : 'Débit restitué à une pression de mesure précise : non documenté.', `${r.technology}. ${r.powerKw ? `Puissance moteur publiée : ${format(r.powerKw)} kW.` : ''}`.trim(), ...(r.intakeFlowLpm ? [`Débit aspiré : ${format(r.intakeFlowLpm)} L/min, distinct du débit restitué.`] : []), ...(r.weightKg ? [`Masse nette publiée : ${format(r.weightKg)} kg.`] : []), ...(r.voltage ? [`Alimentation publiée : ${r.voltage}${r.phase === 'three-phase' ? ', triphasée' : r.phase === 'single-phase' ? ', monophasée' : ''}.`] : [])],
			limitations: [!curve.length ? 'Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.' : curve.length === 1 ? 'Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.' : 'Les points proviennent de la fiche fabricant, pas d’un essai physique réalisé par CompatAir.', r.dutyCycle === undefined ? 'Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.' : 'Le taux de marche est celui déclaré par le fabricant ; les conditions de cycle et de température restent à respecter. La disponibilité commerciale reste à confirmer.', ...r.limitations],
		},
		specifications: [spec('Conditions du débit', r.flowBasis), ...(r.equipment ? [spec('Équipement', r.equipment)] : []), ...(r.dimensions ? [spec('Dimensions publiées', r.dimensions)] : [])], evidence,
		fieldSources: Object.fromEntries(['mpn', 'tankLiters', 'maxPressureBar', 'fadCurve'].map(f => [f, [evidenceId]])),
		notes: ['Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées.'],
	};
	p.fieldSources.oilType = [oilEvidenceId];
	for (const field of ['intakeFlowLpm', 'powerKw', 'weightKg', 'voltage', 'phase', 'ean', 'dutyCycle']) if (r[field] !== undefined) { p[field] = r[field]; p.fieldSources[field] = [evidenceId]; }
	return applyReviewedCompressorDuty(attachReviewedDetails(snapshot, r, p));
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
	return attachReviewedDetails(snapshot, r, p);
}
