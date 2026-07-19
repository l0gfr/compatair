import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-2-lr-50', model: 'PO 2 LR', configuration: 'LR', tankLiters: 50, fadLpmAtEightBar: 150, powerKw: 1.5, weightKg: 70, dimensions: '1 140 × 450 × 745 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
