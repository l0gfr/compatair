import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-3-ltr-270', model: 'PO 3 LTR', configuration: 'LTR', tankLiters: 270, fadLpmAtEightBar: 492, powerKw: 4.4, weightKg: 378, dimensions: '1 860 × 760 × 1 285 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
