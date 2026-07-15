import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp7731', model: 'CP7731', mpn: '8941077310', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7731-sku8941077310', catalogPage: 18, drive: '3/8 pouce', impactMechanism: 'Marteau simple', blowsPerMinute: 1200, freeSpeedRpm: 6400, workingTorqueNm: { min: 96, max: 328 }, maxReverseTorqueNm: 415, weightKg: 1.3, lengthMm: 112, airLitersPerSecond: 8.3, vibration: 8.5, vibrationUncertainty: 1.5, soundPressureDb: 93, soundPowerDb: 104 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
