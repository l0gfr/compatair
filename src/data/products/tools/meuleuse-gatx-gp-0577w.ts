import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0577w",
	"slug": "meuleuse-gatx-gp-0577w",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0577W",
	"brand": "GATX",
	"model": "GP-0577W",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0577w.svg",
		"alt": "Repères techniques : GATX GP-0577W",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0577W",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0577w",
		"label": "Modèle GP-0577W, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0577W",
			"Collet (option)": "1/8\",1/4\",3  or 6 mm",
			"Free Speed": "20,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0577W. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (option) : 1/8\",1/4\",3  or 6 mm.",
			"Free Speed : 20,000 rpm.",
			"Motor Power : 0.45 HP (338 W).",
			"Exhaust : Rear.",
			"Air Consumption : 360 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Dia x Length : 40 x 150 mm.",
			"Net Weight : 0.6 kg."
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
			"label": "Collet (option)",
			"value": "1/8\",1/4\",3  or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6381-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "20,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6381-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "0.45 HP (338 W)",
			"evidenceIds": [
				"october5-tools-gatx-product-6381-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-6381-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "360 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6381-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6381-p1"
			]
		},
		{
			"label": "Dia x Length",
			"value": "40 x 150 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6381-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.6 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6381-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6381-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0577W",
			"sourceLabel": "GATX : fiche technique GP-0577W",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 3ce53fcd25342fbe08a063196af6696c47b2a9e4d6c395e6de02f09cb8c8e6dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6381-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6381-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6381-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
