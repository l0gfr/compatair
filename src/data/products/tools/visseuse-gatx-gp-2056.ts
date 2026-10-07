import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2056",
	"slug": "visseuse-gatx-gp-2056",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2056",
	"brand": "GATX",
	"model": "GP-2056",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2056.svg",
		"alt": "Repères techniques : GATX GP-2056",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2056",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2056",
		"label": "Modèle GP-2056, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2056",
			"Capacity": "5  mm",
			"Free Speed": "13,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2056. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Capacity : 5  mm.",
			"Free Speed : 13,000 rpm.",
			"Max Torque : 68 Nm (50  ft-lb).",
			"Working Torque : 40 Nm (30  ft-lb).",
			"Overall Length : 170 mm.",
			"Air Consumption : 84 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Min. Hose Size : 3/8\".",
			"Net Weight : 0.7 kg.",
			"Sound Pressure Level : 85 dBA.",
			"Vibration : <2.5 m/s²."
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
			"value": "5  mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "13,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "68 Nm (50  ft-lb)",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Working Torque",
			"value": "40 Nm (30  ft-lb)",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "170 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "84 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Min. Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Sound Pressure Level",
			"value": "85 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-6116-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6116-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2056",
			"sourceLabel": "GATX : fiche technique GP-2056",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 5a559100b22e8cd025b4363970cf48920b5d178ad08d8aa54108caa5373a3811. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6116-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6116-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6116-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
