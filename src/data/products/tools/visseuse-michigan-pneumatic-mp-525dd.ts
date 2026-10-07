import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-michigan-pneumatic-mp-525dd",
	"slug": "visseuse-michigan-pneumatic-mp-525dd",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Michigan Pneumatic MP-525DD",
	"brand": "Michigan Pneumatic",
	"model": "MP-525DD",
	"mpn": "MP-525DD",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-michigan-pneumatic-mp-525dd.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-525DD",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/8-Screwdrivers_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-525dd",
		"label": "Référence MP-525DD",
		"distinguishingAttributes": {
			"reference": "MP-525DD",
			"Masse publiée": "2.25 lbs",
			"Ligne technique constructeur": "MP-525DD 1/4\" Hex 19-55 in-lbs 2000 rpm 6-1/2\" 2.25 lbs 1/4\" 3/8\" 4 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-525DD. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.25 lbs. Ligne technique constructeur : MP-525DD 1/4\" Hex 19-55 in-lbs 2000 rpm 6-1/2\" 2.25 lbs 1/4\" 3/8\" 4 cfm.",
		"verifiedFacts": [
			"Masse publiée : 2.25 lbs.",
			"Ligne technique constructeur : MP-525DD 1/4\" Hex 19-55 in-lbs 2000 rpm 6-1/2\" 2.25 lbs 1/4\" 3/8\" 4 cfm."
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
			"value": "2.25 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-8-pdf-p4"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-525DD 1/4\" Hex 19-55 in-lbs 2000 rpm 6-1/2\" 2.25 lbs 1/4\" 3/8\" 4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-8-pdf-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-8-pdf-p4"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-8-pdf-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-8-pdf-p4",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/8-Screwdrivers_V2.pdf#page=4",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 8, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9cc8530f87647f13613f641dbd90c846c9145250b38af0c20f47944847b674e1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-8-pdf-p4"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-8-pdf-p4"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-8-pdf-p4"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
