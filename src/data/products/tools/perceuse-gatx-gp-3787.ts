import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3787",
	"slug": "perceuse-gatx-gp-3787",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3787",
	"brand": "GATX",
	"model": "GP-3787",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3787.svg",
		"alt": "Repères techniques : GATX GP-3787",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3787",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3787",
		"label": "Modèle GP-3787, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3787",
			"Chuck Size": "1/4\"",
			"Free Speed": "4,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3787. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/4\".",
			"Free Speed : 4,000 rpm.",
			"Motor Power : 338 W (0.45 HP).",
			"Air Consumption : 47.5 L/min.",
			"Air Inlet : 1/4\".",
			"Length : 195 mm.",
			"Net Weight : 0.76kg."
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
			"label": "Chuck Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7704-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "4,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7704-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "338 W (0.45 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7704-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "47.5 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7704-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7704-p1"
			]
		},
		{
			"label": "Length",
			"value": "195 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7704-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.76kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7704-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7704-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3787",
			"sourceLabel": "GATX : fiche technique GP-3787",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 7734cadbd5347d059566103ee9455ed07bb2ebe8cf894c965bbdf07bf6c6aa60. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7704-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7704-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7704-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
