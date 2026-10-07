import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-cn-83-1",
	"slug": "agrafeuse-cloueuse-apach-cn-83-1",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH CN-83.1",
	"brand": "APACH",
	"model": "CN-83.1",
	"mpn": "CN-83.1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-cn-83-1.svg",
		"alt": "Repères techniques : APACH CN-83.1",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-cn-83-1",
		"label": "Référence CN-83.1",
		"distinguishingAttributes": {
			"reference": "CN-83.1",
			"Masse déclarée": "3.8 kg",
			"Dimensions L × l × H": "313 x 129 x 349mm"
		}
	},
	"editorial": {
		"overview": "APACH CN-83.1. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 3.8 kg.",
			"Dimensions L × l × H : 313 x 129 x 349mm.",
			"Capacité de chargement déclarée : 225 - 300 nails.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 15° Flat Wire Collated Nails | Length: 2 - 3 1/4\" (50 - 83mm) | Shank Diameter: .099 - .131\" (2.5 - 3.3mm) | Shank Type: Smooth, Ring & Screw.",
			"Équipements et options déclarés : Body Protectors Equipped | Adjustable Safety Yoke Available."
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
			"value": "3.8 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p5"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "313 x 129 x 349mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p5"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "225 - 300 nails",
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
			"value": "15° Flat Wire Collated Nails | Length: 2 - 3 1/4\" (50 - 83mm) | Shank Diameter: .099 - .131\" (2.5 - 3.3mm) | Shank Type: Smooth, Ring & Screw",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p5"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Body Protectors Equipped | Adjustable Safety Yoke Available",
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
