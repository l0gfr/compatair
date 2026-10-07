import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-0672a-209",
	"slug": "perceuse-gatx-gp-0672a-209",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-0672A-209",
	"brand": "GATX",
	"model": "GP-0672A-209",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-0672a-209.svg",
		"alt": "Repères techniques : GATX GP-0672A-209",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0672A-209",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0672a-209",
		"label": "Modèle GP-0672A-209, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0672A-209",
			"Chuck Size": "1/4\" Jacobs Ind. Keyed Chuck",
			"Free Speed": "1,800 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0672A-209. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/4\" Jacobs Ind. Keyed Chuck.",
			"Free Speed : 1,800 rpm.",
			"Motor Power : 600 W  (0.8 HP).",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Length : 220 mm.",
			"Net Weight : 1.3 kg.",
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
			"value": "1/4\" Jacobs Ind. Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-8363-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "1,800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8363-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "600 W  (0.8 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-8363-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8363-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8363-p1"
			]
		},
		{
			"label": "Length",
			"value": "220 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8363-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.3 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8363-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "85 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8363-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8363-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0672A-209",
			"sourceLabel": "GATX : fiche technique GP-0672A-209",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 c976b090c76ad8beff0059a915e24fa9533f427a939f915fed87ead6f4e8029b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8363-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8363-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8363-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
