import { baseMountedEurocomp } from '../../product-factories/kaeser-eurocomp-base-mounted.ts';
const generated = baseMountedEurocomp({ id: 'kaeser-eurocomp-epc-750-2-g', model: 'EPC 750-2-G', maxPressureBar: 15, fadCurve: [{ pressureBar: 8, litersPerMinute: 620 }, { pressureBar: 12, litersPerMinute: 610 }], powerKw: 5.5, cylinders: 2, noiseDb: 80, dimensions: '800 × 670 × 630 mm', weightKg: 125 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
