import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-michigan-pneumatic-mp-3605ku",
	"slug": "perceuse-michigan-pneumatic-mp-3605ku",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Michigan Pneumatic MP-3605KU",
	"brand": "Michigan Pneumatic",
	"model": "MP-3605KU",
	"mpn": "MP-3605KU",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-michigan-pneumatic-mp-3605ku.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-3605KU",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/9-Drills_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-3605ku",
		"label": "Référence MP-3605KU",
		"distinguishingAttributes": {
			"reference": "MP-3605KU",
			"Masse publiée": "2.4 lbs",
			"Ligne technique constructeur": "MP-3605KU 1/4\" 2100 rpm 1/4\"-28 11-7/8\" 2.4 lbs 1/4\" 1/4\" 7 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-3605KU. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.4 lbs. Ligne technique constructeur : MP-3605KU 1/4\" 2100 rpm 1/4\"-28 11-7/8\" 2.4 lbs 1/4\" 1/4\" 7 cfm.",
		"verifiedFacts": [
			"Masse publiée : 2.4 lbs.",
			"Ligne technique constructeur : MP-3605KU 1/4\" 2100 rpm 1/4\"-28 11-7/8\" 2.4 lbs 1/4\" 1/4\" 7 cfm."
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
			"value": "2.4 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p11"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-3605KU 1/4\" 2100 rpm 1/4\"-28 11-7/8\" 2.4 lbs 1/4\" 1/4\" 7 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p11"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p11"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "7 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-9-pdf-p11",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/9-Drills_V2.pdf#page=11",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 9, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 551c618f343aa18c70a0d669a0bd9c70065142f614e83cf879859d6835562ad2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-9-pdf-p11"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-9-pdf-p11"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-9-pdf-p11"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
