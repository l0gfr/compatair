import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-everwin-fn1665",
	"slug": "agrafeuse-cloueuse-everwin-fn1665",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "EVERWIN FN1665",
	"brand": "EVERWIN",
	"model": "FN1665",
	"mpn": "FN1665",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-everwin-fn1665.svg",
		"alt": "Repères techniques : EVERWIN FN1665",
		"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "everwin-fn1665",
		"label": "Référence FN1665",
		"distinguishingAttributes": {
			"reference": "FN1665",
			"Masse, cellule constructeur": "Weight 1.8 kgs (4 lbs)",
			"Hauteur, cellule constructeur": "Height 285 mm (11.22\")"
		}
	},
	"editorial": {
		"overview": "EVERWIN FN1665. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse, cellule constructeur : Weight 1.8 kgs (4 lbs).",
			"Hauteur, cellule constructeur : Height 285 mm (11.22\").",
			"Largeur, cellule constructeur : Width 75 mm (2.95\").",
			"Longueur, cellule constructeur : Length 298 mm (11.73\").",
			"Plage ou pression de service publiée : Operating Pressure 5~8 bar (70~120 psi).",
			"Air Consumption L/cycle @90 psi, paired CFM lacks declared cadence : 1.03 (2.18 cfm)."
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
			"value": "Weight 1.8 kgs (4 lbs)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p37"
			]
		},
		{
			"label": "Hauteur, cellule constructeur",
			"value": "Height 285 mm (11.22\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p37"
			]
		},
		{
			"label": "Largeur, cellule constructeur",
			"value": "Width 75 mm (2.95\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p37"
			]
		},
		{
			"label": "Longueur, cellule constructeur",
			"value": "Length 298 mm (11.73\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p37"
			]
		},
		{
			"label": "Plage ou pression de service publiée",
			"value": "Operating Pressure 5~8 bar (70~120 psi)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p37"
			]
		},
		{
			"label": "Air Consumption L/cycle @90 psi, paired CFM lacks declared cadence",
			"value": "1.03 (2.18 cfm)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p37"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "1.03 L/cycle",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p37"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Consumption L/cycle @90 psi ; base de volume non précisée",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p37"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-everwin-extra-0-p37",
			"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf#page=37",
			"sourceLabel": "EVERWIN, document technique officiel, page PDF 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 9c3ec0a7d7edcf8d78cfebc98e6838e694b1cbbec531d4140ad0dea7d2b9cb5c. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-everwin-extra-0-p37"
		],
		"workingPressureBar": [
			"october3d-tools-everwin-extra-0-p37"
		],
		"demandExplanation": [
			"october3d-tools-everwin-extra-0-p37"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
