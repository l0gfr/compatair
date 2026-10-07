import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-cn-70cl",
	"slug": "agrafeuse-cloueuse-apach-cn-70cl",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH CN-70CL",
	"brand": "APACH",
	"model": "CN-70CL",
	"mpn": "CN-70CL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-cn-70cl.svg",
		"alt": "Repères techniques : APACH CN-70CL",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-cn-70cl",
		"label": "Référence CN-70CL",
		"distinguishingAttributes": {
			"reference": "CN-70CL",
			"Masse déclarée": "7.6 kg",
			"Dimensions L × l × H": "370 x 148 x 400mm"
		}
	},
	"editorial": {
		"overview": "APACH CN-70CL. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 7.6 kg.",
			"Dimensions L × l × H : 370 x 148 x 400mm.",
			"Capacité de chargement déclarée : 225-300 nails.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 15° Flat Wire Collated Clinch Nails | Length: 1-3/4\"~2-1/4\"(45-57mm) | Shank Diameter :.090-.113\"(2.3-2.9 mm) | Shank Type : Smooth, Ring & Screw.",
			"Équipements et options déclarés : Well Protectors Equipped | Top Exhaust Cap Available."
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
			"value": "7.6 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "370 x 148 x 400mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "225-300 nails",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "15° Flat Wire Collated Clinch Nails | Length: 1-3/4\"~2-1/4\"(45-57mm) | Shank Diameter :.090-.113\"(2.3-2.9 mm) | Shank Type : Smooth, Ring & Screw",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Well Protectors Equipped | Top Exhaust Cap Available",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p35",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=35",
			"sourceLabel": "APACH, document technique officiel, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p35"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p35"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p35"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
