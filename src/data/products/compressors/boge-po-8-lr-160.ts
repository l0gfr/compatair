import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-8-lr-160', model: 'PO 8 LR', configuration: 'LR', tankLiters: 160, fadLpmAtEightBar: 668, powerKw: 5.5, weightKg: 222, dimensions: '1 515 × 760 × 1 215 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
