import { chicagoPneumaticImpact2026 } from '../../product-factories/chicago-pneumatic-general-industry-2026.ts';

const generated = chicagoPneumaticImpact2026('chicago-pneumatic-cp6768ex-p18d');
const product = {
	...generated,
	id: generated.id,
	evidence: generated.evidence,
};

export default product;
