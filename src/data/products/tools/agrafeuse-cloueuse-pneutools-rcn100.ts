import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-pneutools-rcn100",
	"slug": "agrafeuse-cloueuse-pneutools-rcn100",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "PneuTools RCN100",
	"brand": "PneuTools",
	"model": "RCN100",
	"mpn": "RCN100",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.82633,
		"max": 8.273709
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-pneutools-rcn100.svg",
		"alt": "Repères techniques : PneuTools RCN100",
		"sourceUrl": "https://www.pneutools.net/product/rcn100",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutools-rcn100",
		"label": "Référence RCN100",
		"distinguishingAttributes": {
			"reference": "RCN100",
			"Longueur de fixation": "1\"",
			"Capacité du chargeur": "200"
		}
	},
	"editorial": {
		"overview": "PneuTools RCN100. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Longueur de fixation : 1\".",
			"Capacité du chargeur : 200.",
			"Pression de service publiée : 70-120 PSI.",
			"Réglage de profondeur : Oui.",
			"Type de gâchette : Séquentielle ou par contact.",
			"Crochet de ceinture : Oui.",
			"Masse, unité originale : 4.1lbs.",
			"Longueur, unité originale : 14.83″.",
			"Largeur, unité originale : 5.16″.",
			"Hauteur, unité originale : 9.39″."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La fiche propre au modèle documente sa plage de service et ses capacités ; aucun débit ni volume par action n’est publié dans ce tableau.",
			"La pression de service ne constitue pas un point de mesure de consommation.",
			"Les dimensions et masses restent dans les unités originales de la fiche fabricant ; aucune consommation d’un modèle voisin n’est transférée.",
			"Une conversion PSI vers bar, lorsqu’une plage PSI complète est donnée, est une conversion d’unité de la plage de service ; aucune pression de consommation n’est déduite.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Longueur de fixation",
			"value": "1\"",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "200",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		},
		{
			"label": "Pression de service publiée",
			"value": "70-120 PSI",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		},
		{
			"label": "Réglage de profondeur",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		},
		{
			"label": "Type de gâchette",
			"value": "Séquentielle ou par contact",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		},
		{
			"label": "Crochet de ceinture",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		},
		{
			"label": "Masse, unité originale",
			"value": "4.1lbs",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		},
		{
			"label": "Longueur, unité originale",
			"value": "14.83″",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		},
		{
			"label": "Largeur, unité originale",
			"value": "5.16″",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		},
		{
			"label": "Hauteur, unité originale",
			"value": "9.39″",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-120 PSI",
			"evidenceIds": [
				"october3d-tools-pneutools-product-00-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-pneutools-product-00-p1",
			"sourceUrl": "https://www.pneutools.net/product/rcn100",
			"sourceLabel": "PneuTools, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 c7b5d28f23aba7bcaf0c164c6263dfe0fcaa68d25c7763c0d4dc113d9feefbbc. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-pneutools-product-00-p1"
		],
		"workingPressureBar": [
			"october3d-tools-pneutools-product-00-p1"
		],
		"demandExplanation": [
			"october3d-tools-pneutools-product-00-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
