import { describe, expect, it } from 'vitest';
import sharp from 'sharp';
import { TECHNICAL_CARD_WIDTH, TECHNICAL_CARD_HEIGHT, technicalCardSvg, generatedTechnicalCardDimensions } from './technical-card.mjs';

const tool = { brand: 'Example', model: 'M1', mpn: '1234', demandModel: 'fixed-flow', airflowBasis: 'average', airflowLpm: { typical: 300 }, workingPressureBar: { typical: 6 } };
describe('generated technical cards', () => {
	it('retains the generated vector layout dimensions without accepting arbitrary SVG layouts', () => {
		const svg = technicalCardSvg(tool, 'tools');
		expect(generatedTechnicalCardDimensions(svg)).toEqual({ width: 1200, height: 800 });
		expect(generatedTechnicalCardDimensions('<svg width="1" height="1"></svg>')).toBeUndefined();
		expect(generatedTechnicalCardDimensions(svg.replace('width="1200"', 'width="9999"'))).toBeUndefined();
		expect(generatedTechnicalCardDimensions(svg.slice(0, -6))).toBeUndefined();
	});
	it('keeps a published average labelled as an average', () => {
		const svg = technicalCardSvg(tool, 'tools');
		expect(svg).toContain('CONSOMMATION MOY.');
		expect(svg).toContain('L/min publiés');
	});
	it('labels an unqualified flow and renders pressure-incomplete records without a fallback demand', () => {
		expect(technicalCardSvg({ ...tool, airflowBasis: 'unqualified' }, 'tools')).toContain('RÉGIME NON PRÉCISÉ');
		const svg = technicalCardSvg({ ...tool, demandModel: 'variable-volume', airflowLpm: undefined, workingPressureBar: { max: 8.3 } }, 'tools');
		expect(svg).toContain('Non établi');
		expect(svg).toContain('PRESSION MAX.');
		expect(svg).not.toContain('undefined');
		const unknownPressure = technicalCardSvg({ ...tool, demandModel: 'variable-volume', airflowLpm: undefined, workingPressureBar: {} }, 'tools');
		expect(unknownPressure).toContain('Non établie');
		expect(unknownPressure).not.toContain('PRESSION MAX.');
		expect(unknownPressure).not.toContain('undefined');
	});
	it('shows missing FAD without substituting intake flow', () => {
		const svg = technicalCardSvg({ brand: 'Example', model: 'C1', tankLiters: 50, maxPressureBar: 10, fadCurve: [], intakeFlowLpm: 999 }, 'compressors');
		expect(svg).toContain('Non établi');
		expect(svg).not.toContain('999');
	});
	it('escapes identifiers before rendering SVG and stays within the raster budget', async () => {
		const svg = technicalCardSvg({ ...tool, mpn: '<script>&"\'' }, 'tools');
		expect(svg).not.toContain('<script>');
		expect(svg).toContain('&lt;script&gt;&amp;');
		const bytes = await sharp(Buffer.from(svg)).resize({ width: TECHNICAL_CARD_WIDTH }).webp({ quality: 85, effort: 6 }).toBuffer();
		expect(await sharp(bytes).metadata()).toMatchObject({ width: TECHNICAL_CARD_WIDTH, height: TECHNICAL_CARD_HEIGHT, format: 'webp' });
		expect(bytes.length).toBeLessThan(30 * 1024);
	});
});

// Long reference layout boundaries use the same rasterizer as catalog imports.
describe('long tool references', () => {
	it.each([16, 17, 32, 33, 48])('keeps all %i reference characters before the unit label', (length) => {
		const mpn = '1234567890'.repeat(5).slice(0, length);
		const svg = technicalCardSvg({ ...tool, mpn }, 'tools');
		expect(svg).toContain(`Référence ${mpn}</text>`);
		if (length === 16) {
			expect(svg).toContain(`<text x="782" y="475" font-size="28" font-weight="700">${mpn}</text>`);
		} else {
			const firstY = length <= 32 ? 458 : 426;
			for (let offset = 0; offset < length; offset += 16) {
				expect(svg).toContain(`<text x="782" y="${firstY + offset / 16 * 32}" font-size="20" font-weight="700">${mpn.slice(offset, offset + 16)}</text>`);
			}
		}
		expect(svg).toContain('<text x="782" y="528" font-size="25">fabricant</text>');
	});
	it('rejects a reference beyond the supported three lines instead of clipping it', () => {
		expect(() => technicalCardSvg({ ...tool, mpn: 'W'.repeat(49) }, 'tools')).toThrow(/three-line/);
	});
	it('escapes every wrapped reference line', () => {
		const svg = technicalCardSvg({ ...tool, mpn: '<script>&"'.repeat(3) }, 'tools');
		expect(svg).not.toContain('<script>');
		expect(svg).toContain('&lt;script&gt;&amp;&quot;');
	});
	it.each(['MP-633-ORANGE-NEP-1851', 'MP-9518EXT12HGR-383CW', 'W'.repeat(48)])('keeps the rasterized reference %s inside the content edge', async (mpn) => {
		const svg = technicalCardSvg({ ...tool, mpn }, 'tools');
		const { data, info } = await sharp(Buffer.from(svg)).resize({ width: 600, height: 400 }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
		let overflow = 0;
		for (let y = 202; y < 250; y++) for (let x = 559; x < info.width; x++) {
			const offset = (y * info.width + x) * info.channels;
			if (data[offset] < 100 && data[offset + 1] < 100 && data[offset + 2] < 100) overflow++;
		}
		expect(overflow).toBe(0);
	});
});
