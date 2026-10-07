import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-cn-70e",
	"slug": "agrafeuse-cloueuse-apach-cn-70e",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH CN-70E",
	"brand": "APACH",
	"model": "CN-70E",
	"mpn": "CN-70E",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-cn-70e.svg",
		"alt": "Repères techniques : APACH CN-70E",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-cn-70e",
		"label": "Référence CN-70E",
		"distinguishingAttributes": {
			"reference": "CN-70E",
			"Masse déclarée": "3.62 kg",
			"Dimensions L × l × H": "320 x 125 x 318mm"
		}
	},
	"editorial": {
		"overview": "APACH CN-70E. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 3.62 kg.",
			"Dimensions L × l × H : 320 x 125 x 318mm.",
			"Capacité de chargement déclarée : 225 - 300 Nails.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 15° Flat Wire Collated Nails | Length: 1 3/4\" - 2 3/4\" (45 - 70mm) | Shank Diameter: .090 - .113\" (2.3 - 2.9mm) | Shank Type: Smooth, Ring & Screw.",
			"Équipements et options déclarés : Body Protectors Equipped | Nail Punchers for Pallet Recycling Available | Top Exhaust Cap Available."
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
			"value": "3.62 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p5"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "320 x 125 x 318mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p5"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "225 - 300 Nails",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p5"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p5"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "15° Flat Wire Collated Nails | Length: 1 3/4\" - 2 3/4\" (45 - 70mm) | Shank Diameter: .090 - .113\" (2.3 - 2.9mm) | Shank Type: Smooth, Ring & Screw",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p5"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Body Protectors Equipped | Nail Punchers for Pallet Recycling Available | Top Exhaust Cap Available",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p5",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=5",
			"sourceLabel": "APACH, document technique officiel, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p5"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p5"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p5"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
