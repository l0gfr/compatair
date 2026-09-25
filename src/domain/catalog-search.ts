export type CatalogSearchCandidate = {
	id: string;
	value: string;
	identifiers: string[];
};

export function catalogSearchIdentifiers(
	brand: string,
	model: string,
	identifiers: Array<string | undefined>,
) {
	return [...new Set([`${brand} ${model}`, ...identifiers].map((value) => value?.trim()).filter((value): value is string => Boolean(value)))];
}

export function catalogOptionIdentifiers(id: string, value: string, extra: string[] = []) {
	const parts = value.split(/ · (?=(?:MPN|EAN) )/);
	return [...new Set([id, ...parts.map((part, index) => index === 0 ? part : part.replace(/^(?:MPN|EAN) /, '')), ...extra])];
}

export function compactCatalogOptionIdentifiers(id: string, value: string, identifiers: string[]) {
	const embedded = new Set(catalogOptionIdentifiers(id, value));
	return identifiers.filter((identifier) => !embedded.has(identifier));
}

function normalizeExactSearchValue(value: string) {
	return value.trim().toLocaleLowerCase('fr-FR');
}

export function resolveExactCatalogSearch(rawValue: string, candidates: CatalogSearchCandidate[]) {
	const value = normalizeExactSearchValue(rawValue);
	if (!value) return undefined;
	const matches = candidates.filter((candidate) =>
		normalizeExactSearchValue(candidate.value) === value
		|| candidate.identifiers.some((identifier) => normalizeExactSearchValue(identifier) === value),
	);
	return matches.length === 1 ? matches[0].id : undefined;
}
