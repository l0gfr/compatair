const product = {
		id: 'einhell-te-ac-270-50-silent', slug: 'einhell-te-ac-270-50-silent', brand: 'Einhell', model: 'TE-AC 270/50 Silent', mpn: '4010451', ean: '4006825672398',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 175 }, { pressureBar: 4, litersPerMinute: 135 }, { pressureBar: 7, litersPerMinute: 98 }], intakeFlowLpm: 270, dutyCycle: .5, oilType: 'oil-free', noiseDb: 70, powerKw: 1.65, weightKg: 34.45, mobility: 'mobile', voltage: '220-240 V', phase: 'single-phase', confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-te-ac-270-50-silent.webp', alt: 'Compresseur Einhell TE-AC 270/50 Silent', sourceUrl: 'https://www.einhell.fr/p/4010451-te-ac-270-50-silent/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TE-AC 270/50 Silent est un modèle vertical sans huile de 50 litres. Malgré son nom et les 270 L/min aspirés, la valeur exploitable à 7 bar est de 98 L/min et le cycle S3 publié est de 50 %.', verifiedFacts: ['Einhell publie 175 L/min à 0 bar, 135 L/min à 4 bar et 98 L/min à 7 bar.', 'La fiche annonce 70 dB(A) de pression acoustique, 10 bar maximum et un cycle S3 de 50 %.'], limitations: ['Le qualificatif silencieux repose sur l’indicateur LpA publié par Einhell et ne doit pas être comparé à une valeur LwA.', 'Aucun débit restitué n’est documenté entre 7 et 10 bar.'] },
		evidence: [{ id: 'einhell-4010451-official', sourceUrl: 'https://www.einhell.fr/p/4010451-te-ac-270-50-silent/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }],
		fieldSources: { fadCurve: ['einhell-4010451-official'], ean: ['einhell-4010451-official'], dutyCycle: ['einhell-4010451-official'], noiseDb: ['einhell-4010451-official'] }, notes: ['Niveau sonore publié en LpA.'],
	};

export default product;
