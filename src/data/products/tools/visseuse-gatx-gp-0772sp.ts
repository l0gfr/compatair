import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-0772sp",
	"slug": "visseuse-gatx-gp-0772sp",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-0772SP",
	"brand": "GATX",
	"model": "GP-0772SP",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-0772sp.svg",
		"alt": "Repères techniques : GATX GP-0772SP",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0772SP",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0772sp",
		"label": "Modèle GP-0772SP, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0772SP",
			"Mechanism": "Pin Clutch",
			"Free Speed": "10,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0772SP. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Mechanism : Pin Clutch.",
			"Free Speed : 10,000 rpm.",
			"Bolt Capacity : 6~12mm.",
			"Max Torque : 216 Nm (160 ft.lb).",
			"Air Consumption : 96 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 149 mm.",
			"Net Weight : 1.3 kg."
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
			"label": "Mechanism",
			"value": "Pin Clutch",
			"evidenceIds": [
				"october5-tools-gatx-product-8378-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "10,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8378-p1"
			]
		},
		{
			"label": "Bolt Capacity",
			"value": "6~12mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8378-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "216 Nm (160 ft.lb)",
			"evidenceIds": [
				"october5-tools-gatx-product-8378-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "96 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8378-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8378-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8378-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8378-p1"
			]
		},
		{
			"label": "Length",
			"value": "149 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8378-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.3 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8378-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8378-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0772SP",
			"sourceLabel": "GATX : fiche technique GP-0772SP",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 04a6c2de59227fe32dc123a5123fcbdcd0bf4c9b3f6902690387b534b6d33761. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8378-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8378-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8378-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
