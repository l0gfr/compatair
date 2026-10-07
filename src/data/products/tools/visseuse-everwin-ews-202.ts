import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-everwin-ews-202",
	"slug": "visseuse-everwin-ews-202",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "EVERWIN EWS-202",
	"brand": "EVERWIN",
	"model": "EWS-202",
	"mpn": "EWS-202",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"max": 6.2
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-everwin-ews-202.svg",
		"alt": "Repères techniques : EVERWIN EWS-202",
		"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "everwin-ews-202",
		"label": "Référence EWS-202",
		"distinguishingAttributes": {
			"reference": "EWS-202",
			"Masse, cellule constructeur": "Weight 1.0 kg (2.2 lbs)",
			"Hauteur, cellule constructeur": "Height 156 mm (6.1\")"
		}
	},
	"editorial": {
		"overview": "EVERWIN EWS-202. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse, cellule constructeur : Weight 1.0 kg (2.2 lbs).",
			"Hauteur, cellule constructeur : Height 156 mm (6.1\").",
			"Largeur, cellule constructeur : Width 43 mm (1.7\").",
			"Longueur, cellule constructeur : Length 181 mm (7.1\").",
			"Plage ou pression de service publiée : Operating Pressure 6.2 bars (90 PSI).",
			"Avg. Air Consumption : 4 CFM (113 L/min)."
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
			"value": "Weight 1.0 kg (2.2 lbs)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p72"
			]
		},
		{
			"label": "Hauteur, cellule constructeur",
			"value": "Height 156 mm (6.1\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p72"
			]
		},
		{
			"label": "Largeur, cellule constructeur",
			"value": "Width 43 mm (1.7\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p72"
			]
		},
		{
			"label": "Longueur, cellule constructeur",
			"value": "Length 181 mm (7.1\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p72"
			]
		},
		{
			"label": "Plage ou pression de service publiée",
			"value": "Operating Pressure 6.2 bars (90 PSI)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p72"
			]
		},
		{
			"label": "Avg. Air Consumption",
			"value": "4 CFM (113 L/min)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p72"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p72"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure 6.2 bars (90 PSI)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p72"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-everwin-extra-0-p72",
			"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf#page=72",
			"sourceLabel": "EVERWIN, document technique officiel, page PDF 72",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 9c3ec0a7d7edcf8d78cfebc98e6838e694b1cbbec531d4140ad0dea7d2b9cb5c. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-everwin-extra-0-p72"
		],
		"workingPressureBar": [
			"october3d-tools-everwin-extra-0-p72"
		],
		"demandExplanation": [
			"october3d-tools-everwin-extra-0-p72"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
