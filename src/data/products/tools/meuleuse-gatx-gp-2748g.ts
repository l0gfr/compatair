import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2748g",
	"slug": "meuleuse-gatx-gp-2748g",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2748G",
	"brand": "GATX",
	"model": "GP-2748G",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2748g.svg",
		"alt": "Repères techniques : GATX GP-2748G",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2748G",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2748g",
		"label": "Modèle GP-2748G, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2748G",
			"Collet (Options)": "3, 6 mm ; 1/4\"",
			"Free Speed": "20,000 RPM"
		}
	},
	"editorial": {
		"overview": "GATX GP-2748G. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (Options) : 3, 6 mm ; 1/4\".",
			"Free Speed : 20,000 RPM.",
			"Power : 335 W (0.45 HP).",
			"Max Run-Out : < 0.15 mm.",
			"Air Consumption : 127 L/Min..",
			"Air Inlet : 1/4\".",
			"Hose Size : 9.5 mm (3/8\").",
			"Exhaust : 360° Adjustable Front Side Exhaust.",
			"Sound Pressure : 84.5 dBA.",
			"Vibration : < 2.5 m/s².",
			"Length : 165 mm.",
			"Net Weight : 0.7 kg."
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
			"label": "Collet (Options)",
			"value": "3, 6 mm ; 1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "20,000 RPM",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Power",
			"value": "335 W (0.45 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Max Run-Out",
			"value": "< 0.15 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "127 L/Min.",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "9.5 mm (3/8\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "360° Adjustable Front Side Exhaust",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Sound Pressure",
			"value": "84.5 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "< 2.5 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Length",
			"value": "165 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7071-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7071-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2748G",
			"sourceLabel": "GATX : fiche technique GP-2748G",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 f4904befd880ff97840e5f2d80a79459c394c001df01eabe4509c7ba9399f0f0. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7071-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7071-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7071-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
