import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-1000-2-g', model: 'EPC 1000-2-G', maxPressureBar: 15, fadCurve: [{ pressureBar: 8, litersPerMinute: 836 }, { pressureBar: 12, litersPerMinute: 820 }], powerKw: 7.5, cylinders: 2, noiseDb: 79, dimensions: '800 × 720 × 650 mm', weightKg: 135 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
