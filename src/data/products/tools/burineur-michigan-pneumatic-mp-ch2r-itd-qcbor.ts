import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-ch2r-itd-qcbor",
	"slug": "burineur-michigan-pneumatic-mp-ch2r-itd-qcbor",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-CH2R-ITD-QCBOR",
	"brand": "Michigan Pneumatic",
	"model": "MP-CH2R-ITD-QCBOR",
	"mpn": "MP-CH2R-ITD-QCBOR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-ch2r-itd-qcbor.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-CH2R-ITD-QCBOR",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/3-Rivet%20Busters_Chipping-Hammers_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-ch2r-itd-qcbor",
		"label": "Référence MP-CH2R-ITD-QCBOR",
		"distinguishingAttributes": {
			"reference": "MP-CH2R-ITD-QCBOR",
			"Masse publiée": "17.2 lbs",
			"Ligne technique constructeur": "MP-CH2R-ITD-QCBOR 2\" 1-1/8\" 2300 15-7/8\" 17.2 lbs 1/2\" 1/2\" 28 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-CH2R-ITD-QCBOR. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 17.2 lbs. Ligne technique constructeur : MP-CH2R-ITD-QCBOR 2\" 1-1/8\" 2300 15-7/8\" 17.2 lbs 1/2\" 1/2\" 28 cfm.",
		"verifiedFacts": [
			"Masse publiée : 17.2 lbs.",
			"Ligne technique constructeur : MP-CH2R-ITD-QCBOR 2\" 1-1/8\" 2300 15-7/8\" 17.2 lbs 1/2\" 1/2\" 28 cfm."
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
			"value": "17.2 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p15"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-CH2R-ITD-QCBOR 2\" 1-1/8\" 2300 15-7/8\" 17.2 lbs 1/2\" 1/2\" 28 cfm",
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
			"value": "28 cfm",
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
