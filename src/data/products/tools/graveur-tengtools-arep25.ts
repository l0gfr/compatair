import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-tengtools-arep25",
	"slug": "graveur-tengtools-arep25",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "TengTools AREP25",
	"brand": "TengTools",
	"model": "AREP25",
	"mpn": "AREP25",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.2
	},
	"demandExplanation": "La consommation est publiée sous le libellé « 100% int. ». Ce facteur de marche ne démontre pas le régime en charge ni sa pression de mesure ; aucun débit continu calculable n’en est déduit.",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-tengtools-arep25.webp",
		"alt": "Repères techniques : TengTools AREP25",
		"sourceUrl": "https://www.tengtools.com/en-gb/collections/air-tools/products/air-engraving-pen",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tengtools-arep25",
		"label": "Référence AREP25",
		"distinguishingAttributes": {
			"reference": "AREP25",
			"Product Type": "Other Air Tools",
			"Stroke per minute (bpm)": "13000"
		}
	},
	"editorial": {
		"overview": "TengTools AREP25. La consommation est publiée sous le libellé « 100% int. ». Ce facteur de marche ne démontre pas le régime en charge ni sa pression de mesure ; aucun débit continu calculable n’en est déduit. Product Type : Other Air Tools. Stroke per minute (bpm) : 13000.",
		"verifiedFacts": [
			"Product Type : Other Air Tools.",
			"Stroke per minute (bpm) : 13000.",
			"Sound level (dB) : 90.",
			"Vibration (m/s²) : 2.5.",
			"Air inlet (inch) : 1/4\" PT-19.",
			"Air consumption at 100% int. (l/min) : 30.",
			"Air consumption at 100% int. (cfm) : 1.1.",
			"Working pressure (bar) : 6.2.",
			"Item weight (g) : 237."
		],
		"limitations": [
			"La consommation est publiée sous le libellé « 100% int. ». Ce facteur de marche ne démontre pas le régime en charge ni sa pression de mesure ; aucun débit continu calculable n’en est déduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Product Type",
			"value": "Other Air Tools",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		},
		{
			"label": "Stroke per minute (bpm)",
			"value": "13000",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		},
		{
			"label": "Sound level (dB)",
			"value": "90",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "2.5",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		},
		{
			"label": "Air inlet (inch)",
			"value": "1/4\" PT-19",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		},
		{
			"label": "Air consumption at 100% int. (l/min)",
			"value": "30",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		},
		{
			"label": "Air consumption at 100% int. (cfm)",
			"value": "1.1",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		},
		{
			"label": "Working pressure (bar)",
			"value": "6.2",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		},
		{
			"label": "Item weight (g)",
			"value": "237",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure (bar): 6.2",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "30 L/min",
			"evidenceIds": [
				"october3c-tools-teng-product-02-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-teng-product-02-p1",
			"sourceUrl": "https://www.tengtools.com/en-gb/collections/air-tools/products/air-engraving-pen",
			"sourceLabel": "Fiche fabricant TengTools, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e1a1fc3b75022aa70cf014feb1f16bc51cc662cbeb61476f23432938548d5a3d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-teng-product-02-p1"
		],
		"workingPressureBar": [
			"october3c-tools-teng-product-02-p1"
		],
		"demandExplanation": [
			"october3c-tools-teng-product-02-p1"
		]
	},
	"notes": [
		"La consommation est publiée sous le libellé « 100% int. ». Ce facteur de marche ne démontre pas le régime en charge ni sa pression de mesure ; aucun débit continu calculable n’en est déduit."
	]
};

export default product;
