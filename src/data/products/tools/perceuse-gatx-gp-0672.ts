import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-0672",
	"slug": "perceuse-gatx-gp-0672",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-0672",
	"brand": "GATX",
	"model": "GP-0672",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-0672.svg",
		"alt": "Repères techniques : GATX GP-0672",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0672",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0672",
		"label": "Modèle GP-0672, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0672",
			"Chuck Size": "3/8\"",
			"Free Speed": "2,600 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0672. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 3/8\".",
			"Free Speed : 2,600 rpm.",
			"Motor Power : 450 W  (0.6 HP).",
			"Spindle Thread : 3/8\"-24.",
			"Air Consumption : 113 L/min.",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 200 mm.",
			"Net Weight : 1.2 kg."
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
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7691-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "2,600 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7691-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "450 W  (0.6 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7691-p1"
			]
		},
		{
			"label": "Spindle Thread",
			"value": "3/8\"-24",
			"evidenceIds": [
				"october5-tools-gatx-product-7691-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7691-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7691-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7691-p1"
			]
		},
		{
			"label": "Length",
			"value": "200 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7691-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7691-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7691-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0672",
			"sourceLabel": "GATX : fiche technique GP-0672",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b522e22b4e0d0e332febafdc4ad684ea0521e5c9dd9691e8b38886e12b1fa447. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7691-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7691-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7691-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
