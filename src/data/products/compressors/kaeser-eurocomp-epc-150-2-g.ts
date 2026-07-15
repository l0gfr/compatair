import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-150-2-g', model: 'EPC 150-2-G', maxPressureBar: 15, fadCurve: [{ pressureBar: 8, litersPerMinute: 116 }, { pressureBar: 12, litersPerMinute: 112 }], powerKw: 1.1, cylinders: 2, noiseDb: 74, dimensions: '510 × 430 × 440 mm', weightKg: 40 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
