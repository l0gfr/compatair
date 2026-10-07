import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2063",
	"slug": "visseuse-gatx-gp-2063",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2063",
	"brand": "GATX",
	"model": "GP-2063",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2063.svg",
		"alt": "Repères techniques : GATX GP-2063",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2063",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2063",
		"label": "Modèle GP-2063, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2063",
			"Capacity": "8 mm",
			"Free Speed": "9,500 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2063. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Capacity : 8 mm.",
			"Free Speed : 9,500 rpm.",
			"Max Torque : 270 Nm.",
			"Air Consumption : 240 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Weight : 1.42 kg."
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
			"label": "Capacity",
			"value": "8 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6431-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "9,500 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6431-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "270 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-6431-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "240 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6431-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6431-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.42 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6431-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6431-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2063",
			"sourceLabel": "GATX : fiche technique GP-2063",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 dfbdb542ffffeb5ba561e217409d5244338c4bac08310402ea44d01fc3605861. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6431-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6431-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6431-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
