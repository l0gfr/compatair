import { atlasCopcoLzBaseMounted } from '../../product-factories/atlas-copco-lz-base-mounted.ts';

const generated = atlasCopcoLzBaseMounted({
	id: 'atlas-copco-lz-7-10-bm',
	model: 'LZ 7-10 BM',
	fadLpmAtSevenBar: 660,
	powerKw: 5.5,
	noiseDb: 67,
	dimensions: '1 442 × 808 × 871 mm',
	imageSrc: '/images/products/atlas-copco-lz-10-10-bm.webp',
	imageSourceUrl: 'https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/industrial-air/documents/leaflets/compressors/lz_7-20/LZ_7-20_antwerp_leaflet_EN_2935080544.pdf',
	imageSourceLabel: 'Visuel officiel de la gamme Atlas Copco LZ 7-20',
	imageIsFamilyVisual: true,
});

const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
