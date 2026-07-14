import { describe, expect, it } from 'vitest';
import { renderSocialCardSvg, socialCardKey, wrapSocialTitle } from './social-card';

describe('social cards', () => {
	it('creates a stable key for every canonical path', () => {
		expect(socialCardKey('/')).toBe('accueil');
		expect(socialCardKey('/guides/debit-restitue/')).toBe('guides__debit-restitue');
		expect(socialCardKey('/404.html')).toBe('404');
	});

	it('bounds long titles and escapes their SVG content', () => {
		expect(wrapSocialTitle('un titre particulièrement long qui doit tenir dans trois lignes au maximum')).toHaveLength(3);
		const svg = renderSocialCardSvg({ path: '/', kicker: 'Test', title: 'FAD & pression', subtitle: '<vérifié>' });
		expect(svg).toContain('FAD &amp; pression');
		expect(svg).toContain('&lt;vérifié&gt;');
	});
});
