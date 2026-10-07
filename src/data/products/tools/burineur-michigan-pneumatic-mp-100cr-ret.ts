import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-100cr-ret",
	"slug": "burineur-michigan-pneumatic-mp-100cr-ret",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-100CR-RET",
	"brand": "Michigan Pneumatic",
	"model": "MP-100CR-RET",
	"mpn": "MP-100CR-RET",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-100cr-ret.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-100CR-RET",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/3-Rivet%20Busters_Chipping-Hammers_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-100cr-ret",
		"label": "Référence MP-100CR-RET",
		"distinguishingAttributes": {
			"reference": "MP-100CR-RET",
			"Masse publiée": "14.75 lbs",
			"Ligne technique constructeur": "MP-100CR-RET 1\" 1-1/8\" 2800 13-1/2\" 14.75 lbs 3/8\" 1/2\" 22 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-100CR-RET. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 14.75 lbs. Ligne technique constructeur : MP-100CR-RET 1\" 1-1/8\" 2800 13-1/2\" 14.75 lbs 3/8\" 1/2\" 22 cfm.",
		"verifiedFacts": [
			"Masse publiée : 14.75 lbs.",
			"Ligne technique constructeur : MP-100CR-RET 1\" 1-1/8\" 2800 13-1/2\" 14.75 lbs 3/8\" 1/2\" 22 cfm."
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
			"value": "14.75 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p16"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-100CR-RET 1\" 1-1/8\" 2800 13-1/2\" 14.75 lbs 3/8\" 1/2\" 22 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p16"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p16"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "22 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-3-pdf-p16",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/3-Rivet%20Busters_Chipping-Hammers_v2.pdf#page=16",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 3, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a11683057b26ed84ebb5e32d6e57b8a71d893d427fac414b42f396c07bdb6908. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-3-pdf-p16"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-3-pdf-p16"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-3-pdf-p16"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
