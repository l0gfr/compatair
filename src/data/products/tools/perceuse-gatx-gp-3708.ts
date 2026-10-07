import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3708",
	"slug": "perceuse-gatx-gp-3708",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3708",
	"brand": "GATX",
	"model": "GP-3708",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3708.svg",
		"alt": "Repères techniques : GATX GP-3708",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3708",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3708",
		"label": "Modèle GP-3708, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3708",
			"Chuck Size": "1/4\"",
			"Free Speed": "2,800 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3708. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/4\".",
			"Free Speed : 2,800 rpm.",
			"Gear Type : Full Cage Gear.",
			"Spindle Thread : 3/8\"-24.",
			"Air Consumption : 113 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Length : 155 mm.",
			"Net Weight : 0.8 kg."
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
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5740-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "2,800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5740-p1"
			]
		},
		{
			"label": "Gear Type",
			"value": "Full Cage Gear",
			"evidenceIds": [
				"october5-tools-gatx-product-5740-p1"
			]
		},
		{
			"label": "Spindle Thread",
			"value": "3/8\"-24",
			"evidenceIds": [
				"october5-tools-gatx-product-5740-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5740-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5740-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5740-p1"
			]
		},
		{
			"label": "Length",
			"value": "155 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5740-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.8 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5740-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5740-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3708",
			"sourceLabel": "GATX : fiche technique GP-3708",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 ea760e4e3009630aae2f8e3ba758b5aa38cbf2a1988666a0330ce5dc0393aff8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5740-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5740-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5740-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
