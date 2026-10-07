import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3730-207",
	"slug": "perceuse-gatx-gp-3730-207",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3730-207",
	"brand": "GATX",
	"model": "GP-3730-207",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3730-207.svg",
		"alt": "Repères techniques : GATX GP-3730-207",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3730-207",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3730-207",
		"label": "Modèle GP-3730-207, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3730-207",
			"Chuck Size": "1/2\" Jacobs Ind. Keyed Chuck",
			"Free Speed": "1,100 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3730-207. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/2\" Jacobs Ind. Keyed Chuck.",
			"Free Speed : 1,100 rpm.",
			"Spindle Thread : 3/8\"-24.",
			"Air Consumption : 127 L/min.",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 238 mm.",
			"Net Weight : 1.7 kg."
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
			"value": "1/2\" Jacobs Ind. Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-6565-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "1,100 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6565-p1"
			]
		},
		{
			"label": "Spindle Thread",
			"value": "3/8\"-24",
			"evidenceIds": [
				"october5-tools-gatx-product-6565-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "127 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6565-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6565-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6565-p1"
			]
		},
		{
			"label": "Length",
			"value": "238 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6565-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6565-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6565-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3730-207",
			"sourceLabel": "GATX : fiche technique GP-3730-207",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bd207aafc0a7dadb2b3efa61bf6c6151edab4660067bd47fc97aebc97b3be62b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6565-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6565-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6565-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
