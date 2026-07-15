import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { brandSlug } from './brand';

describe('brand slugs', () => {
	it('are valid and unique across documented brands', () => {
		const brands = [...new Set([...compressors.map((item) => item.brand), ...tools.map((item) => item.brand)])];
		const slugs = brands.map(brandSlug);
		expect(slugs.every((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))).toBe(true);
		expect(new Set(slugs).size).toBe(brands.length);
	});
});
