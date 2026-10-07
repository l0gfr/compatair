import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2085",
	"slug": "visseuse-gatx-gp-2085",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2085",
	"brand": "GATX",
	"model": "GP-2085",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2085.svg",
		"alt": "Repères techniques : GATX GP-2085",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2085",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2085",
		"label": "Modèle GP-2085, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2085",
			"Free Speed": "2,000 rpm",
			"Power": "447 W (0.6 HP)"
		}
	},
	"editorial": {
		"overview": "GATX GP-2085. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 2,000 rpm.",
			"Power : 447 W (0.6 HP).",
			"Max Torque : 10 Nm.",
			"Air Consumption : 99 l/min.",
			"Length : 200 mm.",
			"Weight : 0.9 Kg.",
			"Sound Pressure : 85 dBA."
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
			"value": "2,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7260-p1"
			]
		},
		{
			"label": "Power",
			"value": "447 W (0.6 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7260-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "10 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-7260-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "99 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7260-p1"
			]
		},
		{
			"label": "Length",
			"value": "200 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7260-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.9 Kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7260-p1"
			]
		},
		{
			"label": "Sound Pressure",
			"value": "85 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7260-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7260-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2085",
			"sourceLabel": "GATX : fiche technique GP-2085",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 5e6586f3bd0131636432f2a3690c22da0a6c4044398df2f588022ee6e5082f34. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7260-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7260-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7260-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
