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
		expect(result.warnings[0]).toContain('La source de l’outil Agrafeuse-cloueuse Einhell TC-PN 50 publie 0,66 litre d’air par tir');
		expect(result.warnings[0]).toContain('cadence réelle de cet outil');
	});

	it('refuse d’inventer un débit de gonflage', () => {
		const compressor = compressors[0];
		const tool = tools.find((item) => item.id === 'einhell-4137000-manometre')!;
		const result = evaluateCompatibility(compressor, tool);

		expect(result.verdict).toBe('insufficient_data');
		expect(result.requiredFadLpm).toBeUndefined();
		expect(result.warnings[0]).toContain('volume à gonfler');
	});

	it('rend la provenance de la borne FAD Atlas Copco inspectable', () => {
		const compressor = compressors.find((item) => item.id === 'atlas-copco-lz-10-10-bm')!;
		const tool = tools.find((item) => item.id === 'chicago-pneumatic-cp7748')!;
		const result = evaluateCompatibility(compressor, tool);

		expect(result).toMatchObject({
			verdict: 'continuous',
			availableFadLpm: 930,
			availableFadBasis: 'higher-pressure-bound',
			availableFadReferencePressureBar: 7,
			calculationVersion: '1.3.0',
		});
		expect(result.warnings).toContainEqual(expect.stringContaining('aucun point de courbe n’est inventé'));
	});

	it('couvre les quatre puissances LZ documentées dans la brochure constructeur', () => {
		expect(compressors.filter((item) => item.variant?.familyId === 'atlas-copco-lz-base-mounted').map((item) => item.id).sort()).toEqual([
			'atlas-copco-lz-10-10-bm',
			'atlas-copco-lz-15-10-bm',
			'atlas-copco-lz-20-10-bm',
			'atlas-copco-lz-7-10-bm',
		]);
	});

	it('utilise le point officiel Einhell à 7 bar sans prolonger la courbe', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-tc-ac-190-of-set')!;
		expect(interpolateFad(compressor, 6.3)).toBeCloseTo(61.53, 2);
		expect(interpolateFad(compressor, 7)).toBe(55);
		expect(interpolateFad(compressor, 8)).toBeUndefined();
	});

	it('ajoute des stations BOGE concluantes à 8 bar dans toute la plage de débit', () => {
		const eightBarTool = tools.find((tool) => tool.id === 'einhell-tc-pw-610-compact')!;
		const lowFlow = compressors.find((item) => item.id === 'boge-po-1-lr-50')!;
		const highFlow = compressors.find((item) => item.id === 'boge-po-8-ltr-270')!;
		expect(evaluateCompatibility(lowFlow, eightBarTool).verdict).toBe('incompatible');
		expect(evaluateCompatibility(highFlow, eightBarTool)).toMatchObject({ verdict: 'continuous', availableFadLpm: 1336, availableFadBasis: 'exact' });
	});

	it('couvre un large éventail de clés à chocs sans masquer le cas à 8 bar', () => {
		const impactWrenches = tools.filter((tool) => tool.categoryId === 'cle-a-chocs');
		const compatibleCount = (compressorId: string) => {
			const compressor = compressors.find((item) => item.id === compressorId)!;
			return impactWrenches.filter((tool) => evaluateCompatibility(compressor, tool).verdict === 'continuous').length;
		};

		expect(impactWrenches).toHaveLength(96);
		expect(compatibleCount('atlas-copco-lz-10-10-bm')).toBe(58);
		expect(compatibleCount('atlas-copco-lz-20-10-bm')).toBe(89);
		const eightBarTool = impactWrenches.find((tool) => tool.id === 'einhell-tc-pw-610-compact')!;
		expect(evaluateCompatibility(compressors.find((item) => item.id === 'atlas-copco-lz-20-10-bm')!, eightBarTool).verdict).toBe('insufficient_data');
	});
});
