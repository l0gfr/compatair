import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-840-g', model: 'EPC 840-G', maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 590 }, { pressureBar: 8, litersPerMinute: 530 }], powerKw: 4, cylinders: 2, noiseDb: 78, dimensions: '630 × 590 × 550 mm', weightKg: 70 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
