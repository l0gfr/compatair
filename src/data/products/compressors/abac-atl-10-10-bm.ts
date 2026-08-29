import { abacTechIndustrial2025 } from '../../product-factories/abac-tech-industrial-2025.ts';

const generated = abacTechIndustrial2025('abac-atl-10-10-bm');
const product = {
	...generated,
	id: generated.id,
	evidence: generated.evidence,
};

export default product;
