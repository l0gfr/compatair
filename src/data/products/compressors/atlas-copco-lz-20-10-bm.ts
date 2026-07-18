import { atlasCopcoLzBaseMounted } from '../../product-factories/atlas-copco-lz-base-mounted.ts';

const generated = atlasCopcoLzBaseMounted({
	id: 'atlas-copco-lz-20-10-bm',
	model: 'LZ 20-10 BM',
	fadLpmAtSevenBar: 1860,
	powerKw: 15,
	noiseDb: 76,
	dimensions: '1 440 × 808 × 1 614 mm',
	imageSrc: '/images/products/atlas-copco-lz-20-10-bm.webp',
	imageSourceUrl: 'https://atlascopco.scene7.com/is/image/atlascopco/LZ20_packR',
	imageSourceLabel: 'Visuel officiel Atlas Copco du LZ 20',
});

const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
