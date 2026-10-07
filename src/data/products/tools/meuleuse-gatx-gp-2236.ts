import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2236",
	"slug": "meuleuse-gatx-gp-2236",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2236",
	"brand": "GATX",
	"model": "GP-2236",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2236.svg",
		"alt": "Repères techniques : GATX GP-2236",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2236",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2236",
		"label": "Modèle GP-2236, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2236",
			"Collet (option)": "1/4\" or 6 mm",
			"Free Speed": "22,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2236. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (option) : 1/4\" or 6 mm.",
			"Free Speed : 22,000 rpm.",
			"Power : 375 W (0.5 HP).",
			"Air Consumption : 450 l/min.",
			"Max Run-Out : 0.12 mm.",
			"Overall Length : 165 mm.",
			"Weight : 0.6 kg."
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
			"label": "Collet (option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7501-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "22,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7501-p1"
			]
		},
		{
			"label": "Power",
			"value": "375 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7501-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "450 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7501-p1"
			]
		},
		{
			"label": "Max Run-Out",
			"value": "0.12 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7501-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "165 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7501-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.6 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7501-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7501-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2236",
			"sourceLabel": "GATX : fiche technique GP-2236",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 f1bbfaa2f4d130bac524e00dda9523de5eed4899b3524633260aae6777759614. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7501-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7501-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7501-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
