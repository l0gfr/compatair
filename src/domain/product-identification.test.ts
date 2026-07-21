import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { compressorCapabilities, identifyProducts, toolCompatibleCompressors } from './product-identification';

describe('product identification', () => {
	it('matches only a confirmed catalog MPN or valid EAN', () => {
		expect(identifyProducts('4010393', compressors, tools)[0]?.product.id).toBe('einhell-tc-ac-240-50-10-of');
		expect(identifyProducts('4006825597295', compressors, tools)[0]?.matchedBy).toBe('ean');
		expect(identifyProducts('4006825597294', compressors, tools)).toEqual([]);
		expect(identifyProducts('TC-AC 240', compressors, tools)).toEqual([]);
	});

	it('matches a distributor SKU only when it is explicitly attached to a catalog product', () => {
		const tool = { ...tools[0], distributorSkus: [{ distributorId: 'merchant-test', sku: 'SKU 12-AB', evidenceIds: [tools[0].evidence[0].id] }] };
		expect(identifyProducts(' sku 12-ab ', [], [tool])).toEqual([expect.objectContaining({ matchedBy: 'distributor_sku', product: expect.objectContaining({ id: tool.id }) })]);
		expect(identifyProducts('SKU 12-AC', [], [tool])).toEqual([]);
	});

	it('keeps incompatible and insufficient-data tools separate', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-tc-ac-240-50-10-of')!;
		const result = compressorCapabilities(compressor, compressors, tools);
		expect(result.incompatible.length).toBeGreaterThan(0);
		expect(result.insufficient.length).toBeGreaterThan(0);
		expect(result.unlocks.every((item) => item.hoseStatus === 'documented' || item.hoseAdvice.includes('ne peut être affirmé'))).toBe(true);
	});

	it('lists compatible compressors for an identified fixed-flow tool', () => {
		const tool = tools.find((item) => item.id === 'einhell-tc-pe-150')!;
		expect(toolCompatibleCompressors(tool, compressors).compatible.length).toBeGreaterThan(0);
	});
});
