import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp7732', model: 'CP7732', mpn: '8941077320', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7732-sku8941077320', catalogPage: 20, drive: '1/2 pouce', impactMechanism: 'Marteau simple', blowsPerMinute: 1400, freeSpeedRpm: 9000, workingTorqueNm: { min: 138, max: 420 }, maxReverseTorqueNm: 610, weightKg: 1.3, lengthMm: 112, airLitersPerSecond: 9, vibration: 12.1, vibrationUncertainty: 4.4, soundPressureDb: 95, soundPowerDb: 106 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
