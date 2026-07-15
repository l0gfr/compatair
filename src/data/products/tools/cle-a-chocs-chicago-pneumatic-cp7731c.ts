import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp7731c', model: 'CP7731C', mpn: '8941077311', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp7731c-sku8941077311', catalogPage: 18, drive: '3/8 pouce', impactMechanism: 'Marteau simple', blowsPerMinute: 1400, freeSpeedRpm: 9000, workingTorqueNm: { min: 83, max: 392 }, maxReverseTorqueNm: 469, weightKg: 1, lengthMm: 110, airLitersPerSecond: 7.9, vibration: 10.33, vibrationUncertainty: 1.4, soundPressureDb: 96, soundPowerDb: 107, sourceDiscrepancy: 'La fiche produit courante publie 9 000 tr/min, contre 11 000 tr/min dans le catalogue 2026 ; la valeur de la fiche produit est retenue.' });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
