import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-michigan-pneumatic-mp-2950b7",
	"slug": "cle-a-chocs-michigan-pneumatic-mp-2950b7",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Michigan Pneumatic MP-2950B7",
	"brand": "Michigan Pneumatic",
	"model": "MP-2950B7",
	"mpn": "MP-2950B7",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-michigan-pneumatic-mp-2950b7.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-2950B7",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-2950b7",
		"label": "Référence MP-2950B7",
		"distinguishingAttributes": {
			"reference": "MP-2950B7",
			"Masse publiée": "33 lbs",
			"Ligne technique constructeur": "MP-2950B7 1-1/2\" Through-Hole Inside Trigger 3000 ft-lbs 14-1/2\" 33 lbs 1/2\" 3/4\" 70 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-2950B7. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 33 lbs. Ligne technique constructeur : MP-2950B7 1-1/2\" Through-Hole Inside Trigger 3000 ft-lbs 14-1/2\" 33 lbs 1/2\" 3/4\" 70 cfm.",
		"verifiedFacts": [
			"Masse publiée : 33 lbs.",
			"Ligne technique constructeur : MP-2950B7 1-1/2\" Through-Hole Inside Trigger 3000 ft-lbs 14-1/2\" 33 lbs 1/2\" 3/4\" 70 cfm."
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
			"value": "33 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p14"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-2950B7 1-1/2\" Through-Hole Inside Trigger 3000 ft-lbs 14-1/2\" 33 lbs 1/2\" 3/4\" 70 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p14"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p14"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "70 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-7-pdf-p14",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf#page=14",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 7, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a1687b8bb3cba9d23a149afc4b20cc7e6ef0de7bd0ef325710c0b6de8d82e49d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-7-pdf-p14"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-7-pdf-p14"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-7-pdf-p14"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
