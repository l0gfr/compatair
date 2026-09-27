import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { compressorCapabilities, identifyProducts, localIdentifierProposals, toolCompatibleCompressors } from './product-identification';

describe('product identification', () => {
	it('keeps OCR proposals local, bounded and unconfirmed without truncating a long identifier', () => {
		expect(localIdentifierProposals('COMPRESSEUR MPN 4010393 TC-AC 240/50/10 4010393')).toEqual(['4010393', '240/50/10']);
		expect(localIdentifierProposals('A123456789012345678901234567890 12 bar')).toEqual([]);
		expect(localIdentifierProposals(Array.from({ length: 30 }, (_, index) => `MPN-${index}`).join(' '))).toHaveLength(16);
		expect(localIdentifierProposals(' '.repeat(32_768) + '4010393')).toEqual([]);
	});

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
	}, 20_000); // Full-catalog alternatives evaluate hundreds of thousands of pairs on CI.

	it('lists compatible compressors for an identified fixed-flow tool', () => {
		const tool = tools.find((item) => item.id === 'einhell-tc-pe-150')!;
		expect(toolCompatibleCompressors(tool, compressors).compatible.length).toBeGreaterThan(0);
	});
});
