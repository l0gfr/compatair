import type { Compressor, ToolProfile } from './catalog';

type CatalogProduct = Compressor | ToolProfile;

export type NormalizedProduct = {
	id: string;
	type: 'compressor' | 'tool';
	brand: string;
	model: string;
	identity: {
		mpn?: string;
		normalizedMpn?: string;
		ean?: string;
		gtin?: string;
		aliases: Array<{ type: 'mpn' | 'ean' | 'gtin' | 'legacy_mpn'; value: string; normalizedValue: string; evidenceIds: string[] }>;
	};
	variant?: CatalogProduct['variant'];
	provenance: {
		evidenceIds: string[];
		fieldEvidenceIds: Record<string, string[]>;
	};
};

export function normalizeMpn(value: string) {
	return value.normalize('NFKC').toUpperCase().replace(/[^A-Z0-9]/g, '');
}

export function normalizeTradeItem(value: string) {
	return value.replace(/\D/g, '');
}

export function isValidTradeItem(value: string) {
	const digits = normalizeTradeItem(value);
	if (![8, 12, 13, 14].includes(digits.length)) return false;
	const values = [...digits].map(Number);
	const checkDigit = values.pop()!;
	const sum = values.reduce((total, digit, index) => total + digit * ((digits.length - index) % 2 === 0 ? 3 : 1), 0);
	return (10 - (sum % 10)) % 10 === checkDigit;
}

export function evidenceIdsForField(product: CatalogProduct, field: string) {
	const explicit = product.fieldSources[field] ?? [];
	return explicit.length ? [...explicit] : product.evidence.map((item) => item.id);
}

export function normalizeProduct(product: CatalogProduct, type: 'compressor' | 'tool'): NormalizedProduct {
	return {
		id: product.id,
		type,
		brand: product.brand,
		model: product.model,
		identity: {
			...(product.mpn ? { mpn: product.mpn, normalizedMpn: normalizeMpn(product.mpn) } : {}),
			...(product.ean ? { ean: normalizeTradeItem(product.ean) } : {}),
			...('gtin' in product && product.gtin ? { gtin: normalizeTradeItem(product.gtin) } : {}),
			aliases: product.identifierAliases.map((alias) => ({
				...alias,
				normalizedValue: alias.type === 'mpn' || alias.type === 'legacy_mpn' ? normalizeMpn(alias.value) : normalizeTradeItem(alias.value),
			})),
		},
		...(product.variant ? { variant: product.variant } : {}),
		provenance: {
			evidenceIds: product.evidence.map((item) => item.id),
			fieldEvidenceIds: {
				mpn: evidenceIdsForField(product, 'mpn'),
				ean: evidenceIdsForField(product, 'ean'),
				...(type === 'compressor'
					? { fadCurve: evidenceIdsForField(product, 'fadCurve'), maxPressureBar: evidenceIdsForField(product, 'maxPressureBar') }
					: { workingPressureBar: evidenceIdsForField(product, 'workingPressureBar'), airflowLpm: evidenceIdsForField(product, 'airflowLpm') }),
			},
		},
	};
}

export function buildNormalizedCatalog(compressors: Compressor[], tools: ToolProfile[]) {
	const products = [
		...compressors.map((product) => normalizeProduct(product, 'compressor')),
		...tools.map((product) => normalizeProduct(product, 'tool')),
	];
	const sourceIndex = Object.fromEntries(
		[...compressors, ...tools].flatMap((product) => product.evidence).map((evidence) => [evidence.id, evidence]),
	);
	const variantFamilies = Object.values(Object.groupBy(products.filter((product) => product.variant), (product) => product.variant!.familyId))
		.map((members) => ({ familyId: members![0].variant!.familyId, productIds: members!.map((member) => member.id) }));
	return { products, variantFamilies, sourceIndex };
}

export function assertNormalizedCatalogIntegrity(compressors: Compressor[], tools: ToolProfile[]) {
	const products = [...compressors, ...tools];
	const errors: string[] = [];
	const ids = new Set<string>();
	const tradeItems = new Map<string, string>();
	const brandMpns = new Map<string, string>();
	for (const product of products) {
		if (ids.has(product.id)) errors.push(`Identifiant produit dupliqué : ${product.id}`);
		ids.add(product.id);
		for (const evidenceIds of Object.values(product.fieldSources)) {
			for (const evidenceId of evidenceIds) if (!product.evidence.some((item) => item.id === evidenceId)) errors.push(`${product.id} référence une preuve inconnue : ${evidenceId}`);
		}
		if (product.ean) {
			const ean = normalizeTradeItem(product.ean);
			if (!isValidTradeItem(ean)) errors.push(`EAN/GTIN invalide : ${ean} (${product.id})`);
			const previous = tradeItems.get(ean);
			if (previous && previous !== product.id) errors.push(`EAN/GTIN dupliqué : ${ean} (${previous}, ${product.id})`);
			tradeItems.set(ean, product.id);
		}
		if (product.mpn) {
			const key = `${product.brand.toUpperCase()}:${normalizeMpn(product.mpn)}`;
			const previous = brandMpns.get(key);
			if (previous && previous !== product.id) errors.push(`MPN dupliqué pour ${product.brand} : ${product.mpn}`);
			brandMpns.set(key, product.id);
		}
		const criticalFields = 'fadCurve' in product ? ['fadCurve', 'maxPressureBar'] : ['workingPressureBar', ...(product.demandModel === 'fixed-flow' ? ['airflowLpm'] : [])];
		for (const field of criticalFields) if (evidenceIdsForField(product, field).length === 0) errors.push(`${product.id} ne source pas le champ critique ${field}`);
	}
	if (errors.length) throw new Error(errors.join('\n'));
	return true;
}
