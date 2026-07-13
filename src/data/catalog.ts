import { compressorSchema, toolProfileSchema, type Compressor, type ToolProfile } from '../domain/catalog';

const retrievedAt = '2026-07-13';

const rawCompressors: Compressor[] = [
	{
		id: 'einhell-tc-ac-240-50-10-of', slug: 'einhell-tc-ac-240-50-10-of', brand: 'Einhell', model: 'TC-AC 240/50/10 OF', mpn: '4010393',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 173 }, { pressureBar: 4, litersPerMinute: 107 }, { pressureBar: 7, litersPerMinute: 76 }], intakeFlowLpm: 240, dutyCycle: .25, oilType: 'oil-free', noiseDb: 77, confidence: 'A', status: 'active',
		evidence: [{ id: 'einhell-4010393-official', sourceUrl: 'https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }],
		notes: ['La puissance S3 annoncée est limitée à 25 %.'],
	},
	{
		id: 'einhell-te-ac-430-90-10', slug: 'einhell-te-ac-430-90-10', brand: 'Einhell', model: 'TE-AC 430/90/10', mpn: '4010800',
		tankLiters: 90, maxPressureBar: 10, fadCurve: [{ pressureBar: 0, litersPerMinute: 230 }, { pressureBar: 4, litersPerMinute: 210 }, { pressureBar: 7, litersPerMinute: 200 }], intakeFlowLpm: 430, dutyCycle: 1, oilType: 'oil', noiseDb: 73, confidence: 'A', status: 'active',
		evidence: [{ id: 'einhell-4010800-official', sourceUrl: 'https://www.einhell.fr/p/4010800-te-ac-430-90-10/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: [],
	},
	{
		id: 'einhell-te-ac-270-50-silent-plus', slug: 'einhell-te-ac-270-50-silent-plus', brand: 'Einhell', model: 'TE-AC 270/50 Silent Plus', mpn: '4020620',
		tankLiters: 50, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 204 }, { pressureBar: 4, litersPerMinute: 132 }, { pressureBar: 7, litersPerMinute: 93 }], intakeFlowLpm: 270, oilType: 'oil-free', noiseDb: 54, confidence: 'B', status: 'active',
		evidence: [{ id: 'einhell-2024-catalog-270', sourceUrl: 'https://www.einhell.fr/fileadmin/corporate-media/services/catalogues/pdf-en/einhell-services-catalogue-power-tools-2024-en.pdf', sourceLabel: 'Catalogue officiel Einhell 2024', sourceType: 'manufacturer', retrievedAt, confidence: 'B' }], notes: [],
	},
	{
		id: 'einhell-te-ac-135-24-silent-plus', slug: 'einhell-te-ac-135-24-silent-plus', brand: 'Einhell', model: 'TE-AC 135/24 Silent Plus', mpn: '4020610',
		tankLiters: 24, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 105 }, { pressureBar: 4, litersPerMinute: 73 }, { pressureBar: 7, litersPerMinute: 55 }], intakeFlowLpm: 135, dutyCycle: .5, oilType: 'oil-free', noiseDb: 57, confidence: 'B', status: 'active',
		evidence: [{ id: 'einhell-2024-catalog-135', sourceUrl: 'https://www.einhell.fr/fileadmin/corporate-media/services/catalogues/pdf-en/einhell-services-catalogue-power-tools-2024-en.pdf', sourceLabel: 'Catalogue officiel Einhell 2024', sourceType: 'manufacturer', retrievedAt, confidence: 'B' }], notes: [],
	},
	{
		id: 'einhell-tc-ac-190-of-set', slug: 'einhell-tc-ac-190-of-set', brand: 'Einhell', model: 'TC-AC 190 OF Set', mpn: '4020660',
		tankLiters: 0, maxPressureBar: 8, fadCurve: [{ pressureBar: 0, litersPerMinute: 165 }, { pressureBar: 4, litersPerMinute: 83 }], intakeFlowLpm: 190, oilType: 'oil-free', confidence: 'B', status: 'active',
		evidence: [{ id: 'einhell-4020660-official', sourceUrl: 'https://www.einhell.fr/p/4020660', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'B' }], notes: ['Aucune valeur publiée à 6,3 ou 7 bar dans la fiche consultée.'],
	},
	{
		id: 'metabo-basic-220-24-of-silent', slug: 'metabo-basic-220-24-of-silent', brand: 'Metabo', model: 'Basic 220-24 OF Silent', mpn: '601593000',
		tankLiters: 24, maxPressureBar: 8, fadCurve: [{ pressureBar: 6.4, litersPerMinute: 95 }], intakeFlowLpm: 220, oilType: 'oil-free', noiseDb: 60, confidence: 'A', status: 'active',
		evidence: [{ id: 'metabo-601593000-official', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/basic-220-24-of-silent-601593000-compresseur.html', sourceLabel: 'Metabo France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A', notes: 'Débit effectif annoncé à 80 % de la pression maximale.' }], notes: [],
	},
	{
		id: 'metabo-mega-350-100-w', slug: 'metabo-mega-350-100-w', brand: 'Metabo', model: 'Mega 350-100 W', mpn: '601538000',
		tankLiters: 90, maxPressureBar: 10, fadCurve: [{ pressureBar: 8, litersPerMinute: 220 }], intakeFlowLpm: 320, oilType: 'oil', noiseDb: 86, confidence: 'A', status: 'active',
		evidence: [{ id: 'metabo-601538000-official', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/mega-350-100-w-601538000-compresseur.html', sourceLabel: 'Metabo France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A', notes: 'Débit effectif annoncé à 80 % de la pression maximale.' }], notes: [],
	},
	{
		id: 'abac-atf-s-3-24', slug: 'abac-atf-s-3-24', brand: 'ABAC', model: 'ATF-S 3 24', mpn: '4116000868',
		tankLiters: 24, maxPressureBar: 10, fadCurve: [{ pressureBar: 10, litersPerMinute: 150 }], dutyCycle: 1, oilType: 'oil-free', noiseDb: 68, confidence: 'A', status: 'active',
		evidence: [{ id: 'abac-4116000868-official', sourceUrl: 'https://shop.abacaircompressors.com/en-US/products/4116000880/atf-s-3-50-10-230150-ce', sourceLabel: 'ABAC, catalogue produit officiel', sourceType: 'manufacturer', retrievedAt, confidence: 'A', notes: 'FAD annoncé à la pression maximale pour la variante 24 L.' }], notes: [],
	},
	{
		id: 'abac-atf-s-3-50', slug: 'abac-atf-s-3-50', brand: 'ABAC', model: 'ATF-S 3 50', mpn: '4116000874',
		tankLiters: 50, maxPressureBar: 10, fadCurve: [{ pressureBar: 10, litersPerMinute: 150 }], dutyCycle: 1, oilType: 'oil-free', noiseDb: 68, confidence: 'A', status: 'active',
		evidence: [{ id: 'abac-4116000874-official', sourceUrl: 'https://shop.abacaircompressors.com/nl-NL/products/4116000874/atf-s-3-50-10-230150-ce-uk', sourceLabel: 'ABAC, catalogue produit officiel', sourceType: 'manufacturer', retrievedAt, confidence: 'A', notes: 'FAD annoncé à la pression maximale.' }], notes: [],
	},
	{
		id: 'abac-pole-position-os20p', slug: 'abac-pole-position-os20p', brand: 'ABAC', model: 'Pole Position OS20P', mpn: '1129740297',
		tankLiters: 24, maxPressureBar: 9, fadCurve: [], intakeFlowLpm: 230, oilType: 'oil-free', noiseDb: 65, confidence: 'C', status: 'active',
		evidence: [{ id: 'abac-1129740297-official', sourceUrl: 'https://shop.abacaircompressors.com/fr-FR/products/1129740297/pole-position-os20p', sourceLabel: 'ABAC France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'C', notes: 'La fiche publie un volume engendré, pas un FAD à la pression de travail.' }], notes: ['Verdict suspendu tant qu’un débit restitué à la pression de travail n’est pas documenté.'],
	},
];

const rawTools: ToolProfile[] = [
	{
		id: 'einhell-tc-pe-150', slug: 'ponceuse-excentrique-einhell-tc-pe-150', category: 'Ponceuse pneumatique', label: 'Ponceuse excentrique Einhell TC-PE 150', brand: 'Einhell', model: 'TC-PE 150',
		workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 100, typical: 100, max: 100 }, dutyFactor: .8, usagePattern: 'continuous', connectorSize: 'Flexible intérieur 9 mm recommandé', confidence: 'A',
		evidence: [{ id: 'einhell-4133330-official', sourceUrl: 'https://www.einhell.fr/p/4133330-tc-pe-150/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: [],
	},
	{
		id: 'einhell-tc-pp-220', slug: 'meuleuse-droite-einhell-tc-pp-220', category: 'Meuleuse pneumatique', label: 'Meuleuse droite Einhell TC-PP 220', brand: 'Einhell', model: 'TC-PP 220',
		workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 128, typical: 128, max: 128 }, dutyFactor: .6, usagePattern: 'intermittent', confidence: 'A',
		evidence: [{ id: 'einhell-4138540-official', sourceUrl: 'https://www.einhell.fr/p/4138540-tc-pp-220/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: [],
	},
	{
		id: 'einhell-tc-pa-50', slug: 'meuleuse-angle-einhell-tc-pa-50', category: 'Meuleuse pneumatique', label: 'Meuleuse d’angle Einhell TC-PA 50', brand: 'Einhell', model: 'TC-PA 50',
		workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: 113, typical: 113, max: 113 }, dutyFactor: .6, usagePattern: 'intermittent', confidence: 'A',
		evidence: [{ id: 'einhell-4138550-official', sourceUrl: 'https://www.einhell.fr/p/4138550-tc-pa-50/', sourceLabel: 'Einhell France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: [],
	},
	{
		id: 'metabo-ssp-1000', slug: 'pistolet-sablage-metabo-ssp-1000', category: 'Pistolet de sablage', label: 'Pistolet de sablage Metabo SSP 1000', brand: 'Metabo', model: 'SSP 1000',
		workingPressureBar: { min: 7, typical: 7, max: 7 }, airflowLpm: { min: 300, typical: 300, max: 300 }, dutyFactor: .75, usagePattern: 'continuous', connectorSize: 'Raccord 1/4 pouce', confidence: 'A',
		evidence: [{ id: 'metabo-601569000-official', sourceUrl: 'https://fr.metabo.com/fr/machines/air-comprime/outils-a-air-comprime/pistolets-de-sablage-a-air-comprime/ssp-1000-601569000-pistolet-de-sablage-a-air-comprime.html', sourceLabel: 'Metabo France, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: [],
	},
	{
		id: 'metabo-bp-200', slug: 'soufflette-metabo-bp-200', category: 'Soufflette', label: 'Soufflette Metabo BP 200', brand: 'Metabo', model: 'BP 200',
		workingPressureBar: { min: 3, typical: 6, max: 8 }, airflowLpm: { min: 130, typical: 240, max: 350 }, dutyFactor: .25, usagePattern: 'burst', connectorSize: 'Raccord 1/4 pouce', confidence: 'A',
		evidence: [{ id: 'metabo-601581180-official', sourceUrl: 'https://www.metabo.com/ch/fr/machines/air-comprime/outils-a-air-comprime/soufflettes-a-air-comprime/bp-200-soufflette-a-air-comprime/601581180', sourceLabel: 'Metabo, fiche produit officielle', sourceType: 'manufacturer', retrievedAt, confidence: 'A' }], notes: ['Le débit dépend du réglage. Le calcul utilise 240 L/min par défaut.'],
	},
];

export const compressors = rawCompressors.map((item) => compressorSchema.parse(item));
export const tools = rawTools.map((item) => toolProfileSchema.parse(item));

export const getCompressor = (slug: string) => compressors.find((item) => item.slug === slug);
export const getTool = (slug: string) => tools.find((item) => item.slug === slug);

