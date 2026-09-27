import { describe, expect, it } from 'vitest';
import { tools } from '../data/catalog';
import {
	scannerComparisonHref,
	scannerCompressorDataGap,
	scannerConfigurationForTool,
	scannerConfigurationFromComparisonHref,
	scannerReferenceFromHash,
	scannerReferenceUrl,
} from './scanner-journey';

describe('scanner journey', () => {
	it('explains the identified compressor without borrowing an unselected tool warning', () => {
		const knownFad = { confidence: 'A' as const, fadCurve: [{ pressureBar: 6.4, litersPerMinute: 75 }] };
		expect(scannerCompressorDataGap(knownFad)).toMatchObject({ title: 'Endurance du compresseur non établie' });
		expect(scannerCompressorDataGap(knownFad).detail).toContain('débit documenté reste comparable');
		expect(scannerCompressorDataGap({ ...knownFad, fadCurve: [] }).title).toBe('Débit restitué non documenté');
		expect(scannerCompressorDataGap({ ...knownFad, confidence: 'C' }).title).toBe('Source insuffisante pour confirmer une compatibilité');
	});

	it('does not invent a compressor limitation when its FAD and endurance are documented', () => {
		const gap = scannerCompressorDataGap({ confidence: 'A', fadCurve: [{ pressureBar: 7, litersPerMinute: 200 }], dutyCycle: 1 });
		expect(gap.title).toBe('Précisez l’outil et son usage');
		expect(gap.detail).not.toContain('manque');
		expect(gap.detail).toContain('Sans outil choisi');
	});

	it('transmits the exact fixed-flow need to the contextual comparator', () => {
		const tool = tools.find((item) => item.id === 'einhell-tc-pp-220');
		if (!tool || tool.demandModel !== 'fixed-flow') throw new Error('Outil fixe de recette absent du catalogue.');
		const configuration = scannerConfigurationForTool(tool)!;
		const href = scannerComparisonHref(['first', 'second', 'third'], configuration);
		const decoded = scannerConfigurationFromComparisonHref(href);

		expect(href).toContain('/comparateur/#ids=first%2Csecond%2Cthird&config=');
		expect(decoded).toMatchObject({
			mode: 'successive',
			safetyMargin: 0.25,
			sessionMinutes: 30,
			selectedCompressor: '',
			demands: [{ id: tool.id, model: 'fixed-flow', flowLpm: tool.airflowLpm.typical, pressureBar: tool.workingPressureBar.typical }],
		});
	});

	it('does not invent the missing cadence or inflation volume', () => {
		const perAction = tools.find((item) => item.demandModel === 'per-action')!;
		const inflation = tools.find((item) => item.demandModel === 'variable-volume')!;
		expect(scannerConfigurationForTool(perAction)).toBeUndefined();
		expect(scannerConfigurationForTool(inflation)).toBeUndefined();
	});

	it('keeps a validated reference in the scanner URL for browser returns', () => {
		const url = scannerReferenceUrl('/scanner/', ' 4138540 ');
		expect(url).toBe('/scanner/#reference=4138540');
		expect(scannerReferenceFromHash(url.split('#')[1])).toBe('4138540');
		expect(scannerReferenceFromHash('#reference=')).toBeUndefined();
	});
});
