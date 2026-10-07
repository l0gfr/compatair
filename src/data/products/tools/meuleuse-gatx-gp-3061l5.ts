import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3061l5",
	"slug": "meuleuse-gatx-gp-3061l5",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3061L5",
	"brand": "GATX",
	"model": "GP-3061L5",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3061l5.svg",
		"alt": "Repères techniques : GATX GP-3061L5",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3061L5",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3061l5",
		"label": "Modèle GP-3061L5, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3061L5",
			"Free Speed": "24,000 rpm",
			"Collet (Option)": "1/4\" or  6mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3061L5. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 24,000 rpm.",
			"Collet (Option) : 1/4\" or  6mm.",
			"Motor Power : 262 W (0.35 HP).",
			"Exhaust : Rear Exhaust.",
			"Air Consumption : 76 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 250 mm.",
			"Net Weight : 0.6 kg.",
			"Noise Level : 89 dBA."
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
			"value": "24,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		},
		{
			"label": "Collet (Option)",
			"value": "1/4\" or  6mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "262 W (0.35 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear Exhaust",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "76 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		},
		{
			"label": "Length",
			"value": "250 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.6 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "89 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8641-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8641-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3061L5",
			"sourceLabel": "GATX : fiche technique GP-3061L5",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 80586062883d2ae67c00200dc9b26bd5fa0517ea79e03f1af5056e4ef9640a18. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8641-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8641-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8641-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
