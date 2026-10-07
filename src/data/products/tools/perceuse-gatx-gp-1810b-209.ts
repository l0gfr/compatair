import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1810b-209",
	"slug": "perceuse-gatx-gp-1810b-209",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1810B-209",
	"brand": "GATX",
	"model": "GP-1810B-209",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1810b-209.svg",
		"alt": "Repères techniques : GATX GP-1810B-209",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1810B-209",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1810b-209",
		"label": "Modèle GP-1810B-209, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1810B-209",
			"Chuck Size": "1/4\" Jacobs Ind. Keyed Chuck",
			"Free Speed": "6,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1810B-209. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/4\" Jacobs Ind. Keyed Chuck.",
			"Free Speed : 6,000 rpm.",
			"Motor Power : 590 W (0.8 HP).",
			"Max Torque : 4.4 Nm (3.2 ft.lb).",
			"Air Consumption : 367 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Length : 176 mm.",
			"Net Weight : 1.2 kg."
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
			"value": "1/4\" Jacobs Ind. Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-5343-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "6,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5343-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "590 W (0.8 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-5343-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "4.4 Nm (3.2 ft.lb)",
			"evidenceIds": [
				"october5-tools-gatx-product-5343-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "367 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5343-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5343-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5343-p1"
			]
		},
		{
			"label": "Length",
			"value": "176 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5343-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5343-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5343-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1810B-209",
			"sourceLabel": "GATX : fiche technique GP-1810B-209",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 11adb8cf01f1e782c3155dea33b0dc1a476dc9ea857621ed277ac4068131e2ed. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5343-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5343-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5343-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
