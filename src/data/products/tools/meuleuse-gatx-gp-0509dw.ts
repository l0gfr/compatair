import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0509dw",
	"slug": "meuleuse-gatx-gp-0509dw",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0509DW",
	"brand": "GATX",
	"model": "GP-0509DW",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0509dw.svg",
		"alt": "Repères techniques : GATX GP-0509DW",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0509DW",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0509dw",
		"label": "Modèle GP-0509DW, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0509DW",
			"Free Speed": "20,000 rpm",
			"Collet (Option)": "1/4\" or 6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0509DW. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 20,000 rpm.",
			"Collet (Option) : 1/4\" or 6 mm.",
			"Motor Power : 260 W (0.35 HP).",
			"Exhaust : Rear.",
			"Air Consumption : 113 L/Min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Length : 140 mm.",
			"Weight : 0.55 kg."
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
				"october5-tools-gatx-product-2642-p1"
			]
		},
		{
			"label": "Collet (Option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2642-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "260 W (0.35 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-2642-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-2642-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/Min",
			"evidenceIds": [
				"october5-tools-gatx-product-2642-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-2642-p1"
			]
		},
		{
			"label": "Length",
			"value": "140 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2642-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.55 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-2642-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-2642-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0509DW",
			"sourceLabel": "GATX : fiche technique GP-0509DW",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 30cd646f110dfd554ec2c3af4cc44eb8199f5c0b9e1c6779b372c93ec3a5adc0. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-2642-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-2642-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-2642-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
