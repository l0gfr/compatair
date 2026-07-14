import { createHash } from 'node:crypto';
import type { Compressor } from './catalog';

export const BAROMETER_SCHEMA_VERSION = '3.0.0';
export const BAROMETER_FRESHNESS_DAYS = 365;
export const BAROMETER_MINIMUM_SAMPLE = 10;

export const transparencyCriteria = [
	{ id: 'multiPressureFad', dimension: 'manufacturerTransparency', label: 'FAD à plusieurs pressions', description: 'Part des compresseurs avec au moins deux points de débit restitué dans la documentation du constructeur.' },
	{ id: 'dutyCycle', dimension: 'manufacturerTransparency', label: 'Cycle de service publié', description: 'Part des compresseurs dont le cycle de service figure dans la documentation du constructeur.' },
	{ id: 'officialSource', dimension: 'manufacturerTransparency', label: 'Source technique accessible', description: 'Part des compresseurs reliés à une source constructeur ou à une notice accessible.' },
	{ id: 'acousticValue', dimension: 'manufacturerTransparency', label: 'Valeur acoustique publiée', description: 'Part des compresseurs avec une valeur acoustique documentée. Le protocole de mesure n’est pas encore noté.' },
	{ id: 'identifiers', dimension: 'compatAirCoverage', label: 'Identifiants couverts', description: 'Part des compresseurs pour lesquels le catalogue CompatAir contient à la fois le MPN et l’EAN. Ce critère ne note pas le constructeur.' },
	{ id: 'freshness', dimension: 'compatAirCoverage', label: 'Vérifications récentes', description: `Part des compresseurs dont CompatAir a consulté une preuve dans les ${BAROMETER_FRESHNESS_DAYS} jours précédant l’édition. Ce critère mesure notre couverture.` },
] as const;

type CriterionId = typeof transparencyCriteria[number]['id'];

function percentage(values: boolean[]) {
	return values.length ? Math.round(values.filter(Boolean).length / values.length * 100) : 0;
}

function segment(tankLiters: number) { return tankLiters <= 24 ? 'portable-0-24l' : tankLiters < 100 ? 'atelier-25-99l' : 'production-100l-plus'; }

export function createTransparencyBarometer(compressors: Compressor[], publishedAt: string) {
	const brands = [...new Set(compressors.map((item) => item.brand))];
	const publishedTime = Date.parse(`${publishedAt}T00:00:00Z`);
	const rows = brands.map((brand) => {
		const products = compressors.filter((item) => item.brand === brand);
		const scores: Record<CriterionId, number> = {
			multiPressureFad: percentage(products.map((item) => item.fadCurve.length >= 2)),
			dutyCycle: percentage(products.map((item) => item.dutyCycle !== undefined)),
			officialSource: percentage(products.map((item) => item.evidence.some((evidence) => evidence.sourceType === 'manufacturer' || evidence.sourceType === 'manual'))),
			acousticValue: percentage(products.map((item) => item.noiseDb !== undefined)),
			identifiers: percentage(products.map((item) => Boolean(item.mpn && item.ean))),
			freshness: percentage(products.map((item) => item.evidence.some((evidence) => {
				const age = publishedTime - Date.parse(`${evidence.retrievedAt}T00:00:00Z`);
				return age >= 0 && age <= BAROMETER_FRESHNESS_DAYS * 86_400_000;
			}))),
		};
		const manufacturerIds: CriterionId[] = ['multiPressureFad', 'dutyCycle', 'officialSource', 'acousticValue'];
		const coverageIds: CriterionId[] = ['identifiers', 'freshness'];
		const score = Math.round(manufacturerIds.reduce((total, id) => total + scores[id], 0) / manufacturerIds.length);
		const coverageScore = Math.round(coverageIds.reduce((total, id) => total + scores[id], 0) / coverageIds.length);
		const manufacturerScores = manufacturerIds.map((id) => scores[id]);
		return {
			brand, sampleSize: products.length, eligibleForRanking: products.length >= BAROMETER_MINIMUM_SAMPLE, score, coverageScore,
			observedCompletenessRange: { low: Math.min(...manufacturerScores), high: Math.max(...manufacturerScores) }, criteria: scores,
			references: products.map((item) => ({ id: item.id, model: item.model, segment: segment(item.tankLiters) })),
		};
	}).sort((a, b) => Number(b.eligibleForRanking) - Number(a.eligibleForRanking) || b.score - a.score || b.sampleSize - a.sampleSize || a.brand.localeCompare(b.brand));
	const rankingPublished = rows.filter((row) => row.eligibleForRanking).length >= 2;
	let officialRank = 0;
	const data = {
		schemaVersion: BAROMETER_SCHEMA_VERSION,
		edition: publishedAt.slice(0, 4),
		publishedAt,
		scope: 'Corpus des compresseurs présents dans le catalogue CompatAir, avec score constructeur séparé de la couverture CompatAir',
		minimumSampleForRanking: BAROMETER_MINIMUM_SAMPLE,
		rankingPublished,
		limitations: ['Les dates disponibles sont des dates de consultation par CompatAir, pas nécessairement des dates de publication constructeur.', 'Les références étudiées ont été sélectionnées pour construire le catalogue et ne constituent pas un échantillon aléatoire du marché. La plage publiée décrit seulement l’écart observé entre les quatre critères.', 'Les catégories décrivent la taille de cuve. Elles ne garantissent pas encore une représentation identique des gammes et des usages.', 'Les fabricants peuvent signaler une source ou demander une correction via la page de contact.'],
		criteria: transparencyCriteria,
		brands: rows.map((row) => ({ rank: rankingPublished && row.eligibleForRanking ? ++officialRank : null, status: rankingPublished && row.eligibleForRanking ? 'official' : 'provisional', ...row })),
	};
	return { barometerVersion: createHash('sha256').update(JSON.stringify(data)).digest('hex'), ...data };
}
