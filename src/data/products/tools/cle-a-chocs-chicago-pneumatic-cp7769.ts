import { chicagoPneumaticImpact2026 } from '../../product-factories/chicago-pneumatic-general-industry-2026.ts';

const generated = chicagoPneumaticImpact2026('chicago-pneumatic-cp7769');
const product = {
	...generated,
	id: generated.id,
	evidence: generated.evidence,
};

export default product;
