const product = {
		id: 'metabo-bp-200', slug: 'soufflette-metabo-bp-200', categoryId: 'soufflette', category: 'Soufflette', label: 'Soufflette Metabo BP 200', brand: 'Metabo', model: 'BP 200',
		demandModel: 'fixed-flow', workingPressureBar: { min: 3, typical: 8, max: 8 }, airflowLpm: { min: 130, typical: 350, max: 350 }, connectorSize: 'Raccord 1/4 pouce', confidence: 'A',
		image: { src: '/images/products/metabo-bp-200.webp', alt: 'Soufflette pneumatique Metabo BP 200', sourceUrl: 'https://www.metabo.com/ch/fr/machines/air-comprime/outils-a-air-comprime/soufflettes-a-air-comprime/bp-200-soufflette-a-air-comprime/601581180', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'La BP 200 est réglable, ce qui explique la plage de pression et de consommation publiée par Metabo. CompatAir retient la borne haute documentée de 350 L/min à 8 bar pour ne pas sous-dimensionner le compresseur.', verifiedFacts: ['La plage publiée s’étend de 130 à 350 L/min et de 3 à 8 bar.', 'Le profil par défaut utilise la borne haute de 350 L/min à 8 bar et la fiche annonce un raccord de 1/4 pouce.'], limitations: ['Le débit réel dépend du réglage appliqué à l’outil.', 'Le constructeur ne publie pas une courbe associant précisément chaque débit à une pression. La borne haute est retenue par prudence.'] },
		evidence: [{ id: 'metabo-601581180-official', sourceUrl: 'https://www.metabo.com/ch/fr/machines/air-comprime/outils-a-air-comprime/soufflettes-a-air-comprime/bp-200-soufflette-a-air-comprime/601581180', sourceLabel: 'Metabo, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-13', confidence: 'A' }],
		fieldSources: { workingPressureBar: ['metabo-601581180-official'], airflowLpm: ['metabo-601581180-official'], connectorSize: ['metabo-601581180-official'] }, notes: ['Le débit dépend du réglage. Le calcul utilise la borne haute publiée de 350 L/min par défaut.'],
	};

export default product;
