import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-1bl-coke",
	"slug": "burineur-michigan-pneumatic-mp-1bl-coke",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-1BL-COKE",
	"brand": "Michigan Pneumatic",
	"model": "MP-1BL-COKE",
	"mpn": "MP-1BL-COKE",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-1bl-coke.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-1BL-COKE",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/4-Scalers_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-1bl-coke",
		"label": "Référence MP-1BL-COKE",
		"distinguishingAttributes": {
			"reference": "MP-1BL-COKE",
			"Masse publiée": "4.5 lbs",
			"Ligne technique constructeur": "MP-1BL-COKE OVEN Push 1-1/8\" 1\" 4600 12-1/2\" 4.5 lbs 1/2\" 3/8\" 12 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-1BL-COKE. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 4.5 lbs. Ligne technique constructeur : MP-1BL-COKE OVEN Push 1-1/8\" 1\" 4600 12-1/2\" 4.5 lbs 1/2\" 3/8\" 12 cfm.",
		"verifiedFacts": [
			"Masse publiée : 4.5 lbs.",
			"Ligne technique constructeur : MP-1BL-COKE OVEN Push 1-1/8\" 1\" 4600 12-1/2\" 4.5 lbs 1/2\" 3/8\" 12 cfm."
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
			"value": "4.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p2"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-1BL-COKE OVEN Push 1-1/8\" 1\" 4600 12-1/2\" 4.5 lbs 1/2\" 3/8\" 12 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p2"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-4-pdf-p2",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/4-Scalers_V2.pdf#page=2",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 4, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 80c53e6f90b62f8a07009326cdb63ea8b3021669882c8e8376917e5859155804. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-4-pdf-p2"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-4-pdf-p2"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-4-pdf-p2"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
