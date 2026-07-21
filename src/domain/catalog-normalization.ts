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
		distributorSkus: Array<{ distributorId: string; sku: string; normalizedSku: string; evidenceIds: string[] }>;
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

export function normalizeDistributorSku(value: string) {
	return value.normalize('NFKC').trim().toUpperCase().replace(/\s+/g, ' ');
}

export function sourceRoleForEvidence(evidence: CatalogProduct['evidence'][number]) {
	if (evidence.sourceRole) return evidence.sourceRole;
	if (evidence.sourceType === 'manufacturer' || evidence.sourceType === 'manual') return 'primary' as const;
	if (evidence.sourceType === 'measured') return 'independent_corroboration' as const;
	return 'secondary' as const;
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
			...(product.gtin ? { gtin: normalizeTradeItem(product.gtin) } : {}),
			distributorSkus: product.distributorSkus.map((identifier) => ({ ...identifier, normalizedSku: normalizeDistributorSku(identifier.sku) })),
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
				gtin: evidenceIdsForField(product, 'gtin'),
				distributorSkus: product.distributorSkus.flatMap((identifier) => identifier.evidenceIds),
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
		[...compressors, ...tools].flatMap((product) => product.evidence).map((evidence) => [evidence.id, { ...evidence, sourceRole: sourceRoleForEvidence(evidence) }]),
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
	const distributorSkus = new Map<string, string>();
	const evidenceById = new Map<string, string>();
	for (const product of products) {
		if (ids.has(product.id)) errors.push(`Identifiant produit dupliqué : ${product.id}`);
		ids.add(product.id);
		for (const evidenceIds of Object.values(product.fieldSources)) {
			for (const evidenceId of evidenceIds) if (!product.evidence.some((item) => item.id === evidenceId)) errors.push(`${product.id} référence une preuve inconnue : ${evidenceId}`);
		}
		for (const specification of product.specifications) for (const evidenceId of specification.evidenceIds) if (!product.evidence.some((item) => item.id === evidenceId)) errors.push(`${product.id} référence une preuve de spécification inconnue : ${evidenceId}`);
		for (const identifier of product.distributorSkus) {
			for (const evidenceId of identifier.evidenceIds) if (!product.evidence.some((item) => item.id === evidenceId)) errors.push(`${product.id} référence une preuve de SKU inconnue : ${evidenceId}`);
			const key = `${identifier.distributorId}:${normalizeDistributorSku(identifier.sku)}`;
			const previous = distributorSkus.get(key);
			if (previous && previous !== product.id) errors.push(`SKU distributeur dupliqué : ${identifier.distributorId}/${identifier.sku} (${previous}, ${product.id})`);
			distributorSkus.set(key, product.id);
		}
		for (const evidence of product.evidence) {
			const serialized = JSON.stringify(evidence);
			const previous = evidenceById.get(evidence.id);
			if (previous && previous !== serialized) errors.push(`Identifiant de preuve réutilisé avec un contenu différent : ${evidence.id}`);
			evidenceById.set(evidence.id, serialized);
		}
		for (const tradeItem of [product.ean, product.gtin].filter((value): value is string => Boolean(value))) {
			const normalized = normalizeTradeItem(tradeItem);
			if (!isValidTradeItem(normalized)) errors.push(`EAN/GTIN invalide : ${normalized} (${product.id})`);
			const previous = tradeItems.get(normalized);
			if (previous && previous !== product.id) errors.push(`EAN/GTIN dupliqué : ${normalized} (${previous}, ${product.id})`);
			tradeItems.set(normalized, product.id);
		}
		if (product.mpn) {
			const key = `${product.brand.toUpperCase()}:${normalizeMpn(product.mpn)}`;
			const previous = brandMpns.get(key);
			if (previous && previous !== product.id) errors.push(`MPN dupliqué pour ${product.brand} : ${product.mpn}`);
			brandMpns.set(key, product.id);
		}
		const criticalFields = 'fadCurve' in product ? ['fadCurve', 'maxPressureBar'] : ['workingPressureBar', ...(product.demandModel === 'fixed-flow' ? ['airflowLpm'] : [])];
		for (const field of criticalFields) if (!(product.fieldSources[field]?.length)) errors.push(`${product.id} ne source pas explicitement le champ critique ${field}`);
	}
	if (errors.length) throw new Error(errors.join('\n'));
	return true;
}
