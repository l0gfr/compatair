const product = {
		id: 'parkside-pdsp-1000-e6', slug: 'pistolet-sablage-parkside-pdsp-1000-e6', categoryId: 'sableuse', category: 'Pistolet de sablage', label: 'Pistolet de sablage Parkside PDSP 1000 E6', brand: 'Parkside', model: 'PDSP 1000 E6', gtin: '4052916949412',
		demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 320, typical: 320, max: 320 }, usagePattern: 'continuous', confidence: 'B',
		image: { src: '/images/products/parkside-pdsp-1000-e6.webp', alt: 'Pistolet de sablage pneumatique Parkside PDSP 1000 E6', sourceUrl: 'https://www.lidl.de/p/parkside-druckluft-sandstrahlpistole-pdsp-1000-e6/p100398458', sourceLabel: 'Visuel officiel Lidl Parkside' },
		editorial: { overview: 'Le Parkside PDSP 1000 E6 est un pistolet de sablage à réservoir. Lidl ne publie que des maxima de 320 L/min et 6,3 bar ; le profil les retient ensemble pour un dimensionnement conservateur.', verifiedFacts: ['Lidl publie une consommation maximale de 320 L/min et une pression maximale de 6,3 bar.', 'Le réservoir contient environ 0,9 litre et accepte un abrasif de granulométrie 0,2 à 0,8 mm.'], limitations: ['La consommation nominale n’est pas publiée : 320 L/min est un maximum de dimensionnement.', 'La recommandation de cuve d’au moins 50 litres ne remplace pas la vérification du débit restitué à 6,3 bar.'] },
		specifications: [{ label: 'Réservoir', value: 'Environ 0,9 L', evidenceIds: ['parkside-pdsp-lidl'] }, { label: 'Granulométrie', value: '0,2 à 0,8 mm', evidenceIds: ['parkside-pdsp-lidl'] }],
		evidence: [{ id: 'parkside-pdsp-lidl', sourceUrl: 'https://www.lidl.de/p/parkside-druckluft-sandstrahlpistole-pdsp-1000-e6/p100398458', sourceLabel: 'Lidl Allemagne, fiche officielle Parkside PDSP 1000 E6', sourceType: 'manufacturer', retrievedAt: '2026-07-16', confidence: 'B', notes: 'La consommation et la pression sont publiées comme valeurs maximales.' }],
		fieldSources: { airflowLpm: ['parkside-pdsp-lidl'], workingPressureBar: ['parkside-pdsp-lidl'], gtin: ['parkside-pdsp-lidl'] }, notes: ['Le profil associe les deux maxima pour éviter de sous-dimensionner le compresseur.'],
	};

export default product;
