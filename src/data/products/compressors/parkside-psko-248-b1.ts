const product = {
		id: 'parkside-psko-248-b1', slug: 'parkside-psko-248-b1', brand: 'Parkside', model: 'PSKO 248 B1', mpn: 'HG12899', gtin: '4052916964156', identifierAliases: [{ type: 'mpn', value: 'IAN 525254_2504', evidenceIds: ['parkside-psko-lidl', 'parkside-psko-manual'] }],
		tankLiters: 24, maxPressureBar: 8, fadCurve: [{ pressureBar: 1, litersPerMinute: 149 }, { pressureBar: 4, litersPerMinute: 117 }, { pressureBar: 7, litersPerMinute: 85 }], intakeFlowLpm: 178, oilType: 'oil-free', noiseDb: 71.9, powerKw: 1.1, weightKg: 18.8, mobility: 'mobile', voltage: '220–240 V / 50 Hz', phase: 'single-phase', confidence: 'A', status: 'active',
		image: { src: '/images/products/parkside-psko-248-b1.webp', alt: 'Compresseur silencieux Parkside PSKO 248 B1', sourceUrl: 'https://www.lidl.fr/p/parkside-compresseur-silencieux-psko-248-b1-8-bar-24-l-1100-w/p100398873', sourceLabel: 'Visuel officiel Lidl Parkside' },
		editorial: { overview: 'Le Parkside PSKO 248 B1 est un compresseur silencieux sans huile de 24 litres. Lidl et la notice publient trois débits effectifs entre 1 et 7 bar.', verifiedFacts: ['Le débit effectif publié est de 149 L/min à 1 bar, 117 L/min à 4 bar et 85 L/min à 7 bar.', 'La fiche indique 8 bar maximum, 1 100 W, 18,8 kg et 71,9 dB(A) de pression acoustique.'], limitations: ['Aucun débit effectif n’est publié à 8 bar.', 'Le débit aspiré de 178 L/min ne doit pas être employé à la place des trois mesures effectives.'] },
		specifications: [{ label: 'Puissance acoustique', value: '83 dB(A) LwA sur la fiche Lidl', evidenceIds: ['parkside-psko-lidl'] }],
		evidence: [
			{ id: 'parkside-psko-lidl', sourceUrl: 'https://www.lidl.fr/p/parkside-compresseur-silencieux-psko-248-b1-8-bar-24-l-1100-w/p100398873', sourceLabel: 'Lidl France, fiche officielle Parkside PSKO 248 B1', sourceType: 'manufacturer', retrievedAt: '2026-07-16', confidence: 'A' },
			{ id: 'parkside-psko-manual', sourceUrl: 'https://manuals.sit-connect.com/public/articlemanual/bb5c7c29-2231-4e4d-bcc9-6dc70716ac20.pdf', sourceLabel: 'Parkside, notice PSKO 248 B1 IAN 525254_2504', sourceType: 'manual', retrievedAt: '2026-07-16', confidence: 'A' },
		],
		fieldSources: { fadCurve: ['parkside-psko-lidl', 'parkside-psko-manual'], gtin: ['parkside-psko-lidl'], noiseDb: ['parkside-psko-lidl', 'parkside-psko-manual'], maxPressureBar: ['parkside-psko-lidl', 'parkside-psko-manual'] }, notes: ['noiseDb correspond à la pression acoustique LpA.'],
	};

export default product;
