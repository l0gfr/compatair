import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressors, tools } from './catalog';
import repairs from './imports/source-url-repairs-2026-09-25.json';

const products = new Map([...compressors, ...tools].map((product) => [product.id, product]));

describe('reviewed source URL repairs', () => {
	it('keeps repaired URLs out of active evidence and reconnects every affected reference', () => {
		const obsolete = new Set(repairs.repairs.map((repair) => repair.oldUrl));
		for (const product of products.values()) {
			for (const evidence of product.evidence) expect(obsolete.has(evidence.sourceUrl)).toBe(false);
			if (product.image?.sourceUrl) expect(obsolete.has(product.image.sourceUrl)).toBe(false);
		}
		for (const repair of repairs.repairs) {
			for (const reference of repair.references) {
				if (typeof reference.productId === 'string') {
					const evidence = products.get(reference.productId)?.evidence.find((item) => item.id === reference.evidenceId);
					expect(evidence?.sourceUrl).toBe(repair.newUrl);
				} else {
					const guide = readFileSync(new URL(`../content/guides/${reference.guide}`, import.meta.url), 'utf8');
					expect(guide).not.toContain(repair.oldUrl);
					expect(guide).toContain(repair.newUrl);
				}
			}
		}
	});

	it('preserves model identity, flow pressure pairs and compatibility inputs through source relocation', () => {
		for (const expected of repairs.preservedTechnicalValues) expect(products.get(expected.id)).toMatchObject(expected);
	});

	it('does not certify acoustic values or identifiers absent from replacement evidence', () => {
		for (const id of ['metabo-basic-250-24-w', 'metabo-basic-250-50-w']) {
			expect(products.get(id)).not.toHaveProperty('noiseDb');
			expect(products.get(id)).not.toHaveProperty('ean');
		}
		expect(products.get('metabo-mega-400-50-d')).not.toHaveProperty('ean');
		expect(products.get('metabo-basic-250-50-w-of')).toMatchObject({ noiseDb: 82, fieldSources: { noiseDb: ['metabo-601535000-official'] } });
	});
});
