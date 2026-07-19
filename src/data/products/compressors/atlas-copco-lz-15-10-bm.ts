import { atlasCopcoLzBaseMounted } from '../../product-factories/atlas-copco-lz-base-mounted.ts';

const generated = atlasCopcoLzBaseMounted({
	id: 'atlas-copco-lz-15-10-bm',
	model: 'LZ 15-10 BM',
	fadLpmAtSevenBar: 1320,
	powerKw: 11,
	noiseDb: 74,
	dimensions: '1 440 × 808 × 1 614 mm',
	imageSrc: '/images/products/atlas-copco-lz-20-10-bm.webp',
	imageSourceUrl: 'https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/industrial-air/documents/leaflets/compressors/lz_7-20/LZ_7-20_antwerp_leaflet_EN_2935080544.pdf',
	imageSourceLabel: 'Visuel officiel de la gamme Atlas Copco LZ 7-20',
	imageIsFamilyVisual: true,
});

const product = {
	...generated,
	evidence: generated.evidence,
};

export default product;
