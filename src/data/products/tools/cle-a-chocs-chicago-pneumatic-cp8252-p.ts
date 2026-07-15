import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp8252-p', model: 'CP8252-P', mpn: '6151590210', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp8252-p-sku6151590210', catalogPage: 22, drive: '1/2 pouce', impactMechanism: 'Double marteau', blowsPerMinute: 1400, freeSpeedRpm: 9000, workingTorqueNm: { min: 150, max: 750 }, maxReverseTorqueNm: 950, weightKg: 2, lengthMm: 200, airLitersPerSecond: 12, vibration: 8.8, vibrationUncertainty: 3.6, soundPressureDb: 94, soundPowerDb: 105 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
