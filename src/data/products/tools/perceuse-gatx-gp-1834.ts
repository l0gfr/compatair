import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1834",
	"slug": "perceuse-gatx-gp-1834",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1834",
	"brand": "GATX",
	"model": "GP-1834",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1834.svg",
		"alt": "Repères techniques : GATX GP-1834",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1834",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1834",
		"label": "Modèle GP-1834, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1834",
			"Chuck Size": "3/8\"",
			"Free Speed": "1,800 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1834. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 3/8\".",
			"Free Speed : 1,800 rpm.",
			"Air Consumption : 113 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Net Weight : 1.2 kg.",
			"Noise Level : 86 dBA.",
			"Vibration : <2.4 m/s²."
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
				"october5-tools-gatx-product-5052-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "1,800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5052-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5052-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5052-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5052-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5052-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5052-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "86 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-5052-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "<2.4 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-5052-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5052-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1834",
			"sourceLabel": "GATX : fiche technique GP-1834",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 2df5ca70c4e77c4123b60d5e1985f0f6c5d74a532c5cc3900eb53f41f1dd7dbe. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5052-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5052-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5052-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
