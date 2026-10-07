import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-tpb40-c",
	"slug": "burineur-michigan-pneumatic-mp-tpb40-c",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-TPB40-C",
	"brand": "Michigan Pneumatic",
	"model": "MP-TPB40-C",
	"mpn": "MP-TPB40-C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-tpb40-c.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-TPB40-C",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/2-Clay%20Diggers_Pavement-Breakers_Rock-Drills_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-tpb40-c",
		"label": "Référence MP-TPB40-C",
		"distinguishingAttributes": {
			"reference": "MP-TPB40-C",
			"Masse publiée": "41.5 lbs",
			"Ligne technique constructeur": "MP-TPB40-C 1\" Hex x 4-1/4\" 5-3/4\" 1-3/4\" 900 26\" 41.5 lbs 3/4\" 1/2\" 45-50 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-TPB40-C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 41.5 lbs. Ligne technique constructeur : MP-TPB40-C 1\" Hex x 4-1/4\" 5-3/4\" 1-3/4\" 900 26\" 41.5 lbs 3/4\" 1/2\" 45-50 cfm.",
		"verifiedFacts": [
			"Masse publiée : 41.5 lbs.",
			"Ligne technique constructeur : MP-TPB40-C 1\" Hex x 4-1/4\" 5-3/4\" 1-3/4\" 900 26\" 41.5 lbs 3/4\" 1/2\" 45-50 cfm."
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
			"value": "41.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p4"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-TPB40-C 1\" Hex x 4-1/4\" 5-3/4\" 1-3/4\" 900 26\" 41.5 lbs 3/4\" 1/2\" 45-50 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p4"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "50 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-2-pdf-p4",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/2-Clay%20Diggers_Pavement-Breakers_Rock-Drills_v2.pdf#page=4",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 2, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0b2ca87443deae9dcee91a027835f636714c90bee64bce363e2c72c7ecd031bf. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-2-pdf-p4"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-2-pdf-p4"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-2-pdf-p4"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
