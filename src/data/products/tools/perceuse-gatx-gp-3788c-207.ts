import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3788c-207",
	"slug": "perceuse-gatx-gp-3788c-207",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3788C-207",
	"brand": "GATX",
	"model": "GP-3788C-207",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3788c-207.svg",
		"alt": "Repères techniques : GATX GP-3788C-207",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3788C-207",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3788c-207",
		"label": "Modèle GP-3788C-207, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3788C-207",
			"Chuck Size": "1/2\" Jacobs Ind. Keyed Chuck",
			"Free Speed": "700 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3788C-207. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/2\" Jacobs Ind. Keyed Chuck.",
			"Free Speed : 700 rpm.",
			"Motor Power : 525 W (0.7 HP).",
			"Spindle Thread : 1/2\"-20.",
			"Air Consumption : 141.25 L/min.",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 210 mm.",
			"Net Weight : 1.7 kg.",
			"Vibration : <2.5 m/s².",
			"Noise Level : 85 dBA."
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
			"value": "1/2\" Jacobs Ind. Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "700 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "525 W (0.7 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		},
		{
			"label": "Spindle Thread",
			"value": "1/2\"-20",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "141.25 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		},
		{
			"label": "Length",
			"value": "210 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "85 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7695-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7695-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3788C-207",
			"sourceLabel": "GATX : fiche technique GP-3788C-207",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 3a6f7b664f48ee5bc89817496d5eb040133a7bddbe36c888819e006dc1e04031. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7695-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7695-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7695-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
