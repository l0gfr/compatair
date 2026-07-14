import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { evaluateCompatibility, interpolateFad } from './compatibility';
import { sizeConfiguration } from './sizing';

describe('evaluateCompatibility avec plusieurs modèles de demande', () => {
	it('conserve le calcul de débit fixe', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-te-ac-430-90-10')!;
		const tool = tools.find((item) => item.id === 'einhell-tc-pw-340')!;
		const result = evaluateCompatibility(compressor, tool);

		expect(result.requiredFadLpm).toBe(177.5);
		expect(result.verdict).toBe('continuous');
	});

	it('utilise le même verdict que le moteur de dimensionnement avec un cycle de service', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-tc-ac-240-50-10-of')!;
		const tool = tools.find((item) => item.id === 'metabo-fsp-600-lvlp')!;
		if (tool.demandModel !== 'fixed-flow') throw new Error('Profil de test invalide.');
		const availableFadLpm = interpolateFad(compressor, tool.workingPressureBar.typical);
		const sizing = sizeConfiguration({
			demands: [{ id: tool.id, flowLpm: tool.airflowLpm.typical, pressureBar: tool.workingPressureBar.typical, dutyFactor: 1 }],
			compressor: { maxPressureBar: compressor.maxPressureBar, availableFadLpm, tankLiters: compressor.tankLiters, dutyCycle: compressor.dutyCycle },
		});

		expect(evaluateCompatibility(compressor, tool).verdict).toBe(sizing.verdict);
		expect(sizing.verdict).toBe('incompatible');
	});

	it('refuse de convertir un volume par tir sans cadence', () => {
		const compressor = compressors[0];
		const tool = tools.find((item) => item.id === 'einhell-tc-pn-50')!;
		const result = evaluateCompatibility(compressor, tool);

		expect(result.verdict).toBe('insufficient_data');
		expect(result.requiredFadLpm).toBeUndefined();
		expect(result.warnings[0]).toContain('rythme d’actions par minute');
	});

	it('refuse d’inventer un débit de gonflage', () => {
		const compressor = compressors[0];
		const tool = tools.find((item) => item.id === 'einhell-4137000-manometre')!;
		const result = evaluateCompatibility(compressor, tool);

		expect(result.verdict).toBe('insufficient_data');
		expect(result.requiredFadLpm).toBeUndefined();
		expect(result.warnings[0]).toContain('volume à gonfler');
	});
});
