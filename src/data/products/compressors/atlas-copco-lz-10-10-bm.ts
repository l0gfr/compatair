import { atlasCopcoLzBaseMounted } from '../../product-factories/atlas-copco-lz-base-mounted.ts';

const generated = atlasCopcoLzBaseMounted({
	id: 'atlas-copco-lz-10-10-bm',
	model: 'LZ 10-10 BM',
	fadLpmAtSevenBar: 930,
	powerKw: 7.5,
	noiseDb: 69,
	dimensions: '1 442 × 808 × 871 mm',
	imageSrc: '/images/products/atlas-copco-lz-10-10-bm.webp',
	imageSourceUrl: 'https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/industrial-air/documents/leaflets/compressors/lz_7-20/LZ_7-20_antwerp_leaflet_EN_2935080544.pdf',
	imageSourceLabel: 'Visuel officiel Atlas Copco du LZ 10 sur bâti, extrait de la brochure LZ 7-20',
});

const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
