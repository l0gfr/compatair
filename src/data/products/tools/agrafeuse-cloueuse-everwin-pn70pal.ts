import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-everwin-pn70pal",
	"slug": "agrafeuse-cloueuse-everwin-pn70pal",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "EVERWIN PN70PAL",
	"brand": "EVERWIN",
	"model": "PN70PAL",
	"mpn": "PN70PAL",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-everwin-pn70pal.svg",
		"alt": "Repères techniques : EVERWIN PN70PAL",
		"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "everwin-pn70pal",
		"label": "Référence PN70PAL",
		"distinguishingAttributes": {
			"reference": "PN70PAL",
			"Masse, cellule constructeur": "Weight 2.9 kgs (6.4 lbs)",
			"Hauteur, cellule constructeur": "Height 315 mm (12.5\")"
		}
	},
	"editorial": {
		"overview": "EVERWIN PN70PAL. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse, cellule constructeur : Weight 2.9 kgs (6.4 lbs).",
			"Hauteur, cellule constructeur : Height 315 mm (12.5\").",
			"Largeur, cellule constructeur : Width 112 mm (4.4\").",
			"Longueur, cellule constructeur : Length 306 mm (12\").",
			"Plage ou pression de service publiée : Operating Pressure 5~8 bar (70~120 psi).",
			"Type de fixation : 15° Wire Collated Nails.",
			"Capacité du chargeur publiée : 2000~3000.",
			"Longueur de fixation, cellule A : 45~70 mm (1-3/4\"~2-3/4\").",
			"Air Consumption L/cycle @90 psi, paired CFM lacks declared cadence : 1.7 (3.6 cfm)."
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
			"value": "Weight 2.9 kgs (6.4 lbs)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		},
		{
			"label": "Hauteur, cellule constructeur",
			"value": "Height 315 mm (12.5\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		},
		{
			"label": "Largeur, cellule constructeur",
			"value": "Width 112 mm (4.4\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		},
		{
			"label": "Longueur, cellule constructeur",
			"value": "Length 306 mm (12\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		},
		{
			"label": "Plage ou pression de service publiée",
			"value": "Operating Pressure 5~8 bar (70~120 psi)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		},
		{
			"label": "Type de fixation",
			"value": "15° Wire Collated Nails",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		},
		{
			"label": "Capacité du chargeur publiée",
			"value": "2000~3000",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		},
		{
			"label": "Longueur de fixation, cellule A",
			"value": "45~70 mm (1-3/4\"~2-3/4\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		},
		{
			"label": "Air Consumption L/cycle @90 psi, paired CFM lacks declared cadence",
			"value": "1.7 (3.6 cfm)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "1.7 L/cycle",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Consumption L/cycle @90 psi ; base de volume non précisée",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-everwin-extra-0-p13",
			"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf#page=13",
			"sourceLabel": "EVERWIN, document technique officiel, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 9c3ec0a7d7edcf8d78cfebc98e6838e694b1cbbec531d4140ad0dea7d2b9cb5c. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-everwin-extra-0-p13"
		],
		"workingPressureBar": [
			"october3d-tools-everwin-extra-0-p13"
		],
		"demandExplanation": [
			"october3d-tools-everwin-extra-0-p13"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
