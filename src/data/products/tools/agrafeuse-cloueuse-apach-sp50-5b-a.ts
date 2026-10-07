import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-sp50-5b-a",
	"slug": "agrafeuse-cloueuse-apach-sp50-5b-a",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH SP50-5B-A",
	"brand": "APACH",
	"model": "SP50-5B-A",
	"mpn": "SP50-5B-A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-sp50-5b-a.svg",
		"alt": "Repères techniques : APACH SP50-5B-A",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-sp50-5b-a",
		"label": "Référence SP50-5B-A",
		"distinguishingAttributes": {
			"reference": "SP50-5B-A",
			"Type d’agrafe": "SB 5019",
			"Largeur de couronne": "12,85 mm"
		}
	},
	"editorial": {
		"overview": "APACH SP50-5B-A. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Type d’agrafe : SB 5019.",
			"Largeur de couronne : 12,85 mm.",
			"Section du fil : 0,48 × 1,25 mm.",
			"Longueurs des branches : 6, 10, 12 et 15 mm.",
			"Capacité de chargement : 108 agrafes."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Aucune consommation utilisable n’est documentée pour cette référence ; aucun besoin par action ni débit n’est estimé.",
			"Les numéros d’agrafes 777/779/SB5019 ne sont pas des références supplémentaires d’outil.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Type d’agrafe",
			"value": "SB 5019",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p39"
			]
		},
		{
			"label": "Largeur de couronne",
			"value": "12,85 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p39"
			]
		},
		{
			"label": "Section du fil",
			"value": "0,48 × 1,25 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p39"
			]
		},
		{
			"label": "Longueurs des branches",
			"value": "6, 10, 12 et 15 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p39"
			]
		},
		{
			"label": "Capacité de chargement",
			"value": "108 agrafes",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p39"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de consommation ni pression de mesure documenté dans ce tableau.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p39"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p39",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=39",
			"sourceLabel": "APACH, document technique officiel, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p39"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p39"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p39"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
