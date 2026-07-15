import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp7737', model: 'CP7737', mpn: '8941077370', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7737-sku8941077370', catalogPage: 20, drive: '1/2 pouce', impactMechanism: 'Marteau simple', blowsPerMinute: 1600, freeSpeedRpm: 9000, workingTorqueNm: { min: 34, max: 224 }, maxReverseTorqueNm: 300, weightKg: 1.13, lengthMm: 240, airLitersPerSecond: 7.5, vibration: 10.3, vibrationUncertainty: 1.3, soundPressureDb: 93, soundPowerDb: 104 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
