import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp9541', model: 'CP9541', mpn: '6151909541', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp9541-sku6151909541', catalogPage: 23, drive: '1/2 pouce', impactMechanism: 'Embrayage à broche', blowsPerMinute: 1100, freeSpeedRpm: 8900, workingTorqueNm: { min: 34, max: 434 }, maxReverseTorqueNm: 610, weightKg: 2.5, lengthMm: 168, airLitersPerSecond: 6.1, vibration: 5.5, vibrationUncertainty: 2.5, soundPressureDb: 89, soundPowerDb: 100 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
