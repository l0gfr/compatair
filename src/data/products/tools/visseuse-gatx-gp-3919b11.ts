import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-3919b11",
	"slug": "visseuse-gatx-gp-3919b11",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-3919B11",
	"brand": "GATX",
	"model": "GP-3919B11",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-3919b11.svg",
		"alt": "Repères techniques : GATX GP-3919B11",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3919B11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3919b11",
		"label": "Modèle GP-3919B11, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3919B11",
			"Free Speed": "750 rpm",
			"Torque Range": "1 ~ 9 Nm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3919B11. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 750 rpm.",
			"Torque Range : 1 ~ 9 Nm.",
			"Air Pressure : 6.0 bar (85 psi).",
			"Air Consumption : 650 l/min.",
			"Overall Length : 260 mm.",
			"Net Weight : 1.2 kg.",
			"Noise Level : 84 dBA.",
			"Machine Screw : M3.6-M6.4.",
			"Self-Tapping Screw : M2.6-M5.4."
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
			"value": "750 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7924-p1"
			]
		},
		{
			"label": "Torque Range",
			"value": "1 ~ 9 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-7924-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.0 bar (85 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7924-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "650 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7924-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "260 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7924-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7924-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "84 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7924-p1"
			]
		},
		{
			"label": "Machine Screw",
			"value": "M3.6-M6.4",
			"evidenceIds": [
				"october5-tools-gatx-product-7924-p1"
			]
		},
		{
			"label": "Self-Tapping Screw",
			"value": "M2.6-M5.4",
			"evidenceIds": [
				"october5-tools-gatx-product-7924-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7924-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3919B11",
			"sourceLabel": "GATX : fiche technique GP-3919B11",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 35ec5b47af74c071593f30092b3965a6e0644778dd34645e9dc9af7a50f32287. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7924-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7924-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7924-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
