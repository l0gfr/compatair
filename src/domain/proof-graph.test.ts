import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { toolTaxonomy } from '../data/taxonomy';
import { createCatalogSnapshot, createVerdictSnapshot } from './snapshots';
import { createProofGraph, simulateProofCorrection } from './proof-graph';

describe('interactive proof graph', () => {
	const compressor = compressors.find((item) => item.id === 'einhell-te-ac-430-90-10')!;
	const tool = tools.find((item) => item.id === 'einhell-tc-pw-340')!;
	const catalog = createCatalogSnapshot({ compressors, tools, toolTaxonomy, verifiedAt: CATALOG_VERIFIED_AT });
	const verdicts = createVerdictSnapshot({ compressors, tools, catalogVersion: catalog.catalogVersion, verifiedAt: CATALOG_VERIFIED_AT });
	const pair = verdicts.pairs.find((item) => item.compressorId === compressor.id && item.toolId === tool.id)!;
	const graph = createProofGraph(compressor, tool, { catalogVersion: catalog.catalogVersion, verdictVersion: verdicts.verdictVersion, calculationVersion: verdicts.calculationVersion, verifiedAt: CATALOG_VERIFIED_AT }, pair);

	it('links the published verdict to calculations, fields, evidence and versions', () => {
		expect(graph.recalculatedMatchesSnapshot).toBe(true);
		expect(new Set(graph.nodes.map((node) => node.layer))).toEqual(new Set(['verdict', 'calculation', 'field', 'evidence', 'version']));
		expect(graph.edges).toContainEqual({ from: 'calculation:required-fad', to: 'verdict:published', relation: 'fixe le seuil' });
		expect(graph.nodes.filter((node) => node.layer === 'evidence').some((node) => node.url?.startsWith('https://'))).toBe(true);
		expect(graph.nodes.find((node) => node.id === 'version:verdict')?.detail).toBe(verdicts.verdictVersion);
	});

	it('simulates a correction without mutating the catalog objects', () => {
		const curveBefore = structuredClone(compressor.fadCurve);
		const simulation = simulateProofCorrection(compressor, tool, 'compressor-fad', 1);
		expect(simulation.result.verdict).toBe('incompatible');
		expect(compressor.fadCurve).toEqual(curveBefore);
		expect(simulation.change).toContain('simulé');
	});

	it('rejects invalid correction values', () => {
		expect(() => simulateProofCorrection(compressor, tool, 'safety-margin', 101)).toThrow('100 %');
		expect(() => simulateProofCorrection(compressor, tool, 'tool-airflow', 0)).toThrow('strictement positif');
	});
});
