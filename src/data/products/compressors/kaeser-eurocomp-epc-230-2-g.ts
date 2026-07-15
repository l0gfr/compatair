import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-230-2-g', model: 'EPC 230-2-G', maxPressureBar: 15, fadCurve: [{ pressureBar: 8, litersPerMinute: 192 }, { pressureBar: 12, litersPerMinute: 188 }], powerKw: 1.7, cylinders: 2, noiseDb: 71, dimensions: '520 × 440 × 440 mm', weightKg: 45 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
