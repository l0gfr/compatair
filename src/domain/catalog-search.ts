export type CatalogSearchCandidate = {
	id: string;
	value: string;
	identifiers: string[];
};

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
