const stop = new Set('a au aux de des du en et la le les l un une pour quel quelle quels quelles comment sur est air compresseur pneumatique'.split(' '));
const words = value => String(value).normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replace(/(\d),(\d)/g, '$1.$2').match(/\d+(?:\.\d+)?|[a-z]+\d*[a-z]*/g) ?? [];
const tokens = value => [...new Set(words(value))].filter(token => !stop.has(token));
const units = new Map(Object.entries({ bar: 'bar', bars: 'bar', psi: 'psi', mm: 'mm', cm: 'cm', m: 'm', metre: 'm', metres: 'm', l: 'l', litre: 'l', litres: 'l', cfm: 'cfm', kw: 'kw', v: 'v' }));
function quantities(value) {
	const terms = words(value);
	return terms.flatMap((term, index) => /^\d+(?:\.\d+)?$/.test(term) && units.has(terms[index + 1]) ? [`${Number(term)}:${units.get(terms[index + 1])}`] : []);
}

// Preserve numeric identifiers and fractions as ordered chains. Slugs replace
// separators with hyphens, but never change component order or leading zeroes.
function references(value) {
	return [...String(value).normalize('NFKD').matchAll(/\d+(?:\s*[/‐‑–-]\s*\d+)+/gu)]
		.map(match => match[0].split(/\s*[/‐‑–-]\s*/u).join('/'));
}

export function editorialPriority(candidate, panel) {
	const surfaces = [candidate.value?.question ?? '', candidate.value?.label ?? '', candidate.path ?? ''];
	const text = new Set(surfaces.flatMap(tokens));
	const candidateQuantities = new Set(surfaces.flatMap(quantities));
	const candidateReferences = new Set(surfaces.flatMap(references));
	const matches = panel.queries.filter(item => {
		const terms = tokens(item.query);
		// Conservative editorial admission: every meaningful term and quantity must
		// occur. Comparative pages may contain additional brands or quantities.
		return terms.length > 0 && terms.every(term => text.has(term))
			&& quantities(item.query).every(quantity => candidateQuantities.has(quantity))
			&& references(item.query).every(reference => candidateReferences.has(reference));
	});
	return {
		score: Math.max(0, ...matches.map(item => ({ P1: 3, P2: 2, P3: 1 })[item.editorialPriority] ?? 0)),
		queryIds: matches.map(item => item.id),
		basis: 'Editorial query-panel overlap; not measured search volume, ranking or traffic.',
	};
}
