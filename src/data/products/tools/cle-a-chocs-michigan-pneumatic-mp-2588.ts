import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-michigan-pneumatic-mp-2588",
	"slug": "cle-a-chocs-michigan-pneumatic-mp-2588",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Michigan Pneumatic MP-2588",
	"brand": "Michigan Pneumatic",
	"model": "MP-2588",
	"mpn": "MP-2588",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-michigan-pneumatic-mp-2588.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-2588",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-2588",
		"label": "Référence MP-2588",
		"distinguishingAttributes": {
			"reference": "MP-2588",
			"Masse publiée": "215 lbs",
			"Ligne technique constructeur": "MP-2588 2-1/2\" Through-Hole 50,000 ft-lbs 25-3/8\" 215 lbs 1\" 1\" 155 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-2588. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 215 lbs. Ligne technique constructeur : MP-2588 2-1/2\" Through-Hole 50,000 ft-lbs 25-3/8\" 215 lbs 1\" 1\" 155 cfm.",
		"verifiedFacts": [
			"Masse publiée : 215 lbs.",
			"Ligne technique constructeur : MP-2588 2-1/2\" Through-Hole 50,000 ft-lbs 25-3/8\" 215 lbs 1\" 1\" 155 cfm."
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
			"value": "215 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p18"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-2588 2-1/2\" Through-Hole 50,000 ft-lbs 25-3/8\" 215 lbs 1\" 1\" 155 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p18"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p18"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "155 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-7-pdf-p18",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf#page=18",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 7, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a1687b8bb3cba9d23a149afc4b20cc7e6ef0de7bd0ef325710c0b6de8d82e49d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-7-pdf-p18"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-7-pdf-p18"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-7-pdf-p18"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
