const product = {
		id: 'einhell-tc-pn-50', slug: 'agrafeuse-cloueuse-einhell-tc-pn-50', category: 'Agrafeuse et cloueuse', label: 'Agrafeuse-cloueuse Einhell TC-PN 50', brand: 'Einhell', model: 'TC-PN 50', mpn: '4137790', ean: '4006825641387',
		demandModel: 'per-action', workingPressureBar: { min: 6.3, typical: 6.3, max: 8.3 }, airPerActionLiters: 0.66, actionLabel: 'tir', connectorSize: 'Flexible intérieur 9 mm recommandé', usagePattern: 'burst', lubricationRequirement: 'Lubrification régulière selon la notice', recommendedHose: { innerDiameterMm: 9 }, confidence: 'A',
		image: { src: '/images/products/einhell-tc-pn-50.webp', alt: 'Agrafeuse-cloueuse pneumatique Einhell TC-PN 50', sourceUrl: 'https://www.einhell.fr/p/4137790-tc-pn-50/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'La TC-PN 50 combine agrafage et clouage. Sa notice exprime le besoin en volume par action, environ 0,66 litre par tir, à 6,3 bar recommandés. Un débit en L/min ne peut être obtenu qu’en ajoutant un rythme de tir explicite.', verifiedFacts: ['La notice publie environ 0,66 litre d’air par tir, une pression recommandée de 6,3 bar et un maximum autorisé de 8,3 bar.', 'L’outil accepte des agrafes de 13 à 40 mm et des clous de 10 à 50 mm, avec un flexible intérieur recommandé de 9 mm.'], limitations: ['CompatAir ne transforme pas 0,66 litre par tir en L/min sans nombre de tirs par minute.', 'Le débit moyen calculé à partir de la cadence ne décrit pas la pointe instantanée au déclenchement.'] },
		evidence: [
			{ id: 'einhell-4137790-official', sourceUrl: 'https://www.einhell.fr/p/4137790-tc-pn-50/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-13', confidence: 'A' },
			{ id: 'einhell-4137790-manual', sourceUrl: 'https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_698oi8nul919b1objb9nq34k5m/4137790_11018_001_SPK9.pdf', sourceLabel: 'Einhell, notice TC-PN 50', sourceType: 'manual', retrievedAt: '2026-07-13', confidence: 'A', notes: 'Volume par tir, pression et flexible.' },
		],
		fieldSources: { airPerActionLiters: ['einhell-4137790-manual'], workingPressureBar: ['einhell-4137790-manual'], recommendedHose: ['einhell-4137790-manual'] }, notes: ['Profil par action, non injecté dans le calculateur de débit fixe.'],
	};

export default product;
