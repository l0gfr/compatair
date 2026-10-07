import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-michigan-pneumatic-mp-2100-st",
	"slug": "perceuse-michigan-pneumatic-mp-2100-st",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Michigan Pneumatic MP-2100-ST",
	"brand": "Michigan Pneumatic",
	"model": "MP-2100-ST",
	"mpn": "MP-2100-ST",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-michigan-pneumatic-mp-2100-st.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-2100-ST",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/9-Drills_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-2100-st",
		"label": "Référence MP-2100-ST",
		"distinguishingAttributes": {
			"reference": "MP-2100-ST",
			"Masse publiée": "2 lbs",
			"Ligne technique constructeur": "MP-2100-ST 3/8\" 2600 rpm 3/8\"-24 8-3/4\" 2 lbs 1/4\" 3/8\" 4 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-2100-ST. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2 lbs. Ligne technique constructeur : MP-2100-ST 3/8\" 2600 rpm 3/8\"-24 8-3/4\" 2 lbs 1/4\" 3/8\" 4 cfm.",
		"verifiedFacts": [
			"Masse publiée : 2 lbs.",
			"Ligne technique constructeur : MP-2100-ST 3/8\" 2600 rpm 3/8\"-24 8-3/4\" 2 lbs 1/4\" 3/8\" 4 cfm."
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
			"value": "2 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p5"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-2100-ST 3/8\" 2600 rpm 3/8\"-24 8-3/4\" 2 lbs 1/4\" 3/8\" 4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p5"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-9-pdf-p5",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/9-Drills_V2.pdf#page=5",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 9, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 551c618f343aa18c70a0d669a0bd9c70065142f614e83cf879859d6835562ad2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-9-pdf-p5"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-9-pdf-p5"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-9-pdf-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
