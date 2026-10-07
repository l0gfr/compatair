import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3820a",
	"slug": "meuleuse-gatx-gp-3820a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3820A",
	"brand": "GATX",
	"model": "GP-3820A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3820a.svg",
		"alt": "Repères techniques : GATX GP-3820A",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3820A",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3820a",
		"label": "Modèle GP-3820A, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3820A",
			"Free Speed": "60,000 rpm",
			"Collet Size": "3 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3820A. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 60,000 rpm.",
			"Collet Size : 3 mm.",
			"Exhaust : Front . Rear.",
			"Air Consumption : 113 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 5 mm.",
			"Length : 140 mm.",
			"Net Weight : 0.2 kg.",
			"Sound Pressure : 88 dBA.",
			"Vibration Level : 1.0 m/s2."
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
			"value": "60,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		},
		{
			"label": "Collet Size",
			"value": "3 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Front . Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "5 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		},
		{
			"label": "Length",
			"value": "140 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		},
		{
			"label": "Sound Pressure",
			"value": "88 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		},
		{
			"label": "Vibration Level",
			"value": "1.0 m/s2",
			"evidenceIds": [
				"october5-tools-gatx-product-7754-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7754-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3820A",
			"sourceLabel": "GATX : fiche technique GP-3820A",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 4f95890b3dc4a631935e7e644f29b9bcc879a1edfdd0269eb11d97bd19357d8f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7754-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7754-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7754-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
