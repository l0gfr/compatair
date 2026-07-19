import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-2-ltr-160', model: 'PO 2 LTR', configuration: 'LTR', tankLiters: 160, fadLpmAtEightBar: 300, powerKw: 3, weightKg: 177, dimensions: '1 510 × 510 × 970 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
