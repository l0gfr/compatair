const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

// Keywords are never displayed. Keep every searchable token, but avoid repeating
// tokens already present in the title or earlier in the keyword corpus.
// Title-based ranking is unchanged; phrase bonuses within keywords can differ.
export function compactSearchKeywords(title: string, keywords: string): string {
	const seen = new Set(normalize(title).split(/\s+/).filter(Boolean));
	return keywords.split(/\s+/).filter((word) => {
		if (!word) return false;
		const key = normalize(word);
		if (seen.has(key)) return false;
		seen.add(key);
		return true;
	}).join(' ');
}
