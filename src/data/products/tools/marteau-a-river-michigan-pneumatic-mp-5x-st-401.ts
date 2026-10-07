import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-michigan-pneumatic-mp-5x-st-401",
	"slug": "marteau-a-river-michigan-pneumatic-mp-5x-st-401",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Michigan Pneumatic MP-5X-ST-401",
	"brand": "Michigan Pneumatic",
	"model": "MP-5X-ST-401",
	"mpn": "MP-5X-ST-401",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-michigan-pneumatic-mp-5x-st-401.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-5X-ST-401",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/6-Aircraft%20Riveters_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-5x-st-401",
		"label": "Référence MP-5X-ST-401",
		"distinguishingAttributes": {
			"reference": "MP-5X-ST-401",
			"Masse publiée": "4.75 lbs",
			"Ligne technique constructeur": "MP-5X-ST-401 Offset 0.4980.401 1/4\" 1/4\" 3/4\" x 2-11/16\" 1600 8\" 4.75 lbs 1/4\" 3/8\" 6 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-5X-ST-401. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 4.75 lbs. Ligne technique constructeur : MP-5X-ST-401 Offset 0.4980.401 1/4\" 1/4\" 3/4\" x 2-11/16\" 1600 8\" 4.75 lbs 1/4\" 3/8\" 6 cfm.",
		"verifiedFacts": [
			"Masse publiée : 4.75 lbs.",
			"Ligne technique constructeur : MP-5X-ST-401 Offset 0.4980.401 1/4\" 1/4\" 3/4\" x 2-11/16\" 1600 8\" 4.75 lbs 1/4\" 3/8\" 6 cfm."
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
			"value": "4.75 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p2"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-5X-ST-401 Offset 0.4980.401 1/4\" 1/4\" 3/4\" x 2-11/16\" 1600 8\" 4.75 lbs 1/4\" 3/8\" 6 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p2"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-6-pdf-p2",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/6-Aircraft%20Riveters_v2.pdf#page=2",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 6, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : db4ad3c3e258481ba1d19f3b9c6afbd624eea583ec1d6652b495921b7a8dbe80. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-6-pdf-p2"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-6-pdf-p2"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-6-pdf-p2"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
