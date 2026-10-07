import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-2b",
	"slug": "burineur-michigan-pneumatic-mp-2b",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-2B",
	"brand": "Michigan Pneumatic",
	"model": "MP-2B",
	"mpn": "MP-2B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-2b.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-2B",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/4-Scalers_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-2b",
		"label": "Référence MP-2B",
		"distinguishingAttributes": {
			"reference": "MP-2B",
			"Masse publiée": "6.17 lbs",
			"Ligne technique constructeur": "MP-2B Straight 1-1/4\" 3700 14-3/4\" 6.17 lbs 1/4\" 3/8\" 10 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-2B. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 6.17 lbs. Ligne technique constructeur : MP-2B Straight 1-1/4\" 3700 14-3/4\" 6.17 lbs 1/4\" 3/8\" 10 cfm.",
		"verifiedFacts": [
			"Masse publiée : 6.17 lbs.",
			"Ligne technique constructeur : MP-2B Straight 1-1/4\" 3700 14-3/4\" 6.17 lbs 1/4\" 3/8\" 10 cfm."
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
			"value": "6.17 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p5"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-2B Straight 1-1/4\" 3700 14-3/4\" 6.17 lbs 1/4\" 3/8\" 10 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p5"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "10 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-4-pdf-p5",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/4-Scalers_V2.pdf#page=5",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 4, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 80c53e6f90b62f8a07009326cdb63ea8b3021669882c8e8376917e5859155804. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-4-pdf-p5"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-4-pdf-p5"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-4-pdf-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
