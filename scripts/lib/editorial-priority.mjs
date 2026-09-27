const stop = new Set('a au aux de des du en et la le les l un une pour quel quelle quels quelles comment avec sans sur est air compresseur pneumatique'.split(' '));
const tokens = value => [...new Set(String(value).normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().match(/[a-z0-9]+/g) ?? [])].filter(token => token.length > 1 && !stop.has(token));

export function editorialPriority(candidate, panel) {
	const text = new Set(tokens(`${candidate.value?.question ?? ''} ${candidate.value?.label ?? ''} ${candidate.path}`));
	const matches = panel.queries.filter(item => {
		const terms = tokens(item.query);
		return terms.length >= 2 && terms.filter(term => text.has(term)).length / terms.length >= .75;
	});
	return {
		score: Math.max(0, ...matches.map(item => ({ P1: 3, P2: 2, P3: 1 })[item.editorialPriority] ?? 0)),
		queryIds: matches.map(item => item.id),
		basis: 'Editorial query-panel overlap; not measured search volume, ranking or traffic.',
	};
}
