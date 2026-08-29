import { chicagoPneumaticRatchet2026 } from '../../product-factories/chicago-pneumatic-general-industry-2026.ts';

const generated = chicagoPneumaticRatchet2026('chicago-pneumatic-cp886');
const product = {
	...generated,
	id: generated.id,
	evidence: generated.evidence,
};

export default product;
