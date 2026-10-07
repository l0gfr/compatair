import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3830",
	"slug": "meuleuse-gatx-gp-3830",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3830",
	"brand": "GATX",
	"model": "GP-3830",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3830.svg",
		"alt": "Repères techniques : GATX GP-3830",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3830",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3830",
		"label": "Modèle GP-3830, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3830",
			"Collet Capacity": "6 mm",
			"Burr Head Capacity": "22 mm (7/8\")"
		}
	},
	"editorial": {
		"overview": "GATX GP-3830. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet Capacity : 6 mm.",
			"Burr Head Capacity : 22 mm (7/8\").",
			"Grinding Wheel Capacity : 32 mm (1-1/4\").",
			"Free Speed : 18,000 RPM.",
			"Power : 600 W (0.80 HP).",
			"Air Consumption : 690 L/Min..",
			"Air Pressure : 6.2 bar (90 psi).",
			"Max Run-Out : < 0.15 mm.",
			"Air Inlet : 9.5 mm (3/8\").",
			"Min. Hose Size : 9.5 mm (3/8\").",
			"Length : 220 mm.",
			"Net Weight : 0.95 Kg."
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
			"label": "Collet Capacity",
			"value": "6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Burr Head Capacity",
			"value": "22 mm (7/8\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Grinding Wheel Capacity",
			"value": "32 mm (1-1/4\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "18,000 RPM",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Power",
			"value": "600 W (0.80 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "690 L/Min.",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Max Run-Out",
			"value": "< 0.15 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "9.5 mm (3/8\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Min. Hose Size",
			"value": "9.5 mm (3/8\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Length",
			"value": "220 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.95 Kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7212-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7212-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3830",
			"sourceLabel": "GATX : fiche technique GP-3830",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 faaef69a49d26ae321c90509b722f6836f2a6f5049b7dde38c56331aa263225f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7212-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7212-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7212-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
