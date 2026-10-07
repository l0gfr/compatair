import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-0907",
	"slug": "visseuse-gatx-gp-0907",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-0907",
	"brand": "GATX",
	"model": "GP-0907",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-0907.svg",
		"alt": "Repères techniques : GATX GP-0907",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0907",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0907",
		"label": "Modèle GP-0907, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0907",
			"Free Speed": "1,800 rpm",
			"Shank Size": "1/4\" (Hex)"
		}
	},
	"editorial": {
		"overview": "GATX GP-0907. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 1,800 rpm.",
			"Shank Size : 1/4\" (Hex).",
			"Torque : 3 ~ 8 Nm (30 ~ 70 in.lbs).",
			"Air Consumption : 113 L/min.",
			"Air Inlet : 1/4\".",
			"Air Pressure : 6.2 bar (90 psi).",
			"Length : 205 mm.",
			"Net Weight : 1.1 kg."
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
			"value": "1,800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8462-p1"
			]
		},
		{
			"label": "Shank Size",
			"value": "1/4\" (Hex)",
			"evidenceIds": [
				"october5-tools-gatx-product-8462-p1"
			]
		},
		{
			"label": "Torque",
			"value": "3 ~ 8 Nm (30 ~ 70 in.lbs)",
			"evidenceIds": [
				"october5-tools-gatx-product-8462-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8462-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8462-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8462-p1"
			]
		},
		{
			"label": "Length",
			"value": "205 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8462-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.1 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8462-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8462-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0907",
			"sourceLabel": "GATX : fiche technique GP-0907",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9fd879c83d6af2b2ede053913c83af71a38d09e988467b8433df617418925383. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8462-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8462-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8462-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
