import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-b87c-114",
	"slug": "burineur-michigan-pneumatic-mp-b87c-114",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-B87C-114",
	"brand": "Michigan Pneumatic",
	"model": "MP-B87C-114",
	"mpn": "MP-B87C-114",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-b87c-114.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-B87C-114",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/2-Clay%20Diggers_Pavement-Breakers_Rock-Drills_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-b87c-114",
		"label": "Référence MP-B87C-114",
		"distinguishingAttributes": {
			"reference": "MP-B87C-114",
			"Masse publiée": "83 lbs",
			"Ligne technique constructeur": "MP-B87C-114 1-1/4\" Hex x 6\" 6-1/4\" 2-1/2\" 1200 26-1/2\" 83 lbs 3/4\" 3/4\" 80 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-B87C-114. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 83 lbs. Ligne technique constructeur : MP-B87C-114 1-1/4\" Hex x 6\" 6-1/4\" 2-1/2\" 1200 26-1/2\" 83 lbs 3/4\" 3/4\" 80 cfm.",
		"verifiedFacts": [
			"Masse publiée : 83 lbs.",
			"Ligne technique constructeur : MP-B87C-114 1-1/4\" Hex x 6\" 6-1/4\" 2-1/2\" 1200 26-1/2\" 83 lbs 3/4\" 3/4\" 80 cfm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Données du catalogue constructeur archivé ; consommation moyenne ou de régime non précisé, sans certification du besoin maximal en charge.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "83 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p5"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-B87C-114 1-1/4\" Hex x 6\" 6-1/4\" 2-1/2\" 1200 26-1/2\" 83 lbs 3/4\" 3/4\" 80 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p5"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "80 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-2-pdf-p5",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/2-Clay%20Diggers_Pavement-Breakers_Rock-Drills_v2.pdf#page=5",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 2, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0b2ca87443deae9dcee91a027835f636714c90bee64bce363e2c72c7ecd031bf. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-2-pdf-p5"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-2-pdf-p5"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-2-pdf-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
