import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3778",
	"slug": "perceuse-gatx-gp-3778",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3778",
	"brand": "GATX",
	"model": "GP-3778",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3778.svg",
		"alt": "Repères techniques : GATX GP-3778",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3778",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3778",
		"label": "Modèle GP-3778, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3778",
			"Chuck Size": "3/8\"",
			"Free Speed": "20,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3778. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 3/8\".",
			"Free Speed : 20,000 rpm.",
			"Speed Control : Variable.",
			"Motor Power : 750 W (1.0 HP).",
			"Exhaust : Handle.",
			"Air Consumption : 113 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 175 mm.",
			"Net Weight : 0.95 kg.",
			"Noise Level : 85 dBA."
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
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "20,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Speed Control",
			"value": "Variable",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "750 W (1.0 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Handle",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Length",
			"value": "175 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.95 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "85 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8682-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8682-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3778",
			"sourceLabel": "GATX : fiche technique GP-3778",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d986e7f344462c8ff21d3d70803adc390033d226a871193c2866d060f6d19667. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8682-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8682-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8682-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
