import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import { compressors, tools } from './catalog';
import { pcpReferences, pcpGuides } from './pcp';

describe('PCP documentary records', () => {
	it('links every published fact to an identified, dated manufacturer source', () => {
		const manufacturers = new Set(['resources.air-arms.co.uk', 'www.umarexusa.com', 'www.weihrauch-sport.de', 'www.airriflepump.com']);
		expect(new Set(pcpReferences.map((reference) => reference.slug)).size).toBe(pcpReferences.length);
		for (const reference of pcpReferences) {
			expect(reference.slug).toMatch(/^[a-z0-9-]+$/);
			expect(reference.facts.length).toBeGreaterThan(0);
			expect(reference.unavailable.length).toBeGreaterThan(0);
			const sourceIds = new Set(reference.sources.map((source) => source.id));
			expect(sourceIds.size).toBe(reference.sources.length);
			for (const fact of reference.facts) {
				expect(fact.value.trim()).not.toBe('');
				expect(sourceIds.has(fact.sourceId), `${reference.slug}: ${fact.label}`).toBe(true);
			}
			for (const source of reference.sources) {
				const url = new URL(source.url);
				expect(url.protocol).toBe('https:');
				expect(url.username + url.password).toBe('');
				expect(manufacturers.has(url.hostname)).toBe(true);
				expect(source.checkedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
				expect(Number.isFinite(Date.parse(source.checkedAt))).toBe(true);
			}
		}
	});

	it('keeps documentary PCP references outside the workshop calculation catalog', () => {
		const workshopSlugs = new Set([...compressors, ...tools].map((item) => item.slug));
		for (const reference of pcpReferences) {
			expect(workshopSlugs.has(reference.slug)).toBe(false);
			expect(reference).not.toHaveProperty('demandModel');
			expect(reference).not.toHaveProperty('fadCurve');
		}
	});

	it('resolves the PCP guide links to articles scoped outside the workshop calculator', () => {
		for (const guide of pcpGuides) {
			const raw = readFileSync(new URL(`../content/guides/${guide.slug}.md`, import.meta.url), 'utf8');
			const frontmatter = raw.match(/^---\n([\s\S]*?)\n---/);
			expect(frontmatter).not.toBeNull();
			const metadata = parse(frontmatter![1]);
			expect(metadata.scope).toBe('pcp');
			expect(metadata.relatedCalculatorTool).toBeUndefined();
			expect(metadata.relatedGuides.every((slug: string) => pcpGuides.some((item) => item.slug === slug))).toBe(true);
		}
	});
});
