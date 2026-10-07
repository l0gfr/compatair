import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2216",
	"slug": "meuleuse-gatx-gp-2216",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2216",
	"brand": "GATX",
	"model": "GP-2216",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2216.svg",
		"alt": "Repères techniques : GATX GP-2216",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2216",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2216",
		"label": "Modèle GP-2216, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2216",
			"Free Speed": "30,000 rpm",
			"Collet": "6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2216. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 30,000 rpm.",
			"Collet : 6 mm.",
			"Power : 225 W (0.3 HP).",
			"Exhaust : Front Exhaust.",
			"Air Consumption : 424 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Length : 125 mm.",
			"Net Weight : 0.32 kg."
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
			"value": "30,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7881-p1"
			]
		},
		{
			"label": "Collet",
			"value": "6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7881-p1"
			]
		},
		{
			"label": "Power",
			"value": "225 W (0.3 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7881-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Front Exhaust",
			"evidenceIds": [
				"october5-tools-gatx-product-7881-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "424 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7881-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7881-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7881-p1"
			]
		},
		{
			"label": "Length",
			"value": "125 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7881-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.32 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7881-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7881-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2216",
			"sourceLabel": "GATX : fiche technique GP-2216",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 211c1e13e3fab7ba06edadf9cf8207960b0bc71f04949826e384c5bcbf896d04. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7881-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7881-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7881-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
