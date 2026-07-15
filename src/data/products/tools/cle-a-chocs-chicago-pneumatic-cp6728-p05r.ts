import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp6728-p05r', model: 'CP6728-P05R', mpn: '6151590550', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp6728-p05r-sku6151590550', catalogPage: 19, drive: '3/8 pouce', impactMechanism: 'Double marteau à bain d’huile', blowsPerMinute: 1300, freeSpeedRpm: 11500, workingTorqueNm: { min: 110, max: 350 }, maxReverseTorqueNm: 475, weightKg: 1.7, lengthMm: 175, airLitersPerSecond: 11.4, vibration: 5.2, vibrationUncertainty: 1.9, soundPressureDb: 89, soundPowerDb: 100 });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
