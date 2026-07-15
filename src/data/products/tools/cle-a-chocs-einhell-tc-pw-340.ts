const product = {
		id: 'einhell-tc-pw-340', slug: 'cle-a-chocs-einhell-tc-pw-340', categoryId: 'cle-a-chocs', category: 'Clé à chocs', label: 'Clé à chocs Einhell TC-PW 340', brand: 'Einhell', model: 'TC-PW 340', mpn: '4138950', ean: '4006825639995',
		demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 142, typical: 142, max: 142 }, connectorSize: 'Flexible intérieur 9 mm recommandé', usagePattern: 'burst', lubricationRequirement: 'Lubrification régulière selon la notice', recommendedHose: { innerDiameterMm: 9 }, confidence: 'A',
		image: { src: '/images/products/einhell-tc-pw-340.webp', alt: 'Clé à chocs pneumatique Einhell TC-PW 340', sourceUrl: 'https://www.einhell.fr/p/4138950-tc-pw-340/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'La TC-PW 340 est une clé à chocs pneumatique à carré de 1/2 pouce. Sa notice relie une consommation de 142 L/min à une pression de travail maximale de 6,3 bar et recommande une cuve de compresseur d’au moins 50 litres.', verifiedFacts: ['La notice publie une consommation d’air de 142 L/min, une pression maximale de 6,3 bar et un flexible intérieur de 9 mm.', 'Einhell annonce un couple maximal de 340 Nm, quatre positions de réglage et un entraînement carré de 12,7 mm.'], limitations: ['Le volume minimal de cuve de 50 litres est une recommandation du fabricant, pas la preuve qu’un compresseur de 50 litres fournit 142 L/min à 6,3 bar.', 'Le débit restitué du compresseur doit toujours être vérifié à la pression demandée.'] },
		evidence: [
			{ id: 'einhell-4138950-official', sourceUrl: 'https://www.einhell.fr/p/4138950-tc-pw-340/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-13', confidence: 'A' },
			{ id: 'einhell-4138950-manual', sourceUrl: 'https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_c7bjdn248d2dret4jdk27m9377/4138950_21022_002_SPK2.pdf', sourceLabel: 'Einhell, notice TC-PW 340', sourceType: 'manual', retrievedAt: '2026-07-13', confidence: 'A', notes: 'Consommation, flexible, pression et recommandation de cuve.' },
		],
		fieldSources: { airflowLpm: ['einhell-4138950-manual'], workingPressureBar: ['einhell-4138950-official', 'einhell-4138950-manual'], recommendedHose: ['einhell-4138950-manual'] },
		notes: ['La cuve de 50 litres recommandée ne remplace pas le contrôle du débit restitué.'],
	};

export default product;
