import { describe, expect, it } from 'vitest';
import { compressorSchema } from './catalog';
import { createRuntimeCatalog, runtimeCatalogSchema } from './runtime-catalog';
import { compressorInputSchema, sizeConfiguration } from './sizing';
import { evaluateCompatibility } from './compatibility';
import { evaluateContextualCompressor } from './contextual-comparison';
import { createCounterfactualRecommendation } from './counterfactual';
import { createPassportReport, parsePassportConfiguration } from './passport';
import { createMcpCore } from '../../server/mcp-core.mjs';

const point = 6.894757;
const evidence = { id: 'pressure-source', sourceUrl: 'https://example.com/manual.pdf', sourceLabel: 'Synthetic pressure fixture', sourceType: 'manual' as const, sourceRole: 'primary' as const, retrievedAt: '2026-10-07', confidence: 'A' as const };
const compressor = compressorSchema.parse({
	id: 'documented-point', slug: 'documented-point', brand: 'Fixture', model: 'Point',
	maxPressureBar: point, maxPressureBasis: 'selected-working-pressure-ceiling',
	fadCurve: [{ pressureBar: point, litersPerMinute: 200 }], dutyCycle: 1,
	oilType: 'unknown', confidence: 'A', status: 'unknown',
	image: { src: '/images/products/fixture.webp', alt: 'Fixture', sourceUrl: evidence.sourceUrl, sourceLabel: evidence.sourceLabel },
	editorial: { overview: 'Synthetic fixture', verifiedFacts: ['Point', 'Flow'], limitations: ['Maximum unknown'] },
	evidence: [evidence], fieldSources: { fadCurve: [evidence.id], maxPressureBar: [evidence.id], maxPressureBasis: [evidence.id], dutyCycle: [evidence.id] },
});
const input = (pressureBar: number) => ({ demands: [{ id: 'tool', flowLpm: 100, pressureBar }], compressor: { ...compressor, availableFadLpm: 200 } });

