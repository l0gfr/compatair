import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-0684",
	"slug": "perceuse-gatx-gp-0684",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-0684",
	"brand": "GATX",
	"model": "GP-0684",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-0684.svg",
		"alt": "Repères techniques : GATX GP-0684",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0684",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0684",
		"label": "Modèle GP-0684, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0684",
			"Chuck Size": "1/4\"",
			"Free Speed": "2,800 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0684. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/4\".",
			"Free Speed : 2,800 rpm.",
			"Motor Power : 255 W (0.3 HP).",
			"Air Consumption : 450 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 150 mm.",
			"Net Weight : 0.7 kg.",
			"Packing /ctn. : 10 pcs /7.0 kg / 0.70 cuft."
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
				"october5-tools-gatx-product-5957-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "2,800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5957-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "255 W (0.3 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-5957-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "450 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5957-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5957-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5957-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5957-p1"
			]
		},
		{
			"label": "Length",
			"value": "150 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5957-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5957-p1"
			]
		},
		{
			"label": "Packing /ctn.",
			"value": "10 pcs /7.0 kg / 0.70 cuft",
			"evidenceIds": [
				"october5-tools-gatx-product-5957-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5957-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0684",
			"sourceLabel": "GATX : fiche technique GP-0684",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bb574753349caa7d0eab8415c66334ac1b7b05e51ded004f0e95e5072bf0caa6. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5957-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5957-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5957-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
