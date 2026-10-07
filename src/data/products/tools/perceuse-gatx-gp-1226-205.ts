import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1226-205",
	"slug": "perceuse-gatx-gp-1226-205",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1226-205",
	"brand": "GATX",
	"model": "GP-1226-205",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1226-205.svg",
		"alt": "Repères techniques : GATX GP-1226-205",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1226-205",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1226-205",
		"label": "Modèle GP-1226-205, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1226-205",
			"Chuck Size": "3/8\" Jacob Standard Keyed Chuck",
			"Free Speed": "3,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1226-205. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 3/8\" Jacob Standard Keyed Chuck.",
			"Free Speed : 3,000 rpm.",
			"Exhaust : Rear.",
			"Air Pressure : 6.2 bar ( 90 psi ).",
			"Air Inlet : 1/4\".",
			"Length : 175 mm.",
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
			"label": "Chuck Size",
			"value": "3/8\" Jacob Standard Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-6380-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "3,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6380-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-6380-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar ( 90 psi )",
			"evidenceIds": [
				"october5-tools-gatx-product-6380-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6380-p1"
			]
		},
		{
			"label": "Length",
			"value": "175 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6380-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.0 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6380-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6380-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1226-205",
			"sourceLabel": "GATX : fiche technique GP-1226-205",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 384ace81562a829d058ae1592d4270e68109bd76c441953ae0d594a27c392415. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6380-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6380-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6380-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
