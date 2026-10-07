import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-3917c14",
	"slug": "visseuse-gatx-gp-3917c14",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-3917C14",
	"brand": "GATX",
	"model": "GP-3917C14",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-3917c14.svg",
		"alt": "Repères techniques : GATX GP-3917C14",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3917C14",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3917c14",
		"label": "Modèle GP-3917C14, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3917C14",
			"Free Speed": "230 rpm",
			"Torque Range": "5 ~ 28 Nm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3917C14. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 230 rpm.",
			"Torque Range : 5 ~ 28 Nm.",
			"Air Pressure : 6.0 bar (85 psi).",
			"Air Consumption : 350 l/min.",
			"Overall Length : 240 mm.",
			"Net Weight : 1.2 kg.",
			"Noise Level : 85 dBA.",
			"Machine Screw : M5.5-M10.5.",
			"Self-Tapping Screw : M4.4-M8.2."
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
			"value": "230 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7939-p1"
			]
		},
		{
			"label": "Torque Range",
			"value": "5 ~ 28 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-7939-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.0 bar (85 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7939-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "350 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7939-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "240 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7939-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7939-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "85 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7939-p1"
			]
		},
		{
			"label": "Machine Screw",
			"value": "M5.5-M10.5",
			"evidenceIds": [
				"october5-tools-gatx-product-7939-p1"
			]
		},
		{
			"label": "Self-Tapping Screw",
			"value": "M4.4-M8.2",
			"evidenceIds": [
				"october5-tools-gatx-product-7939-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7939-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3917C14",
			"sourceLabel": "GATX : fiche technique GP-3917C14",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 1755b86d9b05b97b7773adc4e3fcb8b807aef2f8ffbb06b03f9b3a646d02fd30. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7939-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7939-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7939-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
