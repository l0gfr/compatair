import { describe, expect, it } from 'vitest';
import { extractHtmlImages } from './html-images.mjs';

describe('built HTML image audit input', () => {
	it('preserves the complete manufacturer name and dimensions after quoted angle brackets', () => {
		expect(extractHtmlImages('<img src="/images/products/agrafeuse-cloueuse-basso-c38-90-mg.webp" alt="Repères techniques : BASSO C38/90 < Mg >" width="600" height="400" loading="eager">')).toEqual([
			{ alt: 'Repères techniques : BASSO C38/90 < Mg >', source: '/images/products/agrafeuse-cloueuse-basso-c38-90-mg.webp', width: 600, height: 400 },
		]);
	});

	it('accepts HTML attribute order, single quotes, case and valid unquoted dimensions', () => {
		expect(extractHtmlImages("<IMG height=400 ALT='BASSO < Mg >' width='600' src=/images/products/exact.webp />")).toEqual([
			{ alt: 'BASSO < Mg >', source: '/images/products/exact.webp', width: 600, height: 400 },
		]);
	});

	it('keeps missing alt and dimensions observable without matching text inside other attributes', () => {
		const images = extractHtmlImages('<img src="/missing-alt.webp" width="600" height="400"><img alt=\'width="600" height="400"\' src="/missing-dimensions.webp"><img alt="" width="600" height="400">');
		expect(images[0]).toEqual({ alt: undefined, source: '/missing-alt.webp', width: 600, height: 400 });
		expect(images[1]).toEqual({ alt: 'width="600" height="400"', source: '/missing-dimensions.webp', width: undefined, height: undefined });
		expect(images[2].alt).toBe('');
	});

	it('rejects non-integer dimensions while retaining the actual numeric mismatch', () => {
		const images = extractHtmlImages('<img alt="Exact" width="599" height="400"><img alt="Wrong unit" width="600px" height="400.5">');
		expect(images[0].width).toBe(599);
		expect(images[0].height).toBe(400);
		expect(images[1].width).toBeUndefined();
		expect(images[1].height).toBeUndefined();
	});

	it('ignores image-shaped text in comments and raw text elements and distinguishes SVG image', () => {
		const html = '<!-- <img alt="comment" width="1" height="1"> --><script>const example = "<img src=\'/script.webp\'>";</script><style>p::before { content: "<img>" }</style><svg><image href="/svg.webp" width="600" height="400" /></svg><img alt="Visible" src="/real.webp" width="600" height="400">';
		expect(extractHtmlImages(html)).toEqual([{ alt: 'Visible', source: '/real.webp', width: 600, height: 400 }]);
	});
});
