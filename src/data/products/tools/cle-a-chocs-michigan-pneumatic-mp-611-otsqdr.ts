import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-michigan-pneumatic-mp-611-otsqdr",
	"slug": "cle-a-chocs-michigan-pneumatic-mp-611-otsqdr",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Michigan Pneumatic MP-611-OTSQDR",
	"brand": "Michigan Pneumatic",
	"model": "MP-611-OTSQDR",
	"mpn": "MP-611-OTSQDR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-michigan-pneumatic-mp-611-otsqdr.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-611-OTSQDR",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-611-otsqdr",
		"label": "Référence MP-611-OTSQDR",
		"distinguishingAttributes": {
			"reference": "MP-611-OTSQDR",
			"Masse publiée": "22.5 lbs",
			"Ligne technique constructeur": "MP-611-OTSQDR 1\" Through-Hole Outside Trigger 2800 ft-lbs 12-1/2\" 22.5 lbs 1/2\" 3/4\" 47 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-611-OTSQDR. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 22.5 lbs. Ligne technique constructeur : MP-611-OTSQDR 1\" Through-Hole Outside Trigger 2800 ft-lbs 12-1/2\" 22.5 lbs 1/2\" 3/4\" 47 cfm.",
		"verifiedFacts": [
			"Masse publiée : 22.5 lbs.",
			"Ligne technique constructeur : MP-611-OTSQDR 1\" Through-Hole Outside Trigger 2800 ft-lbs 12-1/2\" 22.5 lbs 1/2\" 3/4\" 47 cfm."
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
			"value": "22.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p17"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-611-OTSQDR 1\" Through-Hole Outside Trigger 2800 ft-lbs 12-1/2\" 22.5 lbs 1/2\" 3/4\" 47 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p17"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p17"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "47 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-7-pdf-p17",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf#page=17",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 7, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a1687b8bb3cba9d23a149afc4b20cc7e6ef0de7bd0ef325710c0b6de8d82e49d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-7-pdf-p17"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-7-pdf-p17"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-7-pdf-p17"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
