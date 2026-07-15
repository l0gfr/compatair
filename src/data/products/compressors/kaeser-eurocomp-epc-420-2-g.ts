import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-420-2-g', model: 'EPC 420-2-G', maxPressureBar: 15, fadCurve: [{ pressureBar: 8, litersPerMinute: 344 }, { pressureBar: 12, litersPerMinute: 336 }], powerKw: 3, cylinders: 2, noiseDb: 74, dimensions: '640 × 570 × 580 mm', weightKg: 70 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
