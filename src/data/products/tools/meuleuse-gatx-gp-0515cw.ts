import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0515cw",
	"slug": "meuleuse-gatx-gp-0515cw",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0515CW",
	"brand": "GATX",
	"model": "GP-0515CW",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0515cw.svg",
		"alt": "Repères techniques : GATX GP-0515CW",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0515CW",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0515cw",
		"label": "Modèle GP-0515CW, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0515CW",
			"Collet (Option)": "1/4\" or 6 mm",
			"Free Speed": "25,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0515CW. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (Option) : 1/4\" or 6 mm.",
			"Free Speed : 25,000 rpm.",
			"Power : 225 W (0.3 HP).",
			"Exhaust : Rear.",
			"Air Consumption : 127 L/Min..",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Net Weight : 0.36 Kg.",
			"Noise Level : 88.73 dBA.",
			"Vibration : 2.5 m/s²."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le constructeur indique une consommation d’air sans préciser systématiquement marche à vide, moyenne ou charge. Les valeurs non qualifiées ne reçoivent pas de verdict conclusif.",
			"Une pression de service indiquée séparément ne devient pas automatiquement une pression de mesure du débit. La liste web ne garantit pas une disponibilité en France.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Collet (Option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8341-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "25,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8341-p1"
			]
		},
		{
			"label": "Power",
			"value": "225 W (0.3 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-8341-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-8341-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "127 L/Min.",
			"evidenceIds": [
				"october5-tools-gatx-product-8341-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8341-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8341-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.36 Kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8341-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "88.73 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8341-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "2.5 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-8341-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8341-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0515CW",
			"sourceLabel": "GATX : fiche technique GP-0515CW",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9d4ab5d1bcfd95e2296fbab1ef68ead92cf0458cac828150017c00a4f4a9ad17. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8341-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8341-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8341-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
