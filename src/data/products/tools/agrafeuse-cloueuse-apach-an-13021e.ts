import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-an-13021e",
	"slug": "agrafeuse-cloueuse-apach-an-13021e",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH AN-13021E",
	"brand": "APACH",
	"model": "AN-13021E",
	"mpn": "AN-13021E",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-an-13021e.svg",
		"alt": "Repères techniques : APACH AN-13021E",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-an-13021e",
		"label": "Référence AN-13021E",
		"distinguishingAttributes": {
			"reference": "AN-13021E",
			"Masse déclarée": "5.4 kg",
			"Dimensions L × l × H": "452 x 188 x 588mm"
		}
	},
	"editorial": {
		"overview": "APACH AN-13021E. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 5.4 kg.",
			"Dimensions L × l × H : 452 x 188 x 588mm.",
			"Capacité de chargement déclarée : 50 nails.",
			"Pression de service, unité imprimée : 6 - 8 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 21° Full Head Plastic Collated Strip Nails | .131 - .165\" / 3.33 - 4.19mm.",
			"Équipements et options déclarés : 360° Adjustable Exhaust Deflector with Noise Reducer | Depth-of-Drive Adjustable | Aggressive Toe-Nailing Teeth for Slip-Free Grip when Fastening | Sequential Fire Trigger | Dry-Fire Lock."
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
			"value": "5.4 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p10"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "452 x 188 x 588mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p10"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "50 nails",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p10"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "6 - 8 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p10"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "21° Full Head Plastic Collated Strip Nails | .131 - .165\" / 3.33 - 4.19mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p10"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "360° Adjustable Exhaust Deflector with Noise Reducer | Depth-of-Drive Adjustable | Aggressive Toe-Nailing Teeth for Slip-Free Grip when Fastening | Sequential Fire Trigger | Dry-Fire Lock",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p10"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 6 - 8 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p10",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=10",
			"sourceLabel": "APACH, document technique officiel, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p10"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p10"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p10"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
