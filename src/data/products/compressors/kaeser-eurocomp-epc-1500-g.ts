import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-1500-g', model: 'EPC 1500-G', maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 1000 }, { pressureBar: 8, litersPerMinute: 900 }], powerKw: 7.5, cylinders: 2, noiseDb: 80, dimensions: '810 × 800 × 650 mm', weightKg: 130 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
