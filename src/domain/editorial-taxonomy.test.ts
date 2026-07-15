import { describe, expect, it } from 'vitest';
import { guideAudienceIds, guideAudiences, guideMetierIds, guideMetiers } from './editorial-taxonomy';

describe('editorial taxonomy', () => {
	it('keeps audience and profession identifiers unique', () => {
		expect(new Set(guideAudienceIds).size).toBe(guideAudienceIds.length);
		expect(new Set(guideMetierIds).size).toBe(guideMetierIds.length);
	});

	it('publishes a concise, unique SEO title for every hub', () => {
		const titles = [
			...guideAudienceIds.map((id) => guideAudiences[id].seoTitle),
			...guideMetierIds.map((id) => guideMetiers[id].seoTitle),
		];
		expect(new Set(titles).size).toBe(titles.length);
		for (const title of titles) expect(title.length).toBeLessThanOrEqual(60);
	});
});
