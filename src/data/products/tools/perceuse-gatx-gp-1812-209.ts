import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1812-209",
	"slug": "perceuse-gatx-gp-1812-209",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1812-209",
	"brand": "GATX",
	"model": "GP-1812-209",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1812-209.svg",
		"alt": "Repères techniques : GATX GP-1812-209",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1812-209",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1812-209",
		"label": "Modèle GP-1812-209, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1812-209",
			"Chuck Size": "1/4\" Jacobs Ind. Keyed Chuck",
			"Free Speed": "3,150 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1812-209. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/4\" Jacobs Ind. Keyed Chuck.",
			"Free Speed : 3,150 rpm.",
			"Motor Power : 670 W (0.9 HP).",
			"Max Torque : 8.4 Nm (6.2 ft.lb).",
			"Air Consumption : 367 L/min.",
			"Air Pressure : 6.2 bar (90 psi ).",
			"Air Inlet : 1/4\".",
			"Length : 185 mm.",
			"Net Weight : 1.2 kg."
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
			"value": "1/4\" Jacobs Ind. Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-5341-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "3,150 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5341-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "670 W (0.9 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-5341-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "8.4 Nm (6.2 ft.lb)",
			"evidenceIds": [
				"october5-tools-gatx-product-5341-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "367 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5341-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi )",
			"evidenceIds": [
				"october5-tools-gatx-product-5341-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5341-p1"
			]
		},
		{
			"label": "Length",
			"value": "185 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5341-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5341-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5341-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1812-209",
			"sourceLabel": "GATX : fiche technique GP-1812-209",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b246c4a5e1a3d6dc29226fba599b104637ecfc5fa67d5ee6aeeb752148b1d26c. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5341-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5341-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5341-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
