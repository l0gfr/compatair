const product = {
		id: 'metabo-bp-200', slug: 'soufflette-metabo-bp-200', category: 'Soufflette', label: 'Soufflette Metabo BP 200', brand: 'Metabo', model: 'BP 200',
		demandModel: 'fixed-flow', workingPressureBar: { min: 3, typical: 6, max: 8 }, airflowLpm: { min: 130, typical: 240, max: 350 }, connectorSize: 'Raccord 1/4 pouce', confidence: 'A',
		image: { src: '/images/products/metabo-bp-200.webp', alt: 'Soufflette pneumatique Metabo BP 200', sourceUrl: 'https://www.metabo.com/ch/fr/machines/air-comprime/outils-a-air-comprime/soufflettes-a-air-comprime/bp-200-soufflette-a-air-comprime/601581180', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'La BP 200 est réglable, ce qui explique la plage de pression et de consommation publiée par Metabo. CompatAir retient le point médian documenté de 240 L/min à 6 bar pour la comparaison par défaut.', verifiedFacts: ['La plage publiée s’étend de 130 à 350 L/min et de 3 à 8 bar.', 'Le profil par défaut utilise 240 L/min à 6 bar et la fiche annonce un raccord de 1/4 pouce.'], limitations: ['Le débit réel dépend du réglage appliqué à l’outil.', 'Un résultat à 240 L/min ne décrit pas les extrêmes de 130 ou 350 L/min.'] },
		evidence: [{ id: 'metabo-601581180-official', sourceUrl: 'https://www.metabo.com/ch/fr/machines/air-comprime/outils-a-air-comprime/soufflettes-a-air-comprime/bp-200-soufflette-a-air-comprime/601581180', sourceLabel: 'Metabo, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-13', confidence: 'A' }], notes: ['Le débit dépend du réglage. Le calcul utilise 240 L/min par défaut.'],
	};

export default product;
