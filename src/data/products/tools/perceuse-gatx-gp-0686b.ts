import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-0686b",
	"slug": "perceuse-gatx-gp-0686b",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-0686B",
	"brand": "GATX",
	"model": "GP-0686B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-0686b.svg",
		"alt": "Repères techniques : GATX GP-0686B",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0686B",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0686b",
		"label": "Modèle GP-0686B, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0686B",
			"Chuck Size": "3/8\" Jacobs Ind. keyed Chuck",
			"Free Speed": "2,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0686B. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 3/8\" Jacobs Ind. keyed Chuck.",
			"Free Speed : 2,000 rpm.",
			"Motor Power : 600 W (0.8 HP).",
			"Air Consumption : 84.95 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Length : 220 mm.",
			"Net Weight : 1.23 kg.",
			"Noise Level : 92 dBA."
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
			"value": "3/8\" Jacobs Ind. keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-8468-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "2,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8468-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "600 W (0.8 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-8468-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "84.95 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8468-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8468-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8468-p1"
			]
		},
		{
			"label": "Length",
			"value": "220 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8468-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.23 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8468-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "92 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8468-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8468-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0686B",
			"sourceLabel": "GATX : fiche technique GP-0686B",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 cbeb129a8c6a2afd65daa8551d648c7ed6d5efccc883f957545cb0c0b3618a84. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8468-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8468-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8468-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
