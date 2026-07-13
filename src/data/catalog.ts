import { compressorSchema, toolProfileSchema, type Compressor, type ToolProfile } from '../domain/catalog';

const retrievedAt = '2026-07-13';

const rawCompressors: Compressor[] = [
	{
		id: 'einhell-tc-ac-240-50-10-of', slug: 'einhell-tc-ac-240-50-10-of', brand: 'Einhell', model: 'TC-AC 240/50/10 OF', mpn: '4010393',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 173 }, { pressureBar: 4, litersPerMinute: 107 }, { pressureBar: 7, litersPerMinute: 76 }], intakeFlowLpm: 240, dutyCycle: .25, oilType: 'oil-free', noiseDb: 77, confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-tc-ac-240-50-10-of.webp', alt: 'Compresseur Einhell TC-AC 240/50/10 OF', sourceUrl: 'https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Ce modèle sans huile associe une cuve de 50 litres à une pression maximale publiée de 10 bar. Sa fiche fournit trois points de débit restitué, ce qui permet de comparer le compresseur à un outil sans utiliser les 240 L/min aspirés.', verifiedFacts: ['Le débit publié passe de 173 L/min à 0 bar à 107 L/min à 4 bar, puis 76 L/min à 7 bar.', 'La fiche indique un fonctionnement S3 limité à 25 % et un niveau sonore publié de 77 dB.'], limitations: ['La durée exacte d’une phase de fonctionnement ne peut pas être déduite du seul pourcentage S3.', 'Aucun point de débit restitué n’est publié entre 7 et 10 bar.'] },
		evidence: [{ id: 'einhell-4010393-official', sourceUrl: 'https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }],
		notes: ['La puissance S3 annoncée est limitée à 25 %.'],
	},
	{
		id: 'einhell-te-ac-430-90-10', slug: 'einhell-te-ac-430-90-10', brand: 'Einhell', model: 'TE-AC 430/90/10', mpn: '4010800',
		tankLiters: 90, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 230 }, { pressureBar: 4, litersPerMinute: 210 }, { pressureBar: 7, litersPerMinute: 200 }], intakeFlowLpm: 430, dutyCycle: 1, oilType: 'oil', noiseDb: 73, confidence: 'A', status: 'active',
		image: { src: '/images/products/einhell-te-ac-430-90-10.webp', alt: 'Compresseur Einhell TE-AC 430/90/10', sourceUrl: 'https://www.einhell.fr/p/4010800-te-ac-430-90-10/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TE-AC 430/90/10 est un compresseur lubrifié de 90 litres. Sa courbe constructeur conserve 200 L/min à 7 bar, valeur directement exploitable pour les outils dont la pression de travail se situe dans la plage documentée.', verifiedFacts: ['Einhell publie 230 L/min à 0 bar, 210 L/min à 4 bar et 200 L/min à 7 bar.', 'La pression maximale annoncée est de 10 bar et le débit aspiré de 430 L/min.'], limitations: ['Les 430 L/min aspirés ne décrivent pas le débit disponible à l’outil.', 'La fiche consultée ne fournit pas de point de débit restitué au-delà de 7 bar.'] },
		evidence: [{ id: 'einhell-4010800-official', sourceUrl: 'https://www.einhell.fr/p/4010800-te-ac-430-90-10/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: [],
	},
	{
		id: 'einhell-te-ac-270-50-silent-plus', slug: 'einhell-te-ac-270-50-silent-plus', brand: 'Einhell', model: 'TE-AC 270/50 Silent Plus', mpn: '4020620',
		tankLiters: 50, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 204 }, { pressureBar: 4, litersPerMinute: 132 }, { pressureBar: 7, litersPerMinute: 93 }], intakeFlowLpm: 270, oilType: 'oil-free', noiseDb: 54, confidence: 'B', status: 'active',
		image: { src: '/images/products/einhell-te-ac-270-50-silent-plus.webp', alt: 'Compresseur Einhell TE-AC 270/50 Silent Plus', sourceUrl: 'https://www.einhell.fr/p/4020620-te-ac-270-50-silent-plus/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Cette référence sans huile dispose d’une cuve de 50 litres et d’une pression maximale publiée de 8 bar. Le catalogue officiel fournit trois points de débit, dont 93 L/min à 7 bar.', verifiedFacts: ['Le débit restitué publié est de 204 L/min à 0 bar, 132 L/min à 4 bar et 93 L/min à 7 bar.', 'Le catalogue annonce 270 L/min aspirés et 54 dB.'], limitations: ['La source utilisée est un catalogue officiel et non une courbe d’essai détaillée, d’où le niveau documentaire B.', 'Aucun débit restitué n’est documenté à 8 bar dans la source consultée.'] },
		evidence: [{ id: 'einhell-2024-catalog-270', sourceUrl: 'https://www.einhell.fr/fileadmin/corporate-media/services/catalogues/pdf-en/einhell-services-catalogue-power-tools-2024-en.pdf', sourceLabel: 'Catalogue officiel Einhell 2024', sourceType: 'manufacturer', retrievedAt, confidence: 'B' }], notes: [],
	},
	{
		id: 'einhell-te-ac-135-24-silent-plus', slug: 'einhell-te-ac-135-24-silent-plus', brand: 'Einhell', model: 'TE-AC 135/24 Silent Plus', mpn: '4020610',
		tankLiters: 24, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 105 }, { pressureBar: 4, litersPerMinute: 73 }, { pressureBar: 7, litersPerMinute: 55 }], intakeFlowLpm: 135, dutyCycle: .5, oilType: 'oil-free', noiseDb: 57, confidence: 'B', status: 'active',
		image: { src: '/images/products/einhell-te-ac-135-24-silent-plus.webp', alt: 'Compresseur Einhell TE-AC 135/24 Silent Plus', sourceUrl: 'https://www.einhell.fr/p/4020610-te-ac-135-24-silent-plus/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Ce compresseur sans huile de 24 litres est documenté jusqu’à 7 bar. À cette pression, le débit publié est de 55 L/min, très inférieur au débit aspiré de 135 L/min.', verifiedFacts: ['Le catalogue publie 105 L/min à 0 bar, 73 L/min à 4 bar et 55 L/min à 7 bar.', 'La pression maximale est de 8 bar et le cycle publié de 50 %.'], limitations: ['Le pourcentage de cycle ne suffit pas à calculer une autonomie pour un outil donné.', 'Le catalogue ne fournit pas de point de débit restitué à la pression maximale de 8 bar.'] },
		evidence: [{ id: 'einhell-2024-catalog-135', sourceUrl: 'https://www.einhell.fr/fileadmin/corporate-media/services/catalogues/pdf-en/einhell-services-catalogue-power-tools-2024-en.pdf', sourceLabel: 'Catalogue officiel Einhell 2024', sourceType: 'manufacturer', retrievedAt, confidence: 'B' }], notes: [],
	},
	{
		id: 'einhell-tc-ac-190-of-set', slug: 'einhell-tc-ac-190-of-set', brand: 'Einhell', model: 'TC-AC 190 OF Set', mpn: '4020660',
		tankLiters: 0, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 165 }, { pressureBar: 4, litersPerMinute: 83 }], intakeFlowLpm: 190, oilType: 'oil-free', confidence: 'B', status: 'active',
		image: { src: '/images/products/einhell-tc-ac-190-of-set.webp', alt: 'Compresseur Einhell TC-AC 190 OF Set', sourceUrl: 'https://www.einhell.fr/p/4020660-tc-ac-190-of-set/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'Le TC-AC 190 OF Set est un compresseur sans cuve et sans huile. Sa fiche documente le débit jusqu’à 4 bar, mais pas à 6,3 ou 7 bar, pressions courantes dans les fiches des outils étudiés.', verifiedFacts: ['Einhell publie 165 L/min à 0 bar et 83 L/min à 4 bar.', 'La pression maximale annoncée est de 8 bar et le débit aspiré de 190 L/min.'], limitations: ['CompatAir ne prolonge pas la courbe au-delà de 4 bar.', 'L’absence de cuve ne permet pas de déduire la tenue d’un usage continu sans débit restitué à la pression demandée.'] },
		evidence: [{ id: 'einhell-4020660-official', sourceUrl: 'https://www.einhell.fr/p/4020660', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'B' }], notes: ['Aucune valeur publiée à 6,3 ou 7 bar dans la fiche consultée.'],
	},
	{
		id: 'metabo-basic-220-24-of-silent', slug: 'metabo-basic-220-24-of-silent', brand: 'Metabo', model: 'Basic 220-24 OF Silent', mpn: '601593000',
		tankLiters: 24, maxPressureBar: 8, fadCurve: [{ pressureBar: 6.4, litersPerMinute: 95 }], intakeFlowLpm: 220, oilType: 'oil-free', noiseDb: 60, confidence: 'A', status: 'active',
		image: { src: '/images/products/metabo-basic-220-24-of-silent.webp', alt: 'Compresseur Metabo Basic 220-24 OF Silent', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/basic-220-24-of-silent-601593000-compresseur.html', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'Metabo publie pour ce compresseur sans huile un débit effectif de 95 L/min à 80 % de la pression maximale, soit 6,4 bar. Ce point est directement proche de la pression de 6,3 bar utilisée par plusieurs outils du catalogue.', verifiedFacts: ['La cuve contient 24 litres et la pression maximale annoncée est de 8 bar.', 'La fiche distingue 220 L/min aspirés du débit effectif de 95 L/min à 6,4 bar.'], limitations: ['Un seul point de débit effectif est publié, ce qui interdit de reconstituer une courbe complète.', 'Le niveau de 60 dB doit être lu selon l’indicateur acoustique précisé par la fiche constructeur.'] },
		evidence: [{ id: 'metabo-601593000-official', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/basic-220-24-of-silent-601593000-compresseur.html', sourceLabel: 'Metabo France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A', notes: 'Débit effectif annoncé à 80 % de la pression maximale.' }], notes: [],
	},
	{
		id: 'metabo-mega-350-100-w', slug: 'metabo-mega-350-100-w', brand: 'Metabo', model: 'Mega 350-100 W', mpn: '601538000',
		tankLiters: 90, maxPressureBar: 10, fadCurve: [{ pressureBar: 8, litersPerMinute: 220 }], intakeFlowLpm: 320, oilType: 'oil', noiseDb: 86, confidence: 'A', status: 'active',
		image: { src: '/images/products/metabo-mega-350-100-w.webp', alt: 'Compresseur Metabo Mega 350-100 W', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/mega-350-100-w-601538000-compresseur.html', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'Le Mega 350-100 W est un modèle lubrifié à cuve de 90 litres. Metabo publie 220 L/min effectifs à 80 % de la pression maximale, soit 8 bar.', verifiedFacts: ['La fiche distingue 320 L/min aspirés, 250 L/min de remplissage et 220 L/min effectifs.', 'La pression maximale est de 10 bar et le niveau sonore publié de 86 dB.'], limitations: ['La source ne fournit qu’un point de débit effectif à 8 bar.', 'Une interpolation vers une pression inférieure n’est pas effectuée faute de second point documenté.'] },
		evidence: [{ id: 'metabo-601538000-official', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/mega-350-100-w-601538000-compresseur.html', sourceLabel: 'Metabo France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A', notes: 'Débit effectif annoncé à 80 % de la pression maximale.' }], notes: [],
	},
	{
		id: 'abac-atf-s-3-24', slug: 'abac-atf-s-3-24', brand: 'ABAC', model: 'ATF-S 3 24', mpn: '4116000868',
		tankLiters: 24, maxPressureBar: 10, fadCurve: [{ pressureBar: 10, litersPerMinute: 150 }], dutyCycle: 1, oilType: 'oil-free', noiseDb: 68, confidence: 'A', status: 'active',
		image: { src: '/images/products/abac-atf-s-3-24.jpg', alt: 'Compresseur ABAC ATF-S 3 24', sourceUrl: 'https://shop.abacaircompressors.com/en-US/products/4116000868/atf-s-3-24-10-230150-ce', sourceLabel: 'Visuel officiel ABAC' },
		editorial: { overview: 'L’ATF-S 3 24 est un compresseur sans huile de 24 litres. ABAC publie un FAD de 150 L/min à la pression maximale de 10 bar et un cycle de service de 100 %.', verifiedFacts: ['Le débit restitué annoncé est de 150 L/min à 10 bar.', 'La fiche publie une cuve de 24 litres et un niveau sonore de 68 dB.'], limitations: ['La source consultée ne fournit pas de courbe à plusieurs pressions.', 'CompatAir ne majore pas le débit à 6,3 ou 7 bar sans valeur constructeur correspondante.'] },
		evidence: [{ id: 'abac-4116000868-official', sourceUrl: 'https://shop.abacaircompressors.com/en-US/products/4116000868/atf-s-3-24-10-230150-ce', sourceLabel: 'ABAC, catalogue produit officiel', sourceType: 'manufacturer', retrievedAt, confidence: 'A', notes: 'FAD annoncé à la pression maximale pour la variante 24 L.' }], notes: [],
	},
	{
		id: 'abac-atf-s-3-50', slug: 'abac-atf-s-3-50', brand: 'ABAC', model: 'ATF-S 3 50', mpn: '4116000874',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 10, litersPerMinute: 150 }], dutyCycle: 1, oilType: 'oil-free', noiseDb: 68, confidence: 'A', status: 'active',
		image: { src: '/images/products/abac-atf-s-3-50.jpg', alt: 'Compresseur ABAC ATF-S 3 50', sourceUrl: 'https://shop.abacaircompressors.com/nl-NL/products/4116000874/atf-s-3-50-10-230150-ce-uk', sourceLabel: 'Visuel officiel ABAC' },
		editorial: { overview: 'Cette variante ATF-S associe le même FAD publié de 150 L/min à 10 bar à une cuve de 50 litres. Le volume de stockage augmente par rapport à la version 24 litres, pas le débit restitué annoncé.', verifiedFacts: ['ABAC publie 150 L/min de FAD à 10 bar.', 'La cuve contient 50 litres, le cycle annoncé est de 100 % et le niveau sonore de 68 dB.'], limitations: ['La fiche ne publie qu’un point de FAD.', 'Le gain lié à la cuve ne peut pas être converti en durée d’usage sans pressions de coupure et profil de consommation.'] },
		evidence: [{ id: 'abac-4116000874-official', sourceUrl: 'https://shop.abacaircompressors.com/nl-NL/products/4116000874/atf-s-3-50-10-230150-ce-uk', sourceLabel: 'ABAC, catalogue produit officiel', sourceType: 'manufacturer', retrievedAt, confidence: 'A', notes: 'FAD annoncé à la pression maximale.' }], notes: [],
	},
	{
		id: 'abac-pole-position-os20p', slug: 'abac-pole-position-os20p', brand: 'ABAC', model: 'Pole Position OS20P', mpn: '1129740297',
		tankLiters: 24, maxPressureBar: 9, fadCurve: [], intakeFlowLpm: 230, oilType: 'oil-free', noiseDb: 65, confidence: 'C', status: 'active',
		image: { src: '/images/products/abac-pole-position-os20p.jpg', alt: 'Compresseur ABAC Pole Position OS20P', sourceUrl: 'https://shop.abacaircompressors.com/fr-FR/products/1129740297/pole-position-os20p', sourceLabel: 'Visuel officiel ABAC' },
		editorial: { overview: 'Le Pole Position OS20P est un compresseur sans huile de 24 litres. La fiche officielle consultée publie 230 L/min de volume engendré, mais aucun débit restitué à une pression de travail.', verifiedFacts: ['La pression maximale annoncée est de 9 bar et la cuve de 24 litres.', 'Le niveau sonore publié est de 65 dB.'], limitations: ['Les 230 L/min ne sont pas utilisés comme FAD.', 'Aucun verdict positif n’est produit tant qu’un débit restitué à la pression de l’outil n’est pas documenté.'] },
		evidence: [{ id: 'abac-1129740297-official', sourceUrl: 'https://shop.abacaircompressors.com/fr-FR/products/1129740297/pole-position-os20p', sourceLabel: 'ABAC France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'C', notes: 'La fiche publie un volume engendré, pas un FAD à la pression de travail.' }], notes: ['Verdict suspendu tant qu’un débit restitué à la pression de travail n’est pas documenté.'],
	},
];

const rawTools: ToolProfile[] = [
	{
		id: 'einhell-tc-pe-150', slug: 'ponceuse-excentrique-einhell-tc-pe-150', category: 'Ponceuse pneumatique', label: 'Ponceuse excentrique Einhell TC-PE 150', brand: 'Einhell', model: 'TC-PE 150',
		workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 100, typical: 100, max: 100 }, connectorSize: 'Flexible intérieur 9 mm recommandé', confidence: 'A',
		image: { src: '/images/products/einhell-tc-pe-150.webp', alt: 'Ponceuse excentrique pneumatique Einhell TC-PE 150', sourceUrl: 'https://www.einhell.fr/p/4133330-tc-pe-150/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'La TC-PE 150 est une ponceuse excentrique pneumatique dont la fiche officielle publie simultanément la pression, la consommation d’air et le diamètre intérieur minimal recommandé du flexible.', verifiedFacts: ['La consommation annoncée est de 100 L/min à 6,3 bar.', 'Einhell recommande un flexible d’au moins 9 mm de diamètre intérieur pour obtenir les meilleures performances.'], limitations: ['Ces valeurs ne décrivent pas la durée pendant laquelle l’utilisateur maintient l’outil en charge.', 'Le calcul de compatibilité ne tient pas compte de pertes de raccordement non documentées.'] },
		evidence: [{ id: 'einhell-4133330-official', sourceUrl: 'https://www.einhell.fr/p/4133330-tc-pe-150/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: [],
	},
	{
		id: 'einhell-tc-pp-220', slug: 'meuleuse-droite-einhell-tc-pp-220', category: 'Meuleuse pneumatique', label: 'Meuleuse droite Einhell TC-PP 220', brand: 'Einhell', model: 'TC-PP 220',
		workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 128, typical: 128, max: 128 }, confidence: 'A',
		image: { src: '/images/products/einhell-tc-pp-220.webp', alt: 'Meuleuse droite pneumatique Einhell TC-PP 220', sourceUrl: 'https://www.einhell.fr/p/4138540-tc-pp-220/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'La TC-PP 220 est une meuleuse droite pneumatique spécifiée pour une alimentation de 6,3 bar. Son besoin de 128 L/min doit être comparé au débit restitué du compresseur à cette pression.', verifiedFacts: ['La consommation d’air publiée est de 128 L/min.', 'La pression de service publiée est de 6,3 bar.'], limitations: ['La fiche utilisée ne documente pas un profil temporel de consommation exploitable par le calculateur.', 'Le raccordement reste à vérifier sur la notice ou l’équipement livré.'] },
		evidence: [{ id: 'einhell-4138540-official', sourceUrl: 'https://www.einhell.fr/p/4138540-tc-pp-220/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: [],
	},
	{
		id: 'einhell-tc-pa-50', slug: 'meuleuse-angle-einhell-tc-pa-50', category: 'Meuleuse pneumatique', label: 'Meuleuse d’angle Einhell TC-PA 50', brand: 'Einhell', model: 'TC-PA 50',
		workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 113, typical: 113, max: 113 }, confidence: 'A',
		image: { src: '/images/products/einhell-tc-pa-50.webp', alt: 'Meuleuse d’angle pneumatique Einhell TC-PA 50', sourceUrl: 'https://www.einhell.fr/p/4138550-tc-pa-50/', sourceLabel: 'Visuel officiel Einhell' },
		editorial: { overview: 'La TC-PA 50 est une meuleuse d’angle pneumatique documentée à 113 L/min sous 6,3 bar. La pression maximale du compresseur ne suffit pas à valider son alimentation.', verifiedFacts: ['Einhell publie une consommation de 113 L/min.', 'La pression de service publiée est de 6,3 bar.'], limitations: ['Aucun facteur d’utilisation n’est ajouté par CompatAir.', 'Les pertes du flexible et des raccords doivent être contrôlées séparément.'] },
		evidence: [{ id: 'einhell-4138550-official', sourceUrl: 'https://www.einhell.fr/p/4138550-tc-pa-50/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: [],
	},
	{
		id: 'metabo-ssp-1000', slug: 'pistolet-sablage-metabo-ssp-1000', category: 'Pistolet de sablage', label: 'Pistolet de sablage Metabo SSP 1000', brand: 'Metabo', model: 'SSP 1000',
		workingPressureBar: { min: 7, typical: 7, max: 7 }, airflowLpm: { min: 300, typical: 300, max: 300 }, connectorSize: 'Raccord 1/4 pouce', confidence: 'A',
		image: { src: '/images/products/metabo-ssp-1000.webp', alt: 'Pistolet de sablage pneumatique Metabo SSP 1000', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/outils-a-air-comprime/pistolets-de-sablage-a-air-comprime/ssp-1000-601569000-pistolet-de-sablage-a-air-comprime.html', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'Le SSP 1000 est le profil le plus exigeant du catalogue pilote en débit nominal. Metabo publie 300 L/min à 7 bar, ainsi qu’un raccord de 1/4 pouce.', verifiedFacts: ['La consommation d’air publiée est de 300 L/min.', 'La pression de service publiée est de 7 bar et le raccord de 1/4 pouce.'], limitations: ['Une grande cuve ne compense pas durablement un déficit entre 300 L/min demandés et le FAD du compresseur.', 'CompatAir ne calcule pas une durée de sablage intermittente sans profil d’usage et pressions de régulation.'] },
		evidence: [{ id: 'metabo-601569000-official', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/outils-a-air-comprime/pistolets-de-sablage-a-air-comprime/ssp-1000-601569000-pistolet-de-sablage-a-air-comprime.html', sourceLabel: 'Metabo France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: [],
	},
	{
		id: 'metabo-bp-200', slug: 'soufflette-metabo-bp-200', category: 'Soufflette', label: 'Soufflette Metabo BP 200', brand: 'Metabo', model: 'BP 200',
		workingPressureBar: { min: 3, typical: 6, max: 8 }, airflowLpm: { min: 130, typical: 240, max: 350 }, connectorSize: 'Raccord 1/4 pouce', confidence: 'A',
		image: { src: '/images/products/metabo-bp-200.webp', alt: 'Soufflette pneumatique Metabo BP 200', sourceUrl: 'https://www.metabo.com/ch/fr/machines/air-comprime/outils-a-air-comprime/soufflettes-a-air-comprime/bp-200-soufflette-a-air-comprime/601581180', sourceLabel: 'Visuel officiel Metabo' },
		editorial: { overview: 'La BP 200 est réglable, ce qui explique la plage de pression et de consommation publiée par Metabo. CompatAir retient le point médian documenté de 240 L/min à 6 bar pour la comparaison par défaut.', verifiedFacts: ['La plage publiée s’étend de 130 à 350 L/min et de 3 à 8 bar.', 'Le profil par défaut utilise 240 L/min à 6 bar et la fiche annonce un raccord de 1/4 pouce.'], limitations: ['Le débit réel dépend du réglage appliqué à l’outil.', 'Un résultat à 240 L/min ne décrit pas les extrêmes de 130 ou 350 L/min.'] },
		evidence: [{ id: 'metabo-601581180-official', sourceUrl: 'https://www.metabo.com/ch/fr/machines/air-comprime/outils-a-air-comprime/soufflettes-a-air-comprime/bp-200-soufflette-a-air-comprime/601581180', sourceLabel: 'Metabo, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: ['Le débit dépend du réglage. Le calcul utilise 240 L/min par défaut.'],
	},
];

export const compressors = rawCompressors.map((item) => compressorSchema.parse(item));
export const tools = rawTools.map((item) => toolProfileSchema.parse(item));

export const getCompressor = (slug: string) => compressors.find((item) => item.slug === slug);
export const getTool = (slug: string) => tools.find((item) => item.slug === slug);
