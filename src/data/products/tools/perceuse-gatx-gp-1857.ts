import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1857",
	"slug": "perceuse-gatx-gp-1857",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1857",
	"brand": "GATX",
	"model": "GP-1857",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1857.svg",
		"alt": "Repères techniques : GATX GP-1857",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1857",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1857",
		"label": "Modèle GP-1857, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1857",
			"Chuck Size": "1/4\"",
			"Free Speed": "1,900 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1857. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/4\".",
			"Free Speed : 1,900 rpm.",
			"Motor Power : 280 W (0.38 HP).",
			"Air Consumption : 84 L/min.",
			"Air Pressure : 6.2 bar  (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 174 mm.",
			"Net Weight : 0.8 kg.",
			"Noise Level : 83 dBA.",
			"Vibration : <2.5 m/s²."
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
				"october5-tools-gatx-product-6065-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "1,900 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6065-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "280 W (0.38 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-6065-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "84 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6065-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar  (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6065-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6065-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6065-p1"
			]
		},
		{
			"label": "Length",
			"value": "174 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6065-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.8 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6065-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "83 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-6065-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-6065-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6065-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1857",
			"sourceLabel": "GATX : fiche technique GP-1857",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 546b16a979444126664e61f45d95de5ec732d9deda36f9d4016d6502ea37ffad. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6065-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6065-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6065-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
