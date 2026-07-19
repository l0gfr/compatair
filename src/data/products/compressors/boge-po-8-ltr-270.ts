import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-8-ltr-270', model: 'PO 8 LTR', configuration: 'LTR', tankLiters: 270, fadLpmAtEightBar: 1336, powerKw: 11, weightKg: 424, dimensions: '1 860 × 760 × 1 285 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
