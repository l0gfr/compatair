import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3792-209",
	"slug": "perceuse-gatx-gp-3792-209",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3792-209",
	"brand": "GATX",
	"model": "GP-3792-209",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3792-209.svg",
		"alt": "Repères techniques : GATX GP-3792-209",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3792-209",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3792-209",
		"label": "Modèle GP-3792-209, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3792-209",
			"Chuck": "1/4\" Jacobs Ind. Keyed Chuck",
			"Free Speed": "4,200 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3792-209. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck : 1/4\" Jacobs Ind. Keyed Chuck.",
			"Free Speed : 4,200 rpm.",
			"Motor Power : 488 W (0.65 HP).",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Consumption : 147 L/min.",
			"Air Inlet : 1/4\".",
			"Hose Size : 5/16\".",
			"Length : 145 mm.",
			"Net Weight : 0.7 kg."
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
			"label": "Chuck",
			"value": "1/4\" Jacobs Ind. Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-7495-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "4,200 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7495-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "488 W (0.65 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7495-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7495-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "147 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7495-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7495-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "5/16\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7495-p1"
			]
		},
		{
			"label": "Length",
			"value": "145 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7495-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7495-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7495-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3792-209",
			"sourceLabel": "GATX : fiche technique GP-3792-209",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 456dc5069098e2bee970ed19b777721147ea17a8e93b4124f1f1f776e8b04a30. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7495-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7495-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7495-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
