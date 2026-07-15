import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-630-g', model: 'EPC 630-G', maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 410 }, { pressureBar: 8, litersPerMinute: 375 }], powerKw: 3, cylinders: 2, noiseDb: 75, dimensions: '630 × 570 × 540 mm', weightKg: 70 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
