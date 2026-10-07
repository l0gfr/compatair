import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2052",
	"slug": "visseuse-gatx-gp-2052",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2052",
	"brand": "GATX",
	"model": "GP-2052",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2052.svg",
		"alt": "Repères techniques : GATX GP-2052",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2052",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2052",
		"label": "Modèle GP-2052, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2052",
			"Square Drive": "1/4\"",
			"Bolt Capacity": "8H"
		}
	},
	"editorial": {
		"overview": "GATX GP-2052. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Square Drive : 1/4\".",
			"Bolt Capacity : 8H.",
			"Clutch Type : Double Hammer.",
			"Motor Housing Material : Gravity Casting.",
			"Working Torque (Machine Screw) : 244Nm (180 ft.lbs) @5sec.",
			"Working Torque (Tapping Screw) : 40.7Nm ( 30 ft.lbs) @5sec.",
			"Air Inlet : 1/4\".",
			"Length : 151 mm.",
			"Net Weight : 1.0 kg."
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
			"label": "Square Drive",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8674-p1"
			]
		},
		{
			"label": "Bolt Capacity",
			"value": "8H",
			"evidenceIds": [
				"october5-tools-gatx-product-8674-p1"
			]
		},
		{
			"label": "Clutch Type",
			"value": "Double Hammer",
			"evidenceIds": [
				"october5-tools-gatx-product-8674-p1"
			]
		},
		{
			"label": "Motor Housing Material",
			"value": "Gravity Casting",
			"evidenceIds": [
				"october5-tools-gatx-product-8674-p1"
			]
		},
		{
			"label": "Working Torque (Machine Screw)",
			"value": "244Nm (180 ft.lbs) @5sec",
			"evidenceIds": [
				"october5-tools-gatx-product-8674-p1"
			]
		},
		{
			"label": "Working Torque (Tapping Screw)",
			"value": "40.7Nm ( 30 ft.lbs) @5sec",
			"evidenceIds": [
				"october5-tools-gatx-product-8674-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8674-p1"
			]
		},
		{
			"label": "Length",
			"value": "151 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8674-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.0 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8674-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8674-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2052",
			"sourceLabel": "GATX : fiche technique GP-2052",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 95f7d5e2653713d9040a3def5f425e3b488a21a158894f69bc42af276af23563. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8674-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8674-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8674-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
