import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-michigan-pneumatic-mp-232a-1414",
	"slug": "perceuse-michigan-pneumatic-mp-232a-1414",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Michigan Pneumatic MP-232A-1414",
	"brand": "Michigan Pneumatic",
	"model": "MP-232A-1414",
	"mpn": "MP-232A-1414",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-michigan-pneumatic-mp-232a-1414.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-232A-1414",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/2-Clay%20Diggers_Pavement-Breakers_Rock-Drills_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-232a-1414",
		"label": "Référence MP-232A-1414",
		"distinguishingAttributes": {
			"reference": "MP-232A-1414",
			"Masse publiée": "58 lbs",
			"Ligne technique constructeur": "MP-232A-1414 1\" Hex x 4-1/4\" 2\" 2-5/8\" 2100 23\" 58 lbs 3/4\" 3/4\" 102 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-232A-1414. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 58 lbs. Ligne technique constructeur : MP-232A-1414 1\" Hex x 4-1/4\" 2\" 2-5/8\" 2100 23\" 58 lbs 3/4\" 3/4\" 102 cfm.",
		"verifiedFacts": [
			"Masse publiée : 58 lbs.",
			"Ligne technique constructeur : MP-232A-1414 1\" Hex x 4-1/4\" 2\" 2-5/8\" 2100 23\" 58 lbs 3/4\" 3/4\" 102 cfm."
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
			"value": "58 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p7"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-232A-1414 1\" Hex x 4-1/4\" 2\" 2-5/8\" 2100 23\" 58 lbs 3/4\" 3/4\" 102 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p7"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "102 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-2-pdf-p7",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/2-Clay%20Diggers_Pavement-Breakers_Rock-Drills_v2.pdf#page=7",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 2, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0b2ca87443deae9dcee91a027835f636714c90bee64bce363e2c72c7ecd031bf. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-2-pdf-p7"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-2-pdf-p7"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-2-pdf-p7"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
