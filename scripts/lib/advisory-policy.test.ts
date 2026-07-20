import { describe, expect, it } from 'vitest';
import { advisoryBlocksRelease, classifyNpmAdvisories } from './advisory-policy.mjs';

describe('npm advisory release policy', () => {
	it('blocks every known advisory on a direct production dependency', () => {
		expect(advisoryBlocksRelease({ packageName: 'astro', severity: 'moderate' }, new Set(['astro']))).toBe(true);
		expect(advisoryBlocksRelease({ packageName: 'astro', severity: 'low' }, new Set(['astro']))).toBe(true);
	});

	it('blocks high transitive advisories and reports lower transitive signals without blocking', () => {
		expect(advisoryBlocksRelease({ packageName: 'transitive-a', severity: 'high' }, new Set())).toBe(true);
		expect(advisoryBlocksRelease({ packageName: 'transitive-b', severity: 'moderate' }, new Set())).toBe(false);
	});

	it('fails closed on an unknown advisory severity', () => {
		expect(advisoryBlocksRelease({ packageName: 'transitive-a', severity: 'unknown' }, new Set())).toBe(true);
	});

	it('normalizes the npm bulk response before applying the policy', () => {
		const result = classifyNpmAdvisories({
			astro: [{ severity: 'moderate', title: 'Runtime XSS' }],
			transitive: [{ severity: 'low', title: 'Low transitive issue' }],
		}, new Set(['astro']));
		expect(result.advisories).toHaveLength(2);
		expect(result.blocking.map((entry) => entry.packageName)).toEqual(['astro']);
	});
});
