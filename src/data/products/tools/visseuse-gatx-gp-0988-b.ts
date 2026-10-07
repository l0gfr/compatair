import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-0988-b",
	"slug": "visseuse-gatx-gp-0988-b",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-0988-B",
	"brand": "GATX",
	"model": "GP-0988-B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-0988-b.svg",
		"alt": "Repères techniques : GATX GP-0988-B",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0988-B",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0988-b",
		"label": "Modèle GP-0988-B, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0988-B",
			"Capacity": "1/4\" (6 mm)",
			"Free Speed": "800 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0988-B. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Capacity : 1/4\" (6 mm).",
			"Free Speed : 800 rpm.",
			"Torque : 4.5 ~ 9.6 Nm (40 ~ 85 in.lbs).",
			"Air Consumption : 113 l/min.",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 225 mm.",
			"Net Weight : 1.35 KG."
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
			"label": "Capacity",
			"value": "1/4\" (6 mm)",
			"evidenceIds": [
				"october5-tools-gatx-product-3292-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-3292-p1"
			]
		},
		{
			"label": "Torque",
			"value": "4.5 ~ 9.6 Nm (40 ~ 85 in.lbs)",
			"evidenceIds": [
				"october5-tools-gatx-product-3292-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-3292-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-3292-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-3292-p1"
			]
		},
		{
			"label": "Length",
			"value": "225 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-3292-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.35 KG",
			"evidenceIds": [
				"october5-tools-gatx-product-3292-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-3292-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0988-B",
			"sourceLabel": "GATX : fiche technique GP-0988-B",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 de40f6acda46a7db4ab7a81ef41e9baaba717b89fbea2a30943d29b00e57f51c. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-3292-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-3292-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-3292-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
