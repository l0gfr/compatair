import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2029",
	"slug": "visseuse-gatx-gp-2029",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2029",
	"brand": "GATX",
	"model": "GP-2029",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2029.svg",
		"alt": "Repères techniques : GATX GP-2029",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2029",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2029",
		"label": "Modèle GP-2029, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2029",
			"Hex. Shank Size": "1/4\"",
			"Free Speed": "9,500 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2029. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Hex. Shank Size : 1/4\".",
			"Free Speed : 9,500 rpm.",
			"Max Torque : 240 Nm (177  ft-lbs).",
			"Working Torque : 60 Nm (81 ft-lbs).",
			"Capacity(Bolt Size) : 6-9 mm.",
			"Air Consumption : 300 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Weight : 1.07 kg."
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
			"label": "Hex. Shank Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8388-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "9,500 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8388-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "240 Nm (177  ft-lbs)",
			"evidenceIds": [
				"october5-tools-gatx-product-8388-p1"
			]
		},
		{
			"label": "Working Torque",
			"value": "60 Nm (81 ft-lbs)",
			"evidenceIds": [
				"october5-tools-gatx-product-8388-p1"
			]
		},
		{
			"label": "Capacity(Bolt Size)",
			"value": "6-9 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8388-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "300 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8388-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8388-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.07 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8388-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8388-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2029",
			"sourceLabel": "GATX : fiche technique GP-2029",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8e86e677da7601647cf193ff1f38680b54bb03b70cd39a85bf9bea73d2e31cc0. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8388-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8388-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8388-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
