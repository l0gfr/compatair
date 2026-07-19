import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-4-lr-90', model: 'PO 4 LR', configuration: 'LR', tankLiters: 90, fadLpmAtEightBar: 362, powerKw: 3, weightKg: 188, dimensions: '1 275 × 760 × 1 100 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
