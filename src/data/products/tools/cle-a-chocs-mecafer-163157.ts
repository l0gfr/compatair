const product = {
		id: 'mecafer-163157', slug: 'cle-a-chocs-mecafer-163157', categoryId: 'cle-a-chocs', category: 'Clé à chocs', label: 'Clé à chocs Mecafer Pro 1/2', brand: 'Mecafer', model: 'Clé à chocs Pro 1/2', mpn: '163157', ean: '3283491631572',
		demandModel: 'fixed-flow', workingPressureBar: { min: 6, typical: 6, max: 6 }, airflowLpm: { min: 128, typical: 128, max: 128 }, usagePattern: 'burst', confidence: 'A',
		image: { src: '/images/products/mecafer-163157.webp', alt: 'Clé à chocs pneumatique Mecafer Pro 163157', sourceUrl: 'https://www.mecafer.com/accessoires-compresseurs/cle-a-choc-pro-1-2-', sourceLabel: 'Visuel officiel Mecafer' },
		editorial: { overview: 'Cette clé à chocs Mecafer Pro à carré de 1/2 pouce demande 128 L/min à 6 bar. Le moteur doit être dimensionné sur ce débit restitué à 6 bar, même si l’usage est généralement par rafales.', verifiedFacts: ['Mecafer publie une consommation de 128 L/min à 6 bar.', 'La fiche annonce 745 Nm au serrage, 1 000 Nm au desserrage et 7 000 tr/min.'], limitations: ['La consommation publiée est une valeur unique, sans plage ni protocole de mesure.', 'Une cuve importante espace les redémarrages mais ne corrige pas un débit restitué inférieur à 128 L/min.'] },
		specifications: [{ label: 'Carré', value: '1/2 pouce', evidenceIds: ['mecafer-163157-official'] }, { label: 'Poids', value: '2,2 kg', evidenceIds: ['mecafer-163157-official'] }],
		evidence: [{ id: 'mecafer-163157-official', sourceUrl: 'https://www.mecafer.com/accessoires-compresseurs/cle-a-choc-pro-1-2-', sourceLabel: 'Mecafer, fiche clé à chocs Pro 163157', sourceType: 'manufacturer', retrievedAt: '2026-07-16', confidence: 'A' }],
		fieldSources: { airflowLpm: ['mecafer-163157-official'], workingPressureBar: ['mecafer-163157-official'] }, notes: ['Le dimensionnement utilise la consommation publiée à 6 bar.'],
	};

export default product;
