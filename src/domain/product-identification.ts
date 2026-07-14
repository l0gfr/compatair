import type { Compressor, ToolProfile } from './catalog';
import { isValidTradeItem, normalizeMpn, normalizeTradeItem } from './catalog-normalization';
import { evaluateCompatibility, type CompatibilityResult } from './compatibility';

export type IdentifiedProduct = {
	type: 'compressor' | 'tool';
	product: Compressor | ToolProfile;
	matchedBy: 'ean' | 'gtin' | 'mpn' | 'alias';
	matchedValue: string;
};

export type UnlockRecommendation = {
	toolId: string;
	toolLabel: string;
	hoseStatus: 'documented' | 'insufficient_data';
	hoseAdvice: string;
	alternativeCompressors: Array<{ id: string; label: string; verdict: CompatibilityResult['verdict'] }>;
};

function identifierValues(product: Compressor | ToolProfile) {
	return [
		...(product.ean ? [{ kind: 'ean' as const, raw: product.ean, normalized: normalizeTradeItem(product.ean) }] : []),
		...('gtin' in product && product.gtin ? [{ kind: 'gtin' as const, raw: product.gtin, normalized: normalizeTradeItem(product.gtin) }] : []),
		...(product.mpn ? [{ kind: 'mpn' as const, raw: product.mpn, normalized: normalizeMpn(product.mpn) }] : []),
		...product.identifierAliases.map((alias) => ({ kind: 'alias' as const, raw: alias.value, normalized: alias.type === 'ean' || alias.type === 'gtin' ? normalizeTradeItem(alias.value) : normalizeMpn(alias.value) })),
	];
}

export function identifyProducts(rawIdentifier: string, compressors: Compressor[], tools: ToolProfile[]): IdentifiedProduct[] {
	const input = rawIdentifier.trim();
	if (!input || input.length > 160) return [];
	const tradeItem = normalizeTradeItem(input);
	const normalizedMpn = normalizeMpn(input);
	const useTradeItem = /^\D*\d[\d\s-]*$/.test(input) && isValidTradeItem(tradeItem);
	const products = [
		...compressors.map((product) => ({ type: 'compressor' as const, product })),
		...tools.map((product) => ({ type: 'tool' as const, product })),
	];
	return products.flatMap(({ type, product }) => {
		const match = identifierValues(product).find((identifier) => {
			if (identifier.kind === 'ean' || identifier.kind === 'gtin') return useTradeItem && identifier.normalized === tradeItem;
			return identifier.normalized === normalizedMpn;
		});
		return match ? [{ type, product, matchedBy: match.kind, matchedValue: match.raw }] : [];
	});
}

export function compressorCapabilities(compressor: Compressor, compressors: Compressor[], tools: ToolProfile[]) {
	const evaluated = tools.map((tool) => ({ tool, result: evaluateCompatibility(compressor, tool) }));
	const compatible = evaluated.filter(({ result }) => result.verdict === 'continuous' || result.verdict === 'intermittent');
	const incompatible = evaluated.filter(({ result }) => result.verdict === 'incompatible');
	const insufficient = evaluated.filter(({ result }) => result.verdict === 'insufficient_data');
	const unlocks: UnlockRecommendation[] = incompatible.map(({ tool }) => {
		const alternativeCompressors = compressors
			.filter((candidate) => candidate.id !== compressor.id)
			.map((candidate) => ({ candidate, result: evaluateCompatibility(candidate, tool) }))
			.filter(({ result }) => result.verdict === 'continuous' || result.verdict === 'intermittent')
			.slice(0, 3)
			.map(({ candidate, result }) => ({ id: candidate.id, label: `${candidate.brand} ${candidate.model}`, verdict: result.verdict }));
		const diameter = tool.recommendedHose?.innerDiameterMm;
		const maximumLength = tool.recommendedHose?.maximumLengthMeters;
		return {
			toolId: tool.id,
			toolLabel: tool.label,
			hoseStatus: diameter !== undefined || maximumLength !== undefined ? 'documented' : 'insufficient_data',
			hoseAdvice: diameter !== undefined || maximumLength !== undefined
				? `Exigence documentée : ${diameter !== undefined ? `diamètre intérieur ${diameter} mm` : ''}${diameter !== undefined && maximumLength !== undefined ? ', ' : ''}${maximumLength !== undefined ? `longueur maximale ${maximumLength} m` : ''}. Une mesure en charge reste nécessaire.`
				: 'Aucun changement de tuyau ne peut être affirmé sans exigence constructeur ou mesure de perte de charge.',
			alternativeCompressors,
		};
	});
	return { compatible, incompatible, insufficient, unlocks };
}

export function toolCompatibleCompressors(tool: ToolProfile, compressors: Compressor[]) {
	const evaluated = compressors.map((compressor) => ({ compressor, result: evaluateCompatibility(compressor, tool) }));
	return {
		compatible: evaluated.filter(({ result }) => result.verdict === 'continuous' || result.verdict === 'intermittent'),
		incompatible: evaluated.filter(({ result }) => result.verdict === 'incompatible'),
		insufficient: evaluated.filter(({ result }) => result.verdict === 'insufficient_data'),
	};
}
