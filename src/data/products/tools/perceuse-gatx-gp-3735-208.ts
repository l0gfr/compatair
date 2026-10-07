import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3735-208",
	"slug": "perceuse-gatx-gp-3735-208",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3735-208",
	"brand": "GATX",
	"model": "GP-3735-208",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3735-208.svg",
		"alt": "Repères techniques : GATX GP-3735-208",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3735-208",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3735-208",
		"label": "Modèle GP-3735-208, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3735-208",
			"Chuck Size": "3/8\" Jacob Ind. Keyed Chuck",
			"Free Speed": "14,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3735-208. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 3/8\" Jacob Ind. Keyed Chuck.",
			"Free Speed : 14,000 rpm.",
			"Motor Power : 450 W (0.6 HP).",
			"Spindle Thread : 3/8\"-24.",
			"Air Consumption : 283 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Length : 185 mm.",
			"Net Weight : 1.1 kg.",
			"Vibration : 0.97m/s2.",
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
			"label": "Chuck Size",
			"value": "3/8\" Jacob Ind. Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "14,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "450 W (0.6 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		},
		{
			"label": "Spindle Thread",
			"value": "3/8\"-24",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "283 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		},
		{
			"label": "Length",
			"value": "185 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.1 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "0.97m/s2",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "88 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-2700-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-2700-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3735-208",
			"sourceLabel": "GATX : fiche technique GP-3735-208",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 364cc1d019ed5028c7c8daeff6082514e1f5f48dc95baff06e37a87a7febbff1. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-2700-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-2700-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-2700-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
