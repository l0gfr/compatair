import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3720",
	"slug": "perceuse-gatx-gp-3720",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3720",
	"brand": "GATX",
	"model": "GP-3720",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3720.svg",
		"alt": "Repères techniques : GATX GP-3720",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3720",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3720",
		"label": "Modèle GP-3720, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3720",
			"Chuck Size": "1/2\"",
			"Free Speed": "700 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3720. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/2\".",
			"Free Speed : 700 rpm.",
			"Speed Control : 2 Speeds.",
			"Motor Power : 370 W (0.5 HP).",
			"Spindle Thread : 3/8\"-24.",
			"Air Consumption : 113 L/min.",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 230 mm.",
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
			"value": "1/2\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5842-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "700 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5842-p1"
			]
		},
		{
			"label": "Speed Control",
			"value": "2 Speeds",
			"evidenceIds": [
				"october5-tools-gatx-product-5842-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "370 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-5842-p1"
			]
		},
		{
			"label": "Spindle Thread",
			"value": "3/8\"-24",
			"evidenceIds": [
				"october5-tools-gatx-product-5842-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5842-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5842-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5842-p1"
			]
		},
		{
			"label": "Length",
			"value": "230 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5842-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.3 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5842-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5842-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3720",
			"sourceLabel": "GATX : fiche technique GP-3720",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 a8669d33e0e15a9421094178cc2b3d3f613e0cb0d92f82276764665b0f21f0ad. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5842-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5842-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5842-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
