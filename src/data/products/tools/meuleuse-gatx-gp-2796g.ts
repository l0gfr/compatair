import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2796g",
	"slug": "meuleuse-gatx-gp-2796g",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2796G",
	"brand": "GATX",
	"model": "GP-2796G",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2796g.svg",
		"alt": "Repères techniques : GATX GP-2796G",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2796G",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2796g",
		"label": "Modèle GP-2796G, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2796G",
			"Free Speed": "22,000 rpm",
			"Collet (option)": "1/8\", 1/4\", 3, 6 or 8 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2796G. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 22,000 rpm.",
			"Collet (option) : 1/8\", 1/4\", 3, 6 or 8 mm.",
			"Power : 0.5 HP (375 w).",
			"Exhaust : Swivel Rear Exhaust.",
			"Air Consumption : 190 l/min.",
			"Air Pressure : 6.2 bar ( 90 psi ).",
			"Air Inlet : 1/4\".",
			"Min Hose Size : 3/8\" (9.5 mm).",
			"Overall Length : 190 mm.",
			"Weight : 0.7 kg.",
			"Sound Pressure : 78 dBA.",
			"Vibration : 2.16 m/s²."
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
			"value": "22,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Collet (option)",
			"value": "1/8\", 1/4\", 3, 6 or 8 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Power",
			"value": "0.5 HP (375 w)",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Swivel Rear Exhaust",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "190 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar ( 90 psi )",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Min Hose Size",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "190 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Sound Pressure",
			"value": "78 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "2.16 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-6250-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6250-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2796G",
			"sourceLabel": "GATX : fiche technique GP-2796G",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 7c9cb14fd7ef8f67a8f7b5d2fbc75a8c831bba1e4fe51f4945d1565c24639a39. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6250-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6250-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6250-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
