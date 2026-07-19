import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-3-lr-90', model: 'PO 3 LR', configuration: 'LR', tankLiters: 90, fadLpmAtEightBar: 246, powerKw: 2.2, weightKg: 182, dimensions: '1 275 × 760 × 1 100 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
