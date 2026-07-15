const product = {
		id: 'metabo-ds-14', slug: 'visseuse-pneumatique-metabo-ds-14', categoryId: 'visseuse', category: 'Visseuse pneumatique', label: 'Visseuse pneumatique Metabo DS 14', brand: 'Metabo', model: 'DS 14', mpn: '604117000', ean: '4007430229854',
		demandModel: 'fixed-flow', workingPressureBar: { min: 6.2, typical: 6.2, max: 6.2 }, airflowLpm: { min: 340, typical: 340, max: 340 }, connectorSize: 'Raccord 1/4 pouce', usagePattern: 'intermittent', lubricationRequirement: 'Lubrification avec l’huile prévue pour les outils pneumatiques', confidence: 'A',
		image: { src: '/images/products/metabo-ds-14.jpg', alt: 'Visseuse pneumatique Metabo DS 14', sourceUrl: 'https://www.metabo.com/za/en/tools/compressed-air/compressed-air-tools/air-screwdriver/ds-14-604117000-air-screwdriver.html', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'La DS 14 est une visseuse pneumatique destinée aux travaux d’assemblage. Son besoin publié de 340 L/min à 6,2 bar la place parmi les outils les plus exigeants du catalogue CompatAir.', verifiedFacts: ['Metabo publie une consommation d’air de 340 L/min à une pression de service de 6,2 bar.', 'La fiche indique 1 800 tr/min, un couple réglable de 5 à 14 Nm et un poids de 1,2 kg.'], limitations: ['La valeur de 340 L/min ne décrit pas la durée réelle d’appui sur la gâchette.', 'Une alimentation intermittente ne doit pas être déclarée sans pressions de cuve et cadence explicitement saisies.'] },
		evidence: [{ id: 'metabo-604117000-official', sourceUrl: 'https://www.metabo.com/za/en/tools/compressed-air/compressed-air-tools/air-screwdriver/ds-14-604117000-air-screwdriver.html', sourceLabel: 'Metabo, fiche produit officielle DS 14', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { airflowLpm: ['metabo-604117000-official'], workingPressureBar: ['metabo-604117000-official'], connectorSize: ['metabo-604117000-official'] }, notes: [],
	};

export default product;
