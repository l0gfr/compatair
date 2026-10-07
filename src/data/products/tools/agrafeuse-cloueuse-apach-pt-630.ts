import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-pt-630",
	"slug": "agrafeuse-cloueuse-apach-pt-630",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH PT-630",
	"brand": "APACH",
	"model": "PT-630",
	"mpn": "PT-630",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-pt-630.svg",
		"alt": "Repères techniques : APACH PT-630",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-pt-630",
		"label": "Référence PT-630",
		"distinguishingAttributes": {
			"reference": "PT-630",
			"Masse déclarée": "1.2 kg",
			"Dimensions L × l × H": "196 x 42 x 182mm"
		}
	},
	"editorial": {
		"overview": "APACH PT-630. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 1.2 kg.",
			"Dimensions L × l × H : 196 x 42 x 182mm.",
			"Capacité de chargement déclarée : 100 nails.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 23 GA Headless and Mini Head Pins | Length 12-30mm / 1/2- 1 3/16” | Shank Diameter:0.64mm/.025”.",
			"Équipements et options déclarés : Patented Adjustment-Free side loading magazine | Double trigger | Accepts both headless and mini head pins."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La consommation d’air n’est pas documentée dans le tableau propre à cette référence ; aucun volume par tir ni débit n’est estimé.",
			"Les pressions de service publiées ne sont pas des pressions de mesure d’une consommation.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Masse déclarée",
			"value": "1.2 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "196 x 42 x 182mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "100 nails",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "23 GA Headless and Mini Head Pins | Length 12-30mm / 1/2- 1 3/16” | Shank Diameter:0.64mm/.025”",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Patented Adjustment-Free side loading magazine | Double trigger | Accepts both headless and mini head pins",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p11",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=11",
			"sourceLabel": "APACH, document technique officiel, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p11"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p11"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p11"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
