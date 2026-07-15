import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-440-g', model: 'EPC 440-G', maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 280 }, { pressureBar: 8, litersPerMinute: 260 }], powerKw: 2.4, cylinders: 2, noiseDb: 74, dimensions: '520 × 500 × 440 mm', weightKg: 50 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
