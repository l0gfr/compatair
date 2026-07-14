export type SocialCard = {
	path: string;
	kicker: string;
	title: string;
	subtitle: string;
	accent?: string;
};

export function socialCardKey(pathname: string): string {
	const normalized = pathname.split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, '').replace(/\.html$/, '');
	return normalized ? normalized.replaceAll('/', '__') : 'accueil';
}

function escapeXml(value: string): string {
	return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

export function wrapSocialTitle(value: string, maximumCharacters = 29, maximumLines = 3): string[] {
	const words = value.trim().split(/\s+/);
	const lines: string[] = [];
	for (const word of words) {
		const current = lines.at(-1);
		if (!current || current.length + word.length + 1 > maximumCharacters) lines.push(word);
		else lines[lines.length - 1] = `${current} ${word}`;
	}
	if (lines.length <= maximumLines) return lines;
	const visible = lines.slice(0, maximumLines);
	visible[maximumLines - 1] = `${visible[maximumLines - 1].slice(0, maximumCharacters - 1).trimEnd()}…`;
	return visible;
}

export function renderSocialCardSvg(card: SocialCard): string {
	const accent = card.accent ?? '#d3eb56';
	const lines = wrapSocialTitle(card.title);
	const title = lines.map((line, index) => `<text x="72" y="${238 + index * 74}" fill="#f4f7f0" font-family="Arial, sans-serif" font-size="58" font-weight="750">${escapeXml(line)}</text>`).join('');
	return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${escapeXml(card.title)}">
	<rect width="1200" height="630" fill="#10281e"/>
	<circle cx="1085" cy="105" r="290" fill="#143426"/><circle cx="1085" cy="105" r="205" fill="none" stroke="${accent}" stroke-width="18" stroke-dasharray="390 900" transform="rotate(135 1085 105)"/>
	<path d="M1085 105l105-68" stroke="#eef2e9" stroke-width="13" stroke-linecap="round"/><circle cx="1085" cy="105" r="19" fill="${accent}"/>
	<rect x="72" y="66" width="68" height="68" rx="18" fill="${accent}"/><path d="M91 111c8-22 20-32 34-29" fill="none" stroke="#10281e" stroke-width="7" stroke-linecap="round"/><circle cx="119" cy="83" r="6" fill="#10281e"/>
	<text x="160" y="110" fill="#f4f7f0" font-family="Arial, sans-serif" font-size="34" font-weight="750">CompatAir</text>
	<text x="72" y="178" fill="${accent}" font-family="Arial, sans-serif" font-size="21" font-weight="700" letter-spacing="2">${escapeXml(card.kicker.toUpperCase())}</text>
	${title}
	<line x1="72" y1="518" x2="1128" y2="518" stroke="#365747" stroke-width="2"/>
	<text x="72" y="568" fill="#c0cec6" font-family="Arial, sans-serif" font-size="23">${escapeXml(card.subtitle)}</text>
	<text x="1032" y="568" fill="${accent}" font-family="Arial, sans-serif" font-size="23" font-weight="700">compatair.fr</text>
</svg>`;
}
