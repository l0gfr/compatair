import { describe, expect, it } from 'vitest';
import { metierGuideProfiles } from '../data/metier-guides';
import { guideAudienceIds, guideAudiences, guideMetierIds, guideMetiers } from './editorial-taxonomy';
import { tradeScenarioPresets } from './trade-scenario-prefill';

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

	it('publishes a complete decision profile for every profession', () => {
		for (const id of guideMetierIds) {
			const profile = metierGuideProfiles[id];
			expect(profile).toBeDefined();
			expect(profile.decisions).toHaveLength(4);
			expect(profile.steps.length).toBeGreaterThanOrEqual(5);
		}
	});

	it.each(guideMetierIds)('publishes a sourced long-form extension for %s', (id) => {
		const longform = metierGuideProfiles[id].longform;
		expect(longform).toBeDefined();
		expect(longform!.scenarios).toHaveLength(3);
		expect(longform!.sources.length).toBeGreaterThanOrEqual(4);
		expect(new Set(longform!.scenarios.map((scenario) => tradeScenarioPresets[scenario.presetId].toolId)).size).toBe(3);
		for (const scenario of longform!.scenarios) expect(tradeScenarioPresets[scenario.presetId].metierId).toBe(id);
	});
});
