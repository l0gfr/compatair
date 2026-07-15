import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-1100-g', model: 'EPC 1100-G', maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 750 }, { pressureBar: 8, litersPerMinute: 690 }], powerKw: 5.5, cylinders: 2, noiseDb: 79, dimensions: '800 × 700 × 610 mm', weightKg: 100 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
