import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2774",
	"slug": "meuleuse-gatx-gp-2774",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2774",
	"brand": "GATX",
	"model": "GP-2774",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2774.svg",
		"alt": "Repères techniques : GATX GP-2774",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2774",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2774",
		"label": "Modèle GP-2774, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2774",
			"Free Speed": "20,000 rpm",
			"Collet (Option)": "1/4\" or 6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2774. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 20,000 rpm.",
			"Collet (Option) : 1/4\" or 6 mm.",
			"Motor Power : 261 W (0.35 HP).",
			"Exhaust : Front.",
			"Air Consumption : 155 L/min.",
			"Air Pressure : 6.2 bar ( 90 psi).",
			"Air Inlet : 1/4\".",
			"Length : 91 mm.",
			"Net Weight : 0.4 kg.",
			"Noise Level : 83.4 dBA.",
			"Vibration : 2.94 m/s2."
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
			"value": "20,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		},
		{
			"label": "Collet (Option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "261 W (0.35 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Front",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "155 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar ( 90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		},
		{
			"label": "Length",
			"value": "91 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.4 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "83.4 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "2.94 m/s2",
			"evidenceIds": [
				"october5-tools-gatx-product-8549-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8549-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2774",
			"sourceLabel": "GATX : fiche technique GP-2774",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 baeaca2d65eb16b5ad7206b1e2f75ffb4b1a9afda03094778800fd72876c3a69. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8549-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8549-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8549-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
