import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2720",
	"slug": "meuleuse-gatx-gp-2720",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2720",
	"brand": "GATX",
	"model": "GP-2720",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2720.svg",
		"alt": "Repères techniques : GATX GP-2720",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2720",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2720",
		"label": "Modèle GP-2720, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2720",
			"Collet (Options)": "1/8\", 1/4\" or 3mm, 6 mm",
			"Free Speed": "30,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2720. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (Options) : 1/8\", 1/4\" or 3mm, 6 mm.",
			"Free Speed : 30,000 rpm.",
			"Power : 300 W (0.4 HP).",
			"Exhaust : Rear.",
			"Air Consumption : 340 l/min.",
			"Air Inlet : 1/4\".",
			"Max Run-Out : < 0.08 mm.",
			"Dia x Length : 36 x 196 mm.",
			"Weight : 0.5 KG.",
			"Noise Level : 75 dBA."
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
			"label": "Collet (Options)",
			"value": "1/8\", 1/4\" or 3mm, 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2577-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "30,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-2577-p1"
			]
		},
		{
			"label": "Power",
			"value": "300 W (0.4 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-2577-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-2577-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "340 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-2577-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-2577-p1"
			]
		},
		{
			"label": "Max Run-Out",
			"value": "< 0.08 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2577-p1"
			]
		},
		{
			"label": "Dia x Length",
			"value": "36 x 196 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2577-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.5 KG",
			"evidenceIds": [
				"october5-tools-gatx-product-2577-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "75 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-2577-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-2577-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2720",
			"sourceLabel": "GATX : fiche technique GP-2720",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6883fec3457f34a9034e6277bcb5e9bae6eb961d4e2e634bfee444fde9c83e2e. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-2577-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-2577-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-2577-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
