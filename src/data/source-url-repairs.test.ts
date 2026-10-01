import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressors, tools } from './catalog';
import repairs from './imports/source-url-repairs-2026-09-25.json';
import octoberRepairs from './imports/source-url-repairs-2026-10-01.json';
import aircraftRepairs from './imports/source-url-repairs-aircraft-2026-10-01.json';
import aircraftReview from '../../docs/editorial/source-repairs-aircraft-2026-10-01.health.json';

const products = new Map([...compressors, ...tools].map((product) => [product.id, product]));
const reviewedRepairs = [...repairs.repairs, ...octoberRepairs.repairs, ...aircraftRepairs.repairs];
const nextUrl = new Map(reviewedRepairs.map(repair => [repair.oldUrl, repair.newUrl]));
function currentSourceUrl(url: string) {
	const seen = new Set<string>();
	while (nextUrl.has(url)) {
		if (seen.has(url)) throw new Error(`Source relocation cycle: ${url}`);
		seen.add(url);
		url = nextUrl.get(url)!;
	}
	return url;
}

describe('reviewed source URL repairs', () => {
	it('keeps repaired URLs out of active evidence and reconnects every affected reference', () => {
		const obsolete = new Set(reviewedRepairs.map((repair) => repair.oldUrl));
		for (const product of products.values()) {
			for (const evidence of product.evidence) expect(obsolete.has(evidence.sourceUrl)).toBe(false);
			if (product.image?.sourceUrl) expect(obsolete.has(product.image.sourceUrl)).toBe(false);
		}
		for (const repair of reviewedRepairs) {
			for (const reference of repair.references) {
				if (typeof reference.productId === 'string') {
					const evidence = products.get(reference.productId)?.evidence.find((item) => item.id === reference.evidenceId);
					expect(evidence?.sourceUrl).toBe(currentSourceUrl(repair.newUrl));
				} else if ('guide' in reference && typeof reference.guide === 'string') {
					const guide = readFileSync(new URL(`../content/guides/${reference.guide}`, import.meta.url), 'utf8');
					expect(guide).not.toContain(repair.oldUrl);
					expect(guide).toContain(currentSourceUrl(repair.newUrl));
				} else {
					throw new Error(`Unreviewed source reference: ${repair.oldUrl}`);
				}
			}
		}
	});

	it('preserves model identity, flow pressure pairs and compatibility inputs through source relocation', () => {
		for (const expected of [...repairs.preservedTechnicalValues, ...octoberRepairs.preservedTechnicalValues, ...aircraftRepairs.preservedTechnicalValues]) expect(products.get(expected.id)).toMatchObject(expected);
	});

	it('links each Aircraft relocation to its exact reviewed model and unchanged manufacturer table', () => {
		expect(aircraftRepairs.repairs).toHaveLength(148);
		const reviews = new Map(aircraftReview.repairs.map(review => [review.productId, review]));
		for (const repair of aircraftRepairs.repairs) {
			const reference = repair.references[0];
			const review = reviews.get(reference.productId);
			const product = products.get(reference.productId);
			expect(review).toMatchObject({ url: repair.newUrl, canonical: repair.newUrl, httpStatus: 200, sourceSha256: repair.sourceSha256, fieldDifferences: [], mpn: product?.mpn, model: product?.model });
			expect(repair.sourceSha256).toMatch(/^[a-f0-9]{64}$/);
			expect(new URL(repair.newUrl).hostname).toBe('www.stuermer-machines.com');
		}
		expect(aircraftReview.remaining).toHaveLength(5);
	});

	it('does not certify acoustic values or identifiers absent from replacement evidence', () => {
		for (const id of ['metabo-basic-250-24-w', 'metabo-basic-250-50-w']) {
			expect(products.get(id)).not.toHaveProperty('noiseDb');
			expect(products.get(id)).not.toHaveProperty('ean');
		}
		expect(products.get('metabo-mega-400-50-d')).not.toHaveProperty('ean');
		for (const reference of octoberRepairs.withheldFields) expect(products.get(reference.productId)).not.toHaveProperty(reference.field);
		expect(products.get('metabo-basic-250-50-w-of')).toMatchObject({ noiseDb: 82, fieldSources: { noiseDb: ['metabo-601535000-catalog-2018-19'] } });
	});
});
