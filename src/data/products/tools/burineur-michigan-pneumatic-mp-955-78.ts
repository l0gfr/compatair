import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-955-78",
	"slug": "burineur-michigan-pneumatic-mp-955-78",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-955-78",
	"brand": "Michigan Pneumatic",
	"model": "MP-955-78",
	"mpn": "MP-955-78",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-955-78.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-955-78",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/2-Clay%20Diggers_Pavement-Breakers_Rock-Drills_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-955-78",
		"label": "Référence MP-955-78",
		"distinguishingAttributes": {
			"reference": "MP-955-78",
			"Masse publiée": "28.5 lbs",
			"Ligne technique constructeur": "MP-955-78 7/8\" Hex x 3-1/4\" Sleeve 4-3/8\" 1-11/16\" 1850 21-3/4\" 28.5 lbs 3/8\" 1/2\" 47 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-955-78. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 28.5 lbs. Ligne technique constructeur : MP-955-78 7/8\" Hex x 3-1/4\" Sleeve 4-3/8\" 1-11/16\" 1850 21-3/4\" 28.5 lbs 3/8\" 1/2\" 47 cfm.",
		"verifiedFacts": [
			"Masse publiée : 28.5 lbs.",
			"Ligne technique constructeur : MP-955-78 7/8\" Hex x 3-1/4\" Sleeve 4-3/8\" 1-11/16\" 1850 21-3/4\" 28.5 lbs 3/8\" 1/2\" 47 cfm."
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
			"value": "28.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p2"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-955-78 7/8\" Hex x 3-1/4\" Sleeve 4-3/8\" 1-11/16\" 1850 21-3/4\" 28.5 lbs 3/8\" 1/2\" 47 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p2"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "47 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-2-pdf-p2",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/2-Clay%20Diggers_Pavement-Breakers_Rock-Drills_v2.pdf#page=2",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 2, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0b2ca87443deae9dcee91a027835f636714c90bee64bce363e2c72c7ecd031bf. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-2-pdf-p2"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-2-pdf-p2"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-2-pdf-p2"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
