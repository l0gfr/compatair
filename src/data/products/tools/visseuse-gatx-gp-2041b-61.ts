import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2041b-61",
	"slug": "visseuse-gatx-gp-2041b-61",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2041B-61",
	"brand": "GATX",
	"model": "GP-2041B-61",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2041b-61.svg",
		"alt": "Repères techniques : GATX GP-2041B-61",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2041B-61",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2041b-61",
		"label": "Modèle GP-2041B-61, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2041B-61",
			"Housing": "Composite",
			"Free Speed": "550 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2041B-61. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Housing : Composite.",
			"Free Speed : 550 rpm.",
			"Torque Range : 30~120 kgf-cm / 3-12 Nm.",
			"Machine Screw : M5.1 ~ M8.0.",
			"Self-Tapping Screw : M4.2 ~ M6.4.",
			"Air Consumption : 450 l/min.",
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
				"october5-tools-gatx-product-8672-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "550 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8672-p1"
			]
		},
		{
			"label": "Torque Range",
			"value": "30~120 kgf-cm / 3-12 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-8672-p1"
			]
		},
		{
			"label": "Machine Screw",
			"value": "M5.1 ~ M8.0",
			"evidenceIds": [
				"october5-tools-gatx-product-8672-p1"
			]
		},
		{
			"label": "Self-Tapping Screw",
			"value": "M4.2 ~ M6.4",
			"evidenceIds": [
				"october5-tools-gatx-product-8672-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "450 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8672-p1"
			]
		},
		{
			"label": "Hose Dia.",
			"value": "8 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8672-p1"
			]
		},
		{
			"label": "Length",
			"value": "305 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8672-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.21 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8672-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8672-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2041B-61",
			"sourceLabel": "GATX : fiche technique GP-2041B-61",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 506f0ae3148aad0c74af4c6df420f33c8f96c3be5db4813f5e1044da84ec0f59. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8672-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8672-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8672-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
