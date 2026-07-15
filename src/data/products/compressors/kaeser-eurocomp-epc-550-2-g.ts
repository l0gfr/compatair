import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-550-2-g', model: 'EPC 550-2-G', maxPressureBar: 15, fadCurve: [{ pressureBar: 8, litersPerMinute: 460 }, { pressureBar: 12, litersPerMinute: 450 }], powerKw: 4, cylinders: 2, noiseDb: 75, dimensions: '640 × 600 × 610 mm', weightKg: 95 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
