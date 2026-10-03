import { describe, expect, it } from 'vitest';
import jetX from '../data/products/tools/pistolet-peinture-hvlp-sata-jet-x-1200170';
import { toolProfileSchema } from './catalog';
import { compatibilityWithoutCompressor, evaluateCompatibility } from './compatibility';
import { documentQualityLedger } from '../data/document-quality-ledger';
import { assertDocumentQualityIntegrity } from './document-quality-observatory';

const compressor = {
	id: 'documented-fixture', tankLiters: 50, maxPressureBar: 10,
	fadCurve: [{ pressureBar: 2, litersPerMinute: 1000 }], dutyCycle: 1, confidence: 'A',
};

describe('SATA jet X manufacturer document discrepancies', () => {
	it('blocks restoring any suspended airflow in the documentary integrity gate', () => {
		const tool = toolProfileSchema.parse(jetX);
		const ledger = { ...documentQualityLedger, contradictions: documentQualityLedger.contradictions.filter(item => item.productId === tool.id) };
		const registry = { schemaVersion: '1.0.0' as const, startedAt: '2026-10-03', observations: [{ productId: tool.id, mpn: tool.mpn!, observedAt: '2026-10-03', kind: 'baseline' as const }] };
		expect(ledger.contradictions).toHaveLength(1);
		expect(assertDocumentQualityIntegrity([], [tool], ledger, registry)).toBe(true);
		for (const flow of [420, 430, 445]) expect(() => assertDocumentQualityIntegrity([], [{ ...tool, airflowLpm: { min: flow, typical: flow, max: flow } }], ledger, registry)).toThrow('Champ contradictoire encore exploitable');
	});
	it('does not choose a consumption from the three currently available primary documents', () => {
		const tool = toolProfileSchema.parse(jetX);
		expect(tool.demandModel).toBe('variable-volume');
		expect(tool).not.toHaveProperty('airflowLpm');
		expect(tool.workingPressureBar.typical).toBeUndefined();
		expect(compatibilityWithoutCompressor(tool)?.verdict).toBe('insufficient_data');
		for (const margin of [0, 0.25, 1]) expect(evaluateCompatibility(compressor, tool, { margin }).verdict).toBe('insufficient_data');
		const evidence = new Map(tool.evidence.map(item => [item.id, item]));
		const consumption = tool.specifications.filter(item => item.label.startsWith('Consommation'));
		expect(consumption.map(item => item.value)).toEqual([
			'420 L/min ; pression dynamique recommandée dans une cellule distincte',
			'445 Nl/min ; recommandation d’entrée 2 bar dans une ligne distincte',
			'430 Nl/min / 15,19 cfm à 2 bar à l’entrée du pistolet',
		]);
		for (const spec of consumption) for (const id of spec.evidenceIds) expect(evidence.get(id)?.retrievedAt).toBe('2026-10-03');
		expect(evidence.has('sata-jet-x-hvlp-1200170-manufacturer-2026')).toBe(true);
	});
});
