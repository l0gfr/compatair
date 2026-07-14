import { describe, expect, it } from 'vitest';
import { buildCatalogIndexSource } from './catalog-tooling.mjs';

describe('catalog tooling', () => {
	it('generates deterministic indexes independent of filesystem order', () => {
		const source = buildCatalogIndexSource('tools', ['zeta.ts', 'alpha.ts']);
		expect(source).toContain("import product1 from './alpha';");
		expect(source).toContain("import product2 from './zeta';");
		expect(source).toContain('export const rawTools');
	});
});
