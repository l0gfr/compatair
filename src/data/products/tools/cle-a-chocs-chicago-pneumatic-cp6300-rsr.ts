import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp6300-rsr', model: 'CP6300 RSR', mpn: 'T025285', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp6300-rsr-skuT025285', catalogPage: 19, drive: '3/8 pouce', impactMechanism: 'Marteau simple', blowsPerMinute: 1800, freeSpeedRpm: 6800, workingTorqueNm: { min: 54, max: 203 }, maxReverseTorqueNm: 243, weightKg: 1.6, lengthMm: 152, airLitersPerSecond: 6.6, vibration: 5, vibrationUncertainty: 1.6, soundPressureDb: 90, soundPowerDb: 101 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
