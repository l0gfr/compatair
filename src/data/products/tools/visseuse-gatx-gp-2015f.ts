import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2015f",
	"slug": "visseuse-gatx-gp-2015f",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2015F",
	"brand": "GATX",
	"model": "GP-2015F",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2015f.svg",
		"alt": "Repères techniques : GATX GP-2015F",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2015F",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2015f",
		"label": "Modèle GP-2015F, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2015F",
			"Free Speed": "1,800 rpm",
			"Capacity": "1/4\""
		}
	},
	"editorial": {
		"overview": "GATX GP-2015F. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 1,800 rpm.",
			"Capacity : 1/4\".",
			"Torque : 2 - 6 Nm.",
			"Torque control : External adjustable clutch.",
			"Power : 373 W (0.5 HP).",
			"Air Consumption : 113 L/Min..",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Speed Control : Variable Speed Trigger.",
			"Vibration : 1.2 m/s².",
			"Length : 210 mm.",
			"Net Weight : 1.1 kg."
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
			"value": "1,800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Capacity",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Torque",
			"value": "2 - 6 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Torque control",
			"value": "External adjustable clutch",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Power",
			"value": "373 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/Min.",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Speed Control",
			"value": "Variable Speed Trigger",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "1.2 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Length",
			"value": "210 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.1 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6805-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6805-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2015F",
			"sourceLabel": "GATX : fiche technique GP-2015F",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 2a4aa456b0f3e4b60dc72def566ab61d070eac05fd25899eb3ceabc01b3c4422. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6805-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6805-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6805-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
