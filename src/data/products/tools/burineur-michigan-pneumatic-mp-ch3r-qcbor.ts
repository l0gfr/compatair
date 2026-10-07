import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-ch3r-qcbor",
	"slug": "burineur-michigan-pneumatic-mp-ch3r-qcbor",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-CH3R-QCBOR",
	"brand": "Michigan Pneumatic",
	"model": "MP-CH3R-QCBOR",
	"mpn": "MP-CH3R-QCBOR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-ch3r-qcbor.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-CH3R-QCBOR",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/3-Rivet%20Busters_Chipping-Hammers_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-ch3r-qcbor",
		"label": "Référence MP-CH3R-QCBOR",
		"distinguishingAttributes": {
			"reference": "MP-CH3R-QCBOR",
			"Masse publiée": "18.5 lbs",
			"Ligne technique constructeur": "MP-CH3R-QCBOR 3-3/4\" 1-1/8\" 2100 16-1/2\" 18.5 lbs 1/2\" 1/2\" 32 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-CH3R-QCBOR. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 18.5 lbs. Ligne technique constructeur : MP-CH3R-QCBOR 3-3/4\" 1-1/8\" 2100 16-1/2\" 18.5 lbs 1/2\" 1/2\" 32 cfm.",
		"verifiedFacts": [
			"Masse publiée : 18.5 lbs.",
			"Ligne technique constructeur : MP-CH3R-QCBOR 3-3/4\" 1-1/8\" 2100 16-1/2\" 18.5 lbs 1/2\" 1/2\" 32 cfm."
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
			"value": "18.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p15"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-CH3R-QCBOR 3-3/4\" 1-1/8\" 2100 16-1/2\" 18.5 lbs 1/2\" 1/2\" 32 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p15"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p15"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "32 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-3-pdf-p15",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/3-Rivet%20Busters_Chipping-Hammers_v2.pdf#page=15",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 3, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a11683057b26ed84ebb5e32d6e57b8a71d893d427fac414b42f396c07bdb6908. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-3-pdf-p15"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-3-pdf-p15"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-3-pdf-p15"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
