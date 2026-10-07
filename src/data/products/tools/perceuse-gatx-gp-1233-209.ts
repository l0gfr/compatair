import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1233-209",
	"slug": "perceuse-gatx-gp-1233-209",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1233-209",
	"brand": "GATX",
	"model": "GP-1233-209",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1233-209.svg",
		"alt": "Repères techniques : GATX GP-1233-209",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1233-209",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1233-209",
		"label": "Modèle GP-1233-209, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1233-209",
			"Chuck Size": "1/4\" Jacobs Ind. Keyed Chuck",
			"Free Speed": "3,900 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1233-209. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/4\" Jacobs Ind. Keyed Chuck.",
			"Free Speed : 3,900 rpm.",
			"Motor Power : 373 W (0.5 HP).",
			"Spindle Thread : 3/8\" - 24.",
			"Air Consumption : 700 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 165 mm.",
			"Net Weight : 1.3 kg."
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
				"october5-tools-gatx-product-7715-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "3,900 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7715-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "373 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7715-p1"
			]
		},
		{
			"label": "Spindle Thread",
			"value": "3/8\" - 24",
			"evidenceIds": [
				"october5-tools-gatx-product-7715-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "700 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7715-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7715-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7715-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7715-p1"
			]
		},
		{
			"label": "Length",
			"value": "165 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7715-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.3 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7715-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7715-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1233-209",
			"sourceLabel": "GATX : fiche technique GP-1233-209",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 c4d16e13a843130c4ea59771f035debac734a92581028a195d2dc3abc46e581b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7715-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7715-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7715-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
