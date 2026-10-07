import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-0650-b-205",
	"slug": "perceuse-gatx-gp-0650-b-205",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-0650-B-205",
	"brand": "GATX",
	"model": "GP-0650-B-205",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-0650-b-205.svg",
		"alt": "Repères techniques : GATX GP-0650-B-205",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0650-B-205",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0650-b-205",
		"label": "Modèle GP-0650-B-205, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0650-B-205",
			"Chuck Size": "3/8\" Jacob Standard Keyed Chuck",
			"Free Speed": "2,600 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0650-B-205. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 3/8\" Jacob Standard Keyed Chuck.",
			"Free Speed : 2,600 rpm.",
			"Speed Control : 2 Speeds.",
			"Motor Power : 370 W (0.5 HP).",
			"Gear Type : Planetary Gear.",
			"Air Consumption : 113 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
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
			"value": "3/8\" Jacob Standard Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-2712-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "2,600 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-2712-p1"
			]
		},
		{
			"label": "Speed Control",
			"value": "2 Speeds",
			"evidenceIds": [
				"october5-tools-gatx-product-2712-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "370 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-2712-p1"
			]
		},
		{
			"label": "Gear Type",
			"value": "Planetary Gear",
			"evidenceIds": [
				"october5-tools-gatx-product-2712-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-2712-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-2712-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.3 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-2712-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-2712-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0650-B-205",
			"sourceLabel": "GATX : fiche technique GP-0650-B-205",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 042838d0603812f7d40e0b969b88a666737ebbda9986aa50105b90d255b5df04. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-2712-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-2712-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-2712-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
