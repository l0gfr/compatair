import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1893-7",
	"slug": "perceuse-gatx-gp-1893-7",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1893-7",
	"brand": "GATX",
	"model": "GP-1893-7",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1893-7.svg",
		"alt": "Repères techniques : GATX GP-1893-7",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1893-7",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1893-7",
		"label": "Modèle GP-1893-7, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1893-7",
			"Chuck Size": "3/8\"",
			"Free Speed": "2,600 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1893-7. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 3/8\".",
			"Free Speed : 2,600 rpm.",
			"Spindle Thread : 3/8\"-24.",
			"Air Consumption : 104.7 L/min.",
			"Air Pressure : 6.2 bar  (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 195 mm.",
			"Net Weight : 0.9 kg."
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
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6137-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "2,600 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6137-p1"
			]
		},
		{
			"label": "Spindle Thread",
			"value": "3/8\"-24",
			"evidenceIds": [
				"october5-tools-gatx-product-6137-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "104.7 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6137-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar  (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6137-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6137-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6137-p1"
			]
		},
		{
			"label": "Length",
			"value": "195 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6137-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.9 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6137-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6137-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1893-7",
			"sourceLabel": "GATX : fiche technique GP-1893-7",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bbaa1cf10b4ec7fdae35a0c3d8ccf2f7f98a97edecb0cdc6078d28399e8143fe. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6137-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6137-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6137-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
