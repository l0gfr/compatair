import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-6-ltr-270', model: 'PO 6 LTR', configuration: 'LTR', tankLiters: 270, fadLpmAtEightBar: 1024, powerKw: 8, weightKg: 404, dimensions: '1 860 × 760 × 1 285 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
