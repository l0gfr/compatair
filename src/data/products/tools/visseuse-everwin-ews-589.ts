import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-everwin-ews-589",
	"slug": "visseuse-everwin-ews-589",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "EVERWIN EWS-589",
	"brand": "EVERWIN",
	"model": "EWS-589",
	"mpn": "EWS-589",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"max": 6.2
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-everwin-ews-589.svg",
		"alt": "Repères techniques : EVERWIN EWS-589",
		"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "everwin-ews-589",
		"label": "Référence EWS-589",
		"distinguishingAttributes": {
			"reference": "EWS-589",
			"Masse, cellule constructeur": "Weight 1.0 kg (2.2 lbs)",
			"Hauteur, cellule constructeur": "Height 164 mm (6.5\")"
		}
	},
	"editorial": {
		"overview": "EVERWIN EWS-589. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse, cellule constructeur : Weight 1.0 kg (2.2 lbs).",
			"Hauteur, cellule constructeur : Height 164 mm (6.5\").",
			"Largeur, cellule constructeur : Width 58 mm (2.3\").",
			"Longueur, cellule constructeur : Length 153 mm (6.0\").",
			"Plage ou pression de service publiée : Operating Pressure 6.2 bars (90 PSI)."
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
				"october3d-tools-everwin-extra-0-p71"
			]
		},
		{
			"label": "Hauteur, cellule constructeur",
			"value": "Height 164 mm (6.5\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p71"
			]
		},
		{
			"label": "Largeur, cellule constructeur",
			"value": "Width 58 mm (2.3\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p71"
			]
		},
		{
			"label": "Longueur, cellule constructeur",
			"value": "Length 153 mm (6.0\")",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p71"
			]
		},
		{
			"label": "Plage ou pression de service publiée",
			"value": "Operating Pressure 6.2 bars (90 PSI)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p71"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure 6.2 bars (90 PSI)",
			"evidenceIds": [
				"october3d-tools-everwin-extra-0-p71"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-everwin-extra-0-p71",
			"sourceUrl": "https://www.everwinpneumatic.com/files/catalog/EVERWIN_catalog-20250822.pdf#page=71",
			"sourceLabel": "EVERWIN, document technique officiel, page PDF 71",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 9c3ec0a7d7edcf8d78cfebc98e6838e694b1cbbec531d4140ad0dea7d2b9cb5c. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-everwin-extra-0-p71"
		],
		"workingPressureBar": [
			"october3d-tools-everwin-extra-0-p71"
		],
		"demandExplanation": [
			"october3d-tools-everwin-extra-0-p71"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
