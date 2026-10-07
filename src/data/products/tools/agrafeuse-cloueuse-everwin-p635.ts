import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-everwin-p635",
	"slug": "agrafeuse-cloueuse-everwin-p635",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "EVERWIN P635",
	"brand": "EVERWIN",
	"model": "P635",
	"mpn": "P635",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 7.6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-everwin-p635.svg",
		"alt": "Repères techniques : EVERWIN P635",
		"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "everwin-p635",
		"label": "Référence P635",
		"distinguishingAttributes": {
			"reference": "P635",
			"Masse, cellule constructeur": "Weight 0.8 kgs (1.8 lbs)",
			"Hauteur, cellule constructeur": "Height 176 mm (6.9\")"
		}
	},
	"editorial": {
		"overview": "EVERWIN P635. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse, cellule constructeur : Weight 0.8 kgs (1.8 lbs).",
			"Hauteur, cellule constructeur : Height 176 mm (6.9\").",
			"Largeur, cellule constructeur : Width 35 mm (1.4\").",
			"Longueur, cellule constructeur : Length 196 mm (7.7\").",
			"Plage ou pression de service publiée : Operating Pressure 5~7.6 bar (70~110 psi).",
			"Type de fixation : 23 GA. Headless & Micro-head Pins.",
			"Capacité du chargeur publiée : 120.",
			"Longueur de fixation, cellule A : 13~35 mm (1/2\"~1-3/8\").",
			"Air Consumption L/cycle @90 psi, paired CFM lacks declared cadence : 0.3 (0.6 cfm)."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Les capacités et dimensions viennent du tableau propre au modèle, localisé par page PDF et côté ; les versions de gâchette ne multiplient pas les références.",
			"La consommation par cycle, lorsqu’elle est publiée, ne précise pas ici une base d’air libre ou normalisée ; le CFM voisin n’a pas de cadence annoncée dans ce catalogue.",
			"La plage de service est indépendante du point de consommation ; aucune moyenne n’est assimilée au débit en charge.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Masse, cellule constructeur",
			"value": "Weight 0.8 kgs (1.8 lbs)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		},
		{
			"label": "Hauteur, cellule constructeur",
			"value": "Height 176 mm (6.9\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		},
		{
			"label": "Largeur, cellule constructeur",
			"value": "Width 35 mm (1.4\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		},
		{
			"label": "Longueur, cellule constructeur",
			"value": "Length 196 mm (7.7\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		},
		{
			"label": "Plage ou pression de service publiée",
			"value": "Operating Pressure 5~7.6 bar (70~110 psi)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		},
		{
			"label": "Type de fixation",
			"value": "23 GA. Headless & Micro-head Pins",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		},
		{
			"label": "Capacité du chargeur publiée",
			"value": "120",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		},
		{
			"label": "Longueur de fixation, cellule A",
			"value": "13~35 mm (1/2\"~1-3/8\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		},
		{
			"label": "Air Consumption L/cycle @90 psi, paired CFM lacks declared cadence",
			"value": "0.3 (0.6 cfm)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.3 L/cycle",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Consumption L/cycle @90 psi ; base de volume non précisée",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p38"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-everwin-extra-0-p38",
			"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf#page=38",
			"sourceLabel": "EVERWIN, document technique officiel, page PDF 38",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 9c3ec0a7d7edcf8d78cfebc98e6838e694b1cbbec531d4140ad0dea7d2b9cb5c. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-everwin-extra-0-p38"
		],
		"workingPressureBar": [
			"october3d-tools-everwin-extra-0-p38"
		],
		"demandExplanation": [
			"october3d-tools-everwin-extra-0-p38"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
