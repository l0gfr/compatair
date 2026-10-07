import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2375",
	"slug": "meuleuse-gatx-gp-2375",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2375",
	"brand": "GATX",
	"model": "GP-2375",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2375.svg",
		"alt": "Repères techniques : GATX GP-2375",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2375",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2375",
		"label": "Modèle GP-2375, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2375",
			"Free Speed": "17,000 rpm",
			"Collet (option)": "1/8\", 1/4\", 3 or 6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2375. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 17,000 rpm.",
			"Collet (option) : 1/8\", 1/4\", 3 or 6 mm.",
			"Power : 263 W(0.35 HP).",
			"Exhaust : Handle Exhaust.",
			"Air Consumption : 120 l/min.",
			"Air Pressure : 6.2 bar ( 90 psi ).",
			"Air Inlet : 1/4\".",
			"Min Hose Size : 3/8\" (9.5 mm).",
			"Overall Length : 120 mm.",
			"Weight : 0.5 kg.",
			"Sound Pressure : 83 dBA.",
			"Vibration : 2.5 m/s²."
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
			"value": "17,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Collet (option)",
			"value": "1/8\", 1/4\", 3 or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Power",
			"value": "263 W(0.35 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Handle Exhaust",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "120 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar ( 90 psi )",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Min Hose Size",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "120 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.5 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Sound Pressure",
			"value": "83 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "2.5 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-6256-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6256-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2375",
			"sourceLabel": "GATX : fiche technique GP-2375",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 efa53902fc193e386044d6e285f8c74728bcfd1ded3a4cf050352826b1c21034. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6256-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6256-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6256-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
