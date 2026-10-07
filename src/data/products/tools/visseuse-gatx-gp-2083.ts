import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2083",
	"slug": "visseuse-gatx-gp-2083",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2083",
	"brand": "GATX",
	"model": "GP-2083",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2083.svg",
		"alt": "Repères techniques : GATX GP-2083",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2083",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2083",
		"label": "Modèle GP-2083, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2083",
			"Free Speed": "2,800 rpm",
			"Power": "447 W (0.6 HP)"
		}
	},
	"editorial": {
		"overview": "GATX GP-2083. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 2,800 rpm.",
			"Power : 447 W (0.6 HP).",
			"Work Torque : 4.5 Nm.",
			"Max Torque : 5.2 Nm.",
			"Air Consumption : 150 l/min.",
			"Length : 195 mm.",
			"Weight : 0.92 Kg."
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
			"value": "2,800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7254-p1"
			]
		},
		{
			"label": "Power",
			"value": "447 W (0.6 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7254-p1"
			]
		},
		{
			"label": "Work Torque",
			"value": "4.5 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-7254-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "5.2 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-7254-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "150 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7254-p1"
			]
		},
		{
			"label": "Length",
			"value": "195 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7254-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.92 Kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7254-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7254-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2083",
			"sourceLabel": "GATX : fiche technique GP-2083",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8de8c8a645b340abe344b0bdf052b58d151cc506f6619924a5c72fdffab6fd28. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7254-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7254-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7254-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
