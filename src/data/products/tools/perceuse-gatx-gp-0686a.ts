import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-0686a",
	"slug": "perceuse-gatx-gp-0686a",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-0686A",
	"brand": "GATX",
	"model": "GP-0686A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-0686a.svg",
		"alt": "Repères techniques : GATX GP-0686A",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0686A",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0686a",
		"label": "Modèle GP-0686A, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0686A",
			"Chuck Size": "3/8\" Jacobs Ind. keyed Chuck",
			"Free Speed": "1,600 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0686A. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 3/8\" Jacobs Ind. keyed Chuck.",
			"Free Speed : 1,600 rpm.",
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
				"october5-tools-gatx-product-8467-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "1,600 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8467-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "600 W (0.8 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-8467-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "84.95 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8467-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8467-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8467-p1"
			]
		},
		{
			"label": "Length",
			"value": "220 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8467-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.23 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8467-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "92 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8467-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8467-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0686A",
			"sourceLabel": "GATX : fiche technique GP-0686A",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 39d6bdfd78221e15f4d956e4e30dd0e4657f2b2e5acb62a327c066f902fdb9f5. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8467-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8467-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8467-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
