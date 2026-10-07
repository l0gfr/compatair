import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2721",
	"slug": "meuleuse-gatx-gp-2721",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2721",
	"brand": "GATX",
	"model": "GP-2721",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2721.svg",
		"alt": "Repères techniques : GATX GP-2721",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2721",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2721",
		"label": "Modèle GP-2721, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2721",
			"Collet (Option)": "1/4\" or 6 mm",
			"Free Speed": "30,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2721. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (Option) : 1/4\" or 6 mm.",
			"Free Speed : 30,000 rpm.",
			"Power : 300 w (0.4 HP).",
			"Exhaust : Front.",
			"Air Consumption : 390 l/min.",
			"Air Pressure : 6.2 bar (90 psi ).",
			"Max Run-Out : 0.08 mm.",
			"Air Inlet : 1/4\".",
			"Length : 148 mm.",
			"Weight : 0.40 kg.",
			"Noise Level : 88.7 dBA."
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
			"label": "Collet (Option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "30,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		},
		{
			"label": "Power",
			"value": "300 w (0.4 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Front",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "390 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi )",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		},
		{
			"label": "Max Run-Out",
			"value": "0.08 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		},
		{
			"label": "Length",
			"value": "148 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.40 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "88.7 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-5664-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5664-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2721",
			"sourceLabel": "GATX : fiche technique GP-2721",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 a2494bb25a6f819bdbb28549547cee0f4655901beec182760a6295900fe64cab. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5664-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5664-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5664-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
