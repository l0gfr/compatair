import { describe, expect, it } from 'vitest';
import { tools } from '../data/catalog';
import { toolPressureLabel, toolSearchText } from './tool-demand';

describe('documented tool pressure labels', () => {
	it('displays an unknown pressure without inventing a nominal or maximum rating', () => {
		const tool = tools.find(p => p.mpn === '8431037920')!;
		expect(toolPressureLabel(tool)).toBe('Pression de travail non établie');
		expect(toolSearchText(tool)).not.toContain('undefined');
		expect(toolSearchText(tool)).not.toContain('5 bar maximum');
	});
	it('keeps a documented maximum, minimum or nominal point explicitly qualified', () => {
		const tool = tools.find(p => p.demandModel === 'variable-volume')!;
		expect(toolPressureLabel({ ...tool, workingPressureBar: { max: 6.205 } })).toBe('6.205 bar maximum');
		expect(toolPressureLabel({ ...tool, workingPressureBar: { min: 5 } })).toBe('5 bar minimum, maximum non établi');
		expect(toolPressureLabel({ ...tool, workingPressureBar: { typical: 6 } })).toBe('6 bar');
	});
});
