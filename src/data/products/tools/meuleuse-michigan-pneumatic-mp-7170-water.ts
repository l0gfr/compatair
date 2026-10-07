import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-7170-water",
	"slug": "meuleuse-michigan-pneumatic-mp-7170-water",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-7170-WATER",
	"brand": "Michigan Pneumatic",
	"model": "MP-7170-WATER",
	"mpn": "MP-7170-WATER",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-7170-water.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-7170-WATER",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-7170-water",
		"label": "Référence MP-7170-WATER",
		"distinguishingAttributes": {
			"reference": "MP-7170-WATER",
			"Masse publiée": "8.75 lbs",
			"Ligne technique constructeur": "MP-7170-WATER 7\" Type 1 5/8\"-11 8500 rpm 1.3 6-3/4\" 15-3/8\" 8.75 lbs 1/4\" 3/8\" 6 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-7170-WATER. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 8.75 lbs. Ligne technique constructeur : MP-7170-WATER 7\" Type 1 5/8\"-11 8500 rpm 1.3 6-3/4\" 15-3/8\" 8.75 lbs 1/4\" 3/8\" 6 cfm.",
		"verifiedFacts": [
			"Masse publiée : 8.75 lbs.",
			"Ligne technique constructeur : MP-7170-WATER 7\" Type 1 5/8\"-11 8500 rpm 1.3 6-3/4\" 15-3/8\" 8.75 lbs 1/4\" 3/8\" 6 cfm."
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
			"value": "8.75 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p32"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-7170-WATER 7\" Type 1 5/8\"-11 8500 rpm 1.3 6-3/4\" 15-3/8\" 8.75 lbs 1/4\" 3/8\" 6 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p32"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p32"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p32"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p32",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=32",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p32"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p32"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p32"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
