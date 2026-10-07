import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2363l14",
	"slug": "meuleuse-gatx-gp-2363l14",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2363L14",
	"brand": "GATX",
	"model": "GP-2363L14",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2363l14.svg",
		"alt": "Repères techniques : GATX GP-2363L14",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2363L14",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2363l14",
		"label": "Modèle GP-2363L14, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2363L14",
			"Free Speed": "27,000 rpm",
			"Collet (option)": "3 or 6mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2363L14. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 27,000 rpm.",
			"Collet (option) : 3 or 6mm.",
			"Power : 260 W (0.35 HP).",
			"Exhaust : Swivel Rear Exhaust.",
			"Air Consumption : 74 l/min.",
			"Air Inlet : 1/4\".",
			"Min Hose Size : 3/8\" (9.5 mm).",
			"Dia. x Length : 44 x 259 mm.",
			"Weight : 0.7 kg."
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
			"value": "27,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7442-p1"
			]
		},
		{
			"label": "Collet (option)",
			"value": "3 or 6mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7442-p1"
			]
		},
		{
			"label": "Power",
			"value": "260 W (0.35 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7442-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Swivel Rear Exhaust",
			"evidenceIds": [
				"october5-tools-gatx-product-7442-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "74 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7442-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7442-p1"
			]
		},
		{
			"label": "Min Hose Size",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-gatx-product-7442-p1"
			]
		},
		{
			"label": "Dia. x Length",
			"value": "44 x 259 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7442-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7442-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7442-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2363L14",
			"sourceLabel": "GATX : fiche technique GP-2363L14",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 19a0c696adb75340472824fb9a99b993bc69405ac15389f9ca3597ccb10a05cb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7442-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7442-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7442-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
