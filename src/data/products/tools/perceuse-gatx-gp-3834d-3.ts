import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3834d-3",
	"slug": "perceuse-gatx-gp-3834d-3",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3834D-3",
	"brand": "GATX",
	"model": "GP-3834D-3",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3834d-3.svg",
		"alt": "Repères techniques : GATX GP-3834D-3",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3834D-3",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3834d-3",
		"label": "Modèle GP-3834D-3, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3834D-3",
			"Free Speed": "2600 rpm",
			"Motor Power": "0.35HP"
		}
	},
	"editorial": {
		"overview": "GATX GP-3834D-3. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 2600 rpm.",
			"Motor Power : 0.35HP.",
			"Air Consumption : 3.2 CFM.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 6.35 (1/4\").",
			"Hose Size : 3/8\".",
			"Length : 155 mm.",
			"Weight : 0.54 KG.",
			"Noise Level : 79 dBA."
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
			"value": "2600 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7630-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "0.35HP",
			"evidenceIds": [
				"october5-tools-gatx-product-7630-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "3.2 CFM",
			"evidenceIds": [
				"october5-tools-gatx-product-7630-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7630-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "6.35 (1/4\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7630-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7630-p1"
			]
		},
		{
			"label": "Length",
			"value": "155 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7630-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.54 KG",
			"evidenceIds": [
				"october5-tools-gatx-product-7630-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "79 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7630-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7630-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3834D-3",
			"sourceLabel": "GATX : fiche technique GP-3834D-3",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9b77991ce3a75b7845e579d66d29413990a004a23be767234c6b5b2a325a866f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7630-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7630-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7630-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
