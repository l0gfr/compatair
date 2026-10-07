import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-michigan-pneumatic-mp-6060",
	"slug": "cle-a-chocs-michigan-pneumatic-mp-6060",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Michigan Pneumatic MP-6060",
	"brand": "Michigan Pneumatic",
	"model": "MP-6060",
	"mpn": "MP-6060",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-michigan-pneumatic-mp-6060.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-6060",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-6060",
		"label": "Référence MP-6060",
		"distinguishingAttributes": {
			"reference": "MP-6060",
			"Masse publiée": "11.6 lbs",
			"Ligne technique constructeur": "MP-6060 3/4\" Through-Hole 1000 ft-lbs 8-5/8\" 11.6 lbs 3/8\" 1/2\" 35 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-6060. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 11.6 lbs. Ligne technique constructeur : MP-6060 3/4\" Through-Hole 1000 ft-lbs 8-5/8\" 11.6 lbs 3/8\" 1/2\" 35 cfm.",
		"verifiedFacts": [
			"Masse publiée : 11.6 lbs.",
			"Ligne technique constructeur : MP-6060 3/4\" Through-Hole 1000 ft-lbs 8-5/8\" 11.6 lbs 3/8\" 1/2\" 35 cfm."
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
			"value": "11.6 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p11"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-6060 3/4\" Through-Hole 1000 ft-lbs 8-5/8\" 11.6 lbs 3/8\" 1/2\" 35 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p11"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p11"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "35 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-7-pdf-p11",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf#page=11",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 7, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a1687b8bb3cba9d23a149afc4b20cc7e6ef0de7bd0ef325710c0b6de8d82e49d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-7-pdf-p11"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-7-pdf-p11"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-7-pdf-p11"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
