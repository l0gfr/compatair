import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0530mw",
	"slug": "meuleuse-gatx-gp-0530mw",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0530MW",
	"brand": "GATX",
	"model": "GP-0530MW",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0530mw.svg",
		"alt": "Repères techniques : GATX GP-0530MW",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0530MW",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0530mw",
		"label": "Modèle GP-0530MW, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0530MW",
			"Collet (option)": "1/4\" or 6 mm",
			"Free Speed": "20,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0530MW. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (option) : 1/4\" or 6 mm.",
			"Free Speed : 20,000 rpm.",
			"Power : 0.20 HP (0.15 kw).",
			"Exhaust : Front.",
			"Air Consumption : 85 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Overall Length : 124 mm.",
			"Weight : 0.34 kg."
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
			"label": "Collet (option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-4609-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "20,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-4609-p1"
			]
		},
		{
			"label": "Power",
			"value": "0.20 HP (0.15 kw)",
			"evidenceIds": [
				"october5-tools-gatx-product-4609-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Front",
			"evidenceIds": [
				"october5-tools-gatx-product-4609-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "85 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-4609-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-4609-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "124 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-4609-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.34 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-4609-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-4609-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0530MW",
			"sourceLabel": "GATX : fiche technique GP-0530MW",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 ff0d0480f9103edf1a4ea020a625ac3719a72c90b16328cbaf46b4f1b1ad09cc. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-4609-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-4609-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-4609-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
