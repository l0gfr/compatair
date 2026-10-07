import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2744",
	"slug": "meuleuse-gatx-gp-2744",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2744",
	"brand": "GATX",
	"model": "GP-2744",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2744.svg",
		"alt": "Repères techniques : GATX GP-2744",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2744",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2744",
		"label": "Modèle GP-2744, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2744",
			"Collet (Option)": "3, 6, 8 mm , 1/4\", 3/8\"",
			"Free Speed": "18,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2744. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (Option) : 3, 6, 8 mm , 1/4\", 3/8\".",
			"Free Speed : 18,000 rpm.",
			"Motor Power : 671 W (0.9 HP).",
			"Air Consumption : 255 L/min.",
			"Air Pressure : 6.2 bar (90 PSI).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Exhaust : 360° Adjustable Front Side Exhaust.",
			"Vibration : < 2.5 m/s².",
			"Sound Pressure : 87.5 dB(A).",
			"Length : 195 mm.",
			"Net Weight : 1.2 kg."
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
			"label": "Collet (Option)",
			"value": "3, 6, 8 mm , 1/4\", 3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "18,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "671 W (0.9 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "255 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 PSI)",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "360° Adjustable Front Side Exhaust",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "< 2.5 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Sound Pressure",
			"value": "87.5 dB(A)",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Length",
			"value": "195 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7073-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7073-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2744",
			"sourceLabel": "GATX : fiche technique GP-2744",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 ba1c00d8e9f0698c5e50734ea5122c25fc7ea4a6355924d2d9f05daacfa35994. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7073-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7073-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7073-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
