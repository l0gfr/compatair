import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-michigan-pneumatic-mp-1350ra",
	"slug": "cle-a-chocs-michigan-pneumatic-mp-1350ra",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Michigan Pneumatic MP-1350RA",
	"brand": "Michigan Pneumatic",
	"model": "MP-1350RA",
	"mpn": "MP-1350RA",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-michigan-pneumatic-mp-1350ra.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-1350RA",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-1350ra",
		"label": "Référence MP-1350RA",
		"distinguishingAttributes": {
			"reference": "MP-1350RA",
			"Masse publiée": "3.0 lbs",
			"Ligne technique constructeur": "MP-1350RA Angle 1/2\" Friction Ring 300 ft-lbs 9-3/4\" 3.0 lbs 1/4\" 3/8\" 4.2 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-1350RA. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 3.0 lbs. Ligne technique constructeur : MP-1350RA Angle 1/2\" Friction Ring 300 ft-lbs 9-3/4\" 3.0 lbs 1/4\" 3/8\" 4.2 cfm.",
		"verifiedFacts": [
			"Masse publiée : 3.0 lbs.",
			"Ligne technique constructeur : MP-1350RA Angle 1/2\" Friction Ring 300 ft-lbs 9-3/4\" 3.0 lbs 1/4\" 3/8\" 4.2 cfm."
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
			"value": "3.0 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p6"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-1350RA Angle 1/2\" Friction Ring 300 ft-lbs 9-3/4\" 3.0 lbs 1/4\" 3/8\" 4.2 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p6"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.2 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-7-pdf-p6",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf#page=6",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 7, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a1687b8bb3cba9d23a149afc4b20cc7e6ef0de7bd0ef325710c0b6de8d82e49d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-7-pdf-p6"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-7-pdf-p6"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-7-pdf-p6"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
