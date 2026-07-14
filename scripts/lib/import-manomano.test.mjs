import { describe, expect, it } from 'vitest';
import { importManoManoFeed, parseDelimited } from './import-manomano.mjs';

const catalog = {
	compressors: [{ id: 'compressor-a', mpn: '4010393', ean: '4006825589214' }],
	tools: [],
};

describe('import du flux ManoMano Awin', () => {
	it('lit un CSV cité et apparie uniquement par identifiant catalogue', () => {
		const csv = [
			'product_id,product_name,price,deep_link,image_url,ean,mpn,currency,delivery_cost,in_stock',
			'MM-1,"Compresseur, 50 L",149.90,https://www.awin1.com/pclick.php?p=42&a=7&m=17547,https://cdn.example.test/mm-1.webp,,4010393,EUR,9.90,1',
			'MM-2,Produit sans correspondance,10,https://www.awin1.com/pclick.php?p=43&a=7&m=17547,https://cdn.example.test/mm-2.webp,,UNKNOWN,EUR,,1',
		].join('\n');
		const result = importManoManoFeed({ bytes: Buffer.from(csv), fileName: 'manomano.csv', catalog, collectedAt: '2026-07-13T20:00:00.000Z' });

		expect(result.offers).toHaveLength(1);
		expect(result.offers[0]).toMatchObject({ productId: 'compressor-a', merchantProductId: 'MM-1', productName: 'Compresseur, 50 L', priceEur: 149.9, shippingEur: 9.9, availability: 'in_stock' });
		expect(result.report.unmatched).toBe(1);
		expect(result.report.matches[0]).toMatchObject({ productId: 'compressor-a', matchedBy: ['mpn'] });
		expect(result.report.unmatchedSamples[0]).toMatchObject({ merchantProductId: 'MM-2', identifiers: { mpn: 'UNKNOWN' } });
	});

	it('rejette un lien Awin visant un autre annonceur', () => {
		const csv = 'product_id,product_name,price,deep_link,image_url,mpn\nMM-1,Compresseur,149.90,https://www.awin1.com/pclick.php?p=42&a=7&m=999,https://cdn.example.test/mm-1.webp,4010393';
		const result = importManoManoFeed({ bytes: Buffer.from(csv), fileName: 'manomano.csv', catalog, collectedAt: '2026-07-13T20:00:00.000Z' });

		expect(result.offers).toHaveLength(0);
		expect(result.report.issues[0].reason).toBe('wrong_awin_advertiser');
		expect(result.report.rejectionReasons).toEqual({ wrong_awin_advertiser: 1 });
	});

	it('renouvelle une offre avec un identifiant stable et une collecte plus récente', () => {
		const csv = 'product_id,product_name,price,deep_link,image_url,mpn\nMM-1,Compresseur,149.90,https://www.awin1.com/pclick.php?p=42&a=7&m=17547,https://cdn.example.test/mm-1.webp,4010393';
		const first = importManoManoFeed({ bytes: Buffer.from(csv), fileName: 'first.csv', catalog, collectedAt: '2026-07-13T20:00:00.000Z' });
		const renewed = importManoManoFeed({ bytes: Buffer.from(csv), fileName: 'renewed.csv', catalog, collectedAt: '2026-07-15T08:00:00.000Z' });

		expect(renewed.offers[0].id).toBe(first.offers[0].id);
		expect(renewed.offers[0].collectedAt).toBe('2026-07-15T08:00:00.000Z');
		expect(renewed.offers[0].sourceId).toBe('awin:17547:renewed.csv');
	});

	it('accepte les exports Awin séparés par tabulation', () => {
		const rows = parseDelimited('product_id\tproduct_name\tprice\n1\tProduit\t12.50');
		expect(rows[0].row).toEqual({ product_id: '1', product_name: 'Produit', price: '12.50' });
	});

	it('apparie un alias MPN uniquement lorsqu’il est présent dans la vue normalisée', () => {
		const normalizedCatalog = { ...catalog, normalized: { products: [{ id: 'compressor-a', identity: { mpn: '4010393', aliases: [{ type: 'legacy_mpn', value: 'OLD-4010-393' }] } }] } };
		const csv = 'product_id,product_name,price,deep_link,image_url,mpn\nMM-ALIAS,Compresseur,149.90,https://www.awin1.com/pclick.php?p=42&a=7&m=17547,https://cdn.example.test/mm-alias.webp,OLD-4010-393';
		const result = importManoManoFeed({ bytes: Buffer.from(csv), fileName: 'manomano.csv', catalog: normalizedCatalog, collectedAt: '2026-07-14T09:00:00.000Z' });
		expect(result.offers[0]).toMatchObject({ productId: 'compressor-a', merchantProductId: 'MM-ALIAS' });
	});
});
