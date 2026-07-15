import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-340-g', model: 'EPC 340-G', maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 195 }, { pressureBar: 8, litersPerMinute: 170 }], powerKw: 1.7, cylinders: 1, noiseDb: 79, dimensions: '520 × 330 × 510 mm', weightKg: 40 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
