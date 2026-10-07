import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2041b-51",
	"slug": "visseuse-gatx-gp-2041b-51",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2041B-51",
	"brand": "GATX",
	"model": "GP-2041B-51",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2041b-51.svg",
		"alt": "Repères techniques : GATX GP-2041B-51",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2041B-51",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2041b-51",
		"label": "Modèle GP-2041B-51, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2041B-51",
			"Housing": "Composite",
			"Free Speed": "1400 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2041B-51. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Housing : Composite.",
			"Free Speed : 1400 rpm.",
			"Torque Range : 10 ~ 80 kgf-cm / 1-8 Nm.",
			"Machine Screw : M3.6 ~ M6.9.",
			"Self-Tapping Screw : M2.8 ~ M5.7.",
			"Air Consumption : 390 l/min.",
			"Hose Dia. : 8 mm.",
			"Length : 305 mm.",
			"Weight : 1.21 kg."
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
			"label": "Housing",
			"value": "Composite",
			"evidenceIds": [
				"october5-tools-gatx-product-8671-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "1400 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8671-p1"
			]
		},
		{
			"label": "Torque Range",
			"value": "10 ~ 80 kgf-cm / 1-8 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-8671-p1"
			]
		},
		{
			"label": "Machine Screw",
			"value": "M3.6 ~ M6.9",
			"evidenceIds": [
				"october5-tools-gatx-product-8671-p1"
			]
		},
		{
			"label": "Self-Tapping Screw",
			"value": "M2.8 ~ M5.7",
			"evidenceIds": [
				"october5-tools-gatx-product-8671-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "390 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8671-p1"
			]
		},
		{
			"label": "Hose Dia.",
			"value": "8 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8671-p1"
			]
		},
		{
			"label": "Length",
			"value": "305 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8671-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.21 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8671-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8671-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2041B-51",
			"sourceLabel": "GATX : fiche technique GP-2041B-51",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 3b6cc9631a4dcc657e51e581ce2d92db5aebd869a6401c8097f00509d3dd14c6. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8671-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8671-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8671-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
