import { describe, expect, it } from 'vitest';
import { contextualHelpTopics } from './contextual-help';

describe('contextualHelpTopics', () => {
	it('couvre les huit notions requises avec une aide actionnable', () => {
		expect(Object.keys(contextualHelpTopics)).toHaveLength(8);
		for (const help of Object.values(contextualHelpTopics)) {
			expect(help.label.length).toBeGreaterThan(3);
			expect(help.definition.length).toBeGreaterThan(30);
			expect(help.influence.length).toBeGreaterThan(30);
			expect(help.location.length).toBeGreaterThan(30);
			expect(help.example).toMatch(/^Exemple :/);
			expect(help.missing.length).toBeGreaterThan(30);
			expect(help.glossaryHref).toMatch(/^\/glossaire\/#[-a-z0-9]+$/);
		}
	});
});
