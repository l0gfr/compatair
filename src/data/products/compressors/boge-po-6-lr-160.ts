import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-6-lr-160', model: 'PO 6 LR', configuration: 'LR', tankLiters: 160, fadLpmAtEightBar: 512, powerKw: 4, weightKg: 212, dimensions: '1 515 × 760 × 1 215 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