describe('documented operating pressure', () => {
	it('suspends a verdict immediately above the documented point', () => {
		expect(sizeConfiguration(input(point + 0.000001))).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'data', confidence: 'low' });
		expect(sizeConfiguration(input(point))).toMatchObject({ verdict: 'continuous' });
		expect(sizeConfiguration(input(point - 0.000001))).toMatchObject({ verdict: 'continuous' });
	});
	it.each([undefined, 'explicit-maximum-working-pressure'] as const)('preserves a proven or legacy maximum (%s)', maxPressureBasis => {
		expect(sizeConfiguration({ ...input(point + 0.000001), compressor: { ...input(point).compressor, maxPressureBasis } })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure' });
	});
	it('retains conclusive measured supply and cut-out limits', () => {
		expect(sizeConfiguration({ ...input(7), supplyPressureBar: 6.5 })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure' });
		expect(sizeConfiguration({ ...input(7), compressor: { ...input(7).compressor, cutOutPressureBar: 6.5 } })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure' });
		expect(sizeConfiguration({ ...input(7), supplyPressureBar: 8 })).toMatchObject({ verdict: 'insufficient_data' });
	});
	it('does not treat an operating point as a mechanical regulation ceiling', () => {
		expect(compressorInputSchema.parse({ ...input(7).compressor, cutInPressureBar: 7, cutOutPressureBar: 8 }).maxPressureBasis).toBe('selected-working-pressure-ceiling');
		expect(() => compressorInputSchema.parse({ ...input(7).compressor, cutInPressureBar: 8, cutOutPressureBar: 7 })).toThrow();
		expect(() => compressorInputSchema.parse({ ...input(7).compressor, maxPressureBasis: 'explicit-maximum-working-pressure', cutOutPressureBar: 8 })).toThrow();
	});
	it.each([
		[point - 0.000001, 'continuous'],
		[point, 'continuous'],
		[point + 0.000001, 'insufficient_data'],
	] as const)('qualifies regulation only through the documented point (%s bar)', (cutOutPressureBar, verdict) => {
		const result = sizeConfiguration({ ...input(point - 1), compressor: { ...input(point - 1).compressor, cutInPressureBar: point - 0.5, cutOutPressureBar } });
		expect(result.verdict).toBe(verdict);
		if (verdict === 'insufficient_data') {
			expect(result).toMatchObject({ limitingFactor: 'data', confidence: 'low' });
			expect(result.warnings).toContain('La régulation ou la pression de sortie déclarée dépasse le point de pression documenté. Le débit restitué sur cette plage manque.');
			expect(result).not.toHaveProperty('burstScenario');
		}
	});
	it.each([undefined, 25, 200])('requires FAD over the actual regulation range despite the point capacity (%s L/min)', availableFadLpm => {
		const result = sizeConfiguration({ ...input(6.3), compressor: { ...input(6.3).compressor, availableFadLpm, cutInPressureBar: 7, cutOutPressureBar: 8 } });
		expect(result).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'data', confidence: 'low' });
		expect(result).not.toHaveProperty('estimatedWorkMinutes');
	});
	it.each(['cutInPressureBar', 'cutOutPressureBar'] as const)('suspends an incomplete regulation range above the documented point (%s)', field => {
		expect(sizeConfiguration({ ...input(6.3), compressor: { ...input(6.3).compressor, [field]: point + 0.000001 } })).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'data' });
	});
	it.each([point - 0.000001, point, point + 0.000001])('qualifies a declared outlet only through the documented point (%s bar)', supplyPressureBar => {
		const result = sizeConfiguration({ ...input(6.3), supplyPressureBar });
		expect(result.verdict).toBe(supplyPressureBar > point ? 'insufficient_data' : 'continuous');
	});
	it('preserves conclusive pressure deficits before checking missing delivery over the regulation range', () => {
		expect(sizeConfiguration({ ...input(6.3), supplyPressureBar: 6, compressor: { ...input(6.3).compressor, cutInPressureBar: 7, cutOutPressureBar: 8 } })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure', confidence: 'high' });
		expect(sizeConfiguration({ ...input(9), compressor: { ...input(9).compressor, cutInPressureBar: 7, cutOutPressureBar: 8 } })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure', confidence: 'high' });
	});
	it('does not estimate a burst from delivery below the declared regulation range', () => {
		const result = sizeConfiguration({ demands: [{ id: 'tool', flowLpm: 400, pressureBar: 6.3, dutyFactor: 0.25 }], compressor: { ...input(6.3).compressor, availableFadBasis: 'exact', tankLiters: 50, cutInPressureBar: 7, cutOutPressureBar: 8 } });
		expect(result).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'data' });
		for (const field of ['usableTankAirLiters', 'estimatedWorkMinutes', 'estimatedRecoveryMinutes', 'burstScenario']) expect(result).not.toHaveProperty(field);
	});
	it('preserves missing delivery below the documented control ceiling', () => {
		const result = sizeConfiguration({ ...input(6.3), compressor: { ...input(6.3).compressor, availableFadLpm: undefined, cutInPressureBar: 6.4, cutOutPressureBar: point } });
		expect(result).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'data', confidence: 'low' });
		expect(result.warnings.join(' ')).toContain('Le débit restitué à la pression demandée manque.');
	});
	it('validates and preserves the basis and its evidence through runtime publication', () => {
		const runtime = createRuntimeCatalog([compressor], [], '2026-10-07', 'a'.repeat(64));
		const parsed = runtimeCatalogSchema.parse(JSON.parse(JSON.stringify(runtime)));
		expect(parsed.compressors[0].maxPressureBasis).toBe(compressor.maxPressureBasis);
		expect(parsed.compressors[0].fieldSources.maxPressureBasis).toEqual([evidence.id]);
		for (const schema of [compressorSchema, compressorInputSchema]) expect(() => schema.parse({ ...input(7).compressor, maxPressureBasis: 'invented' })).toThrow();
		expect(() => runtimeCatalogSchema.parse({ ...runtime, compressors: [{ ...runtime.compressors[0], maxPressureBasis: 'invented' }] })).toThrow();
	});
	it('keeps compatibility, contextual comparison, recommendations and passports consistent', async () => {
		const tool = { id: 'tool', slug: 'tool', brand: 'Fixture', model: 'Tool', label: 'Fixture tool', categoryId: 'soufflette', category: 'Soufflette', demandModel: 'fixed-flow', airflowLpm: { min: 100, typical: 100, max: 100 }, workingPressureBar: { min: 7, typical: 7, max: 7 }, confidence: 'A', evidence: [evidence], fieldSources: {}, notes: [] } as any;
		const configuration = parsePassportConfiguration({ demands: [{ id: tool.id, flowLpm: 100, pressureBar: 7 }], selectedCompressor: compressor.id });
		expect(evaluateCompatibility(compressor, tool).verdict).toBe('insufficient_data');
		expect(evaluateContextualCompressor(configuration, compressor).result.verdict).toBe('insufficient_data');
		expect(createCounterfactualRecommendation({ configuration, selectedMachine: { ...compressor, label: 'Fixture' }, machines: [] }).current.verdict).toBe('insufficient_data');
		expect((await createPassportReport(configuration, [compressor], [tool], '2026-10-07')).result.verdict).toBe('insufficient_data');
	});
	it('preserves the actual pressure range through runtime, comparison, recommendations and passports', async () => {
		const tool = { id: 'tool', slug: 'tool', brand: 'Fixture', model: 'Tool', label: 'Fixture tool', categoryId: 'soufflette', category: 'Soufflette', demandModel: 'fixed-flow', airflowLpm: { min: 100, typical: 100, max: 100 }, workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, confidence: 'A', evidence: [evidence], fieldSources: {}, notes: [] } as any;
		const configuration = parsePassportConfiguration({ demands: [{ id: tool.id, flowLpm: 100, pressureBar: 6.3 }], selectedCompressor: compressor.id, supplyPressureBar: 8 });
		const runtime = createRuntimeCatalog([compressor], [], '2026-10-07', 'a'.repeat(64));
		expect(evaluateContextualCompressor(configuration, runtime.compressors[0]).result.verdict).toBe('insufficient_data');
		expect(createCounterfactualRecommendation({ configuration, selectedMachine: { ...compressor, label: 'Fixture' }, machines: [] }).current.verdict).toBe('insufficient_data');
		expect(createCounterfactualRecommendation({ configuration: { ...configuration, supplyPressureBar: undefined }, selectedMachine: { ...compressor, label: 'Fixture', cutInPressureBar: 7, cutOutPressureBar: 8 }, machines: [] }).current.verdict).toBe('insufficient_data');
		expect((await createPassportReport(configuration, [compressor], [tool], '2026-10-07')).result.verdict).toBe('insufficient_data');
	});
	it('rejects unsupported MCP regulation controls instead of silently ignoring them', () => {
		const tool = { id: 'tool', slug: 'tool', brand: 'Fixture', model: 'Tool', label: 'Fixture tool', categoryId: 'soufflette', category: 'Soufflette', demandModel: 'fixed-flow', airflowLpm: { min: 100, typical: 100, max: 100 }, workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, confidence: 'A', evidence: [evidence], fieldSources: {}, notes: [] };
		const catalog = { catalogVersion: 'fixture', schemaVersion: '1.0.0', verifiedAt: '2026-10-07', compressors: [compressor], tools: [tool] };
		const core = createMcpCore(catalog, undefined, { profile: 'legacy' });
		for (const extra of [{ cutInPressureBar: 7, cutOutPressureBar: 8 }, { supplyPressureBar: 8 }]) {
			const response: any = core.handle({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'check_compatibility', arguments: { compressorId: compressor.id, toolId: tool.id, ...extra } } });
			expect(response.result?.isError ?? Boolean(response.error)).toBe(true);
		}
	});
	it('keeps the MCP pair, system and pressure explanation consistent', () => {
		const tool = { id: 'tool', slug: 'tool', brand: 'Fixture', model: 'Tool', label: 'Fixture tool', categoryId: 'soufflette', category: 'Soufflette', demandModel: 'fixed-flow', airflowLpm: { min: 100, typical: 100, max: 100 }, workingPressureBar: { min: 7, typical: 7, max: 7 }, confidence: 'A', evidence: [evidence], fieldSources: {}, notes: [] };
		const catalog = { catalogVersion: 'fixture', schemaVersion: '1.0.0', verifiedAt: '2026-10-07', compressors: [compressor], tools: [tool] };
		for (const [name, args] of [['check_compatibility', { compressorId: compressor.id, toolId: tool.id }], ['build_complete_air_system', { compressorId: compressor.id, toolIds: [tool.id] }], ['explain_compatibility_verdict', { compressorId: compressor.id, toolId: tool.id }]] as const) {
			const profiles = (['core', 'extended', 'legacy'] as const).map(profile => createMcpCore(catalog, undefined, { profile }));
			const core = profiles.find(candidate => candidate.handle({ jsonrpc: '2.0', id: 0, method: 'tools/list' })?.result.tools.some((tool: any) => tool.name === name));
			expect(core).toBeDefined();
			const response: any = core!.handle({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name, arguments: args } });
			expect(response.result.isError).not.toBe(true);
			expect(response.result.structuredContent.air_supply_verdict?.verdict ?? response.result.structuredContent.compatibility.verdict).toBe('insufficient_data');
			if (response.result.structuredContent.factors) expect(response.result.structuredContent.factors[0].status).toBe('insufficient_data');
		}
	});
});
