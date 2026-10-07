import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-michigan-pneumatic-mp-2315-he",
	"slug": "cle-a-chocs-michigan-pneumatic-mp-2315-he",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Michigan Pneumatic MP-2315-HE",
	"brand": "Michigan Pneumatic",
	"model": "MP-2315-HE",
	"mpn": "MP-2315-HE",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-michigan-pneumatic-mp-2315-he.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-2315-HE",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-2315-he",
		"label": "Référence MP-2315-HE",
		"distinguishingAttributes": {
			"reference": "MP-2315-HE",
			"Masse publiée": "5.8 lbs",
			"Ligne technique constructeur": "MP-2315-HE 1/2\" Friction Ring 680 ft-lbs 7-1/4\" 5.8 lbs 1/4\" 3/8\" 4.2 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-2315-HE. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 5.8 lbs. Ligne technique constructeur : MP-2315-HE 1/2\" Friction Ring 680 ft-lbs 7-1/4\" 5.8 lbs 1/4\" 3/8\" 4.2 cfm.",
		"verifiedFacts": [
			"Masse publiée : 5.8 lbs.",
			"Ligne technique constructeur : MP-2315-HE 1/2\" Friction Ring 680 ft-lbs 7-1/4\" 5.8 lbs 1/4\" 3/8\" 4.2 cfm."
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
			"value": "5.8 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p8"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-2315-HE 1/2\" Friction Ring 680 ft-lbs 7-1/4\" 5.8 lbs 1/4\" 3/8\" 4.2 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p8"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.2 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-7-pdf-p8",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf#page=8",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 7, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a1687b8bb3cba9d23a149afc4b20cc7e6ef0de7bd0ef325710c0b6de8d82e49d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-7-pdf-p8"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-7-pdf-p8"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-7-pdf-p8"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
