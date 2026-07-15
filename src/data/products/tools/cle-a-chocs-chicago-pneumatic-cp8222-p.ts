import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp8222-p', model: 'CP8222-P', mpn: '6151590180', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp8222-p-sku6151590180', catalogPage: 19, drive: '3/8 pouce', impactMechanism: 'Double marteau', blowsPerMinute: 1250, freeSpeedRpm: 11500, workingTorqueNm: { min: 80, max: 400 }, maxReverseTorqueNm: 450, weightKg: 1.2, lengthMm: 177, airLitersPerSecond: 10, vibration: 5.8, vibrationUncertainty: 2.4, soundPressureDb: 89, soundPowerDb: 100 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
