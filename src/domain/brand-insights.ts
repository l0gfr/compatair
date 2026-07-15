import type { Compressor, ToolProfile } from './catalog';
import { latestEvidenceDate } from './provenance';

const percentage = (count: number, total: number) => total ? Math.round(count / total * 100) : null;

export function createBrandInsights(compressors: Compressor[], tools: ToolProfile[]) {
	const products = [...compressors, ...tools];
	if (!products.length) throw new Error('Une marque doit contenir au moins une référence.');
	const fadDocumented = compressors.filter((item) => item.fadCurve.length > 0).length;
	const identified = products.filter((item) => Boolean(item.mpn || item.ean || ('gtin' in item && item.gtin))).length;
	const phases = {
		singlePhase: compressors.filter((item) => item.phase === 'single-phase').length,
		threePhase: compressors.filter((item) => item.phase === 'three-phase').length,
		unknown: compressors.filter((item) => item.phase === undefined).length,
	};
	const tankDistribution = [
		{ label: 'Sans cuve', count: compressors.filter((item) => item.tankLiters === 0).length },
		{ label: '1 à 24 L', count: compressors.filter((item) => item.tankLiters >= 1 && item.tankLiters <= 24).length },
		{ label: '25 à 49 L', count: compressors.filter((item) => item.tankLiters >= 25 && item.tankLiters <= 49).length },
		{ label: '50 à 99 L', count: compressors.filter((item) => item.tankLiters >= 50 && item.tankLiters <= 99).length },
		{ label: '100 à 249 L', count: compressors.filter((item) => item.tankLiters >= 100 && item.tankLiters <= 249).length },
		{ label: '250 L et plus', count: compressors.filter((item) => item.tankLiters >= 250).length },
	].filter((item) => item.count > 0);
	const gaps = [
		compressors.length - fadDocumented > 0 ? `${compressors.length - fadDocumented} compresseur(s) sans point FAD exploitable` : undefined,
		products.length - identified > 0 ? `${products.length - identified} référence(s) sans MPN, EAN ou GTIN documenté` : undefined,
		phases.unknown > 0 ? `${phases.unknown} compresseur(s) sans type d’alimentation documenté` : undefined,
	].filter((item): item is string => Boolean(item));

	return {
		fad: { documented: fadDocumented, total: compressors.length, percentage: percentage(fadDocumented, compressors.length) },
		identifiers: { documented: identified, total: products.length, percentage: percentage(identified, products.length) },
		phases,
		tankDistribution,
		latestVerifiedAt: latestEvidenceDate(...products),
		gaps,
	};
}
