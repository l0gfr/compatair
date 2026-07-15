import { chicagoPneumaticImpactWrench } from '../../product-factories/chicago-pneumatic-impact.ts';
const generated = chicagoPneumaticImpactWrench({ id: 'chicago-pneumatic-cp721', model: 'CP721', mpn: 'T021963', sourceUrl: 'https://tools.cp.com/en/products/impactwrenches/cp721-skuT021963', catalogPage: 18, drive: '3/8 pouce', impactMechanism: 'Rocking dog', blowsPerMinute: 1620, freeSpeedRpm: 11000, workingTorqueNm: { min: 7, max: 68 }, maxReverseTorqueNm: 102, weightKg: 1.2, lengthMm: 146, airLitersPerSecond: 4.7, vibration: 4.7, vibrationUncertainty: 3.3, soundPressureDb: 87, soundPowerDb: 98, sourceDiscrepancy: 'La fiche produit courante publie 11 000 tr/min, contre 9 000 tr/min dans le catalogue 2026 ; la valeur de la fiche produit est retenue.' });
const product = {
	...generated,
	evidence: generated.evidence,
};
export default product;
