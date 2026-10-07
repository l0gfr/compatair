import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-3918a18",
	"slug": "visseuse-gatx-gp-3918a18",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-3918A18",
	"brand": "GATX",
	"model": "GP-3918A18",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-3918a18.svg",
		"alt": "Repères techniques : GATX GP-3918A18",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3918A18",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3918a18",
		"label": "Modèle GP-3918A18, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3918A18",
			"Free Speed": "1,700 rpm",
			"Torque Range": "1 ~ 7 Nm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3918A18. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 1,700 rpm.",
			"Torque Range : 1 ~ 7 Nm.",
			"Air Pressure : 6.0 bar (85 psi).",
			"Air Consumption : 650 l/min.",
			"Overall Length : 195 mm.",
			"Net Weight : 1.1 kg.",
			"Noise Level : 84 dBA.",
			"Machine Screw : M2.5-M5.5.",
			"Self-Tapping Screw : M2.5-M5.5."
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
			"value": "1,700 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7912-p1"
			]
		},
		{
			"label": "Torque Range",
			"value": "1 ~ 7 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-7912-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.0 bar (85 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7912-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "650 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7912-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "195 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7912-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.1 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7912-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "84 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7912-p1"
			]
		},
		{
			"label": "Machine Screw",
			"value": "M2.5-M5.5",
			"evidenceIds": [
				"october5-tools-gatx-product-7912-p1"
			]
		},
		{
			"label": "Self-Tapping Screw",
			"value": "M2.5-M5.5",
			"evidenceIds": [
				"october5-tools-gatx-product-7912-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7912-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3918A18",
			"sourceLabel": "GATX : fiche technique GP-3918A18",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 c47e21d1917b3a5a8903c15b71fc919b2d69efe6eece7bf154d93db2c5aa83aa. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7912-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7912-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7912-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
