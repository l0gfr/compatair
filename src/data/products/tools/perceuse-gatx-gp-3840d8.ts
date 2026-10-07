import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3840d8",
	"slug": "perceuse-gatx-gp-3840d8",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3840D8",
	"brand": "GATX",
	"model": "GP-3840D8",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3840d8.svg",
		"alt": "Repères techniques : GATX GP-3840D8",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3840D8",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3840d8",
		"label": "Modèle GP-3840D8, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3840D8",
			"Chuck Size": "1/2\"",
			"Free Speed": "800 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3840D8. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/2\".",
			"Free Speed : 800 rpm.",
			"Motor Power : 375W (0.5HP).",
			"Air Consumption : 113 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 245 mm.",
			"Weight : 1.4 kg.",
			"Noise Level : 79 dBA."
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
			"value": "1/2\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8103-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8103-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "375W (0.5HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-8103-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8103-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8103-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8103-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8103-p1"
			]
		},
		{
			"label": "Length",
			"value": "245 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8103-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.4 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8103-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "79 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8103-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8103-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3840D8",
			"sourceLabel": "GATX : fiche technique GP-3840D8",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 a54aeb19633deed91415867bccb5dc5885aa7118f8087741baae2cfe19456647. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8103-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8103-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8103-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
