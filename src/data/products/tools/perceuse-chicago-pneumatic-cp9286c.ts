import { chicagoPneumaticDrill2026 } from '../../product-factories/chicago-pneumatic-general-industry-2026.ts';

const generated = chicagoPneumaticDrill2026('chicago-pneumatic-cp9286c');
const product = {
	...generated,
	id: generated.id,
	evidence: generated.evidence,
};

export default product;
