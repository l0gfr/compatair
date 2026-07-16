const product = {
		id: 'prodif-sil750v', slug: 'prodif-sil750v', brand: 'Prodif', model: 'SIL750V', mpn: 'SIL750V', ean: '3373270013887',
		tankLiters: 50, maxPressureBar: 8, fadCurve: [], intakeFlowLpm: 210, oilType: 'oil-free', noiseDb: 63, powerKw: 1.5, weightKg: 35, mobility: 'mobile', voltage: '230 V', phase: 'single-phase', confidence: 'B', status: 'active',
		image: { src: '/images/products/prodif-sil750v.webp', alt: 'Compresseur silencieux Prodif SIL750V', sourceUrl: 'https://prodif.com/wp-content/uploads/2024/02/PROD_Fiche-Pack-SIL750V-V3MD.pdf', sourceLabel: 'Visuel de la fiche officielle Prodif' },
		editorial: { overview: 'Le Prodif SIL750V est un compresseur vertical silencieux de 50 litres. La fiche V3 annonce 135 L/min restitués sans pression de mesure ; cette valeur reste informative et n’alimente pas la courbe FAD.', verifiedFacts: ['Prodif publie 210 L/min aspirés, 8 bar maximum, 35 kg et une cuve de 50 litres.', 'Le niveau sonore annoncé est de 63 dB à 7 mètres.'], limitations: ['La pression associée aux 135 L/min restitués n’est pas fournie : le dimensionnement reste en données insuffisantes.', 'Le niveau de 63 dB est mesuré à 7 mètres et n’est pas directement comparable à une LpA au poste de travail.'] },
		specifications: [{ label: 'Débit restitué annoncé', value: '135 L/min, pression de mesure non précisée', evidenceIds: ['prodif-sil750v-v3'] }, { label: 'Vitesse moteur', value: '2 850 tr/min', evidenceIds: ['prodif-sil750v-v3'] }],
		evidence: [
			{ id: 'prodif-sil750v-v3', sourceUrl: 'https://prodif.com/wp-content/uploads/2024/02/PROD_Fiche-Pack-SIL750V-V3MD.pdf', sourceLabel: 'Prodif, fiche SIL750V V3', sourceType: 'manufacturer', retrievedAt: '2026-07-16', confidence: 'A' },
			{ id: 'prodif-sil750v-merchant', sourceUrl: 'https://www.leroymerlin.fr/produits/compresseur-50l-2cv-8-bars-sans-huile-sil750v-prodif-91651543.html', sourceLabel: 'Leroy Merlin, fiche SIL750V sans huile', sourceType: 'merchant', retrievedAt: '2026-07-16', confidence: 'B', notes: 'Source secondaire pour le type sans huile.' },
		],
		fieldSources: { fadCurve: ['prodif-sil750v-v3'], ean: ['prodif-sil750v-v3'], noiseDb: ['prodif-sil750v-v3'], maxPressureBar: ['prodif-sil750v-v3'] }, notes: ['noiseDb correspond à la mesure publiée à 7 mètres.', 'La fiche V3 actuelle est retenue face aux valeurs divergentes de documents plus anciens.'],
	};

export default product;
