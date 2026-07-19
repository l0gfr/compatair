import { bogePoReceiverMounted } from '../../product-factories/boge-po-receiver-mounted.ts';

const generated = bogePoReceiverMounted({ id: 'boge-po-1-ltr-160', model: 'PO 1 LTR', configuration: 'LTR', tankLiters: 160, fadLpmAtEightBar: 140, powerKw: 1.5, weightKg: 161, dimensions: '1 510 × 510 × 970 mm' });
const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
