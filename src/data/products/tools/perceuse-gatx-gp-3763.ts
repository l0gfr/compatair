import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3763",
	"slug": "perceuse-gatx-gp-3763",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3763",
	"brand": "GATX",
	"model": "GP-3763",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3763.svg",
		"alt": "Repères techniques : GATX GP-3763",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3763",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3763",
		"label": "Modèle GP-3763, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3763",
			"Chuck Capacity": "3/8\"",
			"Free Speed": "2,800 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3763. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Capacity : 3/8\".",
			"Free Speed : 2,800 rpm.",
			"Motor Power : 372 W (0.5 HP).",
			"Max. Torque : 2.0 Nm.",
			"Exhaust : Handle Exhaust.",
			"Air Consumption : 113 L/min.",
			"Air Pressure : 6.3 kgf/㎡ (90 psi).",
			"Air Inlet : 1/4\".",
			"House Size : 3/8\".",
			"Length : 181 mm.",
			"Net Weight : 0.8 kg."
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
			"label": "Chuck Capacity",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "2,800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "372 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		},
		{
			"label": "Max. Torque",
			"value": "2.0 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Handle Exhaust",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.3 kgf/㎡ (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		},
		{
			"label": "House Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		},
		{
			"label": "Length",
			"value": "181 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.8 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7750-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7750-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3763",
			"sourceLabel": "GATX : fiche technique GP-3763",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 af247eae4766579b10491085388889d0c48629b37c611097bb8affac1664abb4. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7750-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7750-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7750-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
