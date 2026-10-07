import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-cn-65-1",
	"slug": "agrafeuse-cloueuse-apach-cn-65-1",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH CN-65.1",
	"brand": "APACH",
	"model": "CN-65.1",
	"mpn": "CN-65.1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-cn-65-1.svg",
		"alt": "Repères techniques : APACH CN-65.1",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-cn-65-1",
		"label": "Référence CN-65.1",
		"distinguishingAttributes": {
			"reference": "CN-65.1",
			"Masse déclarée": "2.82 kg",
			"Dimensions L × l × H": "302 x 129 x 308mm"
		}
	},
	"editorial": {
		"overview": "APACH CN-65.1. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 2.82 kg.",
			"Dimensions L × l × H : 302 x 129 x 308mm.",
			"Capacité de chargement déclarée : wire 225-300.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 15° Flat Wire Collated Nails | Length: 1 3/8\"-2 3/4\" (35 - 65mm) | Shank Diameter: .090 - .113\" (2.3 - 2.9mm) | Shank Type: Smooth, Ring & Screw.",
			"Équipements et options déclarés : Body Protectors Equipped | Top Exhaust Cap Available."
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
			"value": "2.82 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p4"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "302 x 129 x 308mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p4"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "wire 225-300",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p4"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p4"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "15° Flat Wire Collated Nails | Length: 1 3/8\"-2 3/4\" (35 - 65mm) | Shank Diameter: .090 - .113\" (2.3 - 2.9mm) | Shank Type: Smooth, Ring & Screw",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p4"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Body Protectors Equipped | Top Exhaust Cap Available",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p4",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=4",
			"sourceLabel": "APACH, document technique officiel, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p4"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p4"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p4"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
