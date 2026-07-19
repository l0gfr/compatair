import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-4-ltr-270', model: 'PO 4 LTR', configuration: 'LTR', tankLiters: 270, fadLpmAtEightBar: 724, powerKw: 6, weightKg: 390, dimensions: '1 860 × 760 × 1 285 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
