import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2059",
	"slug": "visseuse-gatx-gp-2059",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2059",
	"brand": "GATX",
	"model": "GP-2059",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2059.svg",
		"alt": "Repères techniques : GATX GP-2059",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2059",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2059",
		"label": "Modèle GP-2059, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2059",
			"Free Speed": "1,000 rpm",
			"Capacity": "5 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2059. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 1,000 rpm.",
			"Capacity : 5 mm.",
			"Air Consumption : 180  L/Min..",
			"Length : 172 mm.",
			"Weight : 1.1 KG."
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
			"value": "1,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6960-p1"
			]
		},
		{
			"label": "Capacity",
			"value": "5 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6960-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "180  L/Min.",
			"evidenceIds": [
				"october5-tools-gatx-product-6960-p1"
			]
		},
		{
			"label": "Length",
			"value": "172 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6960-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.1 KG",
			"evidenceIds": [
				"october5-tools-gatx-product-6960-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6960-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2059",
			"sourceLabel": "GATX : fiche technique GP-2059",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 c4f3a8bec17ec04872e0f997abc4017852b765563d106805cbdb16f8e5b1fe4b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6960-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6960-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6960-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
