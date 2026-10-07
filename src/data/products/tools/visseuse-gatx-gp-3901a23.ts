import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-3901a23",
	"slug": "visseuse-gatx-gp-3901a23",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-3901A23",
	"brand": "GATX",
	"model": "GP-3901A23",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-3901a23.svg",
		"alt": "Repères techniques : GATX GP-3901A23",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3901A23",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3901a23",
		"label": "Modèle GP-3901A23, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3901A23",
			"Free Speed": "2,200 rpm",
			"Torque Range": "0.294 ~ 1.96 Nm ±3%"
		}
	},
	"editorial": {
		"overview": "GATX GP-3901A23. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 2,200 rpm.",
			"Torque Range : 0.294 ~ 1.96 Nm ±3%.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Weight : 0.58 KG."
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
			"value": "2,200 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7979-p1"
			]
		},
		{
			"label": "Torque Range",
			"value": "0.294 ~ 1.96 Nm ±3%",
			"evidenceIds": [
				"october5-tools-gatx-product-7979-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7979-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.58 KG",
			"evidenceIds": [
				"october5-tools-gatx-product-7979-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7979-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3901A23",
			"sourceLabel": "GATX : fiche technique GP-3901A23",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b4a032c545aed1f3681065796c2a9f4dbdf1121d68827e7045b312890a8d1b57. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7979-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7979-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7979-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
