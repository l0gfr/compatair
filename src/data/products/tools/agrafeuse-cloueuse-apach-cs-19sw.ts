import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-cs-19sw",
	"slug": "agrafeuse-cloueuse-apach-cs-19sw",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH CS-19SW",
	"brand": "APACH",
	"model": "CS-19SW",
	"mpn": "CS-19SW",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-cs-19sw.svg",
		"alt": "Repères techniques : APACH CS-19SW",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-cs-19sw",
		"label": "Référence CS-19SW",
		"distinguishingAttributes": {
			"reference": "CS-19SW",
			"Type d’agrafe": "SW7437 strip",
			"Largeur de couronne": "34,5 mm"
		}
	},
	"editorial": {
		"overview": "APACH CS-19SW. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Type d’agrafe : SW7437 strip.",
			"Largeur de couronne : 34,5 mm.",
			"Longueurs d’agrafe : 15 et 18 mm.",
			"Section du fil : 1,9 × 0,9 mm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Aucune consommation utilisable n’est documentée pour cette référence ; aucun besoin par action ni débit n’est estimé.",
			"La masse et les dimensions du tableau de famille ne sont pas attribuées à cette configuration individuellement.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Type d’agrafe",
			"value": "SW7437 strip",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p36"
			]
		},
		{
			"label": "Largeur de couronne",
			"value": "34,5 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p36"
			]
		},
		{
			"label": "Longueurs d’agrafe",
			"value": "15 et 18 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p36"
			]
		},
		{
			"label": "Section du fil",
			"value": "1,9 × 0,9 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p36"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de consommation ni pression de mesure documenté dans ce tableau.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p36"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p36",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=36",
			"sourceLabel": "APACH, document technique officiel, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p36"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p36"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p36"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
