import { createHash } from 'node:crypto';
import type { Compressor } from './catalog';

export const BAROMETER_SCHEMA_VERSION = '1.0.0';
export const BAROMETER_FRESHNESS_DAYS = 365;

export const transparencyCriteria = [
	{ id: 'multiPressureFad', label: 'FAD à plusieurs pressions', description: 'Part des compresseurs avec au moins deux points de débit restitué documentés.' },
	{ id: 'dutyCycle', label: 'Cycle de service publié', description: 'Part des compresseurs dont le cycle de service figure dans les données sourcées.' },
	{ id: 'officialSource', label: 'Source technique accessible', description: 'Part des compresseurs reliés à une source constructeur ou à une notice accessible.' },
	{ id: 'acousticValue', label: 'Valeur acoustique publiée', description: 'Part des compresseurs avec une valeur acoustique documentée. Le protocole de mesure n’est pas encore noté.' },
	{ id: 'identifiers', label: 'MPN et EAN cohérents', description: 'Part des compresseurs pour lesquels CompatAir dispose à la fois du MPN et de l’EAN.' },
	{ id: 'freshness', label: 'Fraîcheur des vérifications', description: `Part des compresseurs dont une preuve a été consultée dans les ${BAROMETER_FRESHNESS_DAYS} jours précédant l’édition.` },
] as const;

type CriterionId = typeof transparencyCriteria[number]['id'];

function percentage(values: boolean[]) {
	return values.length ? Math.round(values.filter(Boolean).length / values.length * 100) : 0;
}

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
		const score = Math.round(Object.values(scores).reduce((total, value) => total + value, 0) / transparencyCriteria.length);
		return { brand, sampleSize: products.length, score, criteria: scores };
	}).sort((a, b) => b.score - a.score || b.sampleSize - a.sampleSize || a.brand.localeCompare(b.brand));
	const data = {
		schemaVersion: BAROMETER_SCHEMA_VERSION,
		edition: publishedAt.slice(0, 4),
		publishedAt,
		scope: 'Documentation des compresseurs présents dans le catalogue CompatAir',
		criteria: transparencyCriteria,
		brands: rows.map((row, index) => ({ rank: index + 1, ...row })),
	};
	return { barometerVersion: createHash('sha256').update(JSON.stringify(data)).digest('hex'), ...data };
}
