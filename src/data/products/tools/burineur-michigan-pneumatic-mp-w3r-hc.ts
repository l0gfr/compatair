import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-w3r-hc",
	"slug": "burineur-michigan-pneumatic-mp-w3r-hc",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-W3R-HC",
	"brand": "Michigan Pneumatic",
	"model": "MP-W3R-HC",
	"mpn": "MP-W3R-HC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-w3r-hc.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-W3R-HC",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/3-Rivet%20Busters_Chipping-Hammers_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-w3r-hc",
		"label": "Référence MP-W3R-HC",
		"distinguishingAttributes": {
			"reference": "MP-W3R-HC",
			"Masse publiée": "16.6 lbs",
			"Ligne technique constructeur": "MP-W3R-HC 3\" 1-1/8\" 1725 18-1/4\" 16.6 lbs 3/8\" 1/2\" 29 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-W3R-HC. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 16.6 lbs. Ligne technique constructeur : MP-W3R-HC 3\" 1-1/8\" 1725 18-1/4\" 16.6 lbs 3/8\" 1/2\" 29 cfm.",
		"verifiedFacts": [
			"Masse publiée : 16.6 lbs.",
			"Ligne technique constructeur : MP-W3R-HC 3\" 1-1/8\" 1725 18-1/4\" 16.6 lbs 3/8\" 1/2\" 29 cfm."
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
			"value": "16.6 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p18"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-W3R-HC 3\" 1-1/8\" 1725 18-1/4\" 16.6 lbs 3/8\" 1/2\" 29 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p18"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p18"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "29 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-3-pdf-p18",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/3-Rivet%20Busters_Chipping-Hammers_v2.pdf#page=18",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 3, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a11683057b26ed84ebb5e32d6e57b8a71d893d427fac414b42f396c07bdb6908. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-3-pdf-p18"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-3-pdf-p18"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-3-pdf-p18"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
