import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2077",
	"slug": "visseuse-gatx-gp-2077",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2077",
	"brand": "GATX",
	"model": "GP-2077",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2077.svg",
		"alt": "Repères techniques : GATX GP-2077",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2077",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2077",
		"label": "Modèle GP-2077, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2077",
			"Free Speed": "11,000 rpm",
			"Mechanism": "Twin Hammer"
		}
	},
	"editorial": {
		"overview": "GATX GP-2077. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 11,000 rpm.",
			"Mechanism : Twin Hammer.",
			"Bolt Capacity : 6 - 8 mm.",
			"Max. Torque : 60 Nm (44 ft-lb).",
			"Working Torque : 50 Nm (37 ft-lb).",
			"Air Consumption : 64 L/Min..",
			"Air Pressure : 6.2 bar (90 PSI).",
			"Air Inlet : 1/4\".",
			"Hose Size : 1/4\".",
			"Length : 144 mm.",
			"Weight : 0.9 Kg."
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
			"value": "11,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		},
		{
			"label": "Mechanism",
			"value": "Twin Hammer",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		},
		{
			"label": "Bolt Capacity",
			"value": "6 - 8 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		},
		{
			"label": "Max. Torque",
			"value": "60 Nm (44 ft-lb)",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		},
		{
			"label": "Working Torque",
			"value": "50 Nm (37 ft-lb)",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "64 L/Min.",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 PSI)",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		},
		{
			"label": "Length",
			"value": "144 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.9 Kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7126-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7126-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2077",
			"sourceLabel": "GATX : fiche technique GP-2077",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 4a5e13aff93297d337e2ec97effd59ec0615690f2e110cba04f5943373ead7f4. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7126-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7126-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7126-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
