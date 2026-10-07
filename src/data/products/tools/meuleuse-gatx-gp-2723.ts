import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2723",
	"slug": "meuleuse-gatx-gp-2723",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2723",
	"brand": "GATX",
	"model": "GP-2723",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2723.svg",
		"alt": "Repères techniques : GATX GP-2723",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2723",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2723",
		"label": "Modèle GP-2723, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2723",
			"Collet Size (option)": "3mm,6 mm, 1/8\" or 1/4\"",
			"Free Speed": "0~25,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2723. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet Size (option) : 3mm,6 mm, 1/8\" or 1/4\".",
			"Free Speed : 0~25,000 rpm.",
			"Power : 300 W  (0.4 HP).",
			"Air Consumption : 80 L/min.",
			"Air Pressure : 6.2 bar ( 90 psi ).",
			"Length : 305 mm.",
			"Weight : 0.65 kg.",
			"Noise Level : 79 dBA."
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
			"label": "Collet Size (option)",
			"value": "3mm,6 mm, 1/8\" or 1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5665-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "0~25,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5665-p1"
			]
		},
		{
			"label": "Power",
			"value": "300 W  (0.4 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-5665-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "80 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5665-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar ( 90 psi )",
			"evidenceIds": [
				"october5-tools-gatx-product-5665-p1"
			]
		},
		{
			"label": "Length",
			"value": "305 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5665-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.65 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5665-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "79 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-5665-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5665-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2723",
			"sourceLabel": "GATX : fiche technique GP-2723",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 7726f928ef3d852cd59d4c852b74dc94f4eda367e30def47be12274ca862da26. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5665-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5665-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5665-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
