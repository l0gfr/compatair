import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2057",
	"slug": "visseuse-gatx-gp-2057",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2057",
	"brand": "GATX",
	"model": "GP-2057",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2057.svg",
		"alt": "Repères techniques : GATX GP-2057",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2057",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2057",
		"label": "Modèle GP-2057, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2057",
			"Free Speed": "2,500 rpm",
			"Capacity": "6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2057. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 2,500 rpm.",
			"Capacity : 6 mm.",
			"Torque : 1 ~ 17 Nm.",
			"Air Consumption : 180  l/min.",
			"Length : 212 mm.",
			"Weight : 1.1 kg."
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
			"label": "Free Speed",
			"value": "2,500 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6790-p1"
			]
		},
		{
			"label": "Capacity",
			"value": "6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6790-p1"
			]
		},
		{
			"label": "Torque",
			"value": "1 ~ 17 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-6790-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "180  l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6790-p1"
			]
		},
		{
			"label": "Length",
			"value": "212 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6790-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.1 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6790-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6790-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2057",
			"sourceLabel": "GATX : fiche technique GP-2057",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9e4e4417a24cfa5d271d9779337324e088da6995397f4eafd2113b0cc4b86800. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6790-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6790-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6790-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
