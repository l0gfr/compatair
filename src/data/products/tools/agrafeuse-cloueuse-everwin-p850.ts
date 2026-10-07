import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-everwin-p850",
	"slug": "agrafeuse-cloueuse-everwin-p850",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "EVERWIN P850",
	"brand": "EVERWIN",
	"model": "P850",
	"mpn": "P850",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 7.6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-everwin-p850.svg",
		"alt": "Repères techniques : EVERWIN P850",
		"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "everwin-p850",
		"label": "Référence P850",
		"distinguishingAttributes": {
			"reference": "P850",
			"Masse, cellule constructeur": "Weight 1.4 kgs (3.1 lbs)",
			"Hauteur, cellule constructeur": "Height 226 mm (8.9\")"
		}
	},
	"editorial": {
		"overview": "EVERWIN P850. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse, cellule constructeur : Weight 1.4 kgs (3.1 lbs).",
			"Hauteur, cellule constructeur : Height 226 mm (8.9\").",
			"Largeur, cellule constructeur : Width 47 mm (1.8\").",
			"Longueur, cellule constructeur : Length 260 mm (10.2\").",
			"Plage ou pression de service publiée : Operating Pressure 5~7.6 bar (70~110 psi).",
			"Type de fixation : 21 GA. Headless & Micro-head Pins.",
			"Capacité du chargeur publiée : 100.",
			"Longueur de fixation, cellule A : 16~50 mm (5/8\"~2\").",
			"Air Consumption L/cycle @90 psi, paired CFM lacks declared cadence : 0.5 (1.1 cfm)."
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
			"value": "Weight 1.4 kgs (3.1 lbs)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		},
		{
			"label": "Hauteur, cellule constructeur",
			"value": "Height 226 mm (8.9\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		},
		{
			"label": "Largeur, cellule constructeur",
			"value": "Width 47 mm (1.8\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		},
		{
			"label": "Longueur, cellule constructeur",
			"value": "Length 260 mm (10.2\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		},
		{
			"label": "Plage ou pression de service publiée",
			"value": "Operating Pressure 5~7.6 bar (70~110 psi)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		},
		{
			"label": "Type de fixation",
			"value": "21 GA. Headless & Micro-head Pins",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		},
		{
			"label": "Capacité du chargeur publiée",
			"value": "100",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		},
		{
			"label": "Longueur de fixation, cellule A",
			"value": "16~50 mm (5/8\"~2\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		},
		{
			"label": "Air Consumption L/cycle @90 psi, paired CFM lacks declared cadence",
			"value": "0.5 (1.1 cfm)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.5 L/cycle",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Consumption L/cycle @90 psi ; base de volume non précisée",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p39"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-everwin-extra-0-p39",
			"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf#page=39",
			"sourceLabel": "EVERWIN, document technique officiel, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 9c3ec0a7d7edcf8d78cfebc98e6838e694b1cbbec531d4140ad0dea7d2b9cb5c. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-everwin-extra-0-p39"
		],
		"workingPressureBar": [
			"october3d-tools-everwin-extra-0-p39"
		],
		"demandExplanation": [
			"october3d-tools-everwin-extra-0-p39"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
