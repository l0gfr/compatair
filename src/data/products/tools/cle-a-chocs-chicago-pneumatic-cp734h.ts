import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp734h', model: 'CP734H', mpn: 'T024351', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp734h-skuT024351', catalogPage: 20, drive: '1/2 pouce', impactMechanism: 'Embrayage à broche', blowsPerMinute: 1020, freeSpeedRpm: 8400, workingTorqueNm: { min: 34, max: 420 }, maxReverseTorqueNm: 576, weightKg: 2.32, lengthMm: 191, airLitersPerSecond: 7.1, vibration: 7.2, vibrationUncertainty: 3.3, soundPressureDb: 93, soundPowerDb: 104 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
