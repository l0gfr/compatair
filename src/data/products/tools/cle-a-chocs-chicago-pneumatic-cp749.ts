import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp749', model: 'CP749', mpn: 'T024587', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp749-skuT024587', catalogPage: 21, drive: '1/2 pouce', impactMechanism: 'Double marteau', blowsPerMinute: 1320, freeSpeedRpm: 6400, workingTorqueNm: { min: 68, max: 610 }, maxReverseTorqueNm: 827, weightKg: 2.5, lengthMm: 178, airLitersPerSecond: 10.4, vibration: 6.2, vibrationUncertainty: 2, soundPressureDb: 96, soundPowerDb: 107 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
