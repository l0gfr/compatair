import { describe, expect, it } from 'vitest';
import sharp from 'sharp';
import { TECHNICAL_CARD_WIDTH, TECHNICAL_CARD_HEIGHT, technicalCardSvg } from './technical-card.mjs';

const tool = { brand: 'Example', model: 'M1', mpn: '1234', demandModel: 'fixed-flow', airflowBasis: 'average', airflowLpm: { typical: 300 }, workingPressureBar: { typical: 6 } };
describe('generated technical cards', () => {
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
