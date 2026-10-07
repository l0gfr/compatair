import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-3925",
	"slug": "visseuse-gatx-gp-3925",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-3925",
	"brand": "GATX",
	"model": "GP-3925",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-3925.svg",
		"alt": "Repères techniques : GATX GP-3925",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3925",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3925",
		"label": "Modèle GP-3925, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3925",
			"Capacity": "1/4\"",
			"Free Speed": "800 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3925. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Capacity : 1/4\".",
			"Free Speed : 800 rpm.",
			"Motor Power : 338W ( 0.45 HP ).",
			"Torque : 4.5 ~ 9.6 Nm (40-85 in.lbs).",
			"Hex Shank : 1/4\".",
			"Exhaust : Handle.",
			"Air Consumption : 113  L/min.",
			"Air Inlet : 1/4\".",
			"Overall Length : 225 mm.",
			"Net Weight : 1.4 kg.",
			"Noise Level : 88 dBA."
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
			"label": "Capacity",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "338W ( 0.45 HP )",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		},
		{
			"label": "Torque",
			"value": "4.5 ~ 9.6 Nm (40-85 in.lbs)",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		},
		{
			"label": "Hex Shank",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Handle",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113  L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "225 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.4 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "88 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8541-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8541-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3925",
			"sourceLabel": "GATX : fiche technique GP-3925",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 f9a2a29b9115c1a97a6e3edcd675d7e1176b6a6fe08d01ddfe13e92118b6c1b1. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8541-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8541-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8541-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
