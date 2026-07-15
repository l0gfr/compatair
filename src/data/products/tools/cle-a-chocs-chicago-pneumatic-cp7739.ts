import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp7739', model: 'CP7739', mpn: '8941077390', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7739-sku8941077390', catalogPage: 21, drive: '1/2 pouce', impactMechanism: 'Double marteau', blowsPerMinute: 1700, freeSpeedRpm: 9900, workingTorqueNm: { min: 68, max: 414 }, maxReverseTorqueNm: 610, weightKg: 1.2, lengthMm: 163, airLitersPerSecond: 9.4, vibration: 6.9, vibrationUncertainty: 2.5, soundPressureDb: 92, soundPowerDb: 103 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
