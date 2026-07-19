import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-1-lr-50', model: 'PO 1 LR', configuration: 'LR', tankLiters: 50, fadLpmAtEightBar: 70, powerKw: 0.75, weightKg: 62, dimensions: '1 140 × 450 × 745 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
