import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3037",
	"slug": "meuleuse-gatx-gp-3037",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3037",
	"brand": "GATX",
	"model": "GP-3037",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3037.svg",
		"alt": "Repères techniques : GATX GP-3037",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3037",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3037",
		"label": "Modèle GP-3037, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3037",
			"Free Speed": "70,000 rpm",
			"Collet (Option)": "1/8\"  or 3 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3037. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 70,000 rpm.",
			"Collet (Option) : 1/8\"  or 3 mm.",
			"Exhaust : Rear.",
			"Air Consumption : 28.3 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Did x Length : 18.5 x 150 mm.",
			"Net Weight (incl hose) : 0.2 kg.",
			"Noise Level : 72 dBA.",
			"Sound Power Level : 84 dBA.",
			"Vibration : 2.0 m/s²."
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
			"value": "70,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		},
		{
			"label": "Collet (Option)",
			"value": "1/8\"  or 3 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "28.3 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		},
		{
			"label": "Did x Length",
			"value": "18.5 x 150 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		},
		{
			"label": "Net Weight (incl hose)",
			"value": "0.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "72 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		},
		{
			"label": "Sound Power Level",
			"value": "84 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "2.0 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-7453-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7453-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3037",
			"sourceLabel": "GATX : fiche technique GP-3037",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 1e7649c9a2d03ceb306106a435c96c07c15166c6d6a19f41adbe22126ee2a223. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7453-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7453-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7453-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
