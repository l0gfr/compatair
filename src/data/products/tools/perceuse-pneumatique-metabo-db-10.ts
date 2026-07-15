const product = {
		id: 'metabo-db-10', slug: 'perceuse-pneumatique-metabo-db-10', categoryId: 'perceuse', category: 'Perceuse pneumatique', label: 'Perceuse pneumatique Metabo DB 10', brand: 'Metabo', model: 'DB 10', mpn: '604120000',
		demandModel: 'fixed-flow', workingPressureBar: { min: 6.2, typical: 6.2, max: 6.2 }, airflowLpm: { min: 360, typical: 360, max: 360 }, connectorSize: 'Raccord 1/4 pouce', usagePattern: 'intermittent', lubricationRequirement: 'Air comprimé huilé selon la documentation Metabo', confidence: 'A',
		image: { src: '/images/products/metabo-db-10.jpg', alt: 'Perceuse pneumatique Metabo DB 10', sourceUrl: 'https://ch.metabo.com/de/maschinen/bohren-schrauben-meisseln-ruehren/bohrmaschinen/db-10-604120000-druckluft-bohrmaschine.html', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'La DB 10 est une perceuse pneumatique réversible pour les travaux de perçage et de montage. Metabo publie un besoin de 360 L/min à 6,2 bar, directement comparable au débit restitué documenté à cette pression.', verifiedFacts: ['La documentation officielle publie 360 L/min à une pression de service de 6,2 bar.', 'La perceuse fonctionne à 1 800 tr/min, accepte des forets de 3 à 10 mm et pèse 1,2 kg.'], limitations: ['Le besoin publié décrit l’alimentation de l’outil, pas sa durée réelle d’utilisation.', 'Le flexible et les raccords doivent préserver la pression de 6,2 bar à l’entrée de l’outil.'] },
		evidence: [{ id: 'metabo-604120000-official', sourceUrl: 'https://ch.metabo.com/de/maschinen/bohren-schrauben-meisseln-ruehren/bohrmaschinen/db-10-604120000-druckluft-bohrmaschine.html', sourceLabel: 'Metabo, fiche officielle DB 10', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { airflowLpm: ['metabo-604120000-official'], workingPressureBar: ['metabo-604120000-official'], connectorSize: ['metabo-604120000-official'] }, notes: [],
	};

export default product;
